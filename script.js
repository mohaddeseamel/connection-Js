const el = document.createElement('div');
document.querySelector('.content').append(el);

window.addEventListener('online' , e => {
    el.textContent = 'online';
    el.className = 'alert';
    el.classList.add('alert-success');
});

window.addEventListener('offline' , e => {
    el.textContent = 'offline';
    el.className = 'alert';
    el.classList.add('alert-danger');
});