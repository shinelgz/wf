import { useContext, useEffect, useState } from 'react';
import PlatFormContext from '../utils/Context';
import { PlatForm } from '../utils/const';
import IndicatorsPanelView  from '../applications/indicator-panel-view';
import IndicatorsPanelWithProcessView from '../applications/indicator-panel-with-process-view';
import NavBarView from '../applications/navbar-view';
import SearchView from '../applications/search-view';
import { CardContainerView}  from '../applications/card-container-view';
import  { handlers } from '../applications'
import { useNavigate } from 'react-router-dom';
import { IndicatorResponse, getIndicatorData } from '../service/api';
import DountChartView from '../applications/dount-chart-view';
export default function Home() {

  const { viewMoreHandler, myAlert } = handlers;
  const {platform} = useContext(PlatFormContext)

  const [data, setData] = useState<IndicatorResponse>({order: 0, process: 0, preOrder: 0,todayOrder: 0});

  const navigate = useNavigate();
  useEffect(() => {
    getIndicatorData().then(res => setData(res));
  }, [])

  return (
  <div style={{ minWidth: platform == PlatForm.PC ? "1000px" : 'auto'}} className="delivery-dashboard-wrapper">
    <NavBarView navBarProps={{backArrow:false}}>Operation</NavBarView>
    <div className="container-wrapper">
      <SearchView />
    </div>
    <CardContainerView title='Overall' more={{position:'top', onclick: () => {viewMoreHandler(navigate)}}}>
        <IndicatorsPanelView title="Total Inbounded" />
        <IndicatorsPanelView title="Total Delivered" />
        <IndicatorsPanelView title="Total On-hand" />
        <IndicatorsPanelView title="To Inbound" />
   </CardContainerView>
      <CardContainerView title='Delivery Progress' more={{position:'bottom', text: "view more info", onclick: () => {alert(1)}}}>
        <IndicatorsPanelWithProcessView title="To Assign" value={data}/>
        <IndicatorsPanelWithProcessView title="To Handover" value={{order:55, process: 97, preOrder: 56,todayOrder: 3}} tooltip="Parcels waiting to be handed over" />
        <IndicatorsPanelWithProcessView title="To Deliver" value={{order:125, process: 100, preOrder: 56,todayOrder: 213}}/>
    </CardContainerView>
    <CardContainerView title='Chart View'>
        <DountChartView />
        <div onClick={() => myAlert()}>click me</div>
    </CardContainerView>
  </div>
  )
}