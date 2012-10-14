var inputCounter = (function () {
    function InputCounter (inputElement, counterElement, options) {
        this._input = inputElement;
        this._limit = inputElement.getAttribute('maxlength');
        this._output = counterElement;
        var inputChangeOptions = {};
        if (options && options.time) {
            inputChangeOptions.time = options.time;
        }
        new onInputChange.Constructor(inputElement, $.proxy(this._run, this), inputChangeOptions);
        this._run();
    }

    InputCounter.prototype = {

        _run: function () {
            var length = this._input.value.length;
            var left = this._limit - length;
            this._output.innerHTML = left;
        }

    }


    $.fn.inputCounter = function (counterElement, options) {
         new InputCounter(this, counterElement, options);
    }

    
    // Expose
    return {
        InputCounter : InputCounter
    }
})();

