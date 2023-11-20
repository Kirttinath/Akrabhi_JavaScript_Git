//Life in Javascript : 
// Immidiately invoked function expression


var ans = (function()
{
    var prvtval =12;
    return {
        getter: function()
        {
            console.log(prvtval);
        },
        setter: function(value)
        {
            prvtval = val;
        }
    }

})()
