import {MDCRipple} from '@material/ripple';

var btns = document.querySelectorAll('.mdc-button');
for (var i = 0, btn; btn = btns[i]; i++) {
  MDCRipple.attachTo(btn);
}
