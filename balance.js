function transfer(amount, balance) {
    if(amount > balance) {
        return "Insufficient Balance";
    }
    return balance - amount;
}

