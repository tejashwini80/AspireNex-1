import './intro.css';
import {Link} from 'react-scroll'
import bgImage from './bgImage.jpg'
import hireImg from './hireImg.png'
const Intro=()=>{
  return(
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello..</span> 
        <span className='introText'>I am 
          <span className="intoName"> Tejashwini</span>
        <br/> </span>
        <p className='introPara'>I am a skilled and passionate learner <br/>with technical as well as Core soft skills </p>
       <Link><button className="btn"><img src={hireImg} className='hireImg' alt='hirImg'/>Hire Me</button></Link>
      </div>
      <img src={bgImage} alt="ProfilePic" className='bgImg'  />
    </section>
  )
}
export default Intro;