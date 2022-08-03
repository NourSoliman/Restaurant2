import { initialPageLoad } from './new.js'
import { menu } from '../src/menu.js'
import {contact} from '../src/contact'
// import map4 from './assets/contact25.png'
// img.src = map4

initialPageLoad();


let tabSwitch = (function(){
    let homeTab = document.querySelector(`.home`)
    homeTab.addEventListener(`click` , initialPageLoad);

    let menuTab = document.querySelector(`.menu`)
    menuTab.addEventListener(`click` , menu);

    let contactTab = document.querySelector(`.contact`)
    contactTab.addEventListener(`click` , contact)
}())