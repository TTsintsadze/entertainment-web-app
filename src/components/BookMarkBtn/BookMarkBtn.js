import React from 'react';
import "./BookMarkBtn.css";
import BookMarkIcon from "../../assets/icon-bookmark-empty.svg";

const BookMarkBtn = (props) => {
  const cardTypeClass = props.CardType ? props.CardType + "BookMarkIconWrapper" : "BookMarkIconWrapper";

  return (
    <div className={cardTypeClass}>
      <img className="BookMarkIcon" src={BookMarkIcon} alt="Bookmark Icon" />
    </div>
  );
};

export default BookMarkBtn;
