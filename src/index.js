import "./sass/style.scss";

/* eslint-disable no-unused-vars */
import { MobileMenu } from "./js/MobileMenu";

const mobileMenu = new MobileMenu();

// Allow new JS and CSS to load in browser without a traditional page refresh
if (module.hot) module.hot.accept();