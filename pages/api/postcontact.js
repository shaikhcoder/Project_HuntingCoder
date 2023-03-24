import * as fs from 'fs'
export default function Postcontact(req,res){
let contactNumber = 0;

if(req.method === 'POST'){
console.log(req.body)
fs.writeFile(`contactus/${contactNumber}.json`,JSON.stringify(req.body),(err)=>{
})
contactNumber++;
return res.status(200).json(req.body)
}
else{

return res.status(200).json({me:'hello'})
}


}