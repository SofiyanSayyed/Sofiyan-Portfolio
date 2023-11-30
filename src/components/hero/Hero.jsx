import "./hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='bio'>
        <h3>SOFIYAN SAYYED</h3>
        <h1>Full Stack Developer</h1>
        <div className="btns">
          <button>See the Latest Works</button>
          <button>See Resume</button>
        </div>
      </div>
      
      <div className="myImage">
        {/* <img src="/img.png" alt="sofiyan img" /> */}
        <p>its me</p>
      </div>
    </div>
  )
}

export default Hero