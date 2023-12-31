import Header from "./Header";
import Tech from "./Tech";
import hero from "/Users/fran/programacion/lifulltech/public/20190328133546_Lifull_Symbol.png";
import backgroundImage from "/Users/fran/programacion/lifulltech/public/lifullbanner.jpeg";

function Landing() {
  return (
    <section className="h-screen overflow-x-hidden"> 
    <Header />
    <div className="w-screen min-h-screen text-white bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(rgba(38, 38, 38, 0.9), rgba(38, 38, 38, 0.9)), url(${backgroundImage})`
    }}>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-1/12 md:w-3/12 w-5/12 mb-10 object-cover object-center bg-cover" alt="hero" src={hero} />
        <div className="text-center lg:w-2/3 w-full p-4">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Welcome to <span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FFB347] bg-[200%_auto] bg-clip-text text-transparent'>
              Content Tech
            </span>
          </h1>
          <p className="text-2xl mb-8">
            <div className="flex justify-center mx-auto">
              <Tech />
            </div>
          </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Landing;
