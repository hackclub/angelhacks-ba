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
      <div className=" bg-gradient-to-b -z-20 from-[#8eddfd] to-[#a4d3f3]  h-screen ">
        <div
          className={
            "z-0  md:pl-12 flex justify-center items-center md:justify-start md:items-start "
          }
        >
          <div className="md:text-left text-center">
            <div className="text-center  mt-16 p-4 rounded-lg border-dashed w-fit">
              <div className="mb-6 flex justify-center items-center">
                <Image src={Logo} alt="angelhacks logo" className="w-1/4 " />
              </div>
              <span
                className={
                  nunito.className +
                  " text-6xl sm:text-7xl font-extrabold text-[#0291a0]"
                }
              >
                Angel
              </span>
              <span
                className={
                  nunito.className +
                  " text-6xl sm:text-7xl font-extrabold text-[#fdb32b]"
                }
              >
                Hacks
              </span>
              <span
                className={
                  nunito.className +
                  " text-6xl sm:text-7xl font-extrabold text-[#0291a0]"
                }
              >
                {" "}
                3.0
              </span>

              <p
                className={
                  nunito.className +
                  " font-extrabold uppercase mt-2 text-[#de865e] text-4xl sm:text-5xl"
                }
              >
                Bay Area
              </p>
            </div>

            <p className={nunito.className + " mt-8  font-semibold text-2xl "}>
              May 27-28, 2023, 9AM-9PM <br />
              <span className="text-xl">Address</span>
            </p>
            <p
              className={
                nunito.className + " mt-8 mb-12  font-semibold text-2xl "
              }
            >
              Design, create, and ship your own game!
            </p>
            <div className="group hover:cursor-pointer">
              <div className="group-hover:translate-y-1 transition ease-in-out duration-300">
                <a
                  className={
                    nunito.className +
                    "font-extrabold text-4xl -ml-2 px-24 py-2 relative bg-black rounded-xl  border-black border-2"
                  }
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
              </div>
              <div className="-mt-12">
                <a
                  className={
                    nunito.className +
                    " font-extrabold relative text-4xl px-24 py-2 bg-[#ffb400] rounded-xl z-20  border-black border-2"
                  }
                >
                  Join us!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={"absolute bottom-0  w-full overflow-hidden"}>
          <Image src={Clouds} alt="logo" priority className="max-w-screen " />
        </div>
      </div>
    </main>
  );
}
