function InputCounter (inputElement, counterElement, options) {
    this._input = inputElement;
    this._limit = inputElement.getAttribute('maxlength');
    this._output = counterElement;
    var inputChangeOptions = {};
    if (options && options.time) {
        inputChangeOptions.time = options.time;
    }
    new onInputChange.Constructor(inputElement, ftools.proxy(this._run, this), inputChangeOptions);
    this._run();
}

InputCounter.prototype = {
    
    _run: function () {
        var length = this._input.value.length;
        var left = this._limit - length;
        this._output.innerHTML = left;
    }
    
}

// Be a jQuery plugin if jQuery installed
if(window.jQuery) {
    $.fn.inputCounter = function (counterElement, options) {
         new InputCounter(this, counterElement, options);
    }
}