# -*- coding: utf-8 -*-
"""
Created on Wed Mar 26 22:36:39 2025

@author: 15311
"""
from mido import Message, MidiFile, MidiTrack
import traceback

def generate_midi(pitches, durations):
    try:
        print("开始生成MIDI，音高:", pitches)
        print("开始生成MIDI，时长:", durations)
        
        mid = MidiFile()
        track = MidiTrack()
        mid.tracks.append(track)
        
        # 设置乐器为马林巴琴
        track.append(Message('program_change', program=12, time=0))
        
        for i in range(len(pitches)):
            # 确保音高和时长是数字
            pitch = int(pitches[i])
            duration = int(durations[i])
            
            # 添加音符开始事件
            track.append(Message('note_on', note=pitch, velocity=64, time=0))
            # 添加音符结束事件
            track.append(Message('note_off', note=pitch, velocity=64, time=duration))
        
        print("MIDI生成成功")
        return mid
    except Exception as e:
        print("MIDI生成错误:", str(e))
        print("堆栈跟踪:", traceback.format_exc())
        raise

