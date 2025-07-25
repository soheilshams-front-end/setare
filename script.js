const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
});

AOS.init();

// فایل script.js
// ======== کد فعال سازی هوشمند آیکون های پنل موبایل ========

// فقط زمانی این کد را اجرا کن که پنل موبایل وجود دارد
if (document.getElementById('mobile-nav')) {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#mobile-nav a');

    const observerOptions = {
        root: null, // مشاهده نسبت به کل صفحه
        rootMargin: '0px',
        threshold: 0.5 // زمانی که 50% از بخش دیده شد
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}


// فایل script.js

// این کد را در ابتدای فایل قرار دهید
window.onload = function() {
    // به محض بارگذاری کامل صفحه، اسکرول را به بالای صفحه منتقل کن
    window.scrollTo(0, 0);
};

// (اختیاری اما پیشنهادی) غیرفعال کردن قابلیت بازیابی اسکرول مرورگر
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

/* بقیه کدهای شما (هدر شیشه ای، AOS.init، دکمه بازگشت به بالا و ...)
   بعد از این قسمت قرار میگیرند.
*/

// فایل script.js

// این تابع را با نسخه جدید جایگزین کن
window.onload = function() {
    // ۱. ابتدا عنصر پری‌لودر را انتخاب میکنیم
    const preloader = document.getElementById('preloader');
    
    // ۲. کلاس مربوط به مخفی شدن را به آن اضافه میکنیم
    if (preloader) {
        preloader.classList.add('hide-preloader');
    }
    
    // ۳. اسکرول را به بالای صفحه منتقل میکنیم (کد قبلی)
    window.scrollTo(0, 0);
};

/* بقیه کدهای شما */
// ...







// فایل script.js

// این کد را در ابتدای فایل قرار دهید


/* بقیه کدهای شما (پری‌لودر، اسکرول و ...) از اینجا به بعد شروع میشوند */
// window.onload = function() { ... }

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#hero-title", {
        speed: 50,      // سرعت تایپ
        startDelay: 200, // تاخیر قبل از شروع
        cursor: false,  // حذف نشانگر چشمک زن تایپ  
    }).go();
});

// فایل script.js
// ======== کد مربوط به تب های برنامه کلاسی ========

// فایل script.js
// ======== کد جدید و کامل برای تب های برنامه کلاسی با انیمیشن خط ========

const tabsContainer = document.querySelector('.schedule-tabs');
const tabs = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');
const indicator = document.querySelector('.tab-indicator');

// تابعی برای به‌روزرسانی موقعیت خط انیمیشنی
function updateIndicator(activeTab) {
    if (indicator && activeTab) {
        indicator.style.width = `${activeTab.offsetWidth}px`;
        indicator.style.left = `${activeTab.offsetLeft}px`;
    }
}

// در ابتدای بارگذاری صفحه، خط را زیر تب فعال قرار بده
const initialActiveTab = document.querySelector('.tab-link.active');
updateIndicator(initialActiveTab);

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // ابتدا کلاس active را از همه حذف کن
        tabs.forEach(item => item.classList.remove('active'));
        contents.forEach(item => item.classList.remove('active'));

        // به تبی که کلیک شده و محتوای مربوط به آن، کلاس active را اضافه کن
        tab.classList.add('active');
        const targetContent = document.getElementById(tab.dataset.tab);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // موقعیت خط انیمیشنی را به‌روز کن
        updateIndicator(tab);
    });
});


// فایل script.js
// ======== کد مربوط به فرم محاوره‌ای ========

const conversationalForm = document.getElementById('contact-form');

if (conversationalForm) {
    const steps = conversationalForm.querySelectorAll('.form-step');
    const nextButtons = conversationalForm.querySelectorAll('.next-btn');
    let currentStep = 1;

    function goToStep(stepNumber) {
        steps.forEach(step => {
            const stepIndex = parseInt(step.dataset.step);
            if (stepIndex === stepNumber) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        currentStep = stepNumber;
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            // یک اعتبارسنجی ساده
            const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
            const input = currentStepElement.querySelector('input');
            if (input && input.value.trim() === '') {
                // میتوانید یک انیمیشن لرزش برای خطا اضافه کنید
                alert('لطفاً این قسمت را پر کنید.');
                return;
            }
            goToStep(currentStep + 1);
        });
    });

    conversationalForm.addEventListener('submit', function(e) {
        e.preventDefault(); // جلوگیری از رفرش صفحه
        // در اینجا میتوانید انیمیشن ارسال را نمایش دهید
        // سپس فرم را با AJAX ارسال کنید یا اجازه دهید به صورت عادی ارسال شود
        setTimeout(() => {
            goToStep(4); // نمایش پیام موفقیت
        }, 500);
        // برای ارسال واقعی، خط e.preventDefault() را کامنت کنید
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // پیدا کردن تمام دکمه‌های تب
    const tabButtons = document.querySelectorAll('.tab-link');
    
    // پیدا کردن تمام پنل‌های محتوا
    const contentPanels = document.querySelectorAll('.day-content');

    // اضافه کردن یک event listener به هر دکمه
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            // ۱. حذف کلاس active از تمام دکمه‌ها
            tabButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // ۲. اضافه کردن کلاس active به دکمه‌ای که کلیک شده
            button.classList.add('active');
            
            // ۳. پیدا کردن نام روز از اتریبیوت data-day
            const targetDay = button.getAttribute('data-day');
            
            // ۴. مخفی کردن تمام پنل‌های محتوا
            contentPanels.forEach(function(panel) {
                panel.classList.remove('active');
            });
            
            // ۵. نمایش پنل محتوای مربوط به دکمه کلیک شده
            const targetPanel = document.getElementById(targetDay);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});