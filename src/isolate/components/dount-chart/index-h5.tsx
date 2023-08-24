import React from 'react';
import ReactEcharts from "echarts-for-react"; 

  
const option = {
  grid: {
    top: 300,
    height: 100,
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'right',
    orient: 'vertical', 
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
        }
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

const DountChart: React.FC = () => {

    return ( <ReactEcharts option={option} />);
}

export default DountChart;