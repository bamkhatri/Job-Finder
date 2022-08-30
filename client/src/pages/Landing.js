import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../Components'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby tacos stumptown mlkshk tumeric. Hashtag meh distillery banh
            mi kogi, selvage occupy semiotics marfa flannel post-ironic
            single-origin coffee master cleanse. Yes plz chambray fit
            microdosing disrupt gochujang tbh marfa slow-carb lomo stumptown
            messenger bag chia.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='Job Hunting' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
