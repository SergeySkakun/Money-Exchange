// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency < 0) {
        return {};
    }

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let obj = {};
    let sum = currency;
    let strCoins = ["H", "Q", "D", "N", "P"];
    let coins = [50, 25, 10, 5, 1];

    coins.forEach( (element, index) => {
        let counter = Math.floor(sum / element);
        let remainder = sum % element;

        if (counter > 0) {
            obj[strCoins[index]] = counter;
            sum = remainder;
        }
    });

    return obj;
}
