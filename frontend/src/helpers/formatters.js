
export const _formatBalance = (balance) => {
    const number = Number(balance);
    if (number < 0) {
        return `- $${Math.abs(number).toFixed(2)}`
    }
    return `$${number.toFixed(2)}`
}


