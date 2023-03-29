import { useState } from "react"
import style from ".././styles/Contact.module.css"
export default function Contact (){
const [email,setEmail] = useState('')
const [named,setNamed] = useState('')
const [Phone,setPhone] = useState('')
const [commit,setcommit] = useState('')


const handleSubmit =(e)=>{

console.log(email,named,Phone,commit)

const data = {named,email,Phone,commit}

fetch('http://localhost:3000/api/postcontact/',{method:"POST",
headers:{'Content-Type':'application/json',},
body:JSON.stringify(data)
}).then(res => res.json())
.then(data=>{
alert("Thank You for contacting US")
setEmail("")
setNamed("")
setPhone("")
setcommit("")
console.log('Success',data)}).catch((err)=>console.log("ERROR",err))



e.preventDefault()

}



return <div className={style.container}>
<h1>COntact Us</h1>
<form onSubmit={handleSubmit}>
<div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Email Your Name</label>
    <input type="text" value={named} onChange={(e)=>setNamed(e.target.value)} className="form-control" name="name" id="exampleInputName" aria-describedby="Name" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
    <input type="number" value={Phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
<label htmlFor="desc" >Elaborate your concern </label>
    <textarea className="form-control" value={commit} onChange={(e)=>setcommit(e.target.value)} placeholder="Leave a comment here" id="desc"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
}