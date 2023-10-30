import React from 'react'; 
// import './App.css'
export default function Footer(){
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      return (
        <footer className="footer">
          <section className="footer-content">
            <div className="footer-button">
              <a href="/">Home</a>
            </div>
            <div className="footer-button">
              <a href="/favorites">Favorites</a>
            </div>
          </section>
          <div className="scroll-to-top">
            <button onClick={scrollToTop}>Back to Top</button>
          </div>

          <p className="copyright">© {new Date().getFullYear()} Ruke Sam-Ogaga & Esly Cerritos. All rights reserved.</p>
          <p>Copyright &#169; 2023 MyDigitalCloset. All Rights Reserved</p>
        </footer>
      );

}