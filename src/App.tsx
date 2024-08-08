import sky from "./assets/Photo/stars.jpg"
import ratio from "./assets/ratio-l-quarter.svg"
import Nav from "./components/Nav"
import slide1 from "./assets/Photo/1.png"
import slide2 from "./assets/Photo/2.png"
import slide3 from "./assets/Photo/3.png"
import Carousel from "./components/Carousel"
import Product from "./components/Product"
import Bullet from "./components/Bullet"
import Cardflip from "./components/Cardflip"
import Doublecard from "./components/Doublecard"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

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
        <div className="relative bg-navy flex justify-center items-center w-full h-[200px]">
          <div className="absolute rounded-full w-[140px] h-[140px] border-2 border-white">
            <img
              src={sky}
              className="absolute top-5 right-20 w-20 h-20 rounded-full bg-right-bottom"
            />
            <img
              src={sky}
              className="absolute bottom-4 left-28 w-7 h-7 rounded-full bg-left-top"
            />
            <div className="absolute rounded-full w-[10px] h-[10px] border-1 bg-white bottom-1 left-24"></div>
            <div className="absolute rounded-full w-[10px] h-[10px] border-1 bg-white top-1 left-7"></div>
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
        <div
          className="bg-navy bg-cover"
          style={{ backgroundImage: `url(${ratio})` }}
        >
          <h1 className="font-title text-slate-300">The Latest</h1>
          <Product
            info={{
              name: "Box of Holding",
              description:
                "Description string is pretty long but that is fine and everything",
              url: slide2,
              price: 300,
            }}
          />
          <Product
            info={{
              name: "Travel Sized",
              description:
                "Also reasonably long filler text for testing purposes but that is fine and everything, but that is fine and everything, but that is fine and everything",
              url: slide3,
              price: 10,
            }}
          />
        </div>
        <div className="bg-navy text-slate-300 p-4">
          <h1 className="font-title">Our Timeline</h1>
          <Bullet
            info={[
              ["Hello", "darkness my old friend"],
              ["I have", "come to talk with you again"],
              ["Because", "a silence softly creeping"],
              ["Left", "while I was sleeping"],
              ["Vision", "written on the subway walls"],
            ]}
            image={[slide1, slide2, slide3]}
          />
        </div>
        <Cardflip cards={[slide1, slide2, slide3]} />
        <Doublecard
          header="Card Title"
          info={[
            [
              slide1,
              "Header Here",
              "Text that is longer than before but not important",
            ],
            [slide2, "Second Header", "The section with more text and details"],
          ]}
        />
        <Contact
          header="Reach out for more"
          tagline="We're very approachable"
          button="Contact"
          photo={sky}
          paragraph="In this day and age we are certain you will read this paragraph and follow up because of the inspiring details contained in it."
        />
        <Footer />
      </div>
    </>
  )
}

export default App
