define(['jquery-1.8.3'], function($) {
  return function(target, source) {
    $.extend(true, target, source);
  }
})
