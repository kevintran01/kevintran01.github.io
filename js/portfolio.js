$(document).ready(function() {
    $('#button-popup').click(function() {
        $(".window-popup").show(300);
    });
    $("#button-popup-close").click(function () {
      $(".window-popup").hide(300);
    });
});


function convertToNumerals(num) {
    // Catch decimals
    num = Math.floor(num);

    var numeralVals = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };
    var numerals = Object.keys(numeralVals); // Keys in an array for easy iteration
    var result = ""; // Final roman numerals

    // For subtractive rules
    var powersOfTen = [];
    for (var exponent = 0; exponent < 6; exponent++) {
        var pow = Math.pow(10, exponent);
        powersOfTen.push(pow);
    }

    var remainder = num;
    // console.log("####################\nValue:", num);

    while (remainder > 0) {
        for (var i = 0; i < numerals.length; i++) {
            var currentNumeralVal = numeralVals[numerals[i]];
            var mod = remainder % currentNumeralVal;
            var modBack = currentNumeralVal % remainder;
            var divide = remainder / currentNumeralVal;

            // console.log(numerals[i], "-", currentNumeralVal, "| Remainder", remainder, "Mod", mod, "ModBack", modBack, "Divide", divide);

            if (remainder - currentNumeralVal >= 0) {
                remainder -= currentNumeralVal;
                result += numerals[i];
                break;
            }

            // Subtractive rules
            // Looping from lowest to highest value to get correct subtrahend
            for (var j = (numerals.length - 1); j > i; j--) {
                var minuend = currentNumeralVal;
                var subtrahend = numeralVals[numerals[j]];

                // Only to a numeral (the subtrahend) that is a power of ten (I, X or C).
                // For example, "VL" is not a valid representation of 45 (XLV is correct).
                if (powersOfTen.indexOf(subtrahend) === -1) {
                    continue;
                }
                // Only when the subtrahend precedes a minuend no more than ten times larger.
                // For example, "IL" is not a valid representation of 49 (XLIX is correct).
                if (subtrahend * 10 < minuend) {
                    continue;
                }

                var minused = minuend - subtrahend;

                if (remainder - minused >= 0) {
                    remainder -= minused;
                    result += numerals[j] + numerals[i];
                    break;
                }
            }

            // Stop loop early if we have no remainder
            if (remainder === 0) {
                break;
            }
        }
    }

    // console.log("Result:", result);
    return result;
}

var date = new Date();
var year = date.getFullYear();


var id_convert = document.getElementById('convert');

(function(e) {
    e.preventDefault();
    this.textContent = convertToNumerals(this.value);
});

