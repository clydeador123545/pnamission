import '../styles/fourth-section.css'


function FourthSection(){
    return(
        <div className="fourth-section">
            <p className="fourth-section-title">IMPACT</p>

            <div className='fourth-v-txt-container'>
                <div className='content-container'>
                    <p className='title'>
                        <a target='_blank' 
                            href='https://www.facebook.com/profile.php?id=61559552822147'
                            >𝐢𝐌𝐈𝐒𝐘𝐎𝐍𝐄𝐑𝐎
                        </a>
                    </p>
                    
                    <p className='sub-title'>𝗘𝗽𝗶𝘀𝗼𝗱𝗲 𝟮: 𝗚𝗿𝗼𝘄𝘁𝗵</p>

                    <p className='description'>
                    Hear 𝗬𝘃𝗲𝘁𝘁𝗲 𝗟𝗼𝘂𝗶𝘀𝗲 𝗖𝗮𝗵𝗮𝗻𝗮𝗽's story of growth and discovery as she shares her mission trip experience, she highlights the moments that shaped her faith and deepened her understanding of serving others. 
                    </p>
                    
                   
                    <p className='description'>We are now preparing for our Mission Trip this coming Christmas to Mindoro.  Please keep us in your prayers and encourage our young people through your support.
                    Your generosity and prayers can light the way for others.
                    <strong style={{fontSize:'20px'}}>"The harvest is rich but the labourers are few, so ask the Lord of the harvest to send labourers to his harvest."</strong> — Luke 10
                    </p>
                </div>
                <iframe 
                    className='video-from-facebook'
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61559552822147%2Fvideos%2F531577509511705%2F&show_text=false&width=476&t=0" 
                    width="700" 
                    height="700" 
                    style={{border:'none', overflow:'hidden', marginTop:'10px'}}
                    scrolling="no" 
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                    allowFullScreen={true}
                >
                </iframe>
            </div>

            
        </div>
    );
}

export default FourthSection;