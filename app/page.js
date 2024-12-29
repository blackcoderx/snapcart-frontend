'use client'
import Header from '@/components/custom/header';
import Head from "next/head";
import Hero from '@/components/custom/hero';
import {useDispatch} from "react-redux";
import {useFetchUserQuery} from "@/redux/service/User";
import {setDetails,login} from "@/redux/features/authSlice";
import {useEffect} from "react";
import Feed from "@/components/custom/feed";

export default function HomePage() {
    const dispatch = useDispatch();
    const {data: userData, isLoading} = useFetchUserQuery();

    useEffect(() => {

        if (userData) {
            const {id, full_name, username, email, profile_pic, is_seller} = userData || {};
            dispatch(setDetails({
                userID: id,
                full_name: full_name,
                user_name: username,
                email: email,
                profile_pic: profile_pic,
                is_seller: is_seller,
            }));
            dispatch(login());
        }
    },[userData,dispatch]);


    return isLoading ? <div>Loading...</div> : <>
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
