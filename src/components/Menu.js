import Image from 'next/image';
import Product from '../data/menu.json';

import hamCard from '../../public/assets/img/hamb-card.png';
import cookies from '../../public/assets/img/cookies.png';
import location from '../../public/assets/img/location-logo.png';

import chefsito from '../../public/assets/img/chefsito.png';

import addHope from '../../public/assets/img/addHope.png';
import SectionMobile from './SectionMobile';

const Menu = () => {
  const products = Product.products;
  return (
    <>
      <div className="menu">
        <div className="menu__container">
          <div className="menu__heading">
            <div className="menu__carousel">
              {products.map((item) => (
                <div className="menu__imgContainer" key={item.id}>
                  <div key={item.id} className="menu__subContainerImg">
                    <img src={item.url} alt={item.url} className="menu__img" />
                  </div>
                  <p className="menu__nameImg">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TODO: MAIN */}
        <div className="main">
          <div className="main__container">
            <div className="main__grid-1">
              <div className="main__card">
                <div className="main__text-card">
                  <h1 className="main__heading">ANY DAY OFFERS</h1>
                  <p className="main__sub-heading">
                    NEW PHENOMEON BURGER TASTE
                  </p>
                  <p className="main__size">12.90 LT</p>
                </div>

                <div className="main__img-card main__elipse-1">
                  <Image src={hamCard} alt="hamCard" className="img-card" />
                </div>
              </div>

              <div className="main__card">
                <div className="main__text-card">
                  <h1 className="main__heading">OTHER FLAVORS</h1>
                  <p className="main__sub-heading">
                    SAVE ROOM. WE MADE COOKIES
                  </p>
                  <p className="main__size active">3.90 LT</p>
                </div>
                <div className="main__img-card main__elipse-2">
                  <Image
                    src={cookies}
                    alt="cookies"
                    className="img-card cookies-img"
                  />
                </div>
              </div>

              <div className="main__card">
                <div className="main__text-card">
                  <h1 className="main__heading">FIND A KFC STORE NEAR YOU</h1>
                  <p className="main__sub-heading">
                    SAVE ROOM. WE MADE COOKIES
                  </p>
                </div>

                <div className="main__img-card main__elipse-3">
                  <Image src={location} alt="location" className="img-card" />
                </div>
              </div>
            </div>

            {/* TODO: GRID 2 */}
            <div className="main__grid-2">
              <div className="main__card-grid-2">
                <div className="main__text-card-grid-2">
                  <h1 className="main__heading heading-grid-2">
                    CRISPY AND FRESH CHICKEN MASTER CHEF
                  </h1>
                  <a href="#" className="main__button">
                    ALL CAMPAIGNS
                  </a>
                </div>

                <div className="main__img-card-grid-2">
                  <Image
                    src={chefsito}
                    alt="chefsito"
                    className="img-card-grid-2"
                  />
                </div>
              </div>

              {/* CARD 2 */}
              <div className="main__card-grid-2">
                <div className="main__text-card-grid-2">
                  <h1 className="main__heading heading-grid-2">
                    DO YOU WANT TO BE A HOPE?
                  </h1>
                  <a href="#" className="main__button">
                    SEE MORE
                  </a>
                </div>

                <div className="main__img-card-grid-2">
                  <Image
                    src={addHope}
                    alt="addHope"
                    className="img-card-grid-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <SectionMobile />
        </div>
      </div>
    </>
  );
};

export default Menu;
