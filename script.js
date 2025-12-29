document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link-item');
    const viewStack = document.getElementById('view-stack');
    const portfolioBtn = document.getElementById('portfolio-btn');
    const backBtn = document.getElementById('back-btn');
    const portfolioView = document.getElementById('portfolio-view');
    const homeView = document.getElementById('home-view');
    const homeHeading = document.getElementById('home-heading');
    const portfolioHeading = document.getElementById('portfolio-heading');
    let viewStackMinHeight = 0;
    let isTransitioning = false;

    links.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });

        link.addEventListener('click', function (e) {
            if (this.tagName === 'A' && this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    function setAriaState(isPortfolioOpen) {
        if (portfolioBtn) {
            portfolioBtn.setAttribute('aria-expanded', isPortfolioOpen.toString());
        }
        if (homeView) {
            homeView.setAttribute('aria-hidden', isPortfolioOpen.toString());
        }
        if (portfolioView) {
            portfolioView.setAttribute('aria-hidden', (!isPortfolioOpen).toString());
        }
    }

    function setPortfolioOpen(isOpen) {
        if (!viewStack) return;
        if (isTransitioning) return;

        setAriaState(isOpen);

        const rect = viewStack.getBoundingClientRect();
        if (rect.height > 0) {
            viewStack.style.height = `${rect.height}px`;
        }

        isTransitioning = true;
        viewStack.offsetHeight;

        viewStack.classList.toggle('is-portfolio', isOpen);
        if (portfolioView) {
            portfolioView.setAttribute('aria-hidden', (!isOpen).toString());
        }

        const transitionTarget = isOpen ? portfolioView : homeView;
        const fallbackTimer = window.setTimeout(() => {
            isTransitioning = false;
            viewStack.style.height = '';
            syncViewStackMinHeight();
            const focusTarget = isOpen ? portfolioHeading : homeHeading;
            if (focusTarget) focusTarget.focus();
        }, 550);

        if (transitionTarget) {
            const onEnd = (e) => {
                if (e.propertyName !== 'transform') return;
                window.clearTimeout(fallbackTimer);
                transitionTarget.removeEventListener('transitionend', onEnd);
                isTransitioning = false;
                viewStack.style.height = '';
                syncViewStackMinHeight();
                const focusTarget = isOpen ? portfolioHeading : homeHeading;
                if (focusTarget) focusTarget.focus();
            };
            transitionTarget.addEventListener('transitionend', onEnd);
        }
    }

    function syncViewStackMinHeight() {
        if (!viewStack || !homeView || !portfolioView) return;
        const homeH = homeView.offsetHeight;
        const portfolioH = portfolioView.offsetHeight;
        const maxH = Math.max(homeH, portfolioH);
        if (maxH > viewStackMinHeight) {
            viewStackMinHeight = maxH;
            viewStack.style.minHeight = `${viewStackMinHeight}px`;
        }
    }

    if (portfolioBtn) {
        portfolioBtn.addEventListener('click', function (e) {
            e.preventDefault();
            setPortfolioOpen(true);
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault();
            setPortfolioOpen(false);
        });
    }

    syncViewStackMinHeight();
    window.addEventListener('resize', syncViewStackMinHeight);
    window.addEventListener('load', syncViewStackMinHeight);
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(syncViewStackMinHeight).catch(() => {});
    }

    setAriaState(false);

    initTechBackground();
});

function initTechBackground() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;
    let t0 = performance.now();
    let rafId = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const scene = createScene();

    function resize() {
        w = Math.max(1, Math.floor(window.innerWidth));
        h = Math.max(1, Math.floor(window.innerHeight));
        cx = w * 0.5;
        cy = h * 0.5;
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onMouseMove(e) {
        const x = (e.clientX - cx) / Math.max(1, cx);
        const y = (e.clientY - cy) / Math.max(1, cy);
        targetMouseX = clamp(x, -1, 1);
        targetMouseY = clamp(y, -1, 1);
    }

    function step(now) {
        const dt = Math.min(0.05, (now - t0) / 1000);
        t0 = now;

        mouseX += (targetMouseX - mouseX) * Math.min(1, dt * 6);
        mouseY += (targetMouseY - mouseY) * Math.min(1, dt * 6);

        render(ctx, w, h, scene, now / 1000, mouseX, mouseY);
        rafId = requestAnimationFrame(step);
    }

    function renderOnce() {
        render(ctx, w, h, scene, 0, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    if (reducedMotion) {
        renderOnce();
        return;
    }

    rafId = requestAnimationFrame(step);

    window.addEventListener('pagehide', function () {
        if (rafId) cancelAnimationFrame(rafId);
    });
}

function createScene() {
    const points = [];
    const n = 64;
    for (let i = 0; i < n; i++) {
        points.push({
            x: rand(-1, 1),
            y: rand(-1, 1),
            z: rand(-1, 1),
            s: rand(0.4, 1.0)
        });
    }

    const edges = [];
    const k = 3;
    for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const nearest = [];
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            const q = points[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const dz = p.z - q.z;
            const d2 = dx * dx + dy * dy + dz * dz;
            nearest.push({ j, d2 });
        }
        nearest.sort((a, b) => a.d2 - b.d2);
        for (let m = 0; m < k; m++) {
            const j = nearest[m].j;
            if (j > i) edges.push([i, j]);
        }
    }

    const tris = [];
    for (let i = 0; i < points.length; i++) {
        const candidates = [];
        for (let e = 0; e < edges.length; e++) {
            const a = edges[e][0];
            const b = edges[e][1];
            if (a === i) candidates.push(b);
            else if (b === i) candidates.push(a);
        }
        if (candidates.length < 2) continue;
        for (let t = 0; t < 1; t++) {
            const j = candidates[(Math.random() * candidates.length) | 0];
            const k2 = candidates[(Math.random() * candidates.length) | 0];
            if (j === k2) continue;
            tris.push([i, j, k2]);
        }
    }

    return { points, edges, tris };
}

function render(ctx, w, h, scene, time, mouseX, mouseY) {
    ctx.clearRect(0, 0, w, h);

    const rotY = time * 0.35 + mouseX * 0.35;
    const rotX = time * 0.25 - mouseY * 0.25;
    const rotZ = time * 0.15;

    const cY = Math.cos(rotY);
    const sY = Math.sin(rotY);
    const cX = Math.cos(rotX);
    const sX = Math.sin(rotX);
    const cZ = Math.cos(rotZ);
    const sZ = Math.sin(rotZ);

    const scale = Math.min(w, h) * 0.70;
    const camZ = 2.9;

    const projected = new Array(scene.points.length);
    for (let i = 0; i < scene.points.length; i++) {
        const p = scene.points[i];
        let x = p.x;
        let y = p.y;
        let z = p.z;

        let x1 = x * cY + z * sY;
        let z1 = -x * sY + z * cY;

        let y2 = y * cX - z1 * sX;
        let z2 = y * sX + z1 * cX;

        let x3 = x1 * cZ - y2 * sZ;
        let y3 = x1 * sZ + y2 * cZ;

        const depth = camZ + z2;
        const persp = 1 / Math.max(0.6, depth);

        const sx = (w * 0.5) + x3 * scale * persp;
        const sy = (h * 0.5) + y3 * scale * persp;

        projected[i] = { x: sx, y: sy, z: z2, p: persp, s: p.s };
    }

    const glow = ctx.createRadialGradient(w * 0.5, h * 0.55, 0, w * 0.5, h * 0.55, Math.max(w, h) * 0.7);
    glow.addColorStop(0, 'rgba(255, 0, 212, 0.05)');
    glow.addColorStop(0.6, 'rgba(120, 80, 255, 0.03)');
    glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);

    const trisSorted = scene.tris
        .map(tri => {
            const a = projected[tri[0]];
            const b = projected[tri[1]];
            const c = projected[tri[2]];
            return { tri, z: (a.z + b.z + c.z) / 3 };
        })
        .sort((u, v) => u.z - v.z);

    for (let i = 0; i < trisSorted.length; i++) {
        const tri = trisSorted[i].tri;
        const a = projected[tri[0]];
        const b = projected[tri[1]];
        const c = projected[tri[2]];
        const alpha = clamp(0.01 + (a.p + b.p + c.p) * 0.006, 0.002, 0.012);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.lineTo(c.x, c.y);
        ctx.closePath();
        ctx.fillStyle = `rgba(0, 255, 200, ${alpha})`;
        ctx.fill();
    }

    ctx.lineWidth = 1;
    for (let i = 0; i < scene.edges.length; i++) {
        const e = scene.edges[i];
        const a = projected[e[0]];
        const b = projected[e[1]];
        const z = (a.z + b.z) * 0.5;
        const alpha = clamp(0.04 + (1.2 - (z + 1.2)) * 0.03, 0.02, 0.12);
        ctx.strokeStyle = `rgba(180, 220, 255, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
    }

    for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const r = (1.9 + p.s * 2.4) * p.p;
        const alpha = clamp(0.10 + p.p * 0.06, 0.07, 0.26);

        ctx.fillStyle = `rgba(0, 255, 200, ${alpha * 0.22})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 2.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${clamp(alpha + 0.12, 0, 0.85)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.7, r * 0.48), 0, Math.PI * 2);
        ctx.fill();
    }

    const vignette = ctx.createRadialGradient(w * 0.5, h * 0.5, Math.min(w, h) * 0.2, w * 0.5, h * 0.5, Math.max(w, h) * 0.75);
    vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vignette.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, w, h);
}

function rand(min, max) {
    return min + Math.random() * (max - min);
}

function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}
