var assert = require('assert');

/**
* https://leetcode.com/problems/bulls-and-cows/
* @param {string} secret
* @param {string} guess
* @return {string}
*/
var getHint = function(secret, guess) {
    if (secret.length !== guess.length) {
        return;
    }

    var bulls = 0;
    var secretCounts = [];
    var guessCounts = [];
    var cowsCount = 0;

    for (i = 0; i < secret.length; i++) {
        if(secret[i] === guess[i]) {
            bulls++;
        } else {
            if (secretCounts[secret[i]]) {
                secretCounts[secret[i]]++;
            } else {
                secretCounts[secret[i]] = 1;
            }

            if (guessCounts[guess[i]]) {
                guessCounts[guess[i]]++;
            } else {
                guessCounts[guess[i]] = 1;
            }
        }
    }

    var iterationLen = (secretCounts.length > guessCounts.length ? secretCounts.length : guessCounts.length);
    for (i = 0; i < iterationLen; i++) {
        if (secretCounts[i] && guessCounts[i]) {
            cowsCount += (secretCounts[i] < guessCounts[i] ? secretCounts[i] : guessCounts[i]);
        }
    }

    return bulls.toString() + "A" + cowsCount + "B";
};

assert.equal(getHint("1234", "0111"), "0A1B");
assert.equal(getHint("1122", "2211"), "0A4B");
