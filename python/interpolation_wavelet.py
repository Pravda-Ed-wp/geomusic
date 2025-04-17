# -*- coding: utf-8 -*-
"""
Created on Wed Dec 25 17:21:11 2024

@author: 15311
"""
import itertools
import pywt
import numpy as np
from scipy.interpolate import CubicSpline,splrep, splev,interp1d
from scipy import optimize as op
import matplotlib.pyplot as plt
import io
import base64


def cubic(cunsum,h):
    # 目标插值点
    x_interp = np.linspace(cunsum[0], cunsum[-1], 100)
    # 执行三次样条插值
    cs = CubicSpline(cunsum, h)
    y_interp = cs(x_interp)
    
    return(x_interp,y_interp)


def sp(cunsum,h):
    tck = splrep(cunsum, h)
    # 目标插值点
    x_interp = np.linspace(cunsum[0], cunsum[-1], 100)
    # 执行二次样条插值
    y_interp = splev(x_interp, tck)
    
    return(x_interp,y_interp)

def p1d(cunsum,h):
    f_cubic = interp1d(cunsum, h, kind='cubic')#quadratic cubic
    x_interp = np.linspace(cunsum[0], cunsum[-1], 100)
    y_interp = f_cubic(x_interp)
    
    return(x_interp,y_interp)

def cal_twist(pitches, durations):
    l=[0]
    l.extend(durations)

    # 输入数据点
    cunsum=list(itertools.accumulate(l))
    cunsum.pop()
    x,sign=p1d(cunsum,pitches)
    signal_array = np.array(sign)
    # 选择小波基和分解层数
    wavelet = 'haar'  
    # 例如使用Daubechies小波 'db4'  Harr小波'haar'
    level = 1  # 分解层数
    coeffs = pywt.wavedec(signal_array, wavelet, level=level)

    #print("Approximation coefficients (cA):", coeffs[0])
    #print("Detail coefficients (cD):", coeffs[1:])
    # 重构信号
    reconstructed_signal = pywt.waverec(coeffs, wavelet)
    plt.figure(figsize=(14, 10))
    plt.subplot(4, 1, 1)
    plt.plot(x, sign, label='Original Signal', color='blue')
    plt.plot(x, reconstructed_signal, label='Reconstructed Signal', color='red')  # 重构信号
    plt.scatter(cunsum, pitches, label='Origin Point', color='purple')  # 重构信号
    #plt.legend()
    plt.title('Original Signal')

    # 绘制小波变换后的近似信号
    approx_signal = coeffs[0]
    plt.subplot(4, 1, 2)
    plt.plot(np.arange(len(approx_signal)), approx_signal, label='Approximation')
    plt.legend()
    plt.title('Approximation Signal')
    
    stretched = np.zeros(len(reconstructed_signal))
    c = (max(reconstructed_signal)-min(reconstructed_signal))/(max(approx_signal)-min(approx_signal))
    stretched[::2] = approx_signal*c - 2
    for i in range(1, len(reconstructed_signal) - 1, 2):
        stretched[i] = (stretched[i - 1] + stretched[i + 1]) / 2
    detail_signals = reconstructed_signal- stretched
    mean_detail_signals = np.mean(detail_signals)
    detail_signals = detail_signals - mean_detail_signals
    plt.subplot(4, 1, 3)
    plt.plot(np.arange(len(detail_signals)-1), detail_signals[:-1], label='Approximation')
    plt.legend()
    plt.title('Subtracted Signal')

    plt.subplot(4, 1, 4)
    plt.plot(np.arange(len(reconstructed_signal)), stretched, sign, label='Approximation')
    plt.legend()
    plt.title('Comparation')

    plt.tight_layout()

    # 保存图像到内存
    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)

    # 将图像编码为 Base64
    img_base64 = base64.b64encode(img.getvalue()).decode('utf-8')

    # 清理图像
    plt.close(img)

    # 返回 Base64 编码的图像和标准差
    return {
        "plot": f"data:image/png;base64,{img_base64}",
        "std": np.std(detail_signals)
    }
    

'''
path="D:\大学\地理\大创_音乐地理\华东\牧歌.txt"
#"D:\大学\地理\大创_音乐地理\茉莉花\数字化\江苏\茉莉花(一).txt"
#"D:\大学\地理\大创_音乐地理\茉莉花\数字化\茉莉花\山西\茉莉花（一）.txt"
#"D:\大学\地理\大创_音乐地理\华东\牧歌.txt"
music=get_music(path)
c=cal_twist(music)
print(c)'''

'''
# 绘制小波变换后的细节信号
detail_signals = coeffs[1:]
for i, detail_signal in enumerate(detail_signals, start=1):
    plt.subplot(3, 1, 3)
    plt.plot(np.arange(len(detail_signal)), detail_signal, label=f'Detail {i}')
    plt.legend()
plt.title('Detail Signals')'''

'''
def f(x,a,b,c,d,e):
    return a*x**4+b*x**3+c*x**2+d*x+e
a,b,c,d,e=op.curve_fit(f,cunsum,h)[0]
plt.plot(x, sign, label='Original Signal', color='blue')
y=a*x**4+b*x**3+c*x**2+d*x+e
plt.plot(x, y, label='fitted', color='red')  # 重构信号
plt.scatter(cunsum, h, label='Origin Point', color='purple')  # 重构信号
#plt.legend()
plt.title('Original Signal')'''