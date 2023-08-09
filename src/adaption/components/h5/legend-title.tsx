
import { RightOutline } from "antd-mobile-icons";
import { moreProps } from "../type";
import "./legend-title.less"
import { Button } from "ssc-mobile-ui-react";

function LegendTitle({title, more}:{title:string, more?: moreProps}){
    return (
        <div className="legend-title-wrapper" style={{display:"flex", justifyContent: 'space-between', flexDirection:'row'}}>
            <div>
                <span className="menu-cursor"></span>
                <span>{title}</span>
            </div>
            <div>
                { more ? <Button onClick={more.onclick} style={{border: 0}}><RightOutline /></Button> : null }
            </div>
        </div>
    )
}

export default LegendTitle;