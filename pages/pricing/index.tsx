import Link from 'next/link'
import { MainLayoout } from '../../components/layouts/MainLayoout'

export default function Pricing() {
  return (
    <MainLayoout>
      <h1>Pricing Page</h1>
        <h1 className={'title'}>
          Ir a  <Link href={"/"}>Home</Link>
        </h1>
    </MainLayoout>
  )
}
