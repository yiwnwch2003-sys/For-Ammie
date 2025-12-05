// เปิดหน้าแรก
let pages = document.querySelectorAll(".page");
let i = 0;
pages[0].classList.add("active");

// ปุ่มถัดไป
const audio = document.getElementById("bgm");
const nextButtons = document.querySelectorAll(".next");

// เมื่อกดปุ่ม "ถัดไป" ครั้งแรก → เริ่มเล่นเพลง
nextButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(e => {
                console.log("ต้องสัมผัสหน้าจอก่อนเพลงถึงเล่นได้");
            });
        }
    });
});
document.querySelectorAll(".next").forEach(btn => {
    btn.onclick = () => {
        pages[i].classList.remove("active");
        i++;
        pages[i].classList.add("active");
    };
});

// หัวใจลอย
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

let hearts = [];

function addHeart() {
    hearts.push({
        x: Math.random() * canvas.width,
        y: canvas.height,
        size: Math.random() * 15 + 10,
        speed: Math.random() * 1 + 0.5
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((h, i) => {
        ctx.fillStyle = "rgba(255, 0, 80, 0.8)";
        ctx.beginPath();
        ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
        ctx.fill();
        h.y -= h.speed;
        if (h.y < -20) hearts.splice(i, 1);
    });
    requestAnimationFrame(draw);
}

setInterval(addHeart, 200);
draw();
const images = [
    "your-photo1.jpg",
    "your-photo2.jpg",
    "your-photo3.jpg",
    "your-photo4.jpg"
];

function showPopup() {
    const container = document.getElementById("popup-container");

    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.className = "popup";

    // ขนาดแบบสุ่มเล็กน้อย
    const randomSize = 140 + Math.random() * 40;
    img.style.width = randomSize + "px";

    // สุ่มตำแหน่งแบบไม่หลุดจอ
    img.style.top = Math.random() * 70 + "%";
    img.style.left = Math.random() * 70 + "%";

    container.appendChild(img);

    // ลบรูปหลัง 4 วินาที
    setTimeout(() => {
        img.remove();
    }, 4000);
}

// เด้งรูปทุก 1.2 วินาที
setInterval(showPopup, 1200);