// // eslint-disable-next-line react-refresh/only-export-components
// export * as antd from 'antd';
// // eslint-disable-next-line react-refresh/only-export-components
// export * as baseui from 'ssc-ui-react';
// // eslint-disable-next-line react-refresh/only-export-components
// export * from 'react-pro-components';

import Search  from './search/index-pc';
import Table from './table/index-pc'
import Stepper from './stepper/index-pc';
import LegendTitle from "./legend-title/index-pc";
import IndicatorsPanel from "./indicators-panel/index-pc";
import Container from "./container/index-pc";
import DountChart from "./dount-chart/index-pc";
import { Layout } from './layout/index-pc';
import Webview from './webview/index-pc';
import { Input } from 'antd';


export type * from '../type';

export  { Progress, Button } from 'ssc-ui-react';

const { TextArea } = Input;

const NavBar = (options: Record<string, any>) => {
  console.info(options);
  return  <></>;
};

export  {
  Search  ,
  Table,
  Stepper,
  TextArea,
  DountChart,
  Webview,
  Layout,
  LegendTitle,IndicatorsPanel,
  Container,
  NavBar
}