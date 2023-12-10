import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Loading } from '../Loading'
import { useState } from 'react'
import { ChatBox } from './ChatBox'
import { NotePreview } from './NotePreview'
import { FilePlusIcon } from '@radix-ui/react-icons'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'

export const ViewNotebook = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [sourceStatus, setSourceStatus] = useState('minimized')
  const [chatStatus, setChatStatus] = useState('minimized')

  return (
    <>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-[90vh] mx-10 pb-10">
          <NotePreview />
          <ChatBox />
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  )
}
