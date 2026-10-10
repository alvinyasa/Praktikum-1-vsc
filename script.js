document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });

    // Copy NIM to Clipboard
    const copyNimBtn = document.getElementById('copyNimBtn');
    const nimText = document.getElementById('nimText').innerText;
    const toast = document.getElementById('toast');

    copyNimBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(nimText).then(() => {
            showToast('NIM berhasil disalin: ' + nimText);
        }).catch(err => {
            showToast('Gagal menyalin NIM');
        });
    });

    function showToast(message) {
        toast.innerText = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Greeting Button Action
    const btnGreeting = document.getElementById('btnGreeting');
    btnGreeting.addEventListener('click', () => {
        alert('Halo! Salam kenal dari Alvin Yasa Shahada Putra (G.231.23.0146) - Kelompok A1 Praktikum Version Control System! 👋🚀');
    });
});
