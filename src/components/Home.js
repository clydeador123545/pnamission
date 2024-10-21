
import BackgroundImg from '../images/background-home.jpg';
import '../styles/under-pna-title.css';
import '../styles/pna-title.css';
import '../styles/imageBackground.css';
import '../styles/general-font.css'
import '../styles/sections-contianer.css';
import DonateHeart from '../images/heart.png';
import SecondSection from '../components/SecondSection';

import ThirdSec from './ThirdSection';
import FourthSection from './FourthSection';
import VideoLink from './VideoLink';
import DonationRecord from './DonationRec';
import PnaLogo from '../images/pna-logo.png';

function Home(){

    return (

        <div className='home-container'>
            <img src={PnaLogo} className="pna-logo"></img>
            <div className='image-background'
            style={{
                backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.39)),url(${BackgroundImg})`
            }}
            >
                <div className='pna-context'>
                <h1 className="title">PNA MISSION 2024</h1>
        
                <p className="sub-title">
                    Empowering Faith and Service: Bringing Christ’s Love to the Mangyan Community.
                </p>
        
                <button className="donate-button">
                    <img src={DonateHeart} className="heart-donate"></img>
                    &nbsp;
                    DONATE
                </button>
        
                <div className="lower-section">
                    <p className="bar-line"></p>
                    <p>
                        Your generous donations will help us bring essential support and resources to the Mangyan community in Mindoro. Through your kindness, we can provide food, educational materials, spiritual guidance, and much-needed services to uplift the lives of these indigenous people. Every contribution, big or small, makes a difference in spreading God’s love and empowering the Mangyans to build a better future. Thank you for your support in this mission of faith and compassion.
                    </p>
                </div>
                </div>

            </div>


            <div className="sections-container">
                <SecondSection/>
                <ThirdSec/>
                <FourthSection/>
                <VideoLink/>
            </div>
            
            <DonationRecord/>
            
        </div>
    

        
        
      );
};

export default Home;