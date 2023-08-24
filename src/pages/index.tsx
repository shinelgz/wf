import IndicatorsPanelView  from '../applications/components/indicator-panel-view';
import IndicatorsPanelWithProcessView from '../applications/components/indicator-panel-with-process-view';
import SearchView from '../applications/components/search-view';
import { CardContainerView}  from '../applications/components/card-container-view';
import { viewMoreHandler } from '../applications/handlers'
import { useNavigate } from 'react-router-dom';
import { IndicatorResponse, getIndicatorData } from '../service/api/indicator';
import DountChartView from '../applications/components/dount-chart-view';
import List from './list';
import { useStateFactory } from '../hooks/use-state-factory';
import { KeyStateRenderRules, keyStateRenderRules } from '../applications/rules';
import ThisIsATable from './components/home/this-is-a-table';
import Webview from '../applications/components/webview';

export default function Home() {

  // 是否渲染 inbounded 指标卡
  const { result: renderInbounded } = useStateFactory<boolean, KeyStateRenderRules>({data: false, rules: keyStateRenderRules});

  const { result: data } = useStateFactory<IndicatorResponse>({loader: getIndicatorData});
  const navigate = useNavigate();
  

  return (
  <>
    <Webview title='Operation'>
      <div className="container-wrapper">
        <SearchView />
      </div>
      <CardContainerView title='Overall' more={{position:'top', onclick: () => {viewMoreHandler({navigate, Component: List, componentPath : '/list'})}}}>
        { renderInbounded ?  <IndicatorsPanelView title="Total Inbounded" /> : null }
          <IndicatorsPanelView title="Total Delivered" />
          <IndicatorsPanelView title="Total On-hand" />
          <IndicatorsPanelView title="To Inbound" />
    </CardContainerView>
      <CardContainerView title='Delivery Progress' more={{position:'bottom', text: "view more info", onclick: () => {alert(1)}}}>
          <IndicatorsPanelWithProcessView title="To Assign" value={data!}/>
          <IndicatorsPanelWithProcessView title="To Handover" value={{order:55, process: 97, preOrder: 56,todayOrder: 3}} tooltip="Parcels waiting to be handed over" />
          <IndicatorsPanelWithProcessView title="To Deliver" value={{order:125, process: 100, preOrder: 56,todayOrder: 213}}/>
      </CardContainerView>
      <CardContainerView title='Chart View'>
          <DountChartView />
      </CardContainerView>
      <CardContainerView title="This Is A Table">
        <ThisIsATable />
      </CardContainerView>
     </Webview> 
  </>
  )
}