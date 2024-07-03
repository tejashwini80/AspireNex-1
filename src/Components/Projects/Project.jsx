import './Project.css'
const Project=()=>{
  return(
    <section id="Projects">
      <h2 className='Title'>My Projects</h2>
      <span className='ProjectDesc'>I take pride in paying attention to smallest details</span>
      <div className='boxes'>
        <div className="box">
          <h2>College website</h2>
          <p className='boxDesc'>Developed a user friendly, responsive and Dynamic UI of the College Project</p>
          <span className='Git'></span>
        </div>
        <div className="box">
          <h2>Netflix Clone</h2>
          <p className='boxDesc'>Developed the UI of the  website with user friendly navigations  </p>
          <span className='Git'></span>
        </div>
        <div className="box">
          <h2>Job Portal</h2>
          <p className='boxDesc'>Collaborated with a team of devlopers to design and implement the front-end and back-end functionalities of website aimed at connecting job seekers with companies</p>
          <span className='Git'></span>
        </div>
        <div className="box">
          <h2>Wireless Control</h2>
          <p className='boxDesc'>Developed a wireless system aimed at providing users with convenient control over their audio devices without the need for physical connections or direct access to the devices using Python</p>
          <span className='Git'></span>
        </div> 
      </div>
    </section>
  )
}
export default Project