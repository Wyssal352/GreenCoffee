document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const notification = document.getElementById('notification');
    notification.classList.add('visible');

    setTimeout(() => {
        notification.classList.remove('visible');
    }, 3000);
});
