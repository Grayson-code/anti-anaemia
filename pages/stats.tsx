// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { useEffect, useState } from 'react'
import { db } from '../components/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { StatsVisits } from '../components'
import { NotificationsProvider, showNotification } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'

const Stats = () => {
  const [visits, setVisits] = useState('')
  useEffect(() => {
    const loadVisit = async () => {
      const document = doc(db, "stats", "visits")
      let visit = (await getDoc(document) as unknown as StatsVisits)
      setVisits(visit._document.data.value.mapValue.fields.numbers.integerValue)
    }
    loadVisit()
  }, [])
  return (
    <MantineProvider>
      <NotificationsProvider>
        <Head>
          <title>Anti Anaemia22 Program</title>
          <meta property='twitter:card' content='summary' />
          <meta property='twitter:site' content='@NorthernStare' />
          <meta property='twitter:title' content='Anti Anaemia Corporation' />
          <meta property='twitter:description' content='Anti Anaemia22 Program is a world class program that will save millions of lives by preventing people from going mad.' />
          <meta property='twitter:url' content='http://anti-anaemia.vercel.app/stats' />
        </Head>
        <div>
          <div className='fixed top-0 left-0'>
            <div
              className="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
              role="alert"
            >
              <strong className="text-sm font-medium"> Major Bug! </strong>

              <p className="mt-1 text-xs">
                There is a major bug with the database so measurements wont be quite accurate.
              </p>
            </div>
          </div>
          <div className="flex justify-center h-screen items-center">
            <p className='border p-8 rounded-xl border-gray-200 shadow-xl'>
              {visits} Unique Visits of all time!
            </p>
          </div>
        </div>
      </NotificationsProvider>
    </MantineProvider>

  )
}

export default Stats