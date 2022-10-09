import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layount.module.css'

export default function Layount({children,title,description}) {
  return (
  <div className={styles.container}>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        </Head>
    
        <nav>navbar</nav>
        <main>
            {children}
        </main>
    </div>
  )
}

Layount.defaultProps = {
    title:"Next.js",
    description:"defProp"
}
