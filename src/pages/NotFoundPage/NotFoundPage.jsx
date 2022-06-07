import './NotFoundPage.scss';
import React from 'react';

function NotFoundPage() {
  return (
    <div className='container'>
      <div className="page-404-wrapper">
        <div className="page-404-message__top">
          Что-то пошло не так
        </div>
        <h2 className="page-404-message__main">404</h2>
        <div className="page-404-message__bottom">Страница не найдена</div>
      </div>
    </div>
  )
}

export default NotFoundPage;