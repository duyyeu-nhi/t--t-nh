let yesSize = 18;
let maxYesSize = 500; // Giới hạn kích thước tối đa
let noButton = document.getElementById("no");

// Lưu vị trí ban đầu của nút "Không"
let initialX = noButton.offsetLeft;
let initialY = noButton.offsetTop;

function moveNoButton() {
    let maxOffset = 30; // Giới hạn di chuyển tối đa trong 30px

    // Chọn một vị trí mới gần vị trí ban đầu
    let newX = initialX + (Math.random() * maxOffset * 12 - maxOffset);
    let newY = initialY + (Math.random() * maxOffset * 13 - maxOffset);

    // Đặt lại vị trí cho nút "Không"
    noButton.style.position = "absolute";
    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";

    // Nút "Có" lớn dần, nhưng không quá 30px
    if (yesSize < maxYesSize) {
        yesSize += 3;
        document.getElementById("yes").style.fontSize = yesSize + "px";
    }
}

// Thêm sự kiện cho mobile (touch)
document.getElementById("no").addEventListener("touchstart", moveNoButton);
document.getElementById("no").addEventListener("mouseover", moveNoButton);

function showMessage() {
    let customPopup = document.createElement("div");
    customPopup.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            text-align: center;
            font-size: 18px;
        ">
            <p>Yay! Mình yêu Nhi nhiều! 💕</p>
            <button id="uhmButton" style="
                background-color: #ff4081;
                color: white;
                border: none;
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                border-radius: 5px;
                margin-top: 10px;
            ">Uhm 🥰</button>
        </div>
    `;

    document.body.appendChild(customPopup);

    document.getElementById("uhmButton").onclick = function() {
        document.body.removeChild(customPopup);
        startConfetti();
    };
}

function startConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    })();
}
