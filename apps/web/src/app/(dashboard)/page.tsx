'use client'

import { Button } from '@feature-flip/ui'
import { signOut, useSession } from '@feature-flip/auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-3">
      <h1 className="font-extralight text-4xl">FeatureFlip</h1>
      <p className="text-gray-500">Welcome {session?.user?.name}</p>
      {session && session.user && <Button onClick={() => signOut()}>Sign out</Button>}
    </div>
  )
}
