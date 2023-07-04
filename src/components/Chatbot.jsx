import { Link } from "react-router-dom";
import hero from "/Users/fran/programacion/lifulltech/public/golang.png"
import Header from "./Header";

function Chatbot() {
  return (
    <>
    <Header />
    <div className="w-screen min-h-screen text-white bg-cover bg-center" style={{
        background: "linear-gradient(90deg, rgba(0, 0, 139, 1) 0%, rgba(0, 0, 70, 1) 50%, rgba(0, 0, 30, 1) 100%)"
      }}>
        <div className=" container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center bg-cover ml-[-60px] mt-[30px]" alt="hero" src={hero} />
          <div className="text-center lg:w-5/12 w-full  ml-[-30px] mt-[-64px]">
            <h1 className="my-4 text-5xl font-bold leading-tight inline-flex animate-text-gradient bg-gradient-to-r from-[#007BFF] via-[#00ADD8] to-[#00BFFF] bg-[200%_auto] bg-clip-text text-transparent">EN DESARROLLO</h1>
            <div className="flex justify-center mx-auto">
              <Link to="/">
                <button
                  className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8 bg-indigo-500 shadow-lg hover:shadow-indigo-500/40 transition-all duration-200 ease-in-out">
                   home 
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Chatbot
