
import './indicators-panel-pc.less';
import { IconQuestionOutline } from "@ssc-ui-icons/icons-react";
import {Popover} from "ssc-ui-react";

function IndicatorsPanel({title, footer, children, tooltip}:{title:string, footer: React.ReactNode, children: React.ReactNode,tooltip?:string}){
    return (
        <div className="basic-indicators-panel">
            <div className="indicator-slot-wrapper">
            <div  className="indicator-with-title-panel-wrapper">
                <div className="title-container">
                <div className="t-container">
                    <span className="title">{title}</span> 
                    { tooltip ?
                    <div>
                    <Popover placement="topCenter" title={tooltip}>
                        <IconQuestionOutline />
                    </Popover>
                    </div>
                    : null }
                </div>
                </div>
                <div className="data-container">
                {children}
                </div>
            </div> 
            <div className="footer-indicator">
                {footer}
            </div>
            </div>
        </div>
    )
}

export default IndicatorsPanel;