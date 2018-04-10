# Currency-digital-formatting
### toLocaleString()

### 使用 toLocaleString();可以实现货币数字的格式化

#### 语法：numObj.toLocaleString([locales [, options]])
```
var price = 2499;
var newprice= price.toLocaleString('zh-Hans-CN', {
    style: 'currency',
    currency: 'CNY'
});

```
#### locales ：可选.缩写语言代码
#### options
1. style，格式化时使用的样式
2. currency，货币格式化中使用的货币符号(例如"USD" 表示美元, "EUR" 表示欧元, or "CNY"是人民币)
3. useGrouping,是否使用分组分隔符,默认是 true
4. minimumIntegerDigits，使用的整数数字的最小数目.可能的值是从1到21,默认值是1
5. minimumFractionDigits，使用的小数位数的最小数目.可能的值是从0到20
6. maximumFractionDigits，使用的小数位数的最大数目。可能的值是从0到20
7. minimumSignificantDigits，使用的有效数字的最小数目。可能的值是从1到21
8. maximumSignificantDigits，使用的有效数字的最大数量。可能的值是从1到21

参见：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

### 使用 toLocaleString();可以实现时间的格式化
```
var two = new Date();
console.log(two.toLocaleString());
        
```
        
