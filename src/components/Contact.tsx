function Contact(props: {
  photo: string
  header: string
  tagline: string
  button: string
  paragraph: string
}) {
  return (
    <div
      className="bg-navy text-white flex flex-col justify-center p-3 sm:p-10 bg-cover"
      style={{ backgroundImage: `url(${props.photo})` }}
    >
      <div>
        <h1 className="font-title text-center pb-3 sm:pb-10">{props.header}</h1>
        <h2 className="text-center pb-3 sm:pb-10">{props.tagline}</h2>
        <p className="p-3">{props.paragraph}</p>
      </div>
      <div>
        <form className="grid gap-5 p-2 sm:gap-7">
          <input
            placeholder="Email"
            type="text"
            className="bg-transparent border-b-2 border-white"
          ></input>
          <input
            placeholder="Phone Number"
            type="text"
            className="bg-transparent border-b-2 border-white"
          ></input>
          <input
            placeholder="Message"
            type="text"
            className="bg-transparent border-b-2 border-white"
          ></input>
          <button className="bg-transparent border-2 border-white w-1/2 justify-self-center">
            {props.button}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
