document.addEventListener('DOMContentLoaded', loadEvents);

function loadEvents() {
    // Scroll Buttons
    // [anchor-link-id, scroll-target-id]
    [
        ['_btn-scroll-plans', '_section-plans'],
        ['_btn-scroll-start', '_section-features'],
        ['_food-link', '_section-features'],
        ['_steps-link', '_section-steps'],
        ['_cities-link', '_section-cities'],
        ['_signup-link', '_section-plans'],
    ].forEach(link => {
        document
            .getElementById(link[0])
            .addEventListener(
                'click',
                quickScroll(document.getElementById(link[1]), 500, 'ease-out')
            );
    });

    // For sticky navigation
    new Waypoint({
        element: document.getElementById('_section-features'),
        handler: direction => {
            document.querySelector('nav').classList.toggle('sticky');
            if (window.innerWidth < 768) {
                if (direction === 'down')
                    document.getElementById('_nav-icon').style.display =
                        'inline-block';
                else {
                    document.getElementById('_nav-icon').style.display = 'none';
                }
            }
        },
        offset: '60px',
    });

    new Waypoint({
        element: document.getElementById('_premium'),
        handler: () =>
            (document.getElementById('_premium').className =
                'plan-box animated pulse'),
        offset: '50%',
    });

    // Mobile Navigation

    const nav = document.getElementById('_main-nav');
    document.getElementById('_nav-icon').addEventListener('click', () => {
        toggleMenu();
    });

    nav.addEventListener('click', e => {
        e.preventDefault();
        if (window.innerWidth < 768 && e.target.tagName === 'A') toggleMenu();
    });

    const icon = document.querySelector('#_nav-icon ion-icon');

    function toggleMenu() {
        if (nav.style.display !== 'block') {
            showMenu();
        } else {
            closeMenu();
        }
    }

    function showMenu() {
        nav.className = 'main-nav animated fadeIn';
        nav.style.display = 'block';
        icon.setAttribute('name', 'close');
    }

    function closeMenu() {
        nav.style.display = 'none';
        nav.className = 'main-nav';
        icon.setAttribute('name', 'menu');
    }
}

window.sr = ScrollReveal();

sr.reveal('#_waypoint-features', {
    duration: 2000,
    viewFactor: 0.2,
});

sr.reveal('.app-screen', {
    duration: 1000,
    origin: 'bottom',
    distance: '250px',
    viewFactor: 0.5,
});

sr.reveal('.fade-left', {
    duration: 1500,
    delay: 500,
    origin: 'left',
    distance: '250px',
    viewFactor: 0.4,
});

sr.reveal('.fade-right', {
    duration: 1500,
    delay: 500,
    origin: 'right',
    distance: '250px',
    viewFactor: 0.4,
});
