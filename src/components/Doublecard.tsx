function Doublecard(props: { info: Array<Array<string>>; header: string }) {
  return (
    <div className="bg-navy text-white flex flex-col justify-center p-3 sm:p-10">
      <h1 className="font-title text-center pb-4 sm:pb-10">{props.header}</h1>
      <div className="grid grid-cols-2 gap-2 pb-2 sm:gap-7">
        {props.info.map((s) => {
          return (
            <div className="pb-5" key={s[0] + "-div"}>
              <img className="object-cover w-full h-3/4" src={s[0]} />
              <h2 className="text-lg">{s[1]}</h2>
              <p className="text-sm">{s[2]}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Doublecard
