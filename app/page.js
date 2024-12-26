'use client'
import { SidebarDisplay } from "@/components/custom/sidebar";
import Head from "next/head";
import { useRouter } from "next/navigation";

function NotSignedIn() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };
  
  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center">
      <Head>
        <title>SnapCart - Your Social Shopping Experience</title>
        <meta name="description" content="Join SnapCart and start shopping socially today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center p-8">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to <span className="text-purple-500">SnapCart</span> 📸🛒
        </h1>
        <p className="text-lg text-white mb-8">
          Discover a fun and social way to shop and connect. Join us now or explore what others are sharing!
        </p>
        <div className="flex justify-center space-x-4">
          <button onClick={() => {handleRegister()}} className=" border-cyan-500 border-2 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-cyan-500 transform hover:scale-105 transition">
            Join Now
          </button>
          <button onClick={() => {handleLogin()}} className=" text-white py-2 px-6 rounded-lg shadow-lg hover:bg-cyan-500 transform hover:scale-105 transition">
            Login
          </button>
        </div>
      </main>
    </div>
  );


};



export default function HomePage() {
  // const { data: products } = useGetProductsQuery();
  
  return (
    <>
    <SidebarDisplay />
      <main className="home">
        <NotSignedIn />
      </main>
    </>

  );
}
