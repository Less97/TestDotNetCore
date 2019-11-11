export default {
    convertMoneyToString: (number) => {
        number = parseInt(number,10);
        return '$' + number.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    },
}