var price = 458976;
var newprice = price.toLocaleString('zh-Hans-CN', {
    style: 'currency',
    currency: 'CNY'
});
console.log('====================================');
console.log(newprice);
console.log('====================================');

var two = new Date();
console.log('====================================');
console.log(two.toLocaleString());
console.log('====================================');