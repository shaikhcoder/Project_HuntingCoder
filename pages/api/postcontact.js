 
import * as fs from 'fs'
export default async function Postcontact(req,res){

if(req.method === 'POST'){
let data = await fs.promises.readdir("contactus")
fs.promises.writeFile(`contactus/${data.length}.json`,JSON.stringify(req.body))
console.log(req.body)

return res.status(200).json(req.body)
}
else{

return res.status(200).json({me:'hello'})
}


}