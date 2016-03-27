exports.sanatize = function (word) {
    return word.toLowerCase().replace(/-/g, ' ');
};

