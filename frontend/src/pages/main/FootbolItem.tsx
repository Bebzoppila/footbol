import { FC } from "react";
import { footbolCartType } from "./main";
type FootbolItemProps = {
  itemInfo: footbolCartType;
};

const FootbolItem: FC<FootbolItemProps> = ({ itemInfo }) => {

  return (
    <div className="footbol-item">
      <div className="footbol-item__images">
        <img className="footbol-item__img" src={itemInfo.teamAwayImg} alt="" />
        <img className="footbol-item__img" src={itemInfo.teamHomeImg} alt="" />
      </div>
      <div className="footbol-item__info">
        <p>
          Дата провидения{" "}
          {new Date(itemInfo.date).toLocaleString("ru")}{" "}
        </p>
        <p>Комманда хозяев {itemInfo.teamHome}</p>
        <p>Комманда гостей {itemInfo.teamAway}</p>
        <p>название стадиона {itemInfo.stadium}</p>
      </div>
      <div className="footbol-item__result">
        <span>{itemInfo.scoreFtAway}</span>
        <span>{itemInfo.scoreFtHome}</span>
      </div>
    </div>
  );
};

export default FootbolItem;
