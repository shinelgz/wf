
import Search from "./components/h5/search";
import Table from './components/h5/table'
import Stepper from './components/h5/stepper';
import LegendTitle from "./components/h5/legend-title";
import IndicatorsPanel from "./components/h5/indicators-panel";
import Container from "./components/h5/container";
import NavBar from "./components/h5/navbar";
// eslint-disable-next-line react-refresh/only-export-components
export * from './components/h5';
export type * from './type';

export * from './handlers/h5'

import {baseui} from './components/h5';

const {ProgressBar : Progress, Button }  = baseui;

console.info('h5 component adaptor');
export {
    Search ,
    Table,
    Button, 
    Stepper,LegendTitle,IndicatorsPanel, Progress ,Container,NavBar
  }