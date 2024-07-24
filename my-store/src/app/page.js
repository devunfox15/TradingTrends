import Link from "next/link";
import { Welcome } from "@/components/(homepage)/welcome";
import HomeCategories  from "@/components/(homepage)/homeCategories";
import { CurrentDeals } from "@/components/(homepage)/currentDeals";
import HomePageEnd from "@/components/(homepage)/homePageEnd";

export default function Home() {
  return (
  <div>
    <Welcome/>
    <CurrentDeals />
    <HomeCategories />
    <HomePageEnd />
  </div>
  );
}
