import Lista from "./components/Lista"
import "./index.css"
import { useEffect, useState } from "react"
import getShinobiDex from "./data/data";
import BarraPesquisa from "./components/BarraPesquisa";



function App() {
  const [shinobiDex, setShinobiDex] = useState([])

  useEffect(() => {
    setShinobiDex(getShinobiDex());
  }, [])

  return (
    <>
      <BarraPesquisa setShinobiDex={setShinobiDex} />
      <Lista shinobiDex={shinobiDex}/>
    </>
  )
}

export default App;
