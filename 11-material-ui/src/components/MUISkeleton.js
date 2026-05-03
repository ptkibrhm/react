import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Car from  "../images/car.png"




const MUISkeleton = () => {
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },5000)

    },[])
  return (
    <div >
        {
            loading ? <Skeleton width={250} height={150} animation='wave'/> 
            : <img src={Car} alt='foto' width={250} height={150} />

        }
        


       
    </div>
  )
}

export default MUISkeleton