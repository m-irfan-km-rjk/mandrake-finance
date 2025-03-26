import MNavbar from "@/components/MNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <MNavbar/>
      <div className="flex justify-center items-start w-full h-full bg-[url('/home_bg.jpg')] bg-cover flex-col p-10 space-y-5">
        <p className="text-3xl drop-shadow-[2px_2px_0_black] font-bold text-white">Smart Finances, Smart Future - AI-Powered Financial Guidance at your fingertips!</p>
        <button className="bg-blue-400 p-4 text-white font-bold text-2xl rounded-lg border border-black">Explore</button>
      </div>
    </div>
  );
}
