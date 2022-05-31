import './Footer.scss';
import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-block">
            <h3 className="footer-block__title">Катагории товаров</h3>
            <Link 
              to={'/'} 
              className="footer-block__link">
              Бытовая техника
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              Электроника
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              Одежда
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              Обувь
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              Аксессуары
            </Link>
          </div>
          <div className="footer-block">
            <h3 className="footer-block__title">Разделы сайта</h3>
            <Link 
              to={'/'} 
              className="footer-block__link">
              Магазин
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              Контакты
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              Блог
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              Политика конфиденциальности
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              Договор оферты
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              О нас
            </Link>
          </div>
          <div className="footer-block">
            <h3 className="footer-block__title">Полезные ссылки</h3>
            <Link 
              to={'/'} 
              className="footer-block__link">
              google.com
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              yandex.ru
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              developer.mozilla.org
            </Link>
            <Link 
              to={'/'} 
              className="footer-block__link">
              mdn
            </Link>
          </div>
          <div className="footer-block">
            <Logo blockName="footer"/>
            <span className='copyright'>&#169; 2022 Artem Eremchuk</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;