import { Group, Text, Textarea } from '@mantine/core'
import React from 'react'
import MessageArea from '../components/MessageArea'
import TypeArea from '../components/TypeArea'

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-stone-900">
  <div className="flex flex-col gap-4 h-full md:w-[720px] transition-all duration-500 ease-in-out">
    <MessageArea />
    <TypeArea />
  </div>
</div>


  )
}

export default Home
