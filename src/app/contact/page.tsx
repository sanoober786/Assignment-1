import Link from "next/link";
Link
import Navbar from "../components/Header";
const Contact = () =>{
    return (
        <div className="abc">
        <Navbar/>
        <h1 className="head2">Get in Touch With Me </h1>
        <p className="para">
             Email: [muhammadkashif462003@gmail.com]
          <br />
          LinkedIn: [Sanoober_Sadhayo]
          <br />
          GitHub:
           <Link href="https://github.com/sanoober786" >[https://github.com/sanoober786]</Link>

          <br />
          Feel free to reach out!
</p>
<div className="footer">&copy; 2024 My  Next.js Website</div>
        </div>
    );
}
export default Contact;