// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'

export default async function handler(req, res) {

let data = await fs.promises.readdir(`data`)
let fil;
let arr = []

for (let i = 0; i < data.length ; i++){
fil = await fs.promises.readFile(`data/${data[i]}`)
arr.push(JSON.parse(fil))

}


// data.forEach((value)=>{

// // 

// })
return res.status(200).json(arr)

// fs.promises.readdir(`data`,(err,data)=>{

// if(err){
// return res.status(404).json({"Data":"Data Not Found"})
// }
// let arr=[]
// data.forEach((val)=>{
// console.log(val)
// fs.readFile(`data/${val}`,"utf-8",(err ,value)=>{

// arr.push(JSON.parse(value))
// })})
// console.log(arr)
// return res.status(200).json(arr)

// })
  
}
// getblog?slug=flask