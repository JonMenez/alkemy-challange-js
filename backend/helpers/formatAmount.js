

const formatAmount = (amount, is_income) => {
    let number = Math.abs(Number(amount)).toFixed(2);
    if (!is_income) {
        return number * -1;
    }
    return number * 1
}

module.exports = {
    formatAmount
};