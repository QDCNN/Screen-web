import * as echarts from 'echarts'
import ReactEcharts from "echarts-for-react";
import { useEffect, useRef } from 'react'
export const Bar =() =>{

    const option = {
      title: {
        left: '20%',
        text: 'PH值',
        show: true,
        textStyle: {
          color: '#b6ebfe'
        }
      },
      grid:{
        left:'50%',
        top:'20%',
        width: '55px',
        bottom: '20%',
        show:true,
        borderColor:'#fff',
        borderWidth: 2,
      },
      yAxis: [
        {
          type: 'value',
          show: true,
          min:0,
          max:26,
          splitNumber: 5,
          axisLabel:{
            color: '#fff'
          },
          axisLine:{
            show: true,
            lineStyle:{
              color: '#fff'
            }
          },
          axisTick:{
            show: true,
            inside:true
          },
          splitLine:{
            show: false
          },
        },
         {
          // type: 'value',
          show: false,
          min:0,
          max:26,
          data: [],
        },
      ],
      xAxis: [
        {
          show: false,
          data: []
        },
        { 
          show: false,
          data: []
        }
      ],
      series: [
        {
          xAxisIndex: 0,
          yAxisIndex: 0,
          // 里层柱子
          name: '条',
          type: 'bar',
          data: [
            {
              value: 6, //里层柱子数据
            }
          ],
          barWidth: 22,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#fff' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgb(255,255,255,0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          z: 2
        },
        {
          name: '外框',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          // barGap: '-100%',
          data: [26],
          barWidth: 38,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#5d9afd'
              }, {
                offset: 0.7, color: '#48fffd'
              }, {
                offset: 0.7, color: '#12c246'
              }, {
                offset: 0.8, color: '#fdd527'
              }, {
                offset: 1, color: '#ef8244'
              }],
              global: false // 缺省为 false
            },
            barBorderRadius: [50, 50, 0, 0]
          },
          z: 0
        },
      ]
    };
 
  return (
    // <div className='h-full'>
      // {/* 准备一个挂载节点 */}
      <ReactEcharts option={option} style={{height:'80%'}}/>
      // {/* <div ref={domRef}></div> */}
    // </div>
  )
}
