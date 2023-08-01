
import {IndicatorsPanel} from '@component-adaptor';
import { Progress } from '@component-adaptor';


function IndicatorsPanelWithProcessView({value:{order, process,preOrder,todayOrder=0}, title,tooltip,}:{value:{order:number, process: number,preOrder:number,todayOrder?:number},title:string, tooltip?:string}){
    return (
        <IndicatorsPanel title="To Assign" 
          tooltip={tooltip}
            footer={
              <>
              <div className='progress-content'>
                <div className="progress-title">{title}</div>
                <div style={{display:"flex"}}>
                    <div className="progress-text">
                        <span>{process}</span> <span style={{"marginLeft": "4px", "fontSize": "16px" ,"fontWeight": "normal"}}>%</span>
                    </div>
                    <div style={{width:"100%"}}>
                        <Progress percent={process} strokeColor="#1890ff" showInfo={false} strokeWidth={5}/>
                    </div>
                </div>
              </div>
              </>
            }
          >
            <span className="pup-num">{order}</span> <span className="unit">Orders</span>
            <div className="day-content">
              <div className="prev-day">
                <span>Prev. day</span> <span className="emphasized">{preOrder}</span>
              </div> 
              <div className="today">
                <span>Today</span> <span className="emphasized">{todayOrder}</span>
              </div>
            </div>
            <div className="divider horizontal"></div>
          </IndicatorsPanel>
    )
}

export default IndicatorsPanelWithProcessView;