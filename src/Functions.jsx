import { useEffect, useState } from "react";

export function Completed(a){
const num1 = e.target.parentElement.children;
for(let i = 0; i < num1.length; i++){
    if(num1[i].className === "Items-Data") {num1[i].style.textDecoration = "line-through"}
}
}
function TotalItems(){
    const [Total,setTotal] = useState(0);
    useEffect(() =>{
        const num1 = document.getElementById("Item-container").children.length;
        setTotal(num1);
    })
return(<div id="Total-Items">{Total} Items left</div>);
}
export default TotalItems;