import { useState } from "react"
import left from "../assets/left-w.svg"
import right from "../assets/right-l.svg"

function Carousel({ slides }: any) {
  let [current, setCurrent] = useState(0)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-400"
        // style={{ transform: `translate-X(-${current * 100})}` }}
      >
        <div
          style={{ backgroundImage: `url(${slides[current]})` }}
          className="w-full h-[400px] bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
      <div className="flex absolute top-0 h-full w-full justify-between item-center px-4">
        <div
          className="w-[10%] bg-center bg-contain bg-no-repeat cursor-pointer"
          style={{ backgroundImage: `url(${left})` }}
          onClick={previousSlide}
        ></div>
        <div
          className="w-[10%] bg-center bg-contain bg-no-repeat cursor-pointer"
          style={{ backgroundImage: `url(${right})` }}
          onClick={nextSlide}
        ></div>
      </div>
      <div className="absolute bottom-0 p-5 flex justify-center gap-3 w-full">
        {slides.map((s: string, i: number) => {
          return (
            <div
              onClick={() => {
                setCurrent(i)
              }}
              key={"circle" + s + i}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i == current ? "bg-white" : "bg-slate-400"
              }`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
