import NikeApp from "@/components/NikeApp";
import Hero from "@/components/Hero";
import BestOfAirMax from "@/components/BestOfAirMax";
import Featured from "@/components/Featured";
import GearUp from "@/components/GearUp";
import DontMiss from "@/components/DontMiss";
import Essentials from "@/components/Essentials";
import Categories from "@/components/Categories";


export default function Home() {
  return (
    <div>
      
      <NikeApp/>
      <Hero/>
      <BestOfAirMax/>
      <Featured/>
      <GearUp/>
      <DontMiss/>
      <Essentials/>
      <Categories/>
      
    </div>
  );
}
