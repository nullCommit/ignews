import Head from 'next/head';
import { GetStaticProps } from 'next';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';
import { stripe } from '../../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

// Client-side -> Quando não preciso de indexação ou quando a informação é carregada a partir de uma ação do usuário
// Server-side Rendering -> indexação, mas com conteúdo dinâmico
// Static Site Generation -> indexação, mas mesmo conteúdo pata todos (ex. paginas de um blog)

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src='/images/avatar.svg' alt='Girl coding' />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KiLMiCbwUVmAiTHwSP8kXAT', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100), //preço vem em centavos, então é só dividir por 100
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24h
  };
};
