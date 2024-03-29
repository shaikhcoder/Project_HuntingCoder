import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
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

}
._p{
}


`}
</style>

      <main className={styles.main}>
      

        <div className={styles.center}>
          <h1>Hunting Coder </h1>
<p className='_p'>A blog for hunting coders by a hunting coder.</p>
        </div>


        <div className={styles.grid}>
          <Link
            href="/blogpost/javascript"
            className={styles.card}
           
          >
            <h2 className={inter.className}>
              Javascript <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>

          <Link
            href="/blogpost/python"
            className={styles.card}
           
          >
            <h2 className={inter.className}>
              Python <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </Link>

          <Link
            href="/blogpost/django"
            className={styles.card}
           
          >
            <h2 className={inter.className}>
              Django <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </Link>

          <Link
            href="nextjs"
            className={styles.card}
            
          >
            <h2 className={inter.className}>
              Next.js <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
