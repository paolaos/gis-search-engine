// pages/index.js
import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GIS Data Search Engine</title>
        <meta name="description" content="Search for GIS datasets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="GIS Data Search Engine Logo" className={styles.logo} />
        </div>
        <h1 className={styles.welcomeMessage}>Welcome to the GIS Data Search Engine</h1>
      </header>

      <main className={styles.main}>
        <input type="text" placeholder="Search datasets..." className={styles.searchBar}/>
        <button className={styles.searchButton}>Search</button>
      </main>

      <footer className={styles.footer}>
        The user agrees to respect the licenses of the datasets provided in the search results.
      </footer>
    </div>
  )
}
