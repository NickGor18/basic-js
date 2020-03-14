class VigenereCipheringMachine {

    constructor(mode) {
        this.mode = mode != undefined ? mode : true;
    }

    encrypt(str, key) {

        str = str.toUpperCase();
        key = key.toUpperCase();
        let result = '', j=0;

        for (let i = 0; i < str.length; i++) {
            let keySymb = key[(j>=key.length ? j%key.length : j)];
            if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) {
                result += String.fromCharCode((str[i].charCodeAt() + keySymb.charCodeAt() + 26) % 26 +65);
                j++;
            } else
                result += str[i]
        }
        return this.mode ? result : result.split('').reverse().join('');
    }

    decrypt(str, key) {

        str = str.toUpperCase();
        key = key.toUpperCase();
        let result = '', j=0;

        for (let i = 0; i < str.length; i++) {
            let keySymb = key[(j>=key.length ? j%key.length : j)];
            if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) {
                result += String.fromCharCode((str[i].charCodeAt() - keySymb.charCodeAt() + 26) % 26 +65);
                j++;
            } else
                result += str[i]
        }
        return this.mode ? result : result.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
