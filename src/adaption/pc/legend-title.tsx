
import "./legend-title.less"

function LegendTitle({title}:{title:string}){
    return (
        <div className="legend-title-wrapper">
            <span className="menu-cursor"></span>
            <span>{title}</span>
        </div>
    )
}

export default LegendTitle;