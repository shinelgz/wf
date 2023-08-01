import { useContext } from 'react';
import PlatFormContext from '../utils/Context';
import { PlatForm } from '../utils/const';
import LegendTitleView from '../applications/legend-title-view';
import IndicatorsPanelView  from '../applications/indicator-panel-view';
import IndicatorsPanelWithProcessView from '../applications/indicator-panel-with-process-view';
import CardContainer from '../applications/card-container-view';

function Home() {

  const {platform} = useContext(PlatFormContext)

 
  console.info(platform);

  
  return (
  <div style={{ minWidth: platform == PlatForm.PC ? "1000px" : 'auto'}} className="delivery-dashboard-wrapper">
    <div className="container-wrapper">
      <LegendTitleView title='Overal'/>
      <CardContainer>
        <IndicatorsPanelView title="Total Inbounded" />
        <IndicatorsPanelView title="Total Delivered" />
        <IndicatorsPanelView title="Total On-hand" />
        <IndicatorsPanelView title="To Inbound" />
      </CardContainer>
   </div>
   <div className="container-wrapper">
      <LegendTitleView title='Delivery Progress'/>
      <CardContainer>
        <IndicatorsPanelWithProcessView title="To Assign" value={{order:85, process: 93, preOrder: 56,todayOrder: 53}}/>
        <IndicatorsPanelWithProcessView title="To Handover" value={{order:55, process: 97, preOrder: 56,todayOrder: 3}} tooltip="Parcels waiting to be handed over" />
        <IndicatorsPanelWithProcessView title="To Deliver" value={{order:125, process: 100, preOrder: 56,todayOrder: 213}}/>
      </CardContainer>
   </div>
  </div>
  )
}

export default Home;


/**
 *  <div style={{ width: platform == PlatForm.PC ? "1000px" : 'auto'}} className="delivery-dashboard-wrapper">
    <div>
      <SearchView />
    </div>
    <div >
      <TableView />
    </div>
  </div>
 */