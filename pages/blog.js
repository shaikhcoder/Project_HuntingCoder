import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import data from "../data/data.json"
const inter = Inter({ subsets: ['latin'] })
export default function () {

    return <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <style jsx>
            {`
h1{
font-size:40px;
color: #262424;
}
._p{
color: #262424;}


`}
        </style>

        <main className={styles.main}>
            <div className={styles.grid}>
                {data.map((value,index) => {


                    return <Link
                        href={value.link}
                        className={styles.card}
                        key={index}
                    >
                        <h2 className={inter.className}>
                            {value.name} <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            {value.contant}
                        </p>
                    </Link>
                })}



            </div>
        </main>
    </>
}