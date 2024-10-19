/* eslint-disable react/no-unescaped-entities */
import Link from "react"
Link
import Navbar from "../components/Header"
const AboutMe = () => {
    return (
       <div className="abc">
            <Navbar />
                  <h1>Welcome to My About Page</h1>
                   <h2>About Sanoober</h2>
            <p>
               Hello! I'm Sanoober, an IT student with a passion for technology and innovation.
                  <br />
               Currently pursuing my degree in Information Technology, I'm eager to explore the vast opportunities in the field.
                   <br /> 
               With a strong foundation in programming languages like Python, Java, and C++, I'm developing skills in Web development(HTML , CSS , JAVASCRIPT)
            </p>
                    <h2>About My Interests</h2>
            <p>
            Outside academics, I enjoy:
                 <br /> 
                 Learning about the latest tech trends ,
                  <br />
                  Exploring open-source projects ,
                 <br />
             Participating in coding challenges and 
                 <br />
                 Reading tech blogs and books.
            </p>
                     <h2>Goals</h2>
            <p>My goal is to become a skilled IT professional, capable of creating impactful solutions.
                 <br />
                 Develop a strong foundation in web development and programming languages. 
                 <br />
             Build a personal project portfolio showcasing my skills</p>
             <div className="footer">&copy; 2024 My Next.js Website</div>
            </div>  
      
    );
}
export default AboutMe;