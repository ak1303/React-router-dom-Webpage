import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Github  = () =>{

    const data = useLoaderData();//optimised
    // const [data,setData] = useState({});

    // useEffect(()=>{
    //      fetch("https://api.github.com/users/ak1303")
    //      .then((res)=>res.json())
    //      .then((data)=>setData(data))
    //      .catch((e)=>console.log(e));
    // },[])
    
    const url = data.url;
    const followers = data.followers;
    const repos_url = data.repos_url;  
    const dp = data.avatar_url;      
    return (
        <>
            <div className="container flex m-2 p-2">
                <img className="mx-4 my-2 rounded-full block" src={dp} alt="dp" />
                <div className="rounded-full p-2 self-start">
                    <a href={url}><img width={"45px"} src="https://t3.ftcdn.net/jpg/05/50/01/22/240_F_550012297_vt1cUy6CCs7qYHlSa1zm1z0MND9DYwvP.jpg" alt="" /></a>
                </div>
                <div className="self-center mx-5">
                    <p className="text-2xl">Followers: {followers}</p>
                    <p className="text-lg">Repository : <a className=" text-blue-500" href={"https://github.com/ak1303?tab=repositories"}>Check out Projects </a> </p>
                </div>
            </div>
        </>
    )
}
export default Github;

export const githubInfoLoader = async() =>{// add it to route of <Github/> in loader={}
    const response = await fetch("https://api.github.com/users/ak1303");
    return response.json();
}