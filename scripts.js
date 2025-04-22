document.addEventListener("DOMContentLoaded", function() {
    alert("أهلاً وسهلاً بك في موقعنا!");
  });
  document.querySelector('.btn').addEventListener('click', function() {
    alert('شكراً لتواصلكم معنا!');
});
// يخفي واجهة البداية بعد 3 ثواني
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("splash-screen").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("splash-screen").style.display = "none";
    }, 1000); // بعد اختفاء تدريجي
  }, 3000); // مدة العرض 3 ثواني
});






const leftImages = ['circle1-1.jpg', 'circle1-2.jpg', 'circle1-3.jpg'];
const rightImages = ['circle2-1.jpg', 'circle2-2.jpg', 'circle2-3.jpg'];

let currentLeft = 0;
let currentRight = 0;

const leftImg = document.querySelector('.circle-image.left img');
const rightImg = document.querySelector('.circle-image.right img');

setInterval(() => {
  currentLeft = (currentLeft + 1) % leftImages.length;
  currentRight = (currentRight + 1) % rightImages.length;

  leftImg.style.opacity = 0;
  rightImg.style.opacity = 0;

  setTimeout(() => {
    leftImg.src = leftImages[currentLeft];
    rightImg.src = rightImages[currentRight];

    leftImg.style.opacity = 1;
    rightImg.style.opacity = 1;
  }, 500);
}, 3000);













// هذا القسم مازال قيد التعديل قابل للحذف-فسم تحديث اسعار الذهب
async function fetchGoldPrice() {
  const apiKey = 'b1c12573023758321b05b7ca36e89272b1c12573';
  const url = `https://www.goldpricez.com/api/rates?currency=usd&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.result && data.result.XAU) {
      const goldPrice = data.result.XAU.price_gram_24k;

      document.getElementById('gold-price').innerText = `سعر الذهب عيار 24: ${goldPrice.toFixed(2)} USD للغرام`;

      const now = new Date();
      const timeString = now.toLocaleTimeString('ar-EG');
      document.getElementById('refresh-time').innerText = `آخر تحديث: ${timeString}`;
    } else {
      document.getElementById('gold-price').innerText = 'تعذر جلب السعر.';
    }
  } catch (error) {
    document.getElementById('gold-price').innerText = 'حدث خطأ أثناء تحميل البيانات.';
  }
}

// التحديث الأولي + التحديث كل ساعة
fetchGoldPrice();
setInterval(fetchGoldPrice, 3600000);










