document.addEventListener("mousemove", function(event) {
    requestAnimationFrame(() => {
        const glow = document.querySelector(".glow-effect");
        const x = event.clientX;
        const y = event.clientY;
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 123, 255, 0.4), transparent 50%)`;
        glow.style.opacity = "1"; // Make the glow visible
    });
});

// Optional: Hide glow effect when cursor stops moving
document.addEventListener("mouseleave", function() {
    document.querySelector(".glow-effect").style.opacity = "0";
});

