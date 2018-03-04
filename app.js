import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield'
import SweetScroll from "sweet-scroll"

window.onload = () => {
  window.scrollTo(0,0);
}

var btns = document.querySelectorAll('.mdc-button');
for (var i = 0, btn; btn = btns[i]; i++) {
  MDCRipple.attachTo(btn);
}

var cards = document.querySelectorAll('.mdc-card__primary-action');
for (var i = 0, card; card = cards[i]; i++) {
  MDCRipple.attachTo(card);
}

var tfs = document.querySelectorAll('.mdc-text-field');
for (var i = 0, tf; tf = tfs[i]; i++) {
  MDCTextField.attachTo(tf);
}

const sweetScroll = new SweetScroll({
  trigger: "a[href^='#']"
});
