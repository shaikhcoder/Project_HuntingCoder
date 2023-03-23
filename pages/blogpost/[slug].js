// import { useRouter } from "next/router"; it use for get routes like slugs 
import { useState } from "react";
import axios from "axios";
export default function (props){
const [blogData, setData] = useState(props.alldata)






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

export async function getServerSideProps(context) {
const {slug} = context.query
return axios.get(`http://localhost:3000/api/getblog?slug=${slug}`).then((value)=>{
return {
        props: {alldata:{...value.data}}}

})
    
}