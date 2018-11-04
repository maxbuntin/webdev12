var obj = {Дмитро: '200', Василь: '300', Петро: '400'}
for (var prop in obj) 
{
console.log(prop + " - зарплата " + obj[prop] + " доларів ");
}
