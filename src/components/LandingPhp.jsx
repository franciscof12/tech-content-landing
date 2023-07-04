import { Link } from "react-router-dom";
import hero from "/Users/fran/programacion/lifulltech/public/php.png"
import Header from "./Header";

function LandingPhp() {
  return (
    <>
    <Header />
    <div className="w-screen min-h-screen text-white bg-cover bg-center" style={{
      background: "linear-gradient(90deg, rgba(75, 0, 130, 1) 0%, rgba(39, 0, 67, 1) 50%, rgba(20, 0, 35, 1) 100%)"
    }}>
      <div className=" container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="mb-20 mt-[30px] lg:w-1/12 md:w-3/12 w-5/12 mb-10 object-cover object-center bg-cover" alt="hero" src={hero} />
        <div className="text-center lg:w-5/12 w-full  ml-[-30px] mt-[-64px]">
          <h1 className="my-4 text-5xl font-bold leading-tight inline-flex animate-text-gradient bg-gradient-to-r from-[#9d00ff] via-[#8000ff] to-[#4b0082] bg-[200%_auto] bg-clip-text text-transparent my-10">
            CRM Leads Proyect
          </h1>
          <p className="text-2xl mb-8">
          Welcome to Php
          </p>
          <div className="flex justify-center mx-auto">
            <Link to="/">
              <button
                className="bg-[#4b0082] hover:bg-[#8000ff] text-white font-bold rounded-full py-4 px-8 shadow-lg hover:shadow-purple-500/40 transition-all duration-200 ease-in-out">
                Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div >
    </>
  );
}

export default LandingPhp
