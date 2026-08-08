(function() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Handle Resize
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Starfield Configuration
    const numStars = 120;
    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.1,
            speedY: (Math.random() - 0.5) * 0.1,
            alpha: Math.random(),
            twinkleSpeed: 0.005 + Math.random() * 0.015,
            hue: [180, 270, 320][Math.floor(Math.random() * 3)] // Cyan, Purple, or Magenta
        });
    }

    // 3D Brass Star Vertices & Edges
    const starVertices = [];
    const starEdges = [];

    // Construct 3D Star
    const outerRadius = 60;
    const innerRadius = 24;
    const thickness = 20;

    // 10 points on the XY plane
    for (let i = 0; i < 10; i++) {
        const angle = (i * Math.PI) / 5;
        const r = (i % 2 === 0) ? outerRadius : innerRadius;
        starVertices.push({
            x: Math.cos(angle) * r,
            y: Math.sin(angle) * r,
            z: 0
        });
    }
    // Front and Back peak vertices
    starVertices.push({ x: 0, y: 0, z: thickness });  // Vertex 10 (Front peak)
    starVertices.push({ x: 0, y: 0, z: -thickness }); // Vertex 11 (Back peak)

    // Build Edges
    for (let i = 0; i < 10; i++) {
        const next = (i + 1) % 10;
        // Outer loop connection
        starEdges.push([i, next]);
        // Front peak connection
        starEdges.push([i, 10]);
        // Back peak connection
        starEdges.push([i, 11]);
    }

    // Floating object position
    let objectPos = {
        x: width * 0.85,
        y: height * 0.35,
        targetX: width * 0.85,
        targetY: height * 0.35,
        driftRange: 80,
        angle: 0
    };

    // Rotation angles for 3D star
    let rotX = 0.3;
    let rotY = 0.5;
    let rotZ = 0.1;

    // Render loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw Starfield Background
        stars.forEach(star => {
            star.x += star.speedX;
            star.y += star.speedY;

            // Wrap edges
            if (star.x < 0) star.x = width;
            if (star.x > width) star.x = 0;
            if (star.y < 0) star.y = height;
            if (star.y > height) star.y = 0;

            // Twinkle
            star.alpha += star.twinkleSpeed;
            if (star.alpha > 1 || star.alpha < 0) {
                star.twinkleSpeed = -star.twinkleSpeed;
            }

            ctx.fillStyle = `hsla(${star.hue}, 100%, 75%, ${Math.max(0.1, star.alpha * 0.8)})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
        });

        // Update Floating Object Position (Drifting)
        objectPos.angle += 0.002;
        objectPos.x = objectPos.targetX + Math.sin(objectPos.angle) * objectPos.driftRange;
        objectPos.y = objectPos.targetY + Math.cos(objectPos.angle * 0.7) * (objectPos.driftRange * 0.5);

        // Adjust position target on screen resize
        objectPos.targetX = width * 0.85;
        objectPos.targetY = height * 0.35;

        // Update 3D Rotations
        rotX += 0.004;
        rotY += 0.006;
        rotZ += 0.002;

        // Project and Draw 3D Brass Star
        const projected = [];
        const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
        const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
        const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

        starVertices.forEach(v => {
            // Rotate around X
            let y1 = v.y * cosX - v.z * sinX;
            let z1 = v.y * sinX + v.z * cosX;

            // Rotate around Y
            let x2 = v.x * cosY + z1 * sinY;
            let z2 = -v.x * sinY + z1 * cosY;

            // Rotate around Z
            let x3 = x2 * cosZ - y1 * sinZ;
            let y3 = x2 * sinZ + y1 * cosZ;

            // Simple perspective projection
            const fov = 400;
            const scale = fov / (fov + z2);
            projected.push({
                x: objectPos.x + x3 * scale,
                y: objectPos.y + y3 * scale,
                depth: z2
            });
        });

        // Draw edges with depth-based opacity
        starEdges.forEach(edge => {
            const p1 = projected[edge[0]];
            const p2 = projected[edge[1]];

            // Calculate average depth
            const avgDepth = (p1.depth + p2.depth) / 2;
            // Map depth to opacity (brass golden glow)
            const alpha = Math.max(0.15, Math.min(0.7, 1 - (avgDepth + 40) / 120));

            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`; // Brass gold color
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
        });

        // Add subtle center flare
        ctx.shadowBlur = 30;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
        ctx.fillStyle = 'rgba(212, 175, 55, 0.05)';
        ctx.beginPath();
        ctx.arc(objectPos.x, objectPos.y, 40, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset shadow for performance
        ctx.shadowBlur = 0;

        requestAnimationFrame(animate);
    }

    animate();
})();
