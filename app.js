import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import SweetScroll from "sweet-scroll";

const rippleSurfaces = document.querySelectorAll('.mdc-button, .book-card');
rippleSurfaces.forEach(function (surface) {
  new MDCRipple(surface);
});

const textFields = document.querySelectorAll('.mdc-text-field');
textFields.forEach(function (textField) {
  new MDCTextField(textField);
});

const helperTexts = document.querySelectorAll('.mdc-text-field-helper-text');
helperTexts.forEach(function (helperText) {
  new MDCTextFieldHelperText(helperText);
});

// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

// var tfs = document.querySelectorAll('.mdc-text-field');
// for (var i = 0, tf; tf = tfs[i]; i++) {
//   MDCTextField.attachTo(tf);
// }

const sweetScroll = new SweetScroll({ trigger: "a[href^='#']" });

// function onSubmit(token) {
//   document.querySelector('.home_contact-form').submit();
// }
