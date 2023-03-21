// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'

export default function handler(req, res) {
fs.readdir(`data`,(err,data)=>{

if(err){
return res.status(404).json({"Data":"Data Not Found"})
}
return res.status(200).json(data)

})
  
}
// getblog?slug=flask