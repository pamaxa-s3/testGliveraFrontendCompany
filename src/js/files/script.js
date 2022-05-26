// Подключение функционала "Чертогов Фрилансера"
import {
   isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";

const closeTop = document.querySelector('.top-header__close');
const headerTopBlock = document.querySelector('.header__top');

closeTop.addEventListener('click', () => {
   headerTopBlock.style.display = 'none';
})