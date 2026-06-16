// --- MATRIX BACKGROUND REIN ---
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const alphabetArray = (katakana + alphabet).split('');

const fontSize = 16;
let columns = canvas.width / fontSize;
const rainDrops = Array.from({ length: columns }).fill(canvas.height);

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff66';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 30);

// --- SIMULATED METRICS DATA FLOW ---
const logTerminal = document.getElementById('logTerminal');

function addLog(message, type = "INFO") {
    const line = document.createElement('p');
    line.className = 'log-line';
    line.innerHTML = `[${type}] ${new Date().toLocaleTimeString()} - ${message}`;
    logTerminal.appendChild(line);
    logTerminal.scrollTop = logTerminal.scrollHeight;
    
    if(logTerminal.children.length > 20) {
        logTerminal.removeChild(logTerminal.children[0]);
    }
}

// Emulate backend data consumption
setInterval(() => {
    // Math logic mimicking metrics
    const cpu = Math.floor(Math.random() * (85 - 20 + 1)) + 20;
    const mem = (Math.random() * (12.4 - 4.1) + 4.1).toFixed(1);
    const net = (Math.random() * (450.5 - 12.0) + 12.0).toFixed(1);

    document.getElementById('cpuVal').innerText = `${cpu}%`;
    document.getElementById('cpuBar').style.width = `${cpu}%`;

    document.getElementById('memVal').innerText = `${mem} GB`;
    document.getElementById('memBar').style.width = `${(mem / 16) * 100}%`;

    document.getElementById('netVal').innerText = `${net} Mb/s`;

    if(cpu > 75) {
        addLog(`High CPU Threshold Alert: ${cpu}% load detected.`, "WARN");
    } else if (Math.random() > 0.7) {
        addLog(`Ingesting metrics packet from microservice node.`);
    }
}, 2000);

// Clock
setInterval(() => {
    document.getElementById('liveClock').innerText = new Date().toUTCString().replace('GMT', 'UT');
}, 1000);
