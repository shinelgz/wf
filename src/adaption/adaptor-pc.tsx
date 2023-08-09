import Search  from "./components/pc/search";
import Table from './components/pc/table'
import Stepper from './components/pc/stepper';
import TextArea from './components/pc/textarea';
import LegendTitle from "./components/pc/legend-title";
import IndicatorsPanel from "./components/pc/indicators-panel";
import Container from "./components/pc/container";
// eslint-disable-next-line react-refresh/only-export-components
export * from './components/pc'
import {baseui} from './components/pc';

export type * from './type';

export * from './handlers/pc'

const { Progress, Button } = baseui;
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
    Button,
    LegendTitle,IndicatorsPanel,
    Progress, Container,
    NavBar
  }