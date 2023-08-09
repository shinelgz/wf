import Search  from "./pc/search";
import Table from './pc/table'
import Stepper from './pc/stepper';
import TextArea from './pc/textarea';
import LegendTitle from "./pc/legend-title";
import IndicatorsPanel from "./pc/indicators-panel";
import CardContainer from "./pc/card-container";
// eslint-disable-next-line react-refresh/only-export-components
export * from './pc'
import {baseui} from './pc';

const { Progress } = baseui;
const NavBar = (options: Record<string, any>) => {
  console.info(options);
  return  <></>;
};

console.info('pc component adaptor');

export  {
    Search  ,
    Table,
    Stepper,
    TextArea,
    LegendTitle,IndicatorsPanel,
    Progress, CardContainer,
    NavBar
  }