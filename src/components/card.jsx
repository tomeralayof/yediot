import React from "react";
import cardImage from "../images/landscape_207075.jpg";

const Card = ({ category, backGround }) => {
  return (
    <div className="componenta">
      <img className="imgArea" src={cardImage} alt="" />
      <div style={{ backgroundColor: `${backGround}` }} className="category">
        <span>{category ? category : "אוכל"}</span>
      </div>
      <div className="title">
        סיור קולינרי בין המסעדות הערביות הכי טובות בחיפה
      </div>
      <div className="subTitle">
        גם אני, שעסוק כל השבוע, מתפנה לצפות בטלוויזיה רק בסופי השבוע, ונוכחתי
        שרוב תוכניות הטלוויזיה בכל הערוצים הן תוכניות אוכל.
      </div>
      <div className="author">שירית גל</div>
    </div>
  );
};

export default Card;
