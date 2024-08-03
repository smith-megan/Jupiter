function Bullet(props: { info: Array<Array<string>>; image: Array<string> }) {
  return (
    <>
      <div className="relative grid grid-flow-row items-center after:absolute after:inset-0 after:ml-5 after:-translate-x-px md:after:mx-auto md:after:translate-x-0 after:h-full after:w-0.5 after:bg-slate-300">
        {props.info.map((s: any) => {
          return (
            <div
              className="grid w-full odd:text-slate-300 odd:flex-row-reverse even:flex-row sm:odd:text-right even:text-left even:text-slate-200 p-2"
              key={s[0] + "-div"}
            >
              <div className="flex items-center">
                <div className="rounded-full bg-white h-5 w-5 z-10"></div>
                <p className="p-2">
                  {s[0]} - {s[1]}
                </p>
              </div>
            </div>
          )
        })}
        <div className="grid grid-cols-4 row-start-3 z-10 relative justify-center w-full h-[200px]">
          <img
            src={props.image[0]}
            className="relative row-start-1 rounded-full col-overlap object-cover h-[200px] w-[200px]"
          />
          <img
            src={props.image[1]}
            className="relative row-start-1 rounded-full object-cover grid-rows-1 col-underlap h-[120px] w-[120px] border-navy border-8"
          />
        </div>
        <div className="row-start-5 z-10">
          <img
            src={props.image[2]}
            className="rounded-full w-[300px] border-navy border-8"
          />
        </div>
      </div>
    </>
  )
}

export default Bullet
