import React from "react"

export const Footer = () => {
   return( <footer className='footer d-flex flex-row justify-content-center' >
        <div className="socials">
           <a href="https://twitter.com/Sanchit_coder" target="_blank" rel="noreferrer"
            ><img
                    src="https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109260_TWITTER_LOGO_400.gif"
                    alt="Twitter"
                    loading="lazy"
                    className="socicon"
               /></a>
           <a href="tel:9161499879" 
           ><img
                   src="https://cdn0.iconfinder.com/data/icons/social-media-2183/512/social__media__social_media__viber_-512.png"
                   alt="Telephone"
                   loading="lazy"
                   className="socicon"
               /></a>
           <a href="https://www.instagram.com/developer_karlex/" target="_blank" rel="noreferrer"
            ><img
                    src="https://media1.giphy.com/media/QWpK88H1g9PtmtQly1/giphy.gif"
                    alt="Instagram"
                    loading="lazy"
                    className="socicon"
                /></a>

        </div>
        <div>
            <p className="copy ">&copy; Copyright 2022</p>
            <p className="copy">
                Built with &#x2661; by
                <a href="https://twitter.com/koladechris" target="_blank" rel="noreferrer"
                > Sanchit (@sanchit_karlex)</a >
            </p></div>
        <div className="socials">
           <a href="https://www.linkedin.com/in/sanchit-312928214/" target="_blank" rel="noreferrer"
            ><img
                    src="https://cliply.co/wp-content/uploads/2021/02/372102050_LINKEDIN_ICON_400px.gif"
                    alt="Linkedin"
                    loading="lazy"
                    className="socicon"
                /></a>
           <a href="https://github.com/Karlex1" rel="noreferrer" target="_blank"
            ><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Github" className="socicon"
               /></a>
           <a href="mailto:sanchit959871@gmail.com" ><img className=" socicon" src="https://cdn0.iconfinder.com/data/icons/social-media-and-logos-11/32/Gmail_envelope_letter_email_Gmail_envelope_letter_email-128.png" alt="email"
               loading="lazy"
              ></img></a>
       
       </div>
    </footer >)
}