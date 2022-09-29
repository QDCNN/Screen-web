import * as echarts from 'echarts'
import ReactEcharts from "echarts-for-react";
import { useEffect, useRef } from 'react'
export const Lux1 =() =>{

    const option={
        tooltip: {//鼠标放上去的卡片展示效果
          formatter: '{a}<br/>{b} : {c}'//a为series中的name，b为title，c为value
        },
        series: [//一组数值
          {
            axisLine: {//设置progress背景颜色
              lineStyle: {
                width: 15,
              }
            },
            splitNumber: 6,
            max: '6000',
            name: '光照',
            type: 'gauge',
            axisLabel: {//设置表盘刻度字体颜色
              color: '#a3ebeb',
              distance: 20,
              fontSize: 12
            },
            axisTick: {//设置表盘短刻度针，splitLine设置场刻度
              length: 10,
              lineStyle: {
                color: '#a3ebeb',
                width: 2
              }
            },
            progress: {//进度条设置
              show: true,
              width: 15,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  /*
                    0，0，0，1分别代表了右、下、左、上四个位置的颜色坐标
                    通过修改这4个参数, 可以实现不同的渐变方向, 如:
                    0 1 0 0 代表从正下方向正上方渐变;
                    1 0 0 1 代表从右上方向左下方渐变,
                  */
                  colorStops: [{
                    offset: 0, color: '#a7fffc' // 100% 处的颜色
                    
                  }, {
                    offset: 1, color: '#ed7a59' // 0% 处的颜色                    
                  }],
                  global: false // 缺省为 false
                }
              }
            },
            pointer: {//指针设置
              itemStyle: {
                color: '#a3ebeb'
              }
            },
            detail: {//当前位置value字体设置
              valueAnimation: true,
              color: 'white',
            },
            data: [//当前指针数据设置
              {
                value: 4000,
                name: 'LUX',
                // fontSize: 20
              }
            ],
            title: {//Lux，仪表盘标题的修改
              textStyle: {
                color: '#a3ebeb',
                fontWeight: 'bolder',
                fontSize: 20
              }
            }
          }
        ]
    }
 
  return (
    <div>
      {/* 准备一个挂载节点 */}
      <ReactEcharts option={option} className="w-5/12 h-3/4 m-auto"/>
      {/* <div ref={domRef}></div> */}
    </div>
  )
}
