import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

// const getServerSideProps = async (context) => {
//   "if ethAddress and tokenAddress are valid"
//   "Make etherscan API call"
//   "If successfull return contract object"
//   "else return 'null'"
//   return {
//     props: {

//     }
//   }
// }

export default function Home() {
  const [ethAddress, setEthAddress] = useState('')
  const [tokenAddress, setTokenAddress] = useState('')
  const [provider, setProvider] = useState({})
  const [contract, setContract] = useState({})

  const handleClick = () => {
    const { data, error } = useSWR(`https://api.etherscan.io/api?module=contract&action=getabi&address=${tokenAddress}&apikey=${process.env.ETHERSCANAPIKKEY}`, fetcher)

    console.log('data', data)
    console.log('error', error)


    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>

    // return <div>hello {data}!</div>
  }

  useEffect(() => {
       setProvider(new ethers.providers.Web3Provider(window.ethereum))
  }, []);

  console.log('ethAddress', ethAddress)
  console.log('tokenAddress', tokenAddress)
  console.log('provider', provider)
  console.log('contract', contract)

  // const getERC20Balance = async (ethAddress, tokenAddress) => {

  //     await 

  //     return (balance, tokenSymbol)
  // }

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
          onChange={event => setEthAddress(event.target.value)}/>
        <br />
        <input 
          type="text" 
          name="tokenAddressInput" 
          placeholder="Token address"
          onChange={event => setTokenAddress(event.target.value)}/>
        <br />
        <input 
          type="submit" 
          value="Find balance" 
          onClick={handleClick}
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