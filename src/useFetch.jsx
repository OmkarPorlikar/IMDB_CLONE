// 'https://api.github.com/users'
import { useState,useEffect } from "react";
export default function  useFetch (url){
    // console.log(url)
const [data , setData] = useState([]);
const [err , setError] = useState(null)
const [loading , setloading] = useState(false)


    useEffect(() =>{
        async function fetchData (){
            try {
                setloading(true)
                 const response = await fetch(url);
                                                         //  https://api.themoviedb.org/3/genre/movie/list
                const user = await response.json();
                setData(user)
                // console.log(user.results)
                
            }
        catch (err){
setError(err)
        }
        finally{
            setloading(false)
        }
       
    }
    fetchData();
 }, [url]) 
   
 
return {data , err , loading}  
}