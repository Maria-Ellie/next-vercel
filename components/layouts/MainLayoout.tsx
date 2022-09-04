import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

interface Props {
  children: React.ReactNode;
}

export const MainLayoout: React.FC<Props>  = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Contact </title>
            <meta name="description" content="Contact Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Navbar />
          
          <main className={styles.main}>

            {children}

          </main>
    
        </div>
        )
}
