import Plus from "./assets/Plus.svg"//Importing Image
import Search from "./assets/search.svg"//Importing Image
import Items from "./TodoList"//Importing Component
import { Context } from "./Utils/Context"//Importing Functions
import { useContext } from "react"//Importing Hooks
import TotalItems from "./Functions";//Importing Functions
function Header(){
  const {AdditonMode,Complete,Active,All,Searching,setAddorSearch} = useContext(Context);//Using context to get datas
    return(<>
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
</>)
}
export default Header;