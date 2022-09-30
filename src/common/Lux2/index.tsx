import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import style from '../style/index.module.css'

export const Lux2 =() => {
  const domRef = useRef<HTMLCanvasElement|null>(null)
  const chartInit = () => {
    const myChart = echarts.init(domRef.current)
    // 仪表盘属性
    myChart.setOption({
      tooltip: {//鼠标放上去的卡片展示效果
        formatter: '{a}<br/>{b} : {c}'//a为series中的name，b为title，c为value
      },
      series: [
        {//外层刻度盘
          type: 'gauge',
          min: 0,
          max: 6000,
          splitNumber: '6',
          radius: '80%',
          axisLine: {
            lineStyle: {
              color: [[1, '#00ffff']],
              width: 8
            }
          },
          axisTick: {//设置表盘短刻度针，splitLine设置长刻度
            show: false,
            splitNumber: 6,
            distance: -12,
            length: 12,
            lineStyle: {
              color: '#a3ebeb',
              width: 2
            }
          },
          splitLine: {
            distance: -18,
            length: 18,
            lineStyle: {
              color: '#00ffff'
            }
          },
          axisLabel: {
            distance: -52,
            color: '#00ffff',
            fontSize: 20
          },
          // anchor: {
          //   show: true,
          //   size: 20,
          //   itemStyle: {
          //     borderColor: '#000',
          //     borderWidth: 2
          //   }
          // },
          pointer: {//通过icon去设置pointer指针的形状
            // offsetCenter: [0, '10%'],
            // icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
            length: '80%',
            itemStyle: {
              color: '#00ffff'
            }
          },
          markPoint:{//用markPoint盖在原始指针上面，将数据输出在标记点上
            symbol:'circle',
            symbolSize:35,
            data:[
                //跟你的仪表盘的中心位置对应上，颜色可以和画板底色一样
                {x:'center', y:'center', itemStyle:{color:'#00ffff'}},
                ],
          },
          detail: {//当前位置value字体设置
            valueAnimation: true,
            color: 'white',
          },
          data: [
            {
              value: 4000,
              name: 'LUX'
            }
          ],
          title: {//Lux，仪表盘标题的修改
            textStyle: {
              color: 'white',
              fontWeight: 'bolder',
              fontSize: '30px'
            }
          }
        },
        {//内层刻度盘
          type: 'gauge',
          radius: '70%',
          axisLine: {
            lineStyle: {
              distance: -30,
              color: [[1, 'white']],
              width: 8
            }
          },
          axisTick: {//设置表盘短刻度针，splitLine设置场刻度
            show: true,
            splitNumber: 3,
            distance: -39,
            lineStyle:{
              color: [[1, '#00ffff']],
              width: 2
            }
          },
          splitLine: {
            show: false,
          },
          pointer: {
            show: false
          },
          title: {
            show: false,
          },
          anchor: {
            show: true,
            size: 1,
            itemStyle: {
              color: '#00ffff'
            }
          },
          axisLabel: {//刻度字体设置
            show: false,
          },
        }
      ]
    })
  }
  useEffect(()=>{
    chartInit() 
  },[])
  return (
    // <div>
      // {/* 准备一个挂载节点 */}
      <div ref={domRef}  style={{width:'80%',height:'80%',margin:'0 auto'}}></div>
    // </div>
  )
}