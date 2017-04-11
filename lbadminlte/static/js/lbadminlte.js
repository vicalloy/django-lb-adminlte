String.prototype.replaceAll = function(s1,s2) {
  return this.replace(new RegExp(s1, "gm"), s2);
}

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}

function fmtOneRowField(fieldName) {
  $('label[for=id_' + fieldName + ']').removeClass('col-xs-4').addClass('col-xs-2');
  $('#id_' + fieldName + '').parent().removeClass('col-xs-8').addClass('col-xs-10');
}

$(function(){
  $("a.with-next").attr('href', function(i, h) {
    var url = encodeURIComponent(document.URL);
    return h + (h.indexOf('?') != -1 ? "&next=" : "?next=") + url;
  });

  $('.btn-del').click(function(){
    return confirm('Are you sure to delete this item?');
  });

  $('.goback').click(function(){
    if (NEXT_URL) {
      window.location = NEXT_URL;
    } else {
      history.go(-1);
    }
  });

  $('button.btn-primary').click(function(){
    var t = $(this);
    if (t.hasClass('ignore-disabled')) {
      return true;
    }
    this.disabled=true;
    t.closest('form').submit();
    return false;
  });

  function isIE () {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
  }

  function fixIE8() {
    if($('body').hasClass('sidebar-collapse')) {
      $('.left-side').css('left', '-230px');
    }
  }

  if(isIE() == 8) {
    fixIE8();
  }

});
