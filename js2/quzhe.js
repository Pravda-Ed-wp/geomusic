// 假设数据点如下（这里只展示部分数据点，你可以添加更多）
const dataPoints = [
    [0, 28.5], [1.25, 26.5], [2.5, 28.5], [3.75, 32], [5, 34], 
    [6.25, 32], [30, 35], [35, 33], [40, 30], [45, 32], 
    [50, 35], [55, 33], [60, 30], [65, 32], [70, 35], 
    [75, 33], [80, 30], [85, 32], [90, 35], [95, 33], 
    [100, 30], [105, 32], [110, 35], [115, 33], [120, 30], 
    [125, 32], [130, 35], [135, 33], [140, 30], [145, 32], 
    [150, 35], [155, 33], [160, 30], [165, 32], [170, 35], 
    [175, 33]
];

// 确保在 DOM 完全加载后执行代码
document.addEventListener('DOMContentLoaded', () => {
    // 获取图表容器
    const chartDom = document.getElementById('chart');
    if (!chartDom) {
        console.error('无法找到图表容器');
        return;
    }

    // 初始化 ECharts 实例
    const myChart = echarts.init(chartDom);

    // ECharts 配置
    const option = {
        title: {
            text: 'Original Signal'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Original Signal',
                data: dataPoints,
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#1989fa'
                }
            },
            {
                name: 'Stress Signal',
                data: dataPoints,
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#f57c00'
                }
            }
        ]
    };

    // 设置图表
    myChart.setOption(option);
    window.addEventListener("resize",function(){
    myChart.resize();
});
});
