# -*- coding: utf-8 -*-
"""
Created on Sun Feb  2 17:55:45 2025

@author: 15311
"""
import itertools
import matplotlib.pyplot as plt
import numpy as np

def convert_beat(beat_str):
    try:
        if '/' in beat_str:
            numerator, denominator = map(int, beat_str.split('/'))
            return float(numerator) / denominator
        else:
            return float(beat_str)
    except ValueError:
        print(f"Error: The string '{beat_str}' is not a valid beat representation.")

def get_stress(music):                  #用节奏重音计算曲折度
    pitch_stress=[]
    beat_stress_org=[0]
    stress_beat = 0
    #print(music.bars)
    for bar in music.bars:
        stress_pitch = None
        for note in bar.nodes:
            if note.pitch > 0:  # 如果音符不是空拍
                stress_pitch = note.pitch+12*note.octave
                stress_beat = bar.length-stress_beat  # 设置非空拍的时长
                pitch_stress.append(stress_pitch)
                beat_stress_org.append(stress_beat)
                stress_beat = 0  # 用于累加空拍的时长
                #print(stress_pitch,stress_beat)
                break  # 找到非空拍后跳出循环
            else:
                beat_stress_org[-1] += note.beat  # 累加空拍的时长
                stress_beat+=note.beat
        if stress_pitch is None:  # 如果小节内所有音符都是空拍
            continue  # 跳过这个小节，继续下一个
    beat_stress=list(itertools.accumulate(beat_stress_org))
    pitch_stress.append(pitch_stress[-1])
    #beat_stress.pop()
    #print(pitch_stress)
    print(beat_stress)
    return pitch_stress, beat_stress


def line_equation(pitch, cunsum, i):          #计算过两点的直线表达式
    
    y1= pitch[i]
    x1 = cunsum[i]
    y2 = pitch[i + 1]
    x2 = cunsum[i + 1]
    
    # 计算斜率 m
    m = (y2 - y1) / (x2 - x1)
    # 计算 y 轴截距 b
    b = y1 - m * x1
    
    # 返回直线方程的斜率和截距
    return m, b

def statistic(music):                    #计算旋律线级进与曲折程度;以及节奏的变化
    pitch=[]
    beat=[0]
    song_vis=[music.Name, music.Loc]
    stre_vis=[music.Name, music.Loc]
    node_sta=[0]*13
    for node in music.music_nodes:
        node_sta[node.pitch]+=1   #计算各音级出现频率
        if node.pitch !=0:
            pitch.append(node.pitch+node.octave*12)
            beat.append(node.beat)
        else:
            beat[-1]+=node.beat
    #endnode=music.music_nodes[-1]
    cunsum=list(itertools.accumulate(beat))
    #pitch.append(endnode.pitch+endnode.octave*12)
    cunsum.pop()
    for i in range(len(cunsum)):
        song_vis.append((cunsum[i],pitch[i]))
    #print(cunsum)
    #print(beat)
    #print(cunsum)
    '''
    pitch_stress, beat_stress=get_stress(music)    #用节奏重音进行比对
    for j in range(len(beat_stress)):
        stre_vis.append((pitch_stress[j],beat_stress[j]))
    #print(beat_stress)
    
    i_1=0
    i_2=0
    m1  = None
    b1 = None
    m2  = None
    b2 = None
    i=0
    
    sub_list=[]
    
    plt.figure(figsize=(24, 6))
    plt.plot(cunsum, pitch, label='Original Signal')
    plt.plot(beat_stress, pitch_stress, label='Stress Signal')
    plt.scatter(cunsum, pitch, color='blue')
    plt.scatter(beat_stress, pitch_stress, color='red')
    plt.title('Original Signal')
    plt.show()
    
    while i < cunsum[-1] :
        if i > cunsum[i_1 + 1] :
            i_1 +=1
            m1,b1 = line_equation(pitch, cunsum, i_1)
        elif m1 == None:
            m1,b1 = line_equation(pitch, cunsum, i_1)
        y1=m1*i + b1
        
        if i > beat_stress[i_2 + 1] :
            i_2 +=1
            m2,b2 = line_equation(pitch_stress, beat_stress, i_2)
        elif m2 == None:
            m2,b2 = line_equation(pitch_stress, beat_stress, i_2)
        y2=m2*i + b2
        sub_list.append(y1-y2)
        i += 0.01'''
    cal_fre=[x /sum(node_sta) for x in node_sta]
    beat.pop(0)
    beat_std=np.std(beat)
    beat_mean=np.mean(beat)#平均节拍长度
    ceov=beat_std/beat_mean#节奏变化
    return cal_fre, ceov, beat_mean, song_vis, stre_vis