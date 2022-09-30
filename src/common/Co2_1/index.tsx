import * as echarts from 'echarts'
import ReactEcharts from "echarts-for-react";
import { useEffect, useRef } from 'react'
export const Co2_1 =() =>{

    const option= {
        series: [
          {
            type: 'gauge',
            min: 0,
            max: 600,
            splitNumber: 6,
            progress: {
              show: true,
              width: 9,
              roundCap: true,
              itemStyle: 
              {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [{
                      offset: 0, color: '#81FFFF' // 0% 处的颜色
                  }, {
                      offset: 0.6, color: '#FBD800' // 100% 处的颜色
                  },{
                      offset: 1, color: '#F52E26' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
            }
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 9
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {//刻度上的字体样式设置
              distance: -37,
              color: '#81FFFF',
              fontSize: 9,
              fontWeight: 'bolder'
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              fontSize: 20,
              offsetCenter: [0, '30%'],
              color: '#81FFFF'
            },
            pointer:{
              show: false,
            },
            anchor: {
              show: false,
            },
            data: [
              {
                value: 500
              }
            ]
          }
        ]
     }
 
  return (
    // <div>
      // {/* 准备一个挂载节点 */}
      <ReactEcharts option={option} className="w-5/12 h-2/4 m-auto"/>
      // {/* <div ref={domRef}></div> */}
    // </div>
  )
}
