import MNavbar from "@/components/MNavbar";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

export default function Login() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] bg-white flex flex-col h-full justify-center items-center cred-box z-1">
        <div className="mb-8 justify-center flex flex-col w-[60%] items-center">
            <img src="/logo.png" height={110} width={110} className="shadow-lg rounded-full mb-2"/>
            <p className="text-2xl font-bold">Welcome Back</p>
            <p className="font-bold text-sm">Enter the Credentials to access your account</p>
        </div>

        <div className="w-[60%]">
            <p className="text-sm font-bold">Email Address</p>
            <input type="email" className="border-gray-400 border-2 w-full rounded-lg py-1 mb-5 text-sm text-center" placeholder="Enter your email"/>
            <div className="flex justify-between">
                <p className="text-sm font-bold">Password</p>
                <p className="text-xs font-bold text-blue-400">Forgot Password?</p>
            </div>
            <input type="password" className="border-gray-400 border-2 w-full rounded-lg py-1 mb-5 text-sm text-center" placeholder="Enter your password"/>
            <div className="flex gap-1 mb-7">
                <input type="checkbox" id="checkbox" className="h-5 w-5 text-blue-600 border-gray-300 rounded" />
                <label htmlFor="checkbox" className="text-sm font-bold text-gray-700">Accept Terms and Conditions</label>
            </div>
            <button className="w-full bg-green-600 rounded-lg text-white font-bold hover:bg-green-500 duration-500 cursor-pointer transition mb-3 p-2">
                Login
            </button>
            <div className="flex gap-2 mb-5">
                <button className="w-full bg-yellow-100 rounded-lg text-black font-bold hover:bg-gray-400 duration-500 cursor-pointer transition p-2 flex justify-center gap-2 items-center">
                    <FcGoogle className="text-lg" />
                    Google
                </button>
                <button className="w-full bg-gray-200 rounded-lg text-black font-bold hover:bg-gray-400 duration-500 cursor-pointer transition p-2 flex justify-center gap-2 items-center">
                    <FaFacebookF className="text-lg text-blue-500" />
                    Facebook
                </button>
            </div>
            <div className="flex justify-center gap-4 font-bold">
            <p className="">Dont have an account?</p><Link className="text-blue-500" href={"/signup"}>Sign up</Link>
            </div>
        </div>
      </div>
      <div className="w-[50%] bg-[url('/login_bg.jpg')] h-full bg-center">
      </div>
    </div>
  );
}