document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points = [];
    const numPoints = 100;
    const maxDistance = 100;
    const mouse = { x: null, y: null };

    for (let i = 0; i < numPoints; i++) {
        points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
        });
    }

    canvas.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < numPoints; i++) {
            const p1 = points[i];
            p1.x += p1.vx;
            p1.y += p1.vy;

            if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
            if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

            for (let j = i + 1; j < numPoints; j++) {
                const p2 = points[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / maxDistance})`;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }

            if (mouse.x && mouse.y) {
                const dx = p1.x - mouse.x;
                const dy = p1.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / maxDistance})`;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(draw);
    }

    draw();

    // Download counter logic
    const downloadButton = document.getElementById('download-button');
    const downloadCounter = document.getElementById('download-counter');

    let count = localStorage.getItem('downloadCount') || 0;
    updateCounter(count);

    downloadButton.addEventListener('click', () => {
        count++;
        localStorage.setItem('downloadCount', count);
        updateCounter(count);
    });

    function updateCounter(count) {
        const tens = Math.floor(count / 10);
        const ones = count % 10;

        downloadCounter.innerHTML = `
            <div class="nums nums-ten">
                ${createNums(tens)}
            </div>
            <div class="nums nums-one">
                ${createNums(ones)}
            </div>
        `;
    }

    function createNums(current) {
        let numsHtml = '';
        for (let i = 0; i < 10; i++) {
            numsHtml += `<div class="num" data-num="${i}" data-num-next="${(i + 1) % 10}" style="transform: ${i === current ? 'rotateX(-180deg)' : 'rotateX(0)'};"></div>`;
        }
        return numsHtml;
    }
});
