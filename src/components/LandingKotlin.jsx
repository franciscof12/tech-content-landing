import { Link } from "react-router-dom";
import hero from "/Users/fran/programacion/lifulltech/public/kotlin.png"
import Header from "./Header";

function LandingKotlin() {
  return (
    <>
    <Header />
    <div className="w-screen min-h-screen text-white bg-cover bg-center" style={{
      background: "linear-gradient(90deg, rgba(0, 139, 0, 1) 0%, rgba(0, 70, 0, 1) 50%, rgba(0, 30, 0, 1) 100%)"
    }}>
      <div className=" container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="mt-[30px] mb-20 lg:w-1/12 md:w-3/12 w-5/12 mb-10 object-cover object-center bg-cover" alt="hero" src={hero} />
        <div className="text-center lg:w-5/12 w-full  ml-[-30px] mt-[-64px]">
          <h1 className="my-4 text-5xl font-bold leading-tight inline-flex animate-text-gradient bg-gradient-to-r from-[#32CD32] via-[#008000] to-[#006400] bg-[200%_auto] bg-clip-text text-transparent my-10">
            CRM Leads Proyect
          </h1>

          <p className="text-2xl mb-8">
            Ship products 5-10x faster with your existing design tools, tech stacks & workflows!
          </p>
          <div className="flex justify-center mx-auto">
            <Link to="/">
              <button
                className="bg-[#006400] hover:bg-[#32CD32] text-white font-bold rounded-full py-4 px-8 shadow-lg hover:shadow-green-500/40 transition-all duration-200 ease-in-out">
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

export default LandingKotlin
