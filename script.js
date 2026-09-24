// تابع باز کردن ساید
function openSide(side) {
  const container = document.getElementById("splitContainer");
  
  if (side === 'left') {
    container.classList.remove("right-open");
    container.classList.add("left-open");
  } else if (side === 'right') {
    container.classList.remove("left-open");
    container.classList.add("right-open");
  }
}

// تابع بستن سایدها و برگشت به حالت اولیه
function closeSides() {
  const container = document.getElementById("splitContainer");
  container.classList.remove("left-open", "right-open");
}

// توابع پاپ‌آپ پرداخت کریپتو
function openModal() {
  document.getElementById("cryptoModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("cryptoModal").style.display = "none";
}

// بستن پاپ آپ در صورت کلیک روی فضای خالی
window.onclick = function(event) {
  let modal = document.getElementById("cryptoModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}