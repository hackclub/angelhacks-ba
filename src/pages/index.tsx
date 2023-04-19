import Image from "next/image";
import { Nunito } from "next/font/google";
import Logo from "../../public/assets/logo.svg";
import Clouds from "../../public/assets/background/clouds.svg";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={"min-h-screen pb-12 bg-black"}>
      <div className=" bg-gradient-to-b from-[#7eecff] to-[#defaff]  h-screen ">
        <div className={"pt-12 pl-12"}>
          <p
            className={
              nunito.className +
              " text-7xl font-extrabold -rotate-12 mt-24 bg-[#009aab] bg-opacity-70 p-4 rounded-lg border-dashed w-fit"
            }
          >
            <span className="text-[#fdb32b] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              AngelHacks
            </span>
            <br />
            <span className="text-[#f8bb9f] text-5xl">Bay Area Satelite</span>
          </p>
        </div>
        <div className={"absolute bottom-0  w-full overflow-hidden"}>
          <Image src={Clouds} alt="logo" priority className="max-w-screen " />
        </div>
      </div>
    </main>
  );
}
