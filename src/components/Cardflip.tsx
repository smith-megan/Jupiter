import { useState } from "react"
import left from "../assets/left-w.svg"
import right from "../assets/right-l.svg"

function Cardflip(props: { cards: Array<string> }) {
  let [current, setCurrent] = useState(0)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(props.cards.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === props.cards.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <div className="overflow-hidden relative w-full grid">
      <div
        className="flex transition ease-out duration-40"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {props.cards.map((s: string) => {
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
    </div>
  )
}

export default Cardflip
