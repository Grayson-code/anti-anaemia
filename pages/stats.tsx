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
        </Head>
        <div>
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