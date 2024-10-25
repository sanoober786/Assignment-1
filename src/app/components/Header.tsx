import Link from "next/link"

Link
export const Navbar=() =>{
    return (
        <div className="navbar">
            <div className="logo">My Website</div>
            <ul className="list">
             <Link href={"/"}> <li>Home</li></Link>
                <Link href={"/about-us"}><li>About Me</li></Link>
                <Link href={"/contact"}><li>Contact</li></Link>
                <Link href={"/services"}><li>Services</li></Link>
            </ul>
            </div>
      
    );
}
export default Navbar;