'use client'

import { Button } from '@flag-platform/ui'
import { signOut, useSession } from '@flag-platform/auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-3">
      <h1 className="font-extralight text-4xl">Inno Feature Flag Platform</h1>
      <p className="text-gray-500">Welcome {session?.user?.name}</p>
      {session && session.user && <Button onClick={() => signOut()}>Sign out</Button>}
    </div>
  )
}
