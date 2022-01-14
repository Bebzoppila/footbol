import FootbolItem from "./FootbolItem";
import { footbolCartType } from "./main";
import { FC } from "react";
type mainContentProps = {
    footbolInfo: footbolCartType[]
}

const mainContent:FC<mainContentProps> = ({footbolInfo}) => {

  return (
    <div className="main-content">
        {
            footbolInfo.map(footbolItem => <FootbolItem key={footbolItem.date} itemInfo={footbolItem}
              />)
        }
    </div>
  );
};

export default mainContent;
