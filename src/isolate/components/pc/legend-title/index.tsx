
import {moreProps } from "../../../type";
import { IconRightOutline } from "@ssc-ui-icons/icons-react";
import "./legend-title.less"

function LegendTitle({title, more}:{title:string, more?: moreProps}){
    return (
        <div className="legend-title-wrapper" style={{display:"flex", justifyContent: 'space-between', flexDirection:'row'}}>
            <div>
                <span className="menu-cursor"></span>
                <span>{title}</span>
            </div>
            <div>
                { more ? <IconRightOutline onClick={more.onclick} style={{marginRight: '10px'}}></IconRightOutline> : null }
            </div>
        </div>
    )
}

export default LegendTitle;