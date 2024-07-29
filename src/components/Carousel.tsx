import { useState } from "react"
import left from "../assets/left-w.svg"
import right from "../assets/right-l.svg"

function Carousel(props: { slides: Array<string> }) {
  let [current, setCurrent] = useState(0)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(props.slides.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === props.slides.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition ease-out duration-40"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {props.slides.map((s: string) => {
          return <img key={s + "-img"} src={s} />
        })}
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
        {props.slides.map((s: string, i: number) => {
          return (
            <div
              onClick={() => {
                setCurrent(i)
              }}
              key={"circle-" + s + i}
              className={`rounded-full w-4 h-4 cursor-pointer ${
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
