'use client'
import Header from '@/components/custom/header';
import Head from "next/head";
import Hero from '@/components/custom/hero';
// import {useDispatch} from "react-redux";
// import {useFetchUserQuery} from "@/redux/service/User";
// import {login, setDetails} from "@/redux/features/authSlice";


export default function HomePage() {
    // const dispatch = useDispatch();
    // const {data: userData, isLoading} = useFetchUserQuery();
    //
    // const { username, full_name, email, id, profile_pic, is_seller } = userData;
    // dispatch(login());
    // dispatch(setDetails({
    //     userID: id,
    //     full_name: full_name,
    //     user_name: username,
    //     email: email,
    //     profile_pic: profile_pic,
    //     is_seller: is_seller,
    // }));


    return (
                <>
                    <Head>
                        <title>SnapCart - Home</title>
                        <meta name="description" content="The genz style of shopping"/>
                        <link rel="icon" href="/favicon.ico"/>
                    </Head>
                    <Header/>
                    <main className="home">
                        <Hero/>

                    </main>
                </>




)

}
