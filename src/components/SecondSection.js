import mangyan2 from '../images/mangyan2.jpg';

import '../styles/second-section.css';



function SecondSection(){
    return(

        <div className="sections-container">
            <div className="second-section" >
                <p className="second-section-title">Who are the Mangyans?</p>
        
                <p className="context">
                    The Mangyan are the indigenous people of Mindoro, Philippines, known for their distinct culture, languages, and traditions. They live primarily in the mountainous regions and practice subsistence farming, weaving, and craftsmanship. Some Mangyan groups, like the Hanunoo and Buhid, have preserved their ancient script, used for poetry and communication. Despite modern challenges like land displacement, the Mangyans strive to maintain their cultural identity and ancestral way of life.
                </p>
        
                <div className="second-section-img1"
                    
                    style={{
                        width: '100%',
                        height: '500px',
                        backgroundImage: `linear-gradient(rgba(66, 28, 9, 0.464),rgba(54, 29, 7, 0.607)),url(${mangyan2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        marginTop:'50px',
                    }}


                >
                    
                </div>
            </div>
        
        </div>
    );
}


export default SecondSection;