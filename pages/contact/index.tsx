import Link from 'next/link'
import { MainLayoout } from '../../components/layouts/MainLayoout'

export default function Contact() {
  return (
    <MainLayoout>
      <h1>Contact Page</h1>
        <h1 className={'title'}>
          Ir a  <Link href={"/"}>Home</Link>
        </h1>
    </MainLayoout>
  )
}
