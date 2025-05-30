import { LuImport } from "react-icons/lu"
import Sanaullah from "../../img/prof.jpg";

const Hero=()=>{

return (
  <section>
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-16 text-[12vw] font-semibold uppercase  leading-none">
        Shayan<br /> 
      </h1>
      <div className="mt-8">
        <a
          href="../../img/prof.jpg"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center rounded-xl bg-lime-300 p-2 
                px-3 font-sans font-medium text-black hover:bg-lime-400"
        >
          {" "}
          <span>Resume.pdf</span>
          <LuImport className="ml-3" />
        </a>
      </div>
      <div className="lg:w-100%">
        <img src={Sanaullah} className="" />
      </div>
    </div>
  </section>
);
}
export default Hero