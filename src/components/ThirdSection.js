import  '../styles/third-section.css';
import mangyan3 from '../images/mangyan3.jpg';


function ThirdSection(){
    return(
        <div className="third-section">
                <p className="third-section-title">MISSIONS' STORY</p>
                <div className="mission-first-sec-container">
                    <p className="context">
                        Consequat ridiculus sociosqu ridiculus netus potenti curabitur rhoncus dui. Hac non at cursus hac risus. Mauris luctus lobortis euismod, auctor felis pulvinar curabitur. Ut auctor ornare augue torquent fermentum pulvinar sociosqu inceptos. Ut vitae pellentesque sollicitudin, className tristique mauris nostra. Sociosqu nascetur hendrerit blandit neque augue convallis mauris dolor.
                    </p>

                    <div className="img3-container">
                        <img className="img3" src={mangyan3} alt="mangyan_img"></img>
                    </div>
                    
                </div>

                <p className="text">
                    Velit hac habitant dolor potenti auctor enim facilisis molestie enim. Praesent augue ex quis ultrices in. Habitant vel dis tempus fusce turpis integer sapien consectetur posuere. Phasellus lacus arcu feugiat pulvinar senectus ipsum. Quisque vel pellentesque morbi; fermentum feugiat className montes semper. Feugiat tortor faucibus semper lacinia, ad primis.
                    Velit hac habitant dolor potenti auctor enim facilisis molestie enim. Praesent augue ex quis ultrices in. Habitant vel dis tempus fusce turpis integer sapien consectetur posuere. Phasellus lacus arcu feugiat pulvinar senectus ipsum. Quisque vel pellentesque morbi; fermentum feugiat className montes semper. Feugiat tortor faucibus semper lacinia, ad primis.
                </p>
            </div>

    );
}

export default ThirdSection;