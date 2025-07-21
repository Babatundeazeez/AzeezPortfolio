import React, { useEffect, useState } from 'react'
import CardComponent from './Component/CardComponent';

const Home = () => {
  
    const message = [
      "Hi, Welcome to my page ",
      
    ]
    const [displayTex, setDisplayText] = useState("");
    const [myTextIndex, setMytextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0)

    useEffect(()=>{
      const currentText = message[myTextIndex]

      if (charIndex < currentText.length) {

        const timeOut = setTimeout(()=>{
          setDisplayText((prev) =>(prev + currentText[charIndex]))
          setCharIndex((prev)=>(prev + 1))
        },200)
        return ()=> clearTimeout(timeOut)
      }
      else{
        const pausedText = setTimeout(()=>{
          setDisplayText("");
          setCharIndex(0);
          setMytextIndex((prev)=>(prev + 1) % message.length)
        }, 1000)
        return ()=> clearTimeout(pausedText)
      }
     

    }, [charIndex, myTextIndex])
  



  return (
    <div className='container py-5 mt-5 tops'>
        <div className='row align-item-center'>
        
          <div className='col-12 col-md-6 text-center text-md-start mb-4 mb-md-0'>
          <div>
          <h1 className='text-center'>Welcome to my Portfolio.</h1>
          <h4>{displayTex} <span className='cursor'>|</span></h4>
          </div>
          <div className='mt-5'>
            <p className='lead'> I'm <strong>Azeez Aderemi Babatunde</strong>, a passionate Full-stack Web Developer who builds modern, scalable web application using MERN stack. I love turning ideas into real world digital solution</p>
          </div>
          <h2 className='mt-4'>I Build things for the web.</h2>

          <div className='mt-4'>
            <button className='btn btn-secondary btn-lg px-4 hover-effect'> Hire Me</button>
          </div>
         
             
          </div>
          <div className='col-6'>
            {/* image */}
            {/* <img src="" alt="" /> */}

          </div>

          

        </div>
        <div className='row'>
          {/* about me section.............................. */}
         <div className='row'>
          <div className='col-12 col-md-6 text-center'>
          <div className=' justify-content-center mt-5'>
            <h3>About Me</h3>
            {/* <img src="" alt="" /> */}

            <p>I build web Application using MERN stack (MongoDB,Express.js,React,Node)</p>
            <p>With a strong foundation in both frontend and backend technologies, I love crafting seamless user experiences,</p>
            <p> I thrive on turning ideas into real-world digital solutions.</p>
            <p>I love continuously learning and adapting to new inventing tools and trends in the tech world.</p>
            <p>I’m not just a coder, i' m a programmer — I’m a problem-solver who values clean code, collaboration, and delivering meaningful impact through tech.</p>

           
          </div>
          </div>

         </div>
         {/* My skill section............ "✔, , •, 🚀"............... */}
         <div className='row'>
         <div className='col-12 col-ms-6'>
          <div className='row'>
              <h3>My Skills</h3>
              <p>What i know how to do</p>
             <div className='col-md-6 mb-4'>
             <CardComponent 
              image="/web3.png" 
              title="Web Development"
              description="Language used for website development"
              myList={[
                "HTML5, CSS3, JavaScript (ES6+) - Building responsive, accessible, and user-friendly interfaces.",
                "React.js - Component-based UI development, hooks, state management with Redux, Context API.",
                "Node.js & Express.js - Building RESTful APIs, middleware, authentication, cloudinary.",
                "MongoDB / Mongoose - NoSQL database design, CRUD operations, data modeling.",
                "Full-Stack (MERN) - Developing complete applications from frontend to backend."
              ]}
              cardClass='bg-info'
              cardText='text-white mt-2'
              />
             </div>

             <div className='col-md-6 mb-4'>
               <CardComponent 
              image="/image/webApi.png" 
              title="Web Functionality"
              description="Functionality of the web page"
              cardClass='bg-secondary'
              cardText='text-white mt-2'
              myList={[
                "Authentication & Authorization : Secure login systems, protected routes.",
                "Admin Dashboards : Role-based access control, content management.",
                "CRUD Operations : Create, Read, Update, Delete features across apps.",
                "API Integration : REST APIs, Axios, third-party APIs (e.g., maps, payment gateways).",
                "Dynamic Routing : React Router, conditional rendering.",
                "File Uploads & Media Handling : Multer, Cloudinary integration."
              ]}
              />
               </div>
              <div className='col-md-6 mb-4'>
              <CardComponent 
              image="/web2.png" 
              title="Frame work and libraries"
              description="The frame work in building website"
              cardClass='bg-success'
              cardText='text-white mt-2'
              myList={[
                "Frontend : React.js, Bootstrap, ",
                "Backend : Express.js, Node.js",
                "State Management : Redux Toolkit, React Context",
                "Authentication: JWT, OAuth, Google/Firebase Auth",
                "Form Handling: React Hook Form, Yup"
              ]}
              />
              </div>
              
               <div className='col-md-6 mb-4'>
              <CardComponent 
              image="/image/web4.png" 
              title="Testing and Dev Tool"
              description="Tools for the website development"
              cardClass='bg-success'
              cardText='text-white mt-2'
              myList={[
                "Chrome DevTools, Postman, Console Logging, ",
                "Version Control: Git & GitHub",
                "Deployment: Vercel (Frontend), Render (Backend)",
                "Code Editors: VSCode, Git Bash",
               
              ]}
              />
              </div>

          </div>
             

            </div>


         </div>

        </div>

    </div>
  )
}

export default Home