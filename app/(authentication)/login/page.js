'use client'
import {LoginForm} from "@/components/login-form";
import {useDispatch} from "react-redux";
import {useFetchUserQuery} from "@/redux/service/User";
import {useEffect} from "react";
import {login, setDetails} from "@/redux/features/authSlice";

export default function LoginPage() {
    const dispatch = useDispatch();
    const {data: userData} = useFetchUserQuery();
    useEffect(() => {

        if (userData) {
            const {id, full_name, username, email, is_seller} = userData || {};
            dispatch(setDetails({
                userID: id,
                full_name: full_name,
                user_name: username,
                email: email,
                profile_pic: userData['profile_picture'],
                is_seller: is_seller,
            }));
            dispatch(login());
        }
    });
 return (

     <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
       <div className="w-full max-w-sm">
         <LoginForm/>
       </div>
     </div>
 )
}
