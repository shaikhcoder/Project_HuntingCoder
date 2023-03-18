import Link from 'next/link'
export default function Navbar(){


return <nav  > 

<ul className={"_nav"}>
<li className={"item"}><Link href={"/"}  legacyBehavior>
          Home
        </Link></li>
<li className={"item"}><Link href={"/about"}  legacyBehavior>
          About
        </Link></li>
<li className={"item"}>  <Link href={"/blog"}  legacyBehavior>
          Blog
        </Link></li>
<li className={"item"} > <Link href={"/contact"} legacyBehavior>
          Contact
        </Link></li>
</ul>

  
  

 
</nav>
}