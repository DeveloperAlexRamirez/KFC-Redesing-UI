import Image from 'next/image';
import screen1 from '../../public/assets/img/screen-1.svg';
import appstore from '../../public/assets/img/appstore.png';
import googleplay from '../../public/assets/img/googleplay.png';

const SectionMobile = () => {
  return (
    <div className="mobile">
      <div className="mobile__container">
        <div className="mobile__grid">
          <div className="mobile__app-container">
            <div className="mobile__grafic">
              {/* <Image src={screen1} alt="screen1" /> */}
            </div>
          </div>

          <div className="mobile__text">
            <h1 className="mobile__heading">
              Now With Your Favorite KFC Mobile Application In Your Pocket
            </h1>

            <div className="mobile__contenedor-button">
              <a href="#" className="mobile__button">
                {/* ALL CAMPAIGNS */}
                <Image src={appstore} alt="appstore" />
              </a>
              <a href="#" className="mobile__button">
                {/* ALL CAMPAIGNS */}
                <Image src={googleplay} alt="googleplay" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMobile;
