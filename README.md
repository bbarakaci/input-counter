# Input Counter

Character counter for textareas, input fields.

## Demo

http://bbarakaci.github.com/input-counter

## Getting Started

Download [input-counter.full.min.js][min]

[min]: https://raw.github.com/bbarakaci/input-counter/master/dist/input-counter.full.min.js

Add scripts to your page:

    <script src="jquery.js"></script>
    <script src="input-counter.full.min.js"></script>

Example markup: Make sure to set `maxlength` attribute to the input. That is good html.

    <textarea id="area" maxlength="140"></textarea>
    <p>
        <output id="area-counter"></output> characters left
    </p>

## Example Usage
    <script>
        (function(){
            var area = document.getElementById('area');
            var counter = document.getElementById('area-counter');
            new inputCounter.InputCounter(area, counter);
        })()
    </script>

## More info

Input Counter needs [On Input Change][oic]. Above file already contains it. Standalone version can be found in dist directory. Source is in the src directory.

[oic]: https://github.com/bbarakaci/on-input-change


