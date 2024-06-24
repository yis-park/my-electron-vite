import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function Dashboard() {
  // 차트 DOM 요소를 참조하기 위해 useRef를 사용합니다.
  const chartRef = useRef(null);

  const pieChartRef = useRef(null);
  useEffect(() => {
    // chartRef.current를 통해 DOM 요소에 접근합니다.
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
    // 컴포넌트가 언마운트될 때 차트를 정리합니다.
    return () => {
      myChart.dispose();
      pieChart.dispose();
    };
  }, []);

  return (
    <div className="dashboard">
      {/* chartRef를 div 요소에 할당합니다. */}
      <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>
      <div ref={pieChartRef} style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}

export default Dashboard;
