import Edit from "./assets/Edit.svg";
import Delete from "./assets/Delete.svg";
import { useContext, useEffect } from "react";
import { Context } from "./Context";
function Items() {
const { Data , Deletion, Editing,Type,Display,AddorSearch,SearchValue,Checkboxes} = useContext(Context);
if(AddorSearch === 0){
useEffect(() =>{  
const num1 = document.getElementById("Adding");
const num2 = document.getElementById("Searching");
const num3 = document.getElementById("InputValue");
num1.style.opacity = "1";
num2.style.opacity = "0.5";
num3.placeholder = "Add New";
})
if (Data.length !== 0 && Type === 0) {
return (
<>
{Data.map((datas, index) => {
if (datas !== null){
return (<div className="Items" id={index} key={index}><div className="Items-Left">{Checkboxes(index,datas)}</div><div className="Items-Right"><button onClick={Deletion}><img src={Delete} alt="Delete" /></button><button onClick={Editing}><img src={Edit} className = "Editing-img"alt="Edit" /></button></div></div>);}
return null;})}</>);}
else if(Data.length !== 0 && Type !== 0){
  return (
    <>
    {Data.map((datas, index) => {
    if (datas !== null && Display[index] === Type){
    return (<div className="Items" id={index} key={index}><div className="Items-Left">{Checkboxes(index,datas)}</div><div className="Items-Right"><button onClick={Deletion}><img src={Delete} alt="Delete" /></button><button onClick={Editing}><img src={Edit} className = "Editing-img"alt="Edit" /></button></div></div>);}
    return null;})}</>);
}
}
else{
  useEffect(() =>{  
    const num1 = document.getElementById("Adding");
    const num2 = document.getElementById("Searching");
    const num3 = document.getElementById("InputValue");
    num1.style.opacity = "0.5";
    num2.style.opacity = "1";
    num3.placeholder = "Search";
    })
if (Data.length !== 0 && Type === 0) {
return (
<>
{Data.map((datas, index) => {
if (datas !== null && datas.includes(SearchValue)){
return (<div className="Items" id={index} key={index}><div className="Items-Left">{Checkboxes(index,datas)}</div><div className="Items-Right"><button onClick={Deletion}><img src={Delete} alt="Delete" /></button><button onClick={Editing}><img src={Edit} className = "Editing-img"alt="Edit" /></button></div></div>);}
return null;})}</>);}
else if(Data.length !== 0 && Type !== 0){
return (<>
{Data.map((datas, index) => {
if (datas !== null && Display[index] === Type && datas.includes(SearchValue)){
return (<div className="Items" id={index} key={index}><div className="Items-Left">{Checkboxes(index,datas)}</div><div className="Items-Right"><button onClick={Deletion}><img src={Delete} alt="Delete" /></button><button onClick={Editing}><img src={Edit} className = "Editing-img"alt="Edit" /></button></div></div>);}
return null;})}</>);
}
}
}

export default Items;
