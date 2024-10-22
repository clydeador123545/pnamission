import '../styles/fifth-section.css'

function VideoLink(){
    return(
        <div className="video-container">
            <iframe 
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpusongama%2Fvideos%2F280928720467247%2F&show_text=false&width=560&t=0" 
                width="1000" 
                height="568"
                className="video-facebook" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                allowFullScreen={true}
                >

            </iframe>


            
            <p>
                <a href="https://fb.watch/vlAkDxao_O/" target='_blank'>
                    https://fb.watch/vlAkDxao_O/
                </a>
            </p>
        </div>
    );
}


export default VideoLink;