let idleTimeout;
let isMoving = false;
let angle = 0;
startIdleAnimation();
function updateMousePosition(event) {
	const centerX = window.innerWidth / 2;
	const centerY = window.innerHeight / 2;
	const xD = event.clientX - centerX;
	const yD = event.clientY - centerY;
	document.documentElement.style.setProperty("--x-d", Math.abs(xD));
	document.documentElement.style.setProperty("--y-d", yD);
	isMoving = true;
	clearTimeout(idleTimeout);
	idleTimeout = setTimeout(startIdleAnimation, 1000);
}

function startIdleAnimation() {
	isMoving = false;
	function animateIdle() {
		if (!isMoving) {
			angle += 0.001;
			const radius = 500;
			const x = Math.cos(angle) * radius;
			const y = Math.sin(angle) * radius;
			document.documentElement.style.setProperty("--x-d", Math.abs(x));
			document.documentElement.style.setProperty("--y-d", y / 1.24);
			requestAnimationFrame(animateIdle);
		}
	}
	requestAnimationFrame(animateIdle);
}
document.addEventListener("mousemove", updateMousePosition);
