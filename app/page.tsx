import Image from "next/image";
import InfoBox from "./components/InfoBox";
import profilePic from "@/public/images/profile-pic.jpg"

export default function Home() {
  return (
    <div className="p-4">
      <p className="text-center text-6xl font-bold">My Portofolio Profile</p>
      <br></br>
      <div className="flex justify-center">
        <div className="space-y-4 p-4">
          <div className="w-[200px] h-[200px] relative mx-auto">
            <Image src={profilePic} alt="profile pic" fill={true} className="object-cover rounded-full"></Image>
          </div>
          <InfoBox />
        </div>
      </div>
    </div>
  );
}