import * as echarts from 'echarts'
import ReactEcharts from "echarts-for-react";
import { useEffect, useRef } from 'react'
export const Lux1 =() =>{

    const option= {
      tooltip: {
          formatter: "{a}<br/>{b} : {c}"
      },
      series: [
          {
              axisLine: {
                  lineStyle: {
                      width: 9,
                  }
              },
              splitNumber: 6,
              max: 6000,
              name: "光照",
              type: "gauge",
              axisLabel: {
                  color: "#a3ebeb",
                  distance: 10,
                  fontSize: 5
              },
              splitLine: {
                length: 6,
                distance: 3,
                lineStyle: {
                  width: 1,
                  color: '#a3ebeb'
                }
              },
              axisTick: {
                  length: 4,
                  distance: 3,
                  lineStyle: {
                      color: "#a3ebeb",
                      // width: 2
                  }
              },
              progress: {
                  show: true,
                  width: 9,
                  itemStyle: {
                      color: {
                          type: "linear",
                          x: 0,
                          y: 0,
                          x2: 1,
                          y2: 0,
                          colorStops: [
                              {
                                  offset: 0,
                                  color: "#a7fffc"
                              },
                              {
                                  offset: 1,
                                  color: "#ed7a59"
                              }
                          ],
                          global: false
                      }
                  }
              },
              pointer: {
                  length: "38%",
                  width: 3,
                  itemStyle: {
                      color: "#a3ebeb"
                  }
              },
              data: [
                  {
                      value: 3000,
                      name: "LUX",
                  }
              ],
              detail: {
                        valueAnimation: true,
                        color: "white",
                        fontSize: 10,
                        offsetCenter: [0, '55%']
              },
              title: {
                  textStyle: {
                      color: "#a3ebeb",
                      fontWeight: "bolder",
                      fontSize: 9,
                  },
                  offsetCenter: [0, '25%']
              }
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
