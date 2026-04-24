import axios from "axios";
import { useEffect } from "react";


const BASE_URL="http://localhost:4000";

function App() {



  /*
  TÜM KULLANICILARI GETİR
  
  const getAllUsers=async()=>{
    const response = await axios.get(BASE_URL+"/users");
    console.log(response.data)
  }
  

  useEffect(()=>{
    getAllUsers();
  },[])
  
  ID YE GÖRE KULLANICI GETİR
  
  const getUserById=async(userId)=>{
    const response = await axios.get(BASE_URL + "/users/" + userId)
    console.log(response.data)
  }

  useEffect(()=>{
    getUserById(1);
  }, [])

  
 KULLANICI EKLEME

  const createUser =async(newUser)=>{
    const response= await axios.post(BASE_URL +"/users" , newUser);
    console.log(response.data)
  }

  useEffect(()=>{
    const newUser={
      "username":"Ali",
      "password":"wwww"
    }
    createUser(newUser)

  },[])
  
KULLANICI GÜNCELLEME

  const updateUser=async(userId,updatedUser)=>{
    const response=await axios.put(BASE_URL+"/users/"+userId,updatedUser)
    console.log("Güncellenmiş veri:",response.data)
  }

  useEffect(()=>{
    updateUser("1",{
      username:"yakup",
      password:"9876"
    });

  },[])

  */

  const deleteUserById=async(userId)=>{
    const response= await axios.delete(BASE_URL+"/users/"+userId)
    console.log(response.data)
  }

  useEffect(()=>{
    deleteUserById("2")

  },[])

  return (
    <div>
      Hello
    </div>
  );
}

export default App;
