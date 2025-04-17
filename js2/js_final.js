 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1();
echarts_4()
echarts_31()
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
var piedata21=[
  
                {value:15.1, name:'Ⅰ类'},
                {value:50.6, name:'Ⅱ类'},
                {value:23.4, name:'Ⅲ类'},
                {value:8.4, name:'Ⅳ类'},
				{value:1.5, name:'Ⅴ类'},
				{value:1.0, name:'劣Ⅴ类'},
            ];
var piedata12=[
  
                {value:3, name:'Ⅰ类'},
                {value:33, name:'Ⅱ类'},
                {value:36, name:'Ⅲ类'},
                {value:13, name:'Ⅳ类'},
				{value:4, name:'Ⅴ类'},
				{value:11, name:'劣Ⅴ类'},
            ];
var piedata13=[
  
                {value:4, name:'Ⅰ类'},
                {value:34, name:'Ⅱ类'},
                {value:32, name:'Ⅲ类'},
                {value:15, name:'Ⅳ类'},
				{value:6, name:'Ⅴ类'},
				{value:9, name:'劣Ⅴ类'},
            ];
var piedata14=[
  
                {value:4, name:'Ⅰ类'},
                {value:34, name:'Ⅱ类'},
                {value:32, name:'Ⅲ类'},
                {value:14, name:'Ⅳ类'},
				{value:6, name:'Ⅴ类'},
				{value:10, name:'劣Ⅴ类'},
            ];
var piedata15=[
  
                {value:5.7, name:'Ⅰ类'},
                {value:33.0, name:'Ⅱ类'},
                {value:32.0, name:'Ⅲ类'},
                {value:13.5, name:'Ⅳ类'},
				{value:5.4, name:'Ⅴ类'},
				{value:10.4, name:'劣Ⅴ类'},
            ];
var piedata16=[
  
                {value:5.4, name:'Ⅰ类'},
                {value:41.5, name:'Ⅱ类'},
                {value:30.3, name:'Ⅲ类'},
                {value:12.2, name:'Ⅳ类'},
				{value:4.4, name:'Ⅴ类'},
				{value:6.2, name:'劣Ⅴ类'},
            ];
var piedata17=[];
var piedata18=[
  
                {value:9.3, name:'Ⅰ类'},
                {value:41.1, name:'Ⅱ类'},
                {value:23.8, name:'Ⅲ类'},
                {value:13.7, name:'Ⅳ类'},
				{value:5.0, name:'Ⅴ类'},
				{value:7.1, name:'劣Ⅴ类'},
            ];
var piedata19=[
  
                {value:10.0, name:'Ⅰ类'},
                {value:39.5, name:'Ⅱ类'},
                {value:28.1, name:'Ⅲ类'},
                {value:15.8, name:'Ⅳ类'},
				{value:3.8, name:'Ⅴ类'},
				{value:2.8, name:'劣Ⅴ类'},
            ];
var piedata20=[
  
                {value:13.4, name:'Ⅰ类'},
                {value:40.9, name:'Ⅱ类'},
                {value:30.3, name:'Ⅲ类'},
                {value:11.0, name:'Ⅳ类'},
				{value:3.3, name:'Ⅴ类'},
				{value:1.0, name:'劣Ⅴ类'},
            ];
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} %",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
       orient: 'vertical',
top:'25%',
		right:0,
       itemWidth: 10,
        itemHeight: 10,
        data:['Ⅰ类','Ⅱ类','Ⅲ类','Ⅳ类','Ⅴ类','劣Ⅴ类'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'占比',
            type:'pie',
			center: ['35%', '50%'],
            radius: ['40%', '50%'],
color: ['#0b27c9', '#3959cf','#2a69cf','#568de0','#7dc4e5','#a9daeb'],	
            label: {show:false},
			labelLine: {show:false},
            
        }
    ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
		setInterval(() => {
			dt = new Date();
			var s=dt.getSeconds();
			
			
var newpie = function(s){
       if( s >= 57 ){
        return piedata21;
       }else if( s >= 54 ){
        return piedata20;
       }else if( s >= 51 ){
        return piedata19;
       }else if( s >= 48 ){
        return piedata18;
       }else if( s >= 45 ){
        return piedata17;
       }else if( s >= 42 ){
        return piedata16;
       }else if( s >= 39 ){
        return piedata15;
       }else if( s >= 36 ){
        return piedata14;
       }else if( s >= 33 ){
        return piedata13;
       }else if( s >= 30 ){
        return piedata12;
       }else if( s >= 27 ){
        return piedata21;
       }else if( s >= 24 ){
        return piedata20;
       }else if( s >= 21 ){
        return piedata19;
       }else if( s >= 18 ){
        return piedata18;
       }else if( s >= 15 ){
        return piedata17;
       }else if( s >= 12 ){
        return piedata16;
       }else if( s >= 9 ){
        return piedata15;
       }else if( s >= 6 ){
        return piedata14;
       }else if( s >= 3 ){
        return piedata13;
       }else{
        return piedata12;
       };
    };
		

		
		
		
		let newpies = newpie(s);
		myChart.setOption({
		          
				  series: [{
				      data: newpies,
				  }]
		      });
			  
		  }, 3000);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart2 = echarts.init(document.getElementById('echart3'));
var bardata21= [4408.9, 2924.5, 1790.6, 1615.8, 1541.2, 1419.7, 1344.7, 1221.2, 1196.3, 1188.8];
var provdata21= ['藏', '川', '湘', '滇', '桂', '赣', '浙', '粤', '黑', '鄂'];
var provdata12= ['藏', '川', '粤', '赣', '桂', '湘', '滇', '闽', '浙', '黔'];
var provdata13= ['藏', '川', '粤', '桂', '滇', '湘', '赣', '黑', '闽', '蒙'];
var provdata14= ['藏', '川', '桂', '湘', '滇', '粤', '赣', '闽', '黔', '浙'];
var provdata15= ['藏', '桂', '川', '赣', '粤', '湘', '滇', '浙', '闽', '黔'];
var provdata16= ['藏', '桂', '川', '粤', '赣', '湘', '闽', '滇', '鄂', '浙'];
var provdata17= ['藏', '川', '桂', '滇', '湘', '粤', '赣', '鄂', '闽', '黔'];
var provdata18= ['藏', '川', '滇', '粤', '桂', '湘', '赣', '黑', '黔', '青'];
var provdata19= ['藏', '川', '桂', '湘', '粤', '赣', '滇', '黑', '闽', '浙'];
var provdata20= ['藏', '川', '湘', '桂', '滇', '鄂', '赣', '粤', '黑', '黔'];
var bardata12= [4196.35, 2892.36, 2195, 2174.36, 2059.4, 1988.94, 1689.77, 1511.44, 1454.8, 974.02];
var bardata13= [4415.74, 2470.27, 2263.17, 2057.33, 1706.69, 1581.97, 1423.99, 1419.58, 1151.9, 959.81];
var bardata14= [4416.3, 2557.66, 1990.9, 1799.42, 1726.63, 1704.5, 1631.81, 1219.62, 1213.12, 1133.85];
var bardata15= [3853, 2433.6, 2220.5, 2001.2, 1981, 1919.3, 1868, 1430.6, 1325.9, 1153.7];
var bardata16= [4642.2, 2454.5, 2340.9, 2232.7, 2221.1, 2196.6, 2109, 2089, 1498, 1322];
var bardata17= [4749.9, 2467.1, 2377.3, 2202.6, 1912.4, 1786.6, 1655.1, 1248.8, 1055.6, 1051.5];
var bardata18= [4658.2, 2952.6, 2206.5, 1895.1, 1831, 1342.9, 1149.1, 1011.4, 978.7, 961.9];
var bardata19= [4496.9, 2748.9, 2105.1, 2098.3, 2068.2, 2051.6, 1533.8, 1511.4, 1363.9, 1321.5];
var bardata20= [4597.3, 3237.3, 2118.9, 2114.8, 1799.2, 1754.7, 1685.6, 1626, 1419.9, 1328.6];



option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['总水资源量（单位：亿立方米）'],

		top:'2%',
        textStyle: {
            color: "rgba(255,255,255,.5)",
		    fontSize: '12',

        },
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '0%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '16',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '14',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: '总水资源量（单位：亿立方米）',
        type: 'bar',
        
        barWidth:'20%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option);
		setInterval(() => {
			dt = new Date();
			var s=dt.getSeconds();
			
			
			var newprov = function(s){
			     if( s >= 57 ){
			      return provdata21;
			     }else if( s >= 54 ){
			      return provdata20;
			     }else if( s >= 51 ){
			      return provdata19;
			     }else if( s >= 48 ){
			      return provdata18;
			     }else if( s >= 45 ){
			      return provdata17;
			     }else if( s >= 42 ){
			      return provdata16;
			     }else if( s >= 39 ){
			      return provdata15;
			     }else if( s >= 36 ){
			      return provdata14;
			     }else if( s >= 33 ){
			      return provdata13;
			     }else if( s >= 30 ){
			      return provdata12;
			     }else if( s >= 27 ){
			      return provdata21;
			     }else if( s >= 24 ){
			      return provdata20;
			     }else if( s >= 21 ){
			      return provdata19;
			     }else if( s >= 18 ){
			      return provdata18;
			     }else if( s >= 15 ){
			      return provdata17;
			     }else if( s >= 12 ){
			      return provdata16;
			     }else if( s >= 9 ){
			      return provdata15;
			     }else if( s >= 6 ){
			      return provdata14;
			     }else if( s >= 3 ){
			      return provdata13;
			     }else{
			      return provdata12;
			     };
			  };

			var newbar = function(s){
			    if( s >= 57 ){
			     return bardata21;
			    }else if( s >= 54 ){
			     return bardata20;
			    }else if( s >= 51 ){
			     return bardata19;
			    }else if( s >= 48 ){
			     return bardata18;
			    }else if( s >= 45 ){
			     return bardata17;
			    }else if( s >= 42 ){
			     return bardata16;
			    }else if( s >= 39 ){
			     return bardata15;
			    }else if( s >= 36 ){
			     return bardata14;
			    }else if( s >= 33 ){
			     return bardata13;
			    }else if( s >= 30 ){
			     return bardata12;
			    }else if( s >= 27 ){
			     return bardata21;
			    }else if( s >= 24 ){
			     return bardata20;
			    }else if( s >= 21 ){
			     return bardata19;
			    }else if( s >= 18 ){
			     return bardata18;
			    }else if( s >= 15 ){
			     return bardata17;
			    }else if( s >= 12 ){
			     return bardata16;
			    }else if( s >= 9 ){
			     return bardata15;
			    }else if( s >= 6 ){
			     return bardata14;
			    }else if( s >= 3 ){
			     return bardata13;
			    }else{
			     return bardata12;
			    };
			 };
		
		
		
		let newbars = newbar(s);
		let newprovs = newprov(s);
		myChart2.setOption({
		          xAxis: [{
		              data: newprovs,
		          }],
				  series: [{
				      data: newbars,
				  }]
		      });
			  
		  }, 3000);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
	var myChart7 = echarts.init(document.getElementById('sysx')); 
	var axisdata12=['·12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];
	var axisdata13=['12', '·13', '14', '15', '16', '17', '18', '19', '20', '21'];
	var axisdata14=['12', '13', '·14', '15', '16', '17', '18', '19', '20', '21'];
	var axisdata15=['12', '13', '14', '·15', '16', '17', '18', '19', '20', '21'];
	var axisdata16=['12', '13', '14', '15', '·16', '17', '18', '19', '20', '21'];
	var axisdata17=['12', '13', '14', '15', '16', '·17', '18', '19', '20', '21'];
	var axisdata18=['12', '13', '14', '15', '16', '17', '·18', '19', '20', '21'];
	var axisdata19=['12', '13', '14', '15', '16', '17', '18', '·19', '20', '21'];
	var axisdata20=['12', '13', '14', '15', '16', '17', '18', '19', '·20', '21'];
	var axisdata21=['12', '13', '14', '15', '16', '17', '18', '19', '20', '·21'];
	
	option7 = {
      //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '0',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 5,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
		min:2000,
		max:2200,
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
			 show: false,
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: '人均',
        type: 'line',
 //smooth: true,
        data: [2186.08, 2059.69, 2079.5, 2064, 2186.9, 2068.31, 2007.57, 2051.21, 2194, 2090.12],

        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }
	]
};
        // 使用刚指定的配置项和数据显示图表。
 
        myChart7.setOption(option7);
		setInterval(() => {
			dt = new Date();
			var s=dt.getSeconds();
			
			var newxaxisll = function(s){
			    if( s >= 57 ){
			     return axisdata21;
			    }else if( s >= 54 ){
			     return axisdata20;
			    }else if( s >= 51 ){
			     return axisdata19;
			    }else if( s >= 48 ){
			     return axisdata18;
			    }else if( s >= 45 ){
			     return axisdata17;
			    }else if( s >= 42 ){
			     return axisdata16;
			    }else if( s >= 39 ){
			     return axisdata15;
			    }else if( s >= 36 ){
			     return axisdata14;
			    }else if( s >= 33 ){
			     return axisdata13;
			    }else if( s >= 30 ){
			     return axisdata12;
			    }else if( s >= 27 ){
			     return axisdata21;
			    }else if( s >= 24 ){
			     return axisdata20;
			    }else if( s >= 21 ){
			     return axisdata19;
			    }else if( s >= 18 ){
			     return axisdata18;
			    }else if( s >= 15 ){
			     return axisdata17;
			    }else if( s >= 12 ){
			     return axisdata16;
			    }else if( s >= 9 ){
			     return axisdata15;
			    }else if( s >= 6 ){
			     return axisdata14;
			    }else if( s >= 3 ){
			     return axisdata13;
			    }else{
			     return axisdata12;
			    };
			 };
			 
		let newxaxis = newxaxisll(s);
		myChart7.setOption({
		          xAxis: [{
		              data: newxaxis,
		          }]
		      });
			  
		  }, 3000);
        window.addEventListener("resize",function(){
            myChart7.resize();
 
        });
    }
})



		
		
		


		









