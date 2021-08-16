import React from 'react'
import Image from 'next/image'

const urlBase = process.env.NEXT_PUBLIC_ROOT_DEV;

const Home = () => (
    <>
        <h1>Hola mundo desde amplify {urlBase}</h1>
        <Image width="720" height="405" src="/image/logo.png" alt="Picture of the author" />
    </>
)

export default Home
