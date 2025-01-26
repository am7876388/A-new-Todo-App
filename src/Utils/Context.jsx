import {createContext, useState } from "react";//Importing Hooks
export const Context = createContext();
import Done from "../assets/Done.svg";//Importing Image
import Edit from "../assets/Edit.svg";//Importing Image
function DataProvider({children}){//A data provider function to provide data to all of the other components
    const [Data,setData] = useState([])//Using States to store the data
    const [Display,setDisplay] = useState([]);
    const [Type,setType] = useState(0);
    const [AddorSearch,setAddorSearch] = useState(0);
    const [SearchValue,setSearchValue] = useState("");
    function Addition(){
    if(AddorSearch === 0){
     const Input = document.getElementById("InputValue").value;
     const FinalInput = Input.trim();
     if(FinalInput){
     setData(() => [...Data,Input]);
     setDisplay(() =>[...Display,1]);
    }
}
 }
 function Checkboxes(ind,data){//Checking if data is completed or not
 if(Display[ind] === 2){
    return(<><input type="checkbox"  className="Completed" defaultChecked = {true} onChange={Completed}/>
             <div className="Items-Data" style={{textDecoration:"line-through"}}>{data}</div></>);
 }
 else{
    return(<><input type="checkbox"  className="Completed" defaultChecked = {false}onChange={Completed}/>
            <div className="Items-Data" style={{textDecoration:"None"}}>{data}</div></>);
 }
 }
 function AdditonMode(e){//Adding Data to the List
    if(e.key === "Enter"){
    setAddorSearch(0);
    Addition();
}
 }
 function Searching(e){//Searching Data
  if(AddorSearch === 1){
    setSearchValue(e.target.value);
  }  
 }
 function Completed(e){//Showing completed data
    const num1 = e.target.parentElement.children;
    const num2 = e.target.closest(".Items");
    const num3 = num2.id;
    let num4 = [...Display];
    for(let i = 0; i < num1.length; i++){
        if(num1[i].className === "Items-Data" && e.target.checked) {num1[i].style.textDecoration = "line-through";
            e.target.checked = true;
        num4[num3] = 2;
        }
        else{
            num1[i].style.textDecoration = "none";
        num4[num3] = 1;
        }
    }
    setDisplay(num4);
    }
function All(){
    setType(0);
}
function Active(){
    setType(1);
}
function Complete(){
    setType(2);
}
 function Deletion(e){
    const num1 = e.target.closest(".Items");
    const num3 = parseInt(num1.id,10);
    const num2 = [...Data];
    num2[num3] = null;
    setData(num2);
 }
 function Editing(e) {
 const Parent = e.target.closest(".Items");
 const num1 = parseInt(Parent.id,10);
 const num2 = Parent.querySelectorAll(".Editing-img");
 if(num2[0].alt === "Edit"){
 const num3 = Parent.querySelectorAll(".Items-Data");
 num2.forEach(element => {
 element.src = Done;
 element.setAttribute("alt","Done");
 });
 num3.forEach(element =>{
 const num4 = document.createElement("input");
 num4.className = "Updated-Input";
 num4.value = Data[num1];
 element.replaceChildren(num4);
 })
 }
 else{
    const num2 = Parent.querySelectorAll(".Editing-img");
    const num3 = Parent.querySelectorAll(".Items-Data");
    const num4 = Parent.querySelectorAll(".Updated-Input");
    num2.forEach(element => {
    element.src = Edit;
    element.setAttribute("alt","Edit");
    });
    let num5 = [...Data];
for(let i = 0; i < num3.length; i++){
    if(num4[i].value !== ""){
    num5[num1] = num4[i].value;
}
num3[i].innerHTML = `${num5[num1]}`;
}
  setData(num5);
 }
}
 return(<Context.Provider value={{Data,setData,AdditonMode,Deletion,Editing,Display,setDisplay,Checkboxes,
    Type,setType,All,Active,Complete,Completed,AddorSearch,setAddorSearch,Searching,SearchValue,setSearchValue}}>{children}</Context.Provider>)
}
export default DataProvider