'use client'
import Header from '@/components/custom/header';
import Head from "next/head";
import Hero from '@/components/custom/hero';
import Feed from "@/components/custom/feed";

export default function HomePage() {


    return <>
        <Head>
            <title>SnapCart - Home</title>
            <meta name="description" content="The genz style of shopping"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header/>
        <main className="home">
            <Hero/>
             <Feed/>
        </main>
    </>


}
