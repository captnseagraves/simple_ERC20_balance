import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Simple ERC20 Balance Tracker'
export const siteTitle = 'Simple ERC20 Balance Tracker'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Find the balance of an Ethereum address and any ERC20 token"
        />
        <meta name="og:title" content={siteTitle} />      
      </Head>
      <header className={styles.header}>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
