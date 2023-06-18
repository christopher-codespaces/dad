import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Typing,Pictures} from "../components"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Typing/>
      <Pictures/>
    </>
  )
}
