
import * as fs from 'fs'

export default function handler(req, res) {
fs.readFile(`data/${req.query.slug}.json`,'utf-8',(err,data)=>{

if(err){
      
return res.status(404).json({"Data":"Data Not Found"})
}



return res.status(200).json(JSON.parse(data))

})
  
}
