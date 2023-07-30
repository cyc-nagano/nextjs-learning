'use client'

import Image from 'next/image'
import { PrimaryButton } from './components/elements/PrimaryButton'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard")
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       <PrimaryButton handleClick={handleClick} label='次へ'></PrimaryButton>
      </div>
    </main>
  )
}
