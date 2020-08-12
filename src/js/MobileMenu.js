import $ from "jquery";

export class MobileMenu {
  constructor() {
    this.burger = $(".burger__container");
    this.burgerIcon = $(".burger__icon");
    this.menu = $(".nav-menu__container");
    this.menuShowing = false;
    this.events();
  }

  events() {
    this.burger.on("click", this.toggleMenu.bind(this));
  }

  // Handlers
  toggleMenu() {
    this.menuShowing = !this.menuShowing;
    this.burger.toggleClass("menu-open");
    this.burgerIcon.toggleClass("menu-open");
    this.menu.toggleClass("menu-open");

    $(document.body).toggleClass("body-scroll");
  }
}
