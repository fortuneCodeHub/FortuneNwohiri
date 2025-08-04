import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/Frameworks";
import CopyEmailButton from "../components/CopyEmailButton";


const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="md:grid hidden grid-cols-3 gap-1 relative grid-default-color grid-1">
          {/* Grid 1.1: Video (Largest) */}
          <div className="col-span-3 relative flex items-end rounded-lg overflow-hidden">
            <video
              src="assets/avatar.mp4"
              loop
              muted
              autoPlay
              className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="z-10 p-4">
              <p className="headtext">Hi, I'm Fortune Nwohiri</p>
              <p className="subtext">
                Over the last 3 years, I developed my frontend and backend dev
                skills to deliver web applications.
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </div>

          {/* Grid 1.2: Highlight Box */}
          <div
            className="text-white p-4 rounded-lg md:flex justify-between items-center bg-cover bg-center hidden"
            style={{ backgroundImage: "url('/assets/fortunenwohiri.jpg')" }}
          >
            
          </div>

          {/* Grid 1.3: Availability Box */}
          <a href="https://fortunecodehub.github.io/Safu-DeFi/" target="_blank" className="col-span-2 text-white p-4 rounded-lg hidden md:flex justify-between items-center bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/doka.png')"}} >
            <div>
              {/* Optional overlay or text */}
              <div className="lg:mb-[-90px]">
                <p className="font-bold text-white lg:text-[20px]">A Community Moderator And Growing Twitter Ambassabor</p>
                <p className="text-white">
                  Over the last 2 years, I have worked as a moderator for several web3 crypto projects.
                </p>
              </div>
            </div>
          </a>

        </div>

        <div className="relative grid-default-color md:hidden grid-1 overflow-hidden">
          {/* Video background */}
          <video
            src="assets/avatar.mp4"
            loop
            muted
            autoPlay
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />

          {/* Overlay text */}
          <div className="relative z-10 top-[40%] text-white">
            <p className="headtext">Hi, I'm Fortune Nwohiri</p>
            <p className="subtext">
              Over the last 3 years, I developed my frontend and backend dev
              skills to deliver web applications.
            </p>
          </div>

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-900 z-10 pointer-events-none" />
        </div>


        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/js-image.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/laravel-img.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/php-img.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars 😁, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

        {/* Grid 6: Fortune's Image */}
        <div
          className="text-white p-4 rounded-lg flex justify-between items-center bg-cover bg-top grid-6 md:hidden h-[40vh]"
          style={{ backgroundImage: "url('/assets/fortunenwohiri.jpg')" }}
        >
          
        </div>

        {/* Grid 7: Availability Box */}
        <a 
          href="https://fortunecodehub.github.io/Safu-DeFi/" 
          target="_blank" 
          className="md:hidden text-white p-4 rounded-lg flex justify-between items-center bg-cover bg-center grid-7 h-[40vh]"
          style={{ backgroundImage: "url('/assets/doka.jpg')"}} 
        > 
          <div>
            {/* Optional overlay or text */}
            <div className="lg:mb-[-90px]">
              <p className="font-bold lg:text-[20px]">A Community Moderator And Growing Twitter Ambassabor</p>
              <p className="">
                Over the last 2 years, I have worked as a moderator for several web3 crypto projects.
              </p>
            </div>
          </div>
        
        </a>
      </div>
    </section>
  );
};

export default About;
