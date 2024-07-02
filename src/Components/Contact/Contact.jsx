import './Contact.css'
import Git from './Git.png'
import linkedIn from './linkedIn.png'
const Contact=()=> {
  return (
    <section id="contact">
      <h2 className='Title'>Personal Info</h2>
      <div className="Contactboxes">
        <div className="Cbox">
          <span>Name :</span>
          <span className='info'> Tejashwini</span>
        </div>
       
        <div className="Cbox">
          <span>Gender :</span>
          <span className='info'>Female</span>
        </div>

        <div className="Cbox">
          <span>Blood Group :</span>
          <span className='info'>O+ </span>
        </div>

        <div className="Cbox">
          <span>Email :</span>
          <span className='info'>kpatiltejashwini@gamil.com</span>
        </div>

        <div className="Cbox">
          <span>Phone :  </span>
          <span className='info'>6362721716</span>
        </div>

        <div className="Cbox">
          <span>Degree :  </span>
          <span className='info'>B.E</span>
        </div>

        <div className="Cbox">
          <span>Branch :  </span>
          <span className='info'>Computer Science And Engineering</span>
        </div>

        <div className="Cbox">
          <span>College :</span>
          <span className='info'>MVJ college of Engineering Banglore</span>
        </div>

        <div className="Cbox">
          <span>Address :</span>
          <span className='info'>Banglore 560067</span>
        </div>

      </div>
     <div className='Footer'>
     <div className='Public'>
        <img src={Git} alt='githubImg' className='EndImg'/>
        <span><a href='https://github.com/tejashwini80'>https://github.com/tejashwini80 </a> </span>
      </div>
      <div className='Public'>
        <img src={linkedIn} alt='githubImg' className='EndImg'/>
        <span><a href="linkedin.com/in/tejashwinikpatil">linkedin.com/in/tejashwinikpatil</a></span>
      </div>
     </div>

    </section>
    
  )
    
  }
  export default Contact