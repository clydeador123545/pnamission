import './styles/about.css'
import AboutImg from '../images/about.jpg'
import bodybackgroundImg from '../images/bbg.jpg'
import missionLogo from '../images/mission-logo2.png'
import visionLogo from '../images/vision-logo.png'
import valuesLogo from '../images/values-logo.png'
import youth from '../images/youth.png'


const About = (() => {

    return(
        <div className='body'
            style={{
                margin: 0, 
                padding: 0, 
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.428), rgba(255, 255, 255, 0.668)),url(${bodybackgroundImg})`,
                zIndex: -100,
                backgroundPosition: 'center',
                backgroundSize:'1500px',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                height: 'auto',
                
            }}
        >   
            <img className="pna-logo" src="../images/pna-logo.png"></img>
            <div className="image-background"
                // style="
                //     background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.39)), url('../images/about.jpg');
                //     z-index: 100;
                // "

                style={{
                    backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.39)), url(https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/461875142_122140464188318427_735612671899897193_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHu0w9JjINBeUUbwS7c0cr8I-Lmm2TJJEsj4uabZMkkS2o65JKSjQYHU1-Ay5dV-3Eb94nivZppgr1ZTxgYo-AC&_nc_ohc=Syc1x_kkqJ4Q7kNvgGSk3f9&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=AsckaD_cgNTP3O_m-hn9FLi&oh=00_AYCZYKamSn8Wkhzfcuz1fFTYztALLYwmXH59Mqu4PJnWaQ&oe=671C078E)`,
                    backgroundPosition: 'center center,center center -200px',
                
                    zIndex:'1'
                }}
            >
            
            </div>

            <div className="m-v-container">
                <div className="mission-container">
                    <p className="title">MISSION</p>
                    <div className="content-container">
                        <p className="text">
                            PNA Misyonero is a group of youth leaders and volunteers of Puso ng Ama Foundation, Inc. serving the Lord Jesus and touched by Him through their experiences in ministry.
                        </p>
                        <img src={missionLogo}></img>
                    </div>
                </div>
            
                <div className="vision-container">
                    <p className="title">VISION</p>
                    <div className="content-container">
                        
                        <p className="text">
                            We desire to empower other people especially to the poor to exercise their Catholic faith and become their lifestyle; to pursue a life for the The Lord as acknowledgement of His love; and to reach out to the other places to spread The Good news.
                        </p>
                        <img src={visionLogo}></img>
                    </div>
                </div>

                <div className="values-container">
                    <p className="title">VALUES</p>
                    <div className="content-container">
                        
                        <p className="text">
                        Our values are rooted in faith, compassion, and service, as we strive to embody Christ’s love by uplifting the marginalized, empowering communities, and fostering a spirit of unity and selflessness in all we do.
                        </p>
                        <img src={valuesLogo}></img>
                    </div>
                </div>


            </div>


            <div className="who-are-we-container">
                <div className="container">
                    <p className="title">WHO WE ARE</p>
                
                    <p>
                        Our goals...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <img src={youth}></img>
                    <a href="https://www.facebook.com/pnayouth" target="_blank">https://www.facebook.com/pnayouth</a>
                </div>
                
            </div>

            
            
        </div>


    );
    
});

export default About;