import { useRouter } from "next/router";
import data from "../../data/data.json"
export default function (){


const router = useRouter()
const {slug} =router.query
const datas  =data.filter((value)=>{


return slug.toLowerCase() === value.name.toLowerCase()})

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
._p{
color: #262424;}


`}
        </style>

<div>

<h1>{datas[0].name}</h1>
<p>{datas[0].contant}</p>

</div></>}