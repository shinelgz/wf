import {IndicatorsPanel} from '@adapter/components';


function IndicatorsPanelView({title}:{title:string}){
    return (
        <IndicatorsPanel title={title} 
        footer={
          <>
          <span>Avg Last 7 Days</span>
          <span className="footer-indicator-value">2,425.6</span> 
          </>
        }
        tooltip='Parcels already delivered today'
      >
        <span className="pup-num">1,586</span> <span className="unit">Orders</span>
      </IndicatorsPanel>
    )
}
export default IndicatorsPanelView;