module.exports = function check(str, bracketsConfig) {
    var array = {},
        buffer = str,
        undef;
    for(var i = 0; i < bracketsConfig.length; i++) {
        array[bracketsConfig[i][1]] = bracketsConfig[i].join('');
    }

    for(var j = 0; j < str.length; j++) {
        if(array[str[j]] !== undef) {
            buffer = buffer.replace(array[str[j]], '');
       }
    }
    
    if (buffer.length == 0) {
        return true;
    } else {
        return false;
    }
}
