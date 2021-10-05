import Image from 'next/image';
import kfcLogo from '../../public/assets/img/KFC-logo.png';
import rombo from '../../public/assets/img/rectangle.svg';
import kfcPrincipal from '../../public/assets/img/kfc-principal.png';
import Menu from './Menu';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__bar">
            <div className="header__logo">
              <Image src={kfcLogo} alt="logoKfc" />
            </div>

            <nav className="navigation">
              <a href="#" className="navigation__link">
                FIND US
              </a>
              <a href="#" className="navigation__link">
                ALL CAMPAIGNS
              </a>
            </nav>
          </div>

          <div className="header__grid">
            <div className="header__text">
              <h1 className="header__heading">BARGAIN BUCKET MENU CAMPAIGN</h1>
              <p className="header__info">
                Original Recipe chicken and fries, and plenty of it. Sometimes
                that’s al you need to turn an average day into a great one.
              </p>
              <a href="#" className="header__button">
                ORDEN NOW
              </a>
            </div>
            {/* Header text */}

            <div className="header__grafic">
              <Image src={kfcPrincipal} className="header__img" alt="kfcFood" />
            </div>
          </div>
        </div>
        <main className="main">
          <Menu />
        </main>
      </header>
    </>
  );
};

export default Header;
