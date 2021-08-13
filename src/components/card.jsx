import React from "react";
const Card = ({ category, backGround }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card card-image"></div>

        <div style={{ backgroundColor: `${backGround}` }} className="card-food">
          <p>{category ? category : "אוכל"}</p>
        </div>
        <div className="title">
          <strong>סיור קולינרי בין המסעדות הערביות הכי טובות בחיפה</strong>
        </div>
        <div className="text">
          גם אני שעסוק כל השבוע , מתפנה לצפות בטלוויזיה מתפנה לצפות בטלוויזיה רק
          בסופי השבוע ושכחתי שרוב הכניות הטלוויזיה בכל הערוצים הם אוכלx
        </div>
        <div className="author"> שרית גל</div>
      </div>
    </div>
  );
};

export default Card;
