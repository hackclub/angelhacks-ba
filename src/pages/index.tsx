import Image from "next/image";
import { Nunito } from "next/font/google";
import Logo from "../../public/assets/logo.svg";
import Clouds from "../../public/assets/background/clouds.svg";
import Bridge from "../../public/assets/background/bridge.svg";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={"min-h-screen pb-12 bg-black"}>
      <Image
        src={Bridge}
        className="w-5/12 opacity-70 absolute right-0 -mb-4 bottom-0 "
        alt="bridge"
      />
      <div className=" bg-gradient-to-b -z-20 from-[#7eecff] to-[#defaff]  h-screen ">
        <div
          className={
            "z-0 pt-12 md:pl-12 flex justify-center items-center md:justify-start md:items-start "
          }
        >
          <div className="md:text-left text-center">
            <div className="text-center mb-24 -rotate-12 mt-24 bg-[#009aab] bg-opacity-70 p-4 rounded-lg border-dashed w-fit">
              {/* "mt-24 bg-[#009aab] bg-opacity-70 p-4 rounded-lg border-dashed w-fit" */}
              <span
                className={
                  nunito.className +
                  " text-6xl sm:text-7xl font-extrabold text-[#fdb32b] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                }
              >
                AngelHacks!
              </span>
              <p
                className={
                  nunito.className +
                  " font-extrabold mt-2 text-[#ffcfb9] text-4xl sm:text-5xl"
                }
              >
                Bay Area Satelite
              </p>
            </div>
            <a
              href="https://google.com"
              className={
                nunito.className +
                " bg-[#fdb32b] p-4 text-2xl rounded-lg text-white font-semibold mt-12 sm:mt-16"
              }
            >
              Register
            </a>
          </div>
        </div>
        <div className={"absolute bottom-0  w-full overflow-hidden"}>
          <Image src={Clouds} alt="logo" priority className="max-w-screen " />
        </div>
      </div>
    </main>
  );
}
