import Image from "next/image";
import { Nunito } from "next/font/google";
import Logo from "../../public/assets/logo.svg";
import Clouds from "../../public/assets/background/clouds.svg";
import Bridge from "../../public/assets/background/golden.svg";
import HC from "../../public/assets/background/flag-orpheus-left.svg";
import Joystick from "../../public/assets/images/joystick.svg";
import Panda from "../../public/assets/images/panda.svg";

const nunito = Nunito({ subsets: ["latin"] });

function FAQCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-6 bg-opacity-40 border-4 border-[#433b6b]  rounded-xl">
      <div
        className={
          nunito.className +
          " p-2 text-2xl md:text-3xl rounded-lg font-semibold bg-gray-400 bg-opacity-30 border-2 border-gray-500"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline-block -mt-1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <span className="ml-2 font-bold">{question}</span>
      </div>

      <div
        className={nunito.className + " text-black md:text-2xl text-xl mt-4"}
        dangerouslySetInnerHTML={{ __html: answer }}
      ></div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <div className="relative  bg-gradient-to-b  from-[#8eddfd] to-[#a4d3f3] min-h-screen pb-72 h-fit">
        <Image
          src={Bridge}
          className="w-screen  sm:opacity-100 opacity-50 absolute z-0 bottom-0 fill-amber-300 "
          alt="bridge"
        />
        <div className="flex justify-start items-start">
          <a
            href="https://hackclub.com"
            target="_blank"
            className=" w-fit h-fit z-20"
            rel="noreferrer"
          >
            <Image
              src={HC}
              className="hover:rotate-6   hover:translate-y-3 motion-safe:transition-transform w-32 lg:w-48"
              alt="hack club!"
            />
          </a>
        </div>

        <div
          className={
            "pt-4 md:pt-12 md:px-12 flex justify-center items-center md:justify-start md:items-start "
          }
        >
          <div className="z-20  md:bg-[#9ed5f5] bg-transparent md:bg-opacity-80  md:text-left text-center   rounded-xl md:shadow-xl md:border-[#433b6b] md:border-8  p-0 xs:p-2 sm:p-12 lg:px-16">
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
                  " font-extrabold uppercase mt-2 text-[#de865e] text-2xl xs:text-3xl md:text-5xl"
                }
              >
                Bay Area
              </p>
            </div>

            <p
              className={
                nunito.className +
                " mt-8  font-semibold text-xl xs:text-2xl md:text-3xl"
              }
            >
              May 27, 2023, 9AM-9PM <br />
              <span className="">Address TBD</span>
            </p>
            <p
              className={
                nunito.className +
                " mt-8 mb-12  font-bold text-2xl xs:text-3xl md:text-4xl "
              }
            >
              Design, create, and ship your own game!
            </p>
            <div className="flex  justify-center items-center md:justify-start md:items-start">
              <div className="group  hover:scale-105 duration-200 hover:cursor-pointer ">
                <div className="group-hover:translate-y-1 motion-safe:transition-transform transition ease-in-out duration-300">
                  <a
                    className={
                      nunito.className +
                      " font-extrabold text-3xl xs:text-4xl -ml-2 px-12 md:px-24 py-2 relative bg-black rounded-xl  border-black border-2"
                    }
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
                </div>
                <div className=" xs:-mt-12 -mt-11">
                  <a
                    className={
                      nunito.className +
                      "  font-extrabold relative text-3xl xs:text-4xl px-12 md:px-24 py-2 bg-[#ffb400] rounded-xl z-20  border-black border-2"
                    }
                    href="https://airtable.com/shrnolohr2nNQBQ5w"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join us!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={Clouds}
          alt="logo"
          priority
          className="absolute bottom-0 w-screen"
        />
      </div>
      <div className="mt-16 pb-16   text-center md:text-left px-0  lg:px-32">
        <div className="flex justify-center items-center">
          <div
            className={
              nunito.className +
              " text-5xl p-4   text-center w-fit font-extrabold text-[#0291a0]"
            }
          >
            <div className="flex justify-center items-center">
              <Image src={Joystick} alt="joystick" className="w-28" />
            </div>

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
              Join us for a day of{" "}
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
              Come help us out in the
              <a
                href="https://hackclub.slack.com/archives/C051MQSF970"
                target={"_blank"}
                rel="noreferrer"
                className="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
              >
                #angelhacks-ba
              </a>
              channel in the
              <a
                href="https://hackclub.com/slack/"
                target={"_blank"}
                rel="noreferrer"
                className="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
              >
                Hack Club Slack
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mt-24 flex justify-center items-center">
          <div
            className={
              nunito.className +
              " text-5xl p-4  text-center w-fit font-extrabold text-[#0291a0]"
            }
          >
            <div className="flex justify-center items-center">
              <Image src={Panda} alt="FAQ" className="w-24" />
            </div>
            <p className="mt-4">Frequently Asked Questions</p>
          </div>
        </div>

        <div className="mx-8 mt-6 grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0 space-y-8 ">
          <div className="space-y-8">
            <FAQCard
              question={"What's AngelHacks & AngelHacks BA?"}
              answer={`AngelHacks 3.0 is a game jam organized by teenagers @ Hack Club! The official event will be held in Boston, but there will be satellite events (like this one!) running alongside them. These include Bay Area,<a
			  href="https://angelhacksto.hackclub.com"
			  target={"_blank"}
			  rel="noreferrer"
			  class="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
			>Toronto</a>, and<a
			class="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
		  >LA</a>!`}
            />

            <FAQCard
              question={"What's a Game Jam?"}
              answer={
                "A game jam is an event where people come together to make games in a limited time. At our game jam, we welcome beginners, experts, and everybody in between!"
              }
            />
            <FAQCard
              question={"Where is it taking place?"}
              answer={"TBD! Stay tuned :D"}
            />
          </div>
          <div className="space-y-8">
            <FAQCard
              question={"How much does it cost?"}
              answer={
                "It's free! ≧(´▽｀)≦ <br /> We&apos;ll provide food, snacks, and swag at no cost!"
              }
            />
            <FAQCard
              question={"Do I need a team?"}
              answer={
                "Nope! You can work alone or with a team of up to 4 people. If you don't have a team, we'll help you find one!"
              }
            />
            <FAQCard
              question={"What can I make?"}
              answer={
                "Anything about games! It can be a platformer, a Sprig game, a board game, a visual novel, a game about making a game... the possibilities are endless! We&apos;ll have workshops to help you get started, and mentors to help you along the way."
              }
            />
          </div>
        </div>
        <div className="mx-8 mt-12 p-6 bg-opacity-40 border-4 border-[#433b6b]  rounded-xl">
          <div
            className={
              nunito.className +
              " p-2 text-2xl md:text-3xl rounded-lg font-semibold bg-gray-400 bg-opacity-30 border-2 border-gray-500"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block -mt-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <span className="ml-2 font-bold ">
              Help, my question isn&apos;t answered here! :&lt;
            </span>
          </div>

          <div
            className={
              nunito.className + " text-black md:text-2xl text-xl mt-4"
            }
          >
            No worries! Reach out at
            <a
              href="mailto:ba@angelhacks.org"
              target={"_blank"}
              rel="noreferrer"
              className="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
            >
              ba@angelhacks.org
            </a>
            , or send us a message in the
            <a
              href="https://hackclub.slack.com/archives/C051MQSF970"
              target={"_blank"}
              rel="noreferrer"
              className="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
            >
              #angelhacks-ba
            </a>
            channel in the
            <a
              href="https://hackclub.com/slack/"
              target={"_blank"}
              rel="noreferrer"
              className="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
            >
              Hack Club Slack
            </a>
            !
          </div>
        </div>
        <div
          className={
            nunito.className + " mt-24 text-center text-gray-500  text-2xl"
          }
        >
          AngelHacks BA is an event crafted by Hack Clubbers.
          <br />
          Finances open sourced on
          <a
            href="https://bank.hackclub.com/angelhacks-bay-area"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
          >
            Hack Club Bank
          </a>
          , and code on
          <a
            href="https://github.com/hackclub/angelhacks-ba"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#c99212] duration-150 hover:bg-opacity-60 hover:bg-[#ffb400] px-2 py-1 rounded-lg hover:text-[#644601] underline decoration-dashed underline-offset-4"
          >
            Github
          </a>
          .
        </div>
      </div>
    </>
  );
}
