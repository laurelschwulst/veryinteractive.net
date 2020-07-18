/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
              DM: Plus modifications to add ff to all Firefox; ios to all iOS; win7; and xp
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff ff2':is('firefox/3.5')?g+' ff ff3 ff3_5':is('firefox/3.6')?g+' ff ff3 ff3_6':is('firefox/3')?g+' ff ff3':is('firefox/4')?g+' ff ff4':is('firefox/5')?g+' ff ff5':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/5/.test(ua)?' safari4':/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' ios iphone':is('ipod')?m+' ios ipod':is('ipad')?m+' ios ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.1')?' win7':is('windows nt 6.0')?' vista':is('windows nt 5.2')?' xp':is('windows nt 5.1')?' xp':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);

/* Shadowbox */

Shadowbox.init({
    continuous: true,
    overlayOpacity: 0.99,
    troubleElements: ["select", "object", "embed", "canvas", "iframe"],
    onOpen: function() {
        if ($$('html').first().hasClassName('ios')) {
            ios_move_shadowbox();
            Event.observe(window, 'scroll', ios_move_shadowbox);
        }
    },
    onFinish: function() {
        if ($$('html').first().hasClassName('ios')) {
            $("sb-container").setStyle({width: (document.viewport.getWidth() + 30) + 'px', height: (document.viewport.getHeight() + (ipad ? 80 : 150)) + 'px'});
        }
    },
    onClose: function() {
        if ($$('html').first().hasClassName('ios')) {
            Event.stopObserving(window, 'scroll', ios_move_shadowbox);
        }
    }
});
function ios_move_shadowbox() {
    $('sb-container').style['-webkit-transform'] = 'translateY(' + window.scrollY + 'px)';
}

/* AUDIO & VIDEO */

function audio_player(file_to_play, container, autostart){
  var s = new SWFObject('/swfs/player.swf','ply','200','20','9','#ffffff');
  s.addParam('allowfullscreen','true');
  s.addParam('allowscriptaccess','always');
  s.addParam('wmode','opaque');
  s.addParam('flashvars','file=' + file_to_play + '&autostart=' + (autostart ? 'true' : 'false'));
  s.write(container);
}

function video_player(file_to_play, container, w, h, autostart){
  if(!w) w = '235';
  if(!h) h = '160';
  var s = new SWFObject('/swfs/player.swf','mpl',w,h,'9');
  s.addParam('allowfullscreen','true');
  s.addParam('allowscriptaccess','always');
  s.addParam('flashvars','&duration=34&file=' + file_to_play + '&controlbar=over&autostart=' + (autostart ? 'true' : 'false'));
  s.write(container);
}

/* MODAL ALERTS */

function confirmBox(msg, buttons, options) {
  var out = '<div class="confirm-box">';
  out += '<div class="message">' + msg + '</div>';
  out += '<div class="buttons">';
  if ((typeof buttons != 'object') || (buttons.length == undefined)) buttons = [buttons];
  for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      out += '<button type="button"';
      if (typeof button == 'string') button = {label: button};
      if (button.value == undefined) button.value = i + 1;
      if (button.id == undefined) button.id = 'confirm-box-button-' + button.value;
      out += ' id="' + button.id + '"';
      if ((button.css_class == 'default') && (button.default_option == undefined)) button.default_option = true;
      if ((button.default_option == true) && (button.css_class == undefined)) button.css_class = 'default';
      if (button.css_class != undefined) out += ' class="' + button.css_class + '"';
      if (button.default_option == true) out += ' tabindex="1"';
      out += ' onclick="'
      if (button.disable_with == undefined) button.disable_with = button.disable;
      if (button.disable_with != undefined) {
          if (button.disable_with != true) out += "this.update('" + button.disable_with + "');"
          out += "this.up('.buttons').select('button').each(function(b) { b.disabled = true; });"
      }
      if (button.close_box != false) out += 'Modalbox.hide();'
      if (button.onclick != undefined) {
          if (typeof button.value == 'string') button.value = "'" + button.value + "'";
          if (typeof button.onclick == 'function') {
              if (button.onclick.name == '') button.onclick = "f = " + button.onclick + "(" + button.value + ");";
              else button.onclick = button.onclick.name + "(" + button.value + ");";
          }
          out += button.onclick;
      }
      out += '">';
      out += button.label;
      out += '</button>'
  }
  out += '</div>';
  out += '</div>';
  if (options == undefined) options = {};
  if (options.width == undefined) options.width = 400;
  Modalbox.show(out, options)
}

function alertBox(message){
 confirmBox(message,  [{label: 'OK', onclick: "Modalbox.hide();" ,  close_box: false }], {title: 'Alert'}); }

function fit_modalbox_content() { Modalbox.resizeToContent(); };

/* UTILITY */

function to_ajax_param(val, name) {
    return String(val).strip().empty() ? "" : "&" + name + "=" + val;
}

function dummy(){}

function make_ajax_call(url,css_id){
  var url_array = url.split("?");
  show_spinner_for(css_id + "-crud-pagination-spinner");
  new Ajax.Request(url_array[0], {asynchronous:true, evalScripts:true, parameters:url_array[1] });
}

function call_page_with_params(pars){
  var path = window.location.href.split("?")[0].gsub(/\/$/,"");
  if(pars.empty()) window.location = path; else window.location = path + "?" + pars;
}

function show_spinner_for(css_id){ $(css_id).innerHTML = "<img src=\"/images/spinner.gif\" alt=\"Please wait\" />"; }
function hide_spinner_for(css_id){ $(css_id).innerHTML = ""; }

function redirect_to(url){
  window.location = url;
}

Date.prototype.day_names        = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
Date.prototype.month_names      = ["January","February","March","April","May","June","July","August","September","October","November","December"];
Date.prototype.short_month_names= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
Date.prototype.days_of_month    = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
Date.prototype.days_of_month_LY = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
Date.prototype.msPERDAY = 1000 * 60 * 60 * 24;
Date.prototype.isDate = true;
Date.prototype.addDays = function(d) {
  this.setDate( this.getDate() + parseInt(d) );
}

Date.prototype.addMonths = function(m) {
  this.setMonth( this.getMonth() + parseInt(m));
}

Date.prototype.dbEncode = function(){
  var mins = this.getMinutes();
  var hours = this.getHours();
  if(mins<10) mins='0'+mins;
  if(hours<10) hours='0'+hours;
  return (this.getMonth()+1)+'x'+this.getDate()+'x'+this.getFullYear()+' '+hours+':'+mins;
}

Date.prototype.dbEncodeDate = function(){
  return (this.getMonth()+1)+'x'+this.getDate()+'x'+this.getFullYear();
}

Date.prototype.daysInMonth = function() {
  var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
  return d.getDate();
};

Date.prototype.firstDay = function(){
  var d = new Date(this.getFullYear(), this.getMonth(), 1);
  return d.getDay() % 7;
}

Date.prototype.monthName = function(){
  return this.month_names[this.getMonth()];
}

/* GLOBAL LAYOUT */

// Flash message

Event.observe(window, 'load', function() {
  var flash_message_fade = $('flash-message-fade');
  var flash_message = $('flash-message');
  if (flash_message && flash_message_fade) {
      var ms = parseInt(flash_message_fade.value);
      if (ms > 0) setTimeout(function() { flash_message.fade(); }, ms);
  }
});

// Search input

function search_focus(field) {
    field = $(field);
    field.up('.search').down('.search-submit').show();
    if (field.hasClassName('blank-search')) {
        field.removeClassName('blank-search');
        field.value = '';
    }
}

function search_blur(field, message) {
    field = $(field);
    if (field.value.strip() == '') {
        field.up('.search').down('.search-submit').hide();
        field.addClassName('blank-search');
        field.value = message || 'Search';
    }
}

function search_check(field, message) {
    field = $(field);
    if (field.value.strip() == '') {
		field.addClassName('blank-search');
        field.value = message;
    } else if (field.hasClassName('blank-search')) {
        field.removeClassName('blank-search');
        field.value = '';
    }
}

// Support p:last-child in older browsers

document.observe('dom:loaded', function() {
   $$('p:last-child').each(function(p) { p.addClassName('last-child') });
});

// Feed icons

document.observe('dom:loaded', function() {
   $$('a.feed-icon[title]').each(function(el) {
        el.tip = new Tip(el, el.title, {
            hook: {target: 'bottomLeft', tip: 'topLeft'},
            offset: {x: 0, y: 0}
        });
        el.removeAttribute('title');
   });
});

/* MAGIC MODULES */

// SignupModule

document.observe('dom:loaded', function() {
   $$('.signup-module').each(function(signup_module) {
       signup_module.down('.signup-module-form').observe('submit', function(e) {
           var but = signup_module.down('.signup-module-signup');
           but.value = 'Please wait...';
           but.disabled = true;
       });
   });
});

// LoginModule

document.observe('dom:loaded', function() {
   $$('.login-module').each(function(login_module) {
       login_module.down('.login-module-email').focus();
       login_module.down('.login-module-form').observe('submit', function(e) {
           var but = login_module.down('.login-module-login');
           but.value = 'Please wait...';
           but.disabled = true;
       });
       $$('.page-header-login').each(function(el) {
           el.addClassName('current');
       });
   });
});

// FileModule

document.observe('dom:loaded', function() {
   $$('.file-module a[title]').each(function(el) {
        el.tip = new Tip(el, el.title, {
            hook: {target: 'bottomLeft', tip: 'topLeft'},
            offset: {x: 0, y: 4}
        });
        el.removeAttribute('title');
   });
});

// SlideshowModule

var slideshow_module_auto_fade_duration = 0; // 0.75;
var slideshow_module_manual_fade_duration = 0; // 0.25;
var slideshow_module_timers = {}
var slideshow_module_in_progress = {}

document.observe('dom:loaded', function() {
   $$('.slideshow-module').each(function(el) {
        if (el.down('.slideshow-module-load-flickr')) {
            new Ajax.Request("/ajax/magic_modules/slideshow_module/get_flickr_images",
                {asynchronous: true, evalScripts: true,
                    parameters: "id=" + el.down('.slideshow-module-id').value + "&page_id=" + el.down('.slideshow-module-page-id').value +
                    '&columns=' + el.down('.slideshow-module-columns').value});
        }
        else {
            slideshow_module_init(el);
        }
   });
});
function slideshow_module_init(mm) {
    $(mm).select('.slideshow-module-slide-image img').each(function(img) {
        if (img.hasAttribute('title') && (img.title != '')) {
             img.tip = new Tip(img, img.title, {hook: {mouse: true, tip: 'bottomLeft'}});
             img.title = '';
        }
    });
}

function slideshow_module_load(css_id, slide_num, fade_in, fade_out) {
    // console.log("Slideshow module load " + css_id + " " + slide_num + " " + fade_in)
    var slide = $(css_id + '-slide-' + slide_num);
    var caption_placeholder = slide.down('.slideshow-module-caption-placeholder');
    if (caption_placeholder) {
        new Ajax.Request("/ajax/magic_modules/slideshow_module/get_flickr_description",
            {asynchronous: true, evalScripts: true, parameters: "id=" + $(css_id + '-id').value + "&page_id=" + $(css_id + '-page-id').value +
                    '&slide_num=' + slide_num + '&photo_id=' + caption_placeholder.value});
    }
    var placeholder = slide.down('.slideshow-module-slide-placeholder');
    if (placeholder) {
        var src = placeholder.down('.slideshow-module-img-src');
        var width = placeholder.down('.slideshow-module-img-width');
        var height = placeholder.down('.slideshow-module-img-height');
        var alt = placeholder.down('.slideshow-module-img-alt');
        var title = placeholder.down('.slideshow-module-img-title');
        var img = '<img src="' + src.value + '" alt="' + (alt ? alt.value : '') + '" title="' + (title ? title.value : '') + '"';
        if (width) img += ' width="' + width.value + '"';
        if (height) img += ' height="' + height.value + '"';
        if (fade_in != undefined && fade_in !== false) img += ' onload="slideshow_module_fade_in(' + "'" + css_id + "', " + slide_num + ', ' + fade_in + ", '" + fade_out + "'" + ');"';
        img += ' />'
        placeholder.replace(img);
        img = slide.down('img');
        if (img.hasAttribute('title') && (img.title != '')) {
             img.tip = new Tip(img, img.title, {hook: {mouse: true, tip: 'bottomLeft'}});
             img.title = '';
        }
    }
    else if (fade_in != undefined && fade_in !== false) {
        slideshow_module_fade_in(css_id, slide_num, fade_in, fade_out)
    }
}
function slideshow_module_fade_in(css_id, slide_num, duration, fade_out) {
    if ($(css_id + '-caption-placeholder-' + slide_num)) {
        slideshow_module_in_progress[css_id] = {slide_num: slide_num, duration: duration};
    }
    else {
        var num_slides = parseInt($(css_id + '-num-slides').value);
        var slide = $(css_id + '-slide-' + slide_num);
        var variable_container = $(css_id).down('.slideshow-module-container-variable-height');
        if (variable_container) {
            var caption = slide.down('.caption');
            var pager = variable_container.down('.slideshow-pager');
            var height = parseInt(slide.down('img').getAttribute('height'));
            var temp_vis_fix = false;
            if (slide.getStyle('display') == 'none') {
                temp_vis_fix = true;
                slide.setStyle({visibility: 'hidden', display: 'block'});
            }
            var caption_height = caption ? caption.getHeight() : -2;
            if (temp_vis_fix) slide.setStyle({visibility: 'visible', display: 'none'});
            variable_container.setStyle({height: (height + caption_height + 2) + 'px'});
            slide.setStyle({height: height + 'px'});
            slide.down('.slideshow-module-slide-inner').setStyle({height: height + 'px'});
            if (pager) pager.setStyle({bottom: (caption_height + 2) + 'px'});
            if (caption) caption.setStyle({top: (height + 2) + 'px'});
        }
        new Effect.Appear(slide, {duration: duration || slideshow_module_manual_fade_duration, afterFinish: function() {
                if (fade_out != undefined) new Effect.Fade(fade_out, {duration: duration});
                slideshow_module_in_progress[css_id] = false;
                slide_num += 1;
                if (slide_num > num_slides) slide_num = 1;
                if (num_slides > 1) {
                    slideshow_module_load(css_id, slide_num);
                    slideshow_module_start_timer(css_id);
                }
        }});
    }
}
function slideshow_module_caption_ready(css_id, slide_num, caption, alt, title) {
    if (caption == undefined) caption = '';
    var caption_div = $(css_id + '-caption-' + slide_num);
    if (caption_div) {
        if (caption == '') caption_div.remove();
        else caption_div.update(caption);
    }
    if (alt || title) {
        var img = $(css_id + '-slide-' + slide_num).down('img');
        if (img) {
            if (alt) img.alt = alt;
            if ((title) && (title != '')) {
                img.tip = new Tip(img, title, {hook: {mouse: true, tip: 'bottomLeft'}});
                img.title = '';
            }
        }
    }
    if ((slideshow_module_in_progress[css_id]) && ((typeof slideshow_module_in_progress[css_id]) == 'object') && (slideshow_module_in_progress[css_id]['slide_num'] == slide_num)) {
        slideshow_module_fade_in(css_id, slide_num, slideshow_module_in_progress[css_id]['duration']);
    }
}

function slideshow_module_start_timer(css_id) {
    if ($(css_id + '-playing').value == 'true') {
        var timing = parseFloat($(css_id + '-timing').value);
        if (timing > 0) {
            if (slideshow_module_timers[css_id]) clearTimeout(slideshow_module_timers[css_id]);
            slideshow_module_timers[css_id] = setTimeout(function() { slideshow_module_auto_next(css_id); }, timing);
        }
    }
}

function slideshow_module_next(css_id, auto) {
    if (!slideshow_module_in_progress[css_id]) {
        var slide_num = parseInt($(css_id + '-slide-num').value);
        var num_slides = parseInt($(css_id + '-num-slides').value);
        if ((slide_num > 0) && (num_slides > 0)) {
            if (!auto) {
                $(css_id + '-playing').value = 'false';
                if ($(css_id + '-pause')) $(css_id + '-pause').addClassName('paused');
            }
            if (slideshow_module_timers[css_id]) {
                clearTimeout(slideshow_module_timers[css_id]);
                slideshow_module_timers[css_id] = undefined;
            }
            slideshow_module_in_progress[css_id] = true;
            var duration = auto ? slideshow_module_auto_fade_duration : slideshow_module_manual_fade_duration;
            var new_slide_num = slide_num + 1;
            if (new_slide_num > num_slides) new_slide_num = 1;
            if (duration == 0) {
                $(css_id + '-slide-num').value = new_slide_num;
                $(css_id).fire('slideshowmodule:newslide');
                slideshow_module_load(css_id, new_slide_num, duration, css_id + '-slide-' + slide_num);
            }
            else {
                new Effect.Fade(css_id + '-slide-' + slide_num, {duration: duration, afterFinish: function() {
                        $(css_id + '-slide-num').value = new_slide_num;
                        $(css_id).fire('slideshowmodule:newslide');
                        slideshow_module_load(css_id, new_slide_num, duration);
                }});
            }
        }
    }
}
function slideshow_module_auto_next(css_id) {
    slideshow_module_next(css_id, true);
}

function slideshow_module_previous(css_id) {
    if (!slideshow_module_in_progress[css_id]) {
        var slide_num = parseInt($(css_id + '-slide-num').value);
        var num_slides = parseInt($(css_id + '-num-slides').value);
        if ((slide_num > 0) && (num_slides > 0)) {
            $(css_id + '-playing').value = 'false';
            if ($(css_id + '-pause')) $(css_id + '-pause').addClassName('paused');
            if (slideshow_module_timers[css_id]) {
                clearTimeout(slideshow_module_timers[css_id]);
                slideshow_module_timers[css_id] = undefined;
            }
            slideshow_module_in_progress[css_id] = true;
            var new_slide_num = slide_num - 1;
            if (new_slide_num < 1) new_slide_num = num_slides;
            if (slideshow_module_manual_fade_duration == 0) {
                $(css_id + '-slide-num').value = new_slide_num;
                $(css_id).fire('slideshowmodule:newslide');
                slideshow_module_load(css_id, new_slide_num, slideshow_module_manual_fade_duration, css_id + '-slide-' + slide_num);
            }
            else {
                new Effect.Fade(css_id + '-slide-' + slide_num, {duration: slideshow_module_manual_fade_duration, afterFinish: function() {
                        $(css_id + '-slide-num').value = new_slide_num;
                        $(css_id).fire('slideshowmodule:newslide');
                        slideshow_module_load(css_id, new_slide_num, slideshow_module_manual_fade_duration);
                }});
            }
        }
    }
}

function slideshow_module_pause(css_id) {
    if ($(css_id + '-playing').value == 'true') {
        $(css_id + '-playing').value = 'false';
        if (slideshow_module_timers[css_id]) {
            clearTimeout(slideshow_module_timers[css_id]);
            slideshow_module_timers[css_id] = undefined;
        }
        if ($(css_id + '-pause')) $(css_id + '-pause').addClassName('paused');
    }
    else {
        $(css_id + '-playing').value = 'true';
        if ($(css_id + '-pause')) $(css_id + '-pause').removeClassName('paused');
        if (parseFloat($(css_id + '-timing').value) > 0) slideshow_module_auto_next(css_id);
    }
}

// MegaSlideshowModule

var mega_slideshow_module_height = 720;
document.observe('dom:loaded', function() {
    $$('.mega-slideshow-module').each(function(mm) {

        mega_slideshow_module_height = document.viewport.getHeight() - parseInt(mm.down('.additional-height').getValue());
        mega_slideshow_module_height = Math.min(mega_slideshow_module_height, parseInt(mm.down('.max-height').getValue()));
        mega_slideshow_module_height = Math.max(mega_slideshow_module_height, parseInt(mm.down('.min-height').getValue()));

        mm.down('.image-container').setStyle({height: mega_slideshow_module_height + 'px'});

        new Ajax.Request('/ajax/magic_modules/mega_slideshow_module/show', {onSuccess: start_mega_slideshow,
                parameters: {height: mega_slideshow_module_height, browser: $$('html').first().className,
                              id: mm.down('.magic-module-id').getValue(), page_id: page_id}});

    });
});

// Window size

var page_layout;
document.observe('dom:loaded', function() {
    page_layout = $('page-layout');
    Event.observe(window, 'resize', resize);
    resize();
});
function resize() {
    if (document.viewport.getWidth() < 1320) page_layout.addClassName('narrow');
    else page_layout.removeClassName('narrow');
    if (document.viewport.getHeight() < mega_slideshow_module_height + 180) page_layout.addClassName('short')
    else page_layout.removeClassName('short');
}

// Visited links

document.observe('dom:loaded', function() {
    $$('a').each(function(a) {
        if (!a.down('img') && !a.hasClassName('no-visited-mark')) {
            var href = a.readAttribute('href');
            if (href) {
                if (href.match(/^https?:/i)) {
                    var url = href.split('/').slice(2);
                    var domain = url[0];
                    if (domain.match(/^(www|new)\.(linkedbyair|lbya)\.(com|net)$/i)) {
                        href = '/' + url.split(1).join('/');
                    }
                }
                else if (href.substr(0, 1) != '/') {
                    var rel = document.location.pathname.split('/');
                    rel = rel.slice(0, href.length - 1).join('/');
                    href = rel + '/' + href;
                }
                if (visited_projects.indexOf(href) != -1) {
                    a.addClassName('visited');
                    if (just_visited_project == href) {
                        setTimeout(function() { a.insert({top: '<span class="visited-mark pop"></span>'}) }, 1000)
                    }
                    else {
                        a.insert({top: '<span class="visited-mark"></span>'})
                    }
                }
            }
        }
    });
    if (left_projects_context_for_project_id) {
        new Effect.ScrollTo('project' + left_projects_context_for_project_id, {duration: .5, offset: -40});
    }
});


// $(ele).hover( function(){ 'mousein' }, function(){ 'mousout' })
//jQuery('.project-window.webframe').hover(function() {
//    var window_height  = jQuery(this).height(),
//        image          = jQuery(this).children('a').children().first(),
//        image_height   = image.height(),
//        image_location = image.position().top,
//        distance       = image_location == 0 ? window_height - image_height : 0;
//
//    if (image_height > window_height) {
//        image.stop().animate({ 'top': distance }, { 'duration': 4000,
//            specialEasing: {
//                width: "linear",
//                height: "easeOutBounce"
//            }});
//    }
//});