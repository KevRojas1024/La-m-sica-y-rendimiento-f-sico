document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const currentLocation = window.location.href;

    links.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }

        link.addEventListener('click', function() {
            links.forEach(lnk => lnk.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
