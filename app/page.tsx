import Image from "next/image";
import InfoBox from "./components/InfoBox";
import profilePic from "@/public/images/profile-pic.jpg"
import SkillList from "./components/SkillList";

export default function Home() {

  return (
    <div className="p-4 space-y-8">
      <p className="text-center text-6xl font-bold">My Portofolio Profile</p>
      
      <div className="flex justify-center">
        <div className="p-4 flex gap-x-10">
          <div className="w-[200px] h-[200px] relative mx-auto">
            <Image src={profilePic} alt="profile pic" fill={true} className="object-cover rounded-full"></Image>
          </div>
          <InfoBox />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <SkillList></SkillList>
      </div>
    </div>
  );
}