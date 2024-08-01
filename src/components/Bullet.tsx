function Bullet(props: { info: Array<Array<string>> }) {
  return (
    <>
      <div>
        {props.info.map((s: any) => {
          return (
            <div
              className="grid odd:text-slate-300 odd:text-right odd:border-r-2 even:border-l-2 even:text-left even:text-slate-200"
              key={s[0] + "-div"}
            >
              <p>
                {s[0]} - {s[1]}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Bullet
