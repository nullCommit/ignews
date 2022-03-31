import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href=''>
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              duna.
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              placeat aut dolor harum! Molestiae, qui dolore nisi fugit ad
              dignissimos inventore distinctio quo architecto placeat non
              repellendus porro quia repellat.
            </p>
          </a>

          <a href=''>
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              duna.
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              placeat aut dolor harum! Molestiae, qui dolore nisi fugit ad
              dignissimos inventore distinctio quo architecto placeat non
              repellendus porro quia repellat.
            </p>
          </a>

          <a href=''>
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              duna.
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              placeat aut dolor harum! Molestiae, qui dolore nisi fugit ad
              dignissimos inventore distinctio quo architecto placeat non
              repellendus porro quia repellat.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
