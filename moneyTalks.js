const rates = {
  usd: { eur: 0.7 },
  eur: { usd: 1.2 },
};

function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

Money.prototype.getValue = function getValue() {
    return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
};

// а вот типерь мученияяяяяяяя :_(  =_=

Money.prototype.exchangeTo = function exchangeTo(currency) {
    if (this.currency === currency) {
    return new Money(this.value, this.currency);
        }
    const newValue = this.value * rates[this.currency][currency]; return new Money(newValue, currency);
};

Money.prototype.add = function add(money) {
    const converted = money.getCurrency() === this.currency ? money : money.exchangeTo(this.currency);
    
    return new Money(this.value + converted.getValue(), this.currency);
};

Money.prototype.format = function format() {
    return this.value.toLocaleString('en-US', {
    style: 'currency',  currency: this.currency,
        });
};

export default Money;
