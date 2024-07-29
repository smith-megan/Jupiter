import sky from "./assets/Photo/stars.jpg"
import ratio from "./assets/ratio-l-quarter.svg"
import Nav from "./components/Nav"
import slide1 from "./assets/Photo/1.png"
import slide2 from "./assets/Photo/2.png"
import slide3 from "./assets/Photo/3.png"
import Carousel from "./components/Carousel"

function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${sky})` }}
        className="grid items-center bg-cover bg-center text-white w-full font-inter"
      >
        <div>
          <Nav />
        </div>
        {/* Header */}
        <div className="grid gap-10 items-center bg-cover bg-center text-white w-full p-10 font-inter mt-7">
          <h1 className="font-title tracking-widest">Dark Fox Trays</h1>
          <p className="text-slate-300">Elevate your place at the table</p>
          <button className="text-black bg-slate-400/80 font-inter">
            Roll for Investigation
          </button>
        </div>
      </div>
      {/* copy section */}
      <div
        style={{ backgroundImage: `url(${ratio})` }}
        className="grid gap-4 p-4 pt-10 pb-10 bg-navy bg-cover text-slate-300"
      >
        <h1 className="font-title">Some Impactful Thing</h1>
        <p>
          Unique and useful for all your needs and games and things. Text of a
          paragraph would go here about how this is great and good.
        </p>
        <p>
          text of a paragraph would go here about how this is great and good.
          Unique and useful for all your needs and games and things.
        </p>
      </div>
      {/* Carousel */}
      <div className="bg-black m-auto pt-11 w-full">
        <Carousel slides={[slide1, slide2, slide3]} />
      </div>
      {/* 4 points */}
      <div>
        <div
          style={{ backgroundImage: `url(${ratio})` }}
          className="grid gap-4 p-4 pt-10 pb-10 bg-navy bg-cover text-slate-300"
        >
          <h1 className="font-title">Do you need this?</h1>
          <p>
            Yes. Useful for all your needs and games and things. Text of a
            paragraph would go here about how this is great and good.
          </p>
        </div>
        <div className="bg-navy flex justify-center items-center">
          <div className="rounded-full w-1/2 border-2 border-white">
            <img src={sky} className="w-20 h-20 rounded-full bg-cover" />
            <img src={sky} className="w-5 h-5 rounded-full bg-cover" />
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${ratio})` }}
          className="grid gap-4 p-4 pt-10 pb-10 bg-navy bg-cover text-slate-300"
        >
          <div className="flex justify-center items-center gap-3">
            <h1 className="font-title text-8xl">4</h1>
            <h1 className="font-title text-2xl">
              Good reasons that you need this
            </h1>
          </div>
          <div></div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <h1 className="font-title text-2xl pb-3">It's really neat</h1>
              <p>
                Unique and useful for all your needs and games and things. Text
                of a paragraph would go here about how this is great and good.
              </p>
            </div>
            <div>
              <h1 className="font-title text-2xl pb-3">It's cool</h1>
              <p>
                Unique and useful for all your needs and games and things. Text
                of a paragraph would go here about how this is great and good.
              </p>
            </div>
            <div>
              <h1 className="font-title text-2xl pb-3">It's tidy</h1>
              <p>
                Unique and useful for all your needs and games and things. Text
                of a paragraph would go here about how this is great and good.
              </p>
            </div>
            <div>
              <h1 className="font-title text-2xl pb-3">It's shiny</h1>
              <p>
                Unique and useful for all your needs and games and things. Text
                of a paragraph would go here about how this is great and good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
