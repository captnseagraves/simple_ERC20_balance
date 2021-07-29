import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';



export default function Home() {
  const [addresses, setAddresses] = useState({
    ethAddress: '',
    tokenAddress: ''
  })

  useEffect(() => console.log(addresses), [addresses]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Enter an Ethereum address and a token address to find the balance for that address</p>
        <input 
          type="text"  
          name="ethAddressInput" 
          placeholder="Ethereum address" 
            onChange={event => setAddresses({
              ethAddress: event.target.value,
              tokenAddress: addresses.tokenAddress
            })}/>
        <br />
        <input 
          type="text" 
          name="tokenAddressInput" 
          placeholder="Token address"
          onChange={event => setAddresses({
            ethAddress: addresses.ethAddress,
            tokenAddress: event.target.value
          })}/>
        <br />
        <input 
          type="submit" 
          value="Find balance" 
          />
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