import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
export default function (){

const [blogData, setData] = useState({})
const [err, seterr] = useState()
const router = useRouter()
const {slug} =router.query


useEffect(()=>{
if (slug !== undefined){
let data =axios.get(`http://localhost:3000/api/getblog?slug=${slug}`).then((value)=>{

setData({...value.data})
})}


},[router.isReady])

return <>

        <style jsx>
            {`
div{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

h1{
font-size:40px;
color: #262424;
}
p{
color: #262424;
     max-width: 75vw;
    text-align: justify;
}

}


`}
        </style>

<div>

<h1>{blogData.name}</h1>
<p>{blogData.contant}</p>

</div></>}