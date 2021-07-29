import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Enter an Ethereum address and a token address to find the balance for that address</p>
        <input type="text" name="name" placeholder="Ethereum address" />
        <br />
        <input type="text" name="name" placeholder="Token address" />
        <br />
        <input type="submit" value="Find balance" />
      </section>
      <section>
        <Image
              priority
              src="/images/unicorn.gif"
              className={utilStyles.borderCircle}
              height={300}
              width={300}
              alt="Rainbow unicorn gif"
            />
      </section>
    </Layout>
  )
}