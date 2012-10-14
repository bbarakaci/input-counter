var ftools = window.ftools || {};
ftools.events = {};

if (window.addEventListener) {
    ftools.events.add = function (el, type, fn, useCapture) {
        el.addEventListener(type, fn, useCapture || false);
    };
    
    ftools.events.remove = function (el, type, fn) {
        el.removeEventListener( type, fn, false );
    };
    
} else if (window.attachEvent) {
    ftools.events.add = function (el, type, fn, useCapture) {
        el.attachEvent('on' + type, fn);
    };
    
    ftools.events.remove = function (el, type, fn) {
        el.detachEvent( "on" + type, fn );
    };
}

ftools.proxy = function (fn, context) {
    return function () {
        fn.call(context);
    }
}