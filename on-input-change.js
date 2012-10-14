/*
 * on-input-change
 * https://github.com/bbarakaci/on-input-change
 *
 * Licensed under the MIT license.
 */

var onInputChange = (function(){
    
    /*
    ie9 doesn't trigger oninput event when content is removed with BACKSPACE, ctrl+x etc... 
    I will not bother with feature check. Sorry.
    */
    var onInputSupport = (!navigator.appName === 'Microsoft Internet Explorer');
    
    function OnInputChange(element, callback, options) {
        this.element = element;
        this.value = element.value;
        this._callback = callback;
        this.time = (options && options.time) ? options.time : 150;
        ftools.events.add(element, 'focus', ftools.proxy(this._listen, this));
        ftools.events.add(element, 'blur', ftools.proxy(this._unlisten, this));
    }

    OnInputChange.prototype = {
        
        _listen: function(){
            if(onInputSupport){
                this._run_proxied = ftools.proxy(this._run, this);
                ftools.events.add(this.element, 'input', this._run_proxied);
            }
            else {
                this._interval = window.setInterval(ftools.proxy(this._check, this), this.time);
            }
        },
        
        _unlisten: function(){
            if(onInputSupport){
                ftools.events.remove(this.element, 'input', this._run_proxied);
            }
            else {
                window.clearInterval(this._interval);
            }
        },
        
        _run: function(){
            this.value = this.element.value;
            this._callback(this.value, this.element);
        },
        
        _check: function(){
            if(this.element.value != this.value) {
                this._run();
            }
        }
    };
    
    // Let it be a jQuery plugin if jQuery is loaded.
    if (window.jQuery) {
        $.fn.onInputChange = function(callback, options){
            return this.each(function(){
                new OnInputChange(this, callback, options);
            });
        };        
    }
    
    return {
        Constructor: OnInputChange,
        support:onInputSupport
    };
    
})();

    
