import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import SweetScroll from "sweet-scroll";

let surfaces = document.querySelectorAll('.mdc-button, .book-card');
surfaces.forEach(function (surface) {
  new MDCRipple(surface);
});

// var tfs = document.querySelectorAll('.mdc-text-field');
// for (var i = 0, tf; tf = tfs[i]; i++) {
//   MDCTextField.attachTo(tf);
// }

const sweetScroll = new SweetScroll({ trigger: "a[href^='#']" });
