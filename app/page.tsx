//page/page.tsx
import Image from "next/image";
import styles from './App.module.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className={styles.title}>
          Welcome to <span>Eagles Ring</span>
        </h1>
       

        <p className={styles.description}>
          An investment platform that connects aspiring entrepreneurs with experienced investors.
        </p>


        <div className={styles.grid}>
          <a href="/A" className={styles.card}>
            <h3>Entrepreneurs &rarr;</h3>
            <p>Learn how to pitch your business idea to our panel of investors.</p>
          </a>

          <a href="/investors" className={styles.card}>
            <h3>Investors &rarr;</h3>
            <p>Discover how to become an Eagle and invest in promising ventures.</p>
          </a>

          <a href="/about" className={styles.card}>
            <h3>About Us &rarr;</h3>
            <p>Learn more about Eagles Ring, our mission, and our team.</p>
          </a>
        </div>

    </main>
  );
}
