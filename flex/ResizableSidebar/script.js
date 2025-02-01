// script.js
const sidebar = document.getElementById("sidebar");
const resizer = document.getElementById("resizer");

let isResizing = false;

resizer.addEventListener("mousedown", (event) => {
    isResizing = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
});

function handleResize(event) {
    if (isResizing) {
        let newWidth = event.clientX; // Ambil posisi mouse
        if (newWidth > 100 && newWidth < 500) { // Batas minimal dan maksimal
            sidebar.style.width = `${newWidth}px`;
        }
    }
}

function stopResize() {
    isResizing = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResize);
}
