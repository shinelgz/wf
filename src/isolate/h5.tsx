
import Search from "./components/h5/search";
import Table from './components/h5/table'
import Stepper from './components/h5/stepper';
import LegendTitle from "./components/h5/legend-title";
import IndicatorsPanel from "./components/h5/indicators-panel";
import Container from "./components/h5/container";
import NavBar from "./components/h5/navbar";
import DountChart from "./components/h5/dount-chart";

// eslint-disable-next-line react-refresh/only-export-components
export * from './components/h5';
export type * from './type';
export type * from "./components/h5/dount-chart";


import {baseui} from './components/h5';
// import { handlers } from "@adaption-handlers";

const {ProgressBar : Progress, Button }  = baseui;

console.info('h5 component adaptor');
export {
  Search ,
  Table,
  Button, 
  DountChart,
  Stepper,LegendTitle,IndicatorsPanel, Progress ,Container,NavBar
}

import * as handlersForH5 from './handlers/h5'
import * as handlersForAll from './handlers'
export const handlers = { ...handlersForAll, ...handlersForH5};
