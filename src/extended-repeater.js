module.exports = function repeater(str, options) {
    let {
        repeatTimes,
        separator,
        addition = '',
        additionRepeatTimes,
        additionSeparator = ''
    } = options;

    if (!repeatTimes) {
        return `${str}${addition}`;
    }
    separator = getSeparator(repeatTimes, separator);
    let newAdditional = getAdditional(addition, additionSeparator, additionRepeatTimes);
    let result = `${str}${newAdditional}${separator}`.repeat(repeatTimes);
    let indexToTrim = result.length - separator.length;

    return `${result.slice(0, indexToTrim)}`;
};



function getSeparator(repeatTimes, separator) {
    let result;

    if (repeatTimes < 2) {
        return '';
    }

    if (repeatTimes > 1 && !separator) {
        return '+';
    }

    return separator;
}

function getAdditional(addition, additionSeparator, additionRepeatTimes) {
    if (additionRepeatTimes === 1) {
        return addition;
    }

    return `${addition}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length);

}
