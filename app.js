import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield'

var btns = document.querySelectorAll('.mdc-button');
for (var i = 0, btn; btn = btns[i]; i++) {
  MDCRipple.attachTo(btn);
}
var tfs = document.querySelectorAll('.mdc-text-field');
for (var i = 0, tf; tf = tfs[i]; i++) {
  MDCTextField.attachTo(tf);
}

// const textfield = new MDCTextField(document.querySelector('.mdc-text-field'));
