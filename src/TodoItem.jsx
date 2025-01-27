import Edit from "./assets/Edit.svg";//Importing Image
import Delete from "./assets/Delete.svg";//Importing Image
import { useContext, useEffect, useState } from "react";//Importing States
import { Context } from "./Utils/Context";//Importing Context to get data
function TodoItem(){
    const { Data , Deletion, Editing,Type,Display,AddorSearch,SearchValue,Checkboxes} = useContext(Context);//Getting Data
if(AddorSearch === 0){//These conditions will run when you are adding the items in TodoApp
useEffect(() =>{//Using use effect to do something after components are mounted  
const num1 = document.getElementById("Adding");
const num2 = document.getElementById("Searching");
const num3 = document.getElementById("InputValue");
num1.style.opacity = "1";
num2.style.opacity = "0.5";
num3.placeholder = "Add New";
})
if (Data.length !== 0 && Type === 0) {//Here Type represent that currently user is in All category
return (
<>
{Data.map((datas, index) => {//Mapping the values of the Todo List Items
if (datas !== null){//If the Data is null then the Data is not shown
return (<div className="Items" id={index} key={index}><div className="Items-Left">{Checkboxes(index,datas)}</div><div className="Items-Right"><button onClick={Deletion}><img src={Delete} alt="Delete" /></button><button onClick={Editing}><img src={Edit} className = "Editing-img"alt="Edit" /></button></div></div>);}
return null;})}</>);}
else if(Data.length !== 0 && Type !== 0){//Checking the category if it is not 0
  return (
    <>
    {Data.map((datas, index) => {
    if (datas !== null && Display[index] === Type){
    return (<div className="Items" id={index} key={index}><div className="Items-Left">{Checkboxes(index,datas)}</div><div className="Items-Right"><button onClick={Deletion}><img src={Delete} alt="Delete" /></button><button onClick={Editing}><img src={Edit} className = "Editing-img"alt="Edit" /></button></div></div>);}
    return null;})}</>);
}
}
else{//These conditions will run when the user have switched to searching
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
export default TodoItem;