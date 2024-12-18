import Image from "next/image";
import InfoBox from "./components/InfoBox";
import profilePic from "@/public/images/profile-pic.jpg"
import SkillList from "./components/SkillList";

export default function Home() {

  return (
    <div className="p-4 space-y-12 lg:space-y-20">
        <p className="text-center text-4xl xl:text-6xl font-bold text-primary-mint">My Portofolio Profile</p>
        
        <div className="space-y-4 md:hidden">
          <div className="flex justify-center">
            <div
              className="w-44 h-44 xl:w-52 xl:h-52 relative">
              <Image 
                src={profilePic} 
                alt="profile pic" 
                fill={true} 
                className="object-cover rounded-full">
              </Image>
            </div>
          </div>
          <div className="max-w-xs mx-auto">
            <InfoBox />
          </div>
        </div>

        <div className="hidden md:flex justify-center gap-x-8 lg:gap-x-12 xl:gap-x-16">
          <div
            className="w-44 h-44 xl:w-52 xl:h-52 relative">
            <Image 
              src={profilePic} 
              alt="profile pic" 
              fill={true} 
              className="object-cover rounded-full">
            </Image>
          </div>
          <div className="w-full max-w-xs lg:max-w-sm xl:max-w-md">
            <InfoBox />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <SkillList></SkillList>
        </div>
    </div>
  );
}