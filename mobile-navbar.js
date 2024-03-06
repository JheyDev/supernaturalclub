class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobilemenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);

        if (this.mobilemenu) {
            this.addClickEvent();
        }
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = "navLinkFade 0.5s ease forwards 0.3s");
        });
    }

    addClickEvent() {
        this.mobilemenu.addEventListener("click", this.handleClick);
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);