import Image from 'next/image';
import kfcLogo from '../../public/assets/img/KFC-logo.png';

const Header = () => {
  return (
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
      </div>
    </header>
  );
};

export default Header;
