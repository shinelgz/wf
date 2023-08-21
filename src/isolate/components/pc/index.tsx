// // eslint-disable-next-line react-refresh/only-export-components
// export * as antd from 'antd';
// // eslint-disable-next-line react-refresh/only-export-components
// export * as baseui from 'ssc-ui-react';
// // eslint-disable-next-line react-refresh/only-export-components
// export * from 'react-pro-components';

import Search  from './search';
import Table from './table'
import Stepper from './stepper';
import TextArea from './textarea';
import LegendTitle from "./legend-title";
import IndicatorsPanel from "./indicators-panel";
import Container from "./container";
import DountChart from "./dount-chart";
import { Layout } from './layout';
import Webview from './webview';

export type * from '../../type';

export  { Progress, Button } from 'ssc-ui-react';

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