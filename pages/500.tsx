// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react'
import type { NextPage } from 'next'
const Page500:NextPage  = () => {
  return (
    <div className='flex p-2 justify-center h-screen items-center'>
        <p className='font-bold'>Something Very Terrible Happended On Our End, Maybe Try Reloading?</p>
    </div>
  )
}

export default Page500