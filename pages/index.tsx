
import Link from 'next/link'
import { MainLayoout } from '../components/layouts/MainLayoout'


export default function Home() {
  return (
    <MainLayoout>
      <h1>Home Page</h1>
        <h1 className={'title'}>
          Ir a <Link href={"/about"}>About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayoout>
  )
}
