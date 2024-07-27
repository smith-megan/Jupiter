// import { useState } from "react"
import sky from "./assets/Photo/stars.jpg"
import ratio from "./assets/ratio-l-quarter.svg"
import Nav from "./components/Nav"
import slide1 from "./assets/Photo/1.png"
import slide2 from "./assets/Photo/2.png"
import slide3 from "./assets/Photo/3.png"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div
        style={{ backgroundImage: `url(${sky})` }}
        className="grid items-center bg-cover bg-center text-white w-full font-inter"
      >
        <div>
          <Nav />
        </div>
        <div className="grid gap-10 items-center bg-cover bg-center text-white w-full p-10 font-inter mt-4">
          <h1 className="font-title tracking-widest">Dark Fox Trays</h1>
          <p className="text-slate-300">Elevate your place at the table</p>
          <button className="text-black bg-slate-400/80 font-inter">
            Roll for Investigation
          </button>
        </div>
      </div>
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
      <div className="bg-black p-5">
        <div
          style={{ backgroundImage: `url(${slide1})` }}
          className="w-full bg-cover h-[200px]"
        ></div>
      </div>
    </>
  )
}

export default App
