import Link from 'next/link'
import { ReactNode } from 'react'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayoout } from '../components/layouts/MainLayoout'

export default function About() {
  return (
      <>
        <h1>About Page</h1>
        <h1 className={'title'}>
          Ir a  <Link href={"/"}>Home</Link>
        </h1>
      </>
  )
}

About.getLayout = function getLayout(page:ReactNode){
  return(
    <MainLayoout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayoout>
  )
}