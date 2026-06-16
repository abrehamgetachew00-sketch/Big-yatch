from flask import Flask, jsonify
import random
import time

app = Flask(__name__)

@app.route('/api/metrics', methods=['GET'])
def get_metrics():
    """
    Simulates production server hardware calculations.
    In a live deployment, use `psutil` library to pull true machine metrics.
    """
    simulated_cpu = random.randint(15, 90)
    simulated_memory = round(random.uniform(2.5, 14.8), 2)
    
    return jsonify({
        "status": "HEALTHY",
        "timestamp": int(time.time()),
        "telemetry": {
            "cpu_usage_percent": simulated_cpu,
            "memory_allocated_gb": simulated_memory,
            "runtime_engine": "Python 3.11/Flask"
        }
    })

if __name__ == '__main__':
    print("Starting Python Metrics Telemetry Engine on port 5000...")
    app.run(port=5000, debug=True)
