import './vendor/focus-visible.min.js';
import './_vars';
import './functions/jquery.inputmask.min'
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import { disableScroll, enableScroll } from './functions/stop-scroll';
import './components/slider'
import $ from "jquery";

//disableScroll(fix) // fix -> class of element with position: fixed
$(function () {
  $("#phone").inputmask("+7 (999) 999-99-99" );

});
