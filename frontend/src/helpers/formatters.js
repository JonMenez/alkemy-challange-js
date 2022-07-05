
export const _formatBalance = (balance) => {
    if (isNaN(balance)) {
        return '-';
    }
    if (balance < 0) {
        return `- $${Math.abs(balance).toFixed(2)}`
    }
    return `$${balance.toFixed(2)}`
}


