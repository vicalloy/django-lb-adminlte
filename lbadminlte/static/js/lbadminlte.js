String.prototype.replaceAll = function(s1,s2) {
  return this.replace(new RegExp(s1, "gm"), s2);
}

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}

function fmtOneRowField(fieldName) {
  $('#id_' + fieldName + '').parent().removeClass('col-md-4').addClass('col-md-10');
}

// upload start ...

function initAttachUpload(sel, ndiv) {
  var ul = $('ul.attachs', ndiv);
  $('.attachupload', ndiv).fileupload({
      url: URL_UPLOAD_ATTACH,
      dataType: 'json',
      add: function (e, data) {
        var li = $('<li/>').append(
          '<span class="">' + data.files[0].name + '</span> | ' +
          '<span class="">Uploading:</span> | ' +
            '<span class="finished-radio"">0%</span>'
        );
        if (LT_IE9) {
          li = $('<li/>').append(
            '<span class="">' + data.files[0].name + '</span> | ' +
              '<span class="">Uploading...</span> ' +
              '<span class="finished-radio""></span>'
          );
        }
        data.li = li;
        ul.append(li);
        data.submit();
      },
      progress: function (e, data) {
        var radio = parseInt(data.loaded / data.total * 100, 10);
        $('.finished-radio', data.li).text(radio + '%');
      },
      done: function (e, data) {
        //$('.btn-add-attach', ndiv).show();
        $('.uploading', ndiv).hide();
        var f = data.result.file;
        if (!f) return;
        var li = data.li;
        li.html('');
        li = li.append(f.fn);
        li.append(' <a href="###" class="btn-rm-attach" oid="' + f.id +'"><span class="glyphicon glyphicon-remove"></span></a>');
        ul.append(li);
        initRmAttachBtn($('.btn-rm-attach', ul), sel);
        var op = $('<option/>')
        op.attr('selected', 'selected');
        op.attr('value', f.id);
        sel.append(op);
      }
  });
}

function initRmAttachBtn(el, sel) {
  el.click(function(){
    var t = $(this);
    t.closest('li').remove();
    var oid = t.closest('a').attr('oid');
    $("option[value='" + oid + "']", sel).remove();
  });
}

function initUploader(sel, btnTxt) {
  sel.hide();
  if (!sel.attr('id')) return;
  var ul = $('<ul class="attachs"/>');
  $('option:selected', sel).each(function(){
    var t = $(this);
    var li = $('<li/>').append(t.text());
    li.append(' <a href="###" class="btn-rm-attach" oid="' + t.attr('value') +'"><span class="glyphicon glyphicon-remove"></span></a>');
    ul.append(li)
  });
  if (!btnTxt) {
    btnTxt = 'Add';
  }
  var btnUpload = $('<span class="fileinput-button">' + btnTxt +
    '<input class="attachupload" type="file" multiple="multiple" name="file"/>' +
    '</span>');
  var ndiv = $('<div></div>');
  ndiv.append(btnUpload);
  ndiv.append(ul);
  sel.after(ndiv);
  initRmAttachBtn($('.btn-rm-attach', ul), sel);
  initAttachUpload(sel, ndiv);
}

// upload end ...

$(function(){
  try {
    $(".datetimeinput").flatpickr({enableTime: true});
  } catch(err) {}

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
