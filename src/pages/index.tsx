import Image from "next/image";
import { Nunito } from "next/font/google";
import Logo from "../../public/assets/logo.svg";
import Clouds from "../../public/assets/background/clouds.svg";
import Bridge from "../../public/assets/background/golden.svg";
import HC from "../../public/assets/background/flag-orpheus-left.svg";

const nunito = Nunito({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={"min-h-screen pb-12 bg-white "}>
      <Image
        src={Bridge}
        className="w-screen  absolute right-0 z-0 bottom-0 fill-amber-300 "
        alt="bridge"
      />
      <div className=" bg-gradient-to-b -z-10 from-[#8eddfd] to-[#a4d3f3]  h-screen ">
        <div
          className={
            "pt-12 md:px-12 flex justify-center items-center md:justify-start md:items-start "
          }
        >
          <div className="z-20 md:bg-[#9ed5f5] bg-transparent  md:text-left text-center  rounded-xl md:shadow-xl md:border-black md:border-8  p-12 lg:px-16">
            <div>
              <div className="mb-6 flex justify-center items-center md:justify-start md:items-start">
                <Image src={Logo} alt="angelhacks logo" className="w-1/4 " />
              </div>

              <p
                className={
                  nunito.className +
                  " text-[#0291a0] text-5xl xs:text-6xl md:text-7xl font-extrabold"
                }
              >
                Angel
                <span className={"text-[#fdb32b]"}>Hacks</span> 3.0
              </p>

              <p
                className={
                  nunito.className +
                  " font-extrabold uppercase mt-2 text-[#de865e] text-3xl md:text-5xl"
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
                nunito.className +
                " mt-8 mb-12  font-bold text-2xl xs:htext-3xl "
              }
            >
              Design, create, and ship your own game!
            </p>
            <div className="flex justify-center items-center md:justify-start md:items-start">
              <div className="group hover:scale-105 duration-200 hover:cursor-pointer ">
                <div className="group-hover:translate-y-1 transition ease-in-out duration-300">
                  <a
                    className={
                      nunito.className +
                      " font-extrabold text-4xl -ml-2 px-12 md:px-24 py-2 relative bg-black rounded-xl  border-black border-2"
                    }
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
                </div>
                <div className=" -mt-12">
                  <a
                    className={
                      nunito.className +
                      " font-extrabold relative text-4xl px-12 md:px-24 py-2 bg-[#ffb400] rounded-xl z-20  border-black border-2"
                    }
                  >
                    Join us!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"absolute bottom-0  -mb-5 right-0 left-0 "}>
          <Image src={Clouds} alt="logo" priority className="w-screen" />
        </div>
      </div>
      <div className="mt-16  text-center md:text-left px-0 md:px-8 md:px-16 lg:px-32">
        <div className="flex justify-center items-center">
          <div
            className={
              nunito.className +
              " text-5xl p-4  text-center w-fit font-extrabold text-[#0291a0]"
            }
          >
            <span className="text-8xl">🕹️</span>
            <p className="mt-4">The Rundown</p>
          </div>
        </div>
        <br />

        <div
          className={
            nunito.className +
            "text-center flex justify-center items-center md:text-2xl text-xl px-4"
          }
        >
          <div className={nunito.className + " font-semibold md:w-1/2"}>
            <p className={nunito.className}>
              Come with us for a day of{" "}
              <span className={nunito.className + "  text-[#c99212]"}>
                building games
              </span>
              , <span className="text-[#c99212]">meeting new people</span>, and{" "}
              <span className="text-[#c99212]">eating food</span>!
            </p>
            <p className="mt-4">
              It doesn&apos;t matter whether you&apos;re a seasoned veteran, or
              a complete beginner, we&apos;ll love for you to come and hang out!
            </p>
            <p className={nunito.className + " mt-4"}>
              AngelHacks BA is a Game Jam organized by people just like you!
              Come help us out in the{" "}
              <a
                href="https://hackclub.slack.com/archives/C051MQSF970"
                target={"_blank"}
                rel="noreferrer"
                className="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
              >
                #angelhacks-ba
              </a>{" "}
              channel in the{" "}
              <a
                href="https://hackclub.com/slack/"
                target={"_blank"}
                rel="noreferrer"
                className="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
              >
                Hack Club Slack
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
