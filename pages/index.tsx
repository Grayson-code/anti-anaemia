import type { NextPage } from 'next'
import Head from 'next/head'
import { db } from '../components/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { StatsVisits } from '../components'

const Home: NextPage = () => {
  useEffect(() => {
    const visited = localStorage.getItem('visited')
    if (!visited) {
      const a = async () => {
        const document = doc(db, "stats", "visits")
        let visits = (getDoc(document) as unknown as StatsVisits)
        await setDoc(document, {
          numbers: parseInt(visits._document.data.value.mapValue.fields.numbers.integerValue) + 1
        });
        localStorage.setItem('visited', 'true')
      }
      a()
    }
}, [])


  return (
    <div className='bg-gradient-to-r from-cyan-500 via-emerald-900 to-blue-800 font-bold'>
      <Head>
        <title>Anti Anaemia22 Program</title>
        <meta property='og:title' content="Anti Anaemia Program" />
        <meta property='og:url' content="http://anti-anaemia.vercel.app/" />
        <meta property='og:type' content="website" />
        <meta property='og:description' content="Anti Anaemia22 Program is a world class program that will save millions of lives by preventing people from going mad." />
      </Head>
      <p className="flex h-screen justify-center items-center">
        There is no vaccine. but taking Corbevax does help. from personal experience.
      </p>
      <p className='fixed bottom-0 left-0 p-2'>Support This Project By donating to this XMR Address:
        <p className='font-bold'>4673HBXWDsJBWaX8eNSuZE3WJsjrsrDU8jMTafFZzvhj9aF4gSaGvewDbKKmBk22LyF8yuVr2trHTLmjyY2aXLzw2e7yQWL</p>
      </p>
      <div>
        <p className='fixed p-2 sm:bottom-0 top-0 lg:top-0 '>Made by researchers at Lambda School</p>
      </div>

      <p className='text-white'>Spoiler, It affects your fingers, or finger.</p>
    </div>
  )
}

export default Home
