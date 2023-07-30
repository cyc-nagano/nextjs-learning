'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { PrimaryButton } from '../components/elements/PrimaryButton';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/")
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <label>dashboard</label>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       <PrimaryButton handleClick={handleClick} label='戻る'></PrimaryButton>
      </div>
    </main>
  )
}
