// import { useRouter } from "next/router"; it use for get routes like slugs 
import * as fs from 'fs'
import { useState } from 'react'


export default function Slug (props) {

function createMarkup(s){

return {__html:s}
}
        const [Blog, setBlog] = useState(props.alldata)

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


`}
                </style>

                <div>

                        <h1>{Blog && Blog.name}</h1>
                        {Blog && <p dangerouslySetInnerHTML={createMarkup(Blog.contant)}></p>}

                </div></>
}

export async function getStaticPaths() {
        let arr = []
        let data = await fs.promises.readdir(`data`)
        data.forEach((value) => {

                arr.push({ params: { slug: value.split('.json')[0] } }) 
        })

        return {
                paths: [...arr], fallback: true

        }

}


// return axios.get(`http://localhost:3000/api/getblog?slug=${slug}`).then((value)=>{
// return {
//         props: {alldata:{...value.data}}}

// }) for SSR

export async function getStaticProps(context) {
        const { slug } = context.params;
let alldata = await fs.promises.readFile(`data/${slug}.json`,'utf-8')

        return {
                props: { alldata: JSON.parse(alldata) }
        }




}


