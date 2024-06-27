import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { DashboardLayout } from "../components/Layout";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);
function DashboardGrid() {
  const LAYOUTS = {
    lg: [
      { i: "a", x: 0, y: 0, w: 4, h: 2, minW: 1, maxW: 4, minH: 2, maxH: 4 },
      { i: "b", x: 0, y: 2, w: 4, h: 2, minW: 1, maxW: 4, minH: 2, maxH: 4 },
      { i: "c", x: 0, y: 2, w: 2, h: 2, minW: 1, maxW: 4, minH: 2, maxH: 4 },
      { i: "d", x: 2, y: 2, w: 2, h: 2, minW: 1, maxW: 4, minH: 2, maxH: 4 },
    ],
    md: [
      { i: "a", x: 0, y: 0, w: 2, h: 2, minW: 1, maxW: 2, minH: 2, maxH: 3 },
      { i: "b", x: 0, y: 2, w: 1, h: 2, minW: 1, maxW: 2, minH: 2, maxH: 3 },
      { i: "c", x: 0, y: 2, w: 2, h: 2, minW: 1, maxW: 2, minH: 2, maxH: 3 },
      { i: "d", x: 0, y: 4, w: 2, h: 2, minW: 1, maxW: 2, minH: 2, maxH: 3 },
    ],
  };

  // 차트 DOM 요소를 참조하기 위해 useRef를 사용합니다.

  const graphicRef = useRef(null);
  const chartRef = useRef(null);
  const pieChartRef = useRef(null);
  const soundChartRef = useRef(null);
  useEffect(() => {
    // chartRef.current를 통해 DOM 요소에 접근합니다.
    const graphicDom = graphicRef.current;
    const graphicChart = echarts.init(graphicDom);

    const graphicOption = {
      graphic: {
        elements: [
          {
            type: "text",
            left: "center",
            top: "center",
            style: {
              text: "seul-tagram",
              fontSize: 80,
              fontWeight: "bold",
              lineDash: [0, 200],
              lineDashOffset: 0,
              fill: "transparent",
              stroke: "#000",
              lineWidth: 1,
            },
            keyframeAnimation: {
              duration: 4000,
              loop: true,
              keyframes: [
                {
                  percent: 0.7,
                  style: {
                    fill: "transparent",
                    lineDashOffset: 200,
                    lineDash: [200, 0],
                  },
                },
                {
                  // Stop for a while.
                  percent: 0.8,
                  style: {
                    fill: "transparent",
                  },
                },
                {
                  percent: 1,
                  style: {
                    fill: "black",
                  },
                },
              ],
            },
          },
        ],
      },
    };

    graphicChart.setOption(graphicOption);

    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    // 옵션을 설정합니다.
    const barOption = {
      title: {
        text: "Stacked Line",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        right: "auto",
        bottom: 0,
        padding: 0,
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };

    // 차트를 설정합니다.
    myChart.setOption(barOption);

    const PieChartDom = pieChartRef.current;
    const pieChart = echarts.init(PieChartDom);

    const pieOption = {
      title: {
        text: "나는 무슨 생각을 하고 있을까?",
        top: "8%",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        left: "center",
        bottom: 0,
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "집가고싶다" },
            { value: 735, name: "배고프다" },
            { value: 580, name: "이게 되네?" },
            { value: 484, name: "이거 왜 안돼" },
            { value: 300, name: "어,,,?" },
          ],
        },
      ],
    };

    pieChart.setOption(pieOption);

    const soundDom = soundChartRef.current;
    const soundChart = echarts.init(soundDom);

    const soundOption = {
      graphic: {
        elements: [
          {
            type: "group",
            left: "center",
            top: "center",
            children: new Array(7).fill(0).map((val, i) => ({
              type: "rect",
              x: i * 20,
              shape: {
                x: 0,
                y: -40,
                width: 10,
                height: 80,
              },
              style: {
                fill: "#5470c6",
              },
              keyframeAnimation: {
                duration: 1000,
                delay: i * 200,
                loop: true,
                keyframes: [
                  {
                    percent: 0.5,
                    scaleY: 0.3,
                    easing: "cubicIn",
                  },
                  {
                    percent: 1,
                    scaleY: 1,
                    easing: "cubicOut",
                  },
                ],
              },
            })),
          },
        ],
      },
    };

    soundChart.setOption(soundOption);

    const handleResize = () => {
      myChart.resize();
      pieChart.resize();
      soundChart.resize();
      graphicChart.resize();
    };
    window.addEventListener("resize", handleResize);
    // 컴포넌트가 언마운트될 때 차트를 정리합니다.
    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
      pieChart.dispose();
      soundChart.dispose();
      graphicChart.dispose();
    };
  }, []);

  return (
    <DashboardLayout>
      <main className="dashboard">
        <ResponsiveGridLayout
          className="layout"
          layouts={LAYOUTS}
          breakpoints={{ lg: 1200, xs: 480, xxs: 0 }}
          cols={{ lg: 4, md: 2, sm: 6, xs: 4, xxs: 2 }}
        >
          <div key="a" style={{ width: "100%", height: "100%" }}>
            <div ref={graphicRef} style={{ width: "100%", height: "100%" }} />
          </div>
          <div key="b" style={{ width: "100%", height: "100%" }}>
            <div ref={chartRef} style={{ width: "100%", height: "100%" }} />
          </div>
          <div key="c" style={{ width: "100%", height: "100%" }}>
            <div ref={pieChartRef} style={{ width: "100%", height: "100%" }} />
          </div>
          <div key="d" style={{ width: "100%", height: "100%" }}>
            <div
              ref={soundChartRef}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </ResponsiveGridLayout>
      </main>
    </DashboardLayout>
  );
}

export default DashboardGrid;
