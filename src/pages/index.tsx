import Image from "next/image";
import { Nunito } from "next/font/google";
import Logo from "../../public/assets/logo.svg";
import Clouds from "../../public/assets/background/clouds.svg";
import Bridge from "../../public/assets/background/golden.svg";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={"min-h-screen pb-12 bg-white"}>
      <Image
        src={Bridge}
        className="w-screen absolute right-0 z-0 bottom-0 scale-x-flip "
        alt="bridge"
      />
      <div className=" bg-gradient-to-b -z-10 from-[#8eddfd] to-[#a4d3f3]  h-screen ">
        <div
          className={
            "pt-12 sm:px-12 flex justify-center items-center sm:justify-start sm:items-start "
          }
        >
          <div className="z-20 sm:bg-[#9ed5f5] bg-transparent  sm:text-left text-center  rounded-xl sm:shadow-xl sm:border-black sm:border-8  p-12 lg:px-16">
            <div>
              <div className="mb-6 flex justify-center items-center sm:justify-start sm:items-start">
                <Image src={Logo} alt="angelhacks logo" className="w-1/4 " />
              </div>

              <p
                className={
                  nunito.className +
                  " text-[#0291a0] text-6xl sm:text-7xl font-extrabold"
                }
              >
                Angel
                <span className={"text-[#fdb32b]"}>Hacks</span> 3.0
              </p>

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
              className={nunito.className + " mt-8 mb-12  font-bold text-3xl "}
            >
              Design, create, and ship your own game!
            </p>
            <div className="flex justify-center items-center sm:justify-start sm:items-start">
              <div className="group hover:cursor-pointer ">
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
        </div>
        <div className={"absolute bottom-0  overflow-hidden"}>
          <Image src={Clouds} alt="logo" priority className="w-screen " />
        </div>
      </div>
      <div className="text-center mt-16">
        <p
          className={
            nunito.className + " text-6xl font-extrabold text-[#ffb400]"
          }
        >
          It's a Game Jam!
        </p>
      </div>
    </main>
  );
}
