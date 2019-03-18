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

const sweetScroll = new SweetScroll({ trigger: "a[href^='#']" });

window.onload = function () {
  document.getElementById('home_contact-form-submit').onclick = function () {
    if (!document.getElementById("contact-form").checkValidity()) {
      alert("入力内容に誤りがあります。")
      return;
    }
    grecaptcha.execute();
    const loop = setInterval(function () {
      if (!!grecaptcha.getResponse()) {
        document.getElementById("contact-form").submit();
        clearInterval(loop);
      }
    }, 100)
  }
}
