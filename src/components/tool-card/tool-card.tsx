import './tool-card.css';
import {PopularTool} from '../../types/types';
import { useState } from 'react';

type ToolCardProps = {
  card: PopularTool;
  block: string;
};

function ToolCard({card, block}: ToolCardProps): JSX.Element {
  const [favourite, setFavourite] = useState<boolean>(card.isFavourite);
  const [personal, setPersonal] = useState<boolean>(card.isAdded);

  return(
    <div className={`${block}__tool tool`}>
      <div className='tool__wrapper'>
        <img className='tool__icon' src={`img/tools/${card.icon ? card.icon : card.title.toLowerCase()}.svg`}/>
        <div>
          <h3 className='tool__title'>{card.title}</h3>
          <span className='tool__license'>{card.license}</span>
        </div>
      </div>
      <p className='tool__description'>{card.description}</p>
      <div className='tool__wrapper'>
        <button
          className='tool__button tool__button--favourite button-reset'
          onClick={() => setFavourite(!favourite)}
        >
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="8" fill={favourite ? '#1E252B' : ''}/>
            <path d="M26.8334 12.25C24.3834 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16669 15.4 8.16669 19.25C8.16669 26.1917 21 33.25 21 33.25C21 33.25 33.8334 26.25 33.8334 19.25C33.8334 15.4 30.6834 12.25 26.8334 12.25Z" fill={favourite ? '#FD3B41' : '#FFFFFF'} fillOpacity={favourite ? 1 : 0.38}/>
          </svg>
        </button>
        <button
          className='tool__button tool__button--personal button-reset'
          onClick={() => setPersonal(!personal)}
        >
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="8" fill={personal ? '#1E252B' : ''}/>
            <path d="M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z" fill={personal ? 'rgba(255, 255, 255, 0.78)' : '#FFFFFF'} fillOpacity={personal ? 1 : 0.38}/>
            <path d="M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z" fill={personal ? 'rgba(255, 255, 255, 0.78)' : '#FFFFFF'} fillOpacity={personal ? 1 : 0.38}/>
          </svg>
        </button>
        <a href={card.url} className='tool__link' target='_blank' rel='noopener noreferrer'>Visit</a>
      </div>
    </div>
  );
}

export default ToolCard;
