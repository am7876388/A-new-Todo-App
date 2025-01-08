import Plus from "./assets/Plus.svg"
import Search from "./assets/search.svg"
import Items from "./Items"
import { Context } from "./Context"
import { useContext } from "react"
import TotalItems from "./Functions";
function App() {
  const {AdditonMode,Complete,Active,All,Searching,SearchMode,setAddorSearch} = useContext(Context);
  return (
<>
<div id="Container">
  <h1>THINGS TO DO</h1>
  <input type="text" id="InputValue" placeholder="Add New" onChange = {Searching} onKeyDown = {AdditonMode}/>
  <div id = "Item-container">
    <Items/>
    </div>
  <div id="Bottom">
    <div id="Left">
    <div id="Button-container"><a id="Adding" onClick={() => setAddorSearch(0)}><img src={Plus}/></a><a id = "Searching"onClick = {() => setAddorSearch(1)}><img src={Search} alt="" /></a></div>
    <TotalItems/>
    </div>
    <div id="Other-Buttons">
      <a onClick={All} className = "OButtons">All</a><a onClick={Active} className = "OButtons">Active</a><a onClick={Complete} className = "OButtons">Completed</a>
    </div>
  </div>
</div>
</>
  )
}
export default App
