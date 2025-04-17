from flask import Flask, request, jsonify, send_file
from interpolation_wavelet import cal_twist
from flask_cors import CORS
from midi import generate_midi
from io import BytesIO
import traceback


app = Flask(__name__)
CORS(app)  # 允许所有域名跨域访问

@app.route('/python/midi', methods=['POST'])
def create_midi():
    try:
        data = request.get_json()
        print("接收到的数据:", data)  # 调试信息
        midi = generate_midi(data['pitches'], data['durations'])
        
        # 将MIDI文件存入内存
        midi_bytes = BytesIO()  
        midi.save(file=midi_bytes)
        midi_bytes.seek(0)
        
        return send_file(
            midi_bytes,
            mimetype='audio/midi',
            as_attachment=True,
            download_name='music.mid'
        )
    except Exception as e:
        print("错误详情:", str(e))  # 打印错误信息
        print("堆栈跟踪:", traceback.format_exc())  # 打印完整的堆栈跟踪
        return jsonify({"error": str(e), "traceback": traceback.format_exc()}), 500


@app.route('/python/interpolation_wavelet', methods=['POST'])
def interpolation_wavelet():
    try:
        data = request.json
        result = cal_twist(data['pitches'], data['durations'])
        return jsonify(result)
    
    except Exception as e:
        print("错误详情:", str(e))  # 打印错误信息
        print("堆栈跟踪:", traceback.format_exc())  # 打印完整的堆栈跟踪
        return jsonify({"error": str(e), "traceback": traceback.format_exc()}), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)