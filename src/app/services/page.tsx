import Link from "next/link";
Link
import Navbar from "../components/Header";

const Services = () => {
    return(
        <div className="abc">
            <Navbar/>
            <h1>We Offer Various Services</h1>
           <p>
             Website Design and Development <br />
             Web Application Development  <br />
             Mobile App Development <br />
             Data Analysis and Reporting  <br />
             Cybersecurity Consulting  <br />
             Network Setup and Administration  <br />
             Database Management and Optimization  <br />
             IT Project Management.
            </p> 
            <div className="footer">&copy; 2024 My Next.js Website</div>
        </div>
             
    );
}
export default Services;
