import React,{useState,useEffect} from 'react'
import Axios from 'axios'
const Searchbar = () => {
    
  const[data,setData]=useState([])
  const[input,setInput]=useState('')
  const[output,setOutput]=useState('')
  
  useEffect(()=>{
     async function getData(){
      const res=await Axios.get("https://disease.sh/v3/covid-19/countries/")
      setData(res.data)
      console.log(res.data);
     }
     getData()
  },[])
  useEffect(()=>{
    setOutput([])
    data.filter(val=>{
      if(val.country.toLowerCase().includes(input.toLowerCase())){
        setOutput(output=>[...output,val])
      }
    })
    
  },[input])
    return (
    
    <>  
      
      <div className="search-bar">
        <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Search' />
      </div>
  
        <div className="oputput">
          {output.map(item=>{
            return(
              <p>{item.country}</p>
            )
          })}
        </div>
      
  
     </>
  );
}

export default Searchbar

