'use client'
import React, {useEffect} from "react"
import { useParams, useRouter } from "next/navigation"
import { useActivationMutation } from "@/redux/service/User"

export default function ActivationPage() {
  const params = useParams()
  const {uid, token } = params 
  const router = useRouter();
  const [activate, {isLoading, isError, error}] = useActivationMutation();

  useEffect(()=>{
    activate({uid,token})
    .then(() => {
      console.log('hi');
      router.push('/login');
    })
  })

  return (
    <main>
      <div className="flex min-h-screen items-center justify-center">
        {isLoading && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-indigo-600 animate-pulse">
              Activating your account...
            </h2>
            <div className="mt-4 h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent mx-auto"></div>
          </div>
        )}

        {isError && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600">
              Activation Failed
            </h2>
            <p className="mt-2 text-gray-600">
              {error?.data?.detail || "Something went wrong. Please try again."}
            </p>
          </div>
        )}
      </div>
    </main>
  )

}