// import { useState } from "react"
import sky from "./assets/Photo/stars.jpg"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div
        style={{ backgroundImage: `url(${sky})` }}
        className="grid items-center bg-cover bg-center text-white w-full p-10"
      >
        <h1>Dark Fox Trays</h1>
        <p>Elevate your place at the table</p>
        <button>Roll for Investigation</button>
      </div>
    </>
  )
}

export default App
