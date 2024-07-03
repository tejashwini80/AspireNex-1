import './skills.css'
import webImg from './webImg.jpeg'
import mlimg from './mlimg.jpg'
import DSA from './DSA.jpeg'
import Git from '../Contact/Git.png'
import Frame from './Frame.jpg'
import PL from './PL.jpg'
const Skill=()=>{
  return(
    <section id='skills'>
         <span className=' skillTitle'>My Skills</span>
         <span className='skillDesc'>I am an skilled learner</span>
         <div className="skillBars">

           <div className="bar">
            <img src={webImg} alt="web" className=" Img barImg" />
            <div className="skilltext">
              <h2>Web Development</h2>
              <p>Skilled in HTML,CSS,JavaScript</p>
              <p>Knowledgable in front-end and back-end libraries/frameworks such as ReactJS,AngularJs,SQL</p>
            </div>
           </div>

           <div className="bar">
            <img src={mlimg} alt="ml" className=" Img barImg" />
            <div className="skilltext">
              <h2>Machine Learning</h2>
              <p>Basic Knowledge in Artificial Inteligence and Algorithms of Machine Learning.</p>
            </div>
           </div>

           <div className="bar">
            <img src={DSA} alt="DSA" className=" Img barImg" />
            <div className="skilltext">
              <h2>Data Structures And Algorithms</h2>
              <p>Proficient In Solving Problems of Data Structures and Algorithms In Java.</p>
            </div>
           </div>

           <div className='bar'>
              <img src={PL} alt='pgLang' className='Img barImg'/>
              <div className="skilltext">
              <h2>Programming Languages</h2>
              <p>Proficient in Java and Object Oriented Programming.</p>
              <p>Basic hands-on with C++,C,Python</p>
              </div>
           </div>

           <div className='bar'>
              <img src={Frame} alt='pgLang' className='Img barImg'/>
              <div className="skilltext">
              <h2>Frameworks and Libraries</h2>
              <p>Basic grasp of Node js,ExpressJs and Angular Js</p>
              <p>Hands-on experience with Tailwind CSS</p>
              </div>
              </div>

              <div className='bar'>
              <img src={Git} alt='pgLang' className='Img barImg'/>
              <div className="skilltext">
              <h2>Tools And technologies</h2>
              <p>Basic Knowledge in Git,GitHub,Figma</p>
              </div>
           </div>

         </div>
    </section>
  )
}
export default Skill 