import Image from 'next/image';
import kfcLogo from '../../public/assets/img/KFC-logo.png';
import whats from '../../public/assets/img/whats.png';
import market from '../../public/assets/img/market.png';

const Footer = () => {
  return (
    <>
      <div className="footer__red">
        <div className="footer__container">
          <div className="footer__grid">
            <div className="container__logos-contact">
              <img
                src="assets/img/KFC-logo.png"
                alt="kfcLogo"
                className="kfc-logo"
              />
              <div className="container-icons">
                <div className="icon-container">
                  <img
                    src="assets/img/whats.png"
                    alt="whats"
                    className="logo-whats"
                  />
                  <p className="footer__text">44 3 555</p>
                </div>

                <div className="icon-container">
                  <img
                    src="assets/img/market.png"
                    alt="market"
                    className="logo-market"
                  />
                  <p className="footer__text">0(212) 705 00 00</p>
                </div>
              </div>
            </div>

            <div className="footer__logos logos-social">
              <div className="icon">
                <img src="assets/img/facebook.png" alt="facebook" />
              </div>
              <div className="icon">
                <img src="assets/img/twitter.png" alt="twitter" />
              </div>
              <div className="icon">
                <img src="assets/img/facebook.png" alt="facebook" />
              </div>
              <div className="icon">
                <img src="assets/img/twitter.png" alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__black">
        <div className="footer__container">
          <div className="footer__grid">
            <div className="container__logos-contact">
              <ul>
                <p className="cabecera">ABOUT</p>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Cracking Tags</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>

              <ul>
                <p className="cabecera">SITE MAP</p>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Store Locator</a>
                </li>
              </ul>

              <ul>
                <p className="cabecera">NUTRITION</p>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Store Locator</a>
                </li>
              </ul>
            </div>

            <div className="container__sr-kfc">
              <img src="assets/img/srkfc.png" className="sr-kfc" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
