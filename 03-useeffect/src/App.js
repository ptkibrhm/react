
import {useState, useEffect} from "react";


function App() {

  const [firsName,setFirstName]=useState(" ");
  const[lastName,setLastName]=useState(" ")

useEffect(()=>{
  console.log("her zaman çalışır")
})

useEffect(()=>{
  console.log("component ilk render edildiğinde çalışır")
},[])

useEffect(()=>{
  console.log("ilk render edildiğinde ve firstname state değeri değiştiğinde çalışır")
},[firsName])

useEffect(()=>{
  console.log("ilk render edildiğinde ve lastname state değeri değiştiğinde çalışır")
},[lastName])

  return (
    <div >
      <div>
      <button onClick={()=>setFirstName("İbrahim")}>Adı değiştir</button>
      <button onClick={()=>setLastName("Petek")}>Soyadı değiştir</button>
      </div>
    </div>
  );
}

export default App;
