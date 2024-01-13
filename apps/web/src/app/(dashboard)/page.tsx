'use client'

import { Button } from '@inno-flag-platform/ui'
import { signOut, useSession } from '@inno-flag-platform/auth/react'

export default function Home() {
  const { data: session } = useSession()

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      console.log('No files selected')
      return // User canceled file selection
    }

    const file = event.target.files[0]
    console.log(file)
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-3">
      <h1 className="font-extralight text-4xl">Inno Feature Flag Platform</h1>
      <p className="text-gray-500">Welcome {session?.user?.name}</p>
      <input type="file" name="" id="" onChange={handleFileUpload} />
      {session && session.user && <Button onClick={() => signOut()}>Sign out</Button>}
    </div>
  )
}
