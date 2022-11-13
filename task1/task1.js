//Визначити скільки повних тижнів є у вказаній кількості днів.
a = Number(prompt("a= "));//кількість днів
// b = Number();

var days = a;
var weeks = days;
y = a / 7;

if (days >= 7) {
    // days = a/7;
    document.write(y.toFixed(0)," повних");
} else {
    document.write(" неповний тиждень")}
// if (weeks <= 7) {
//     document.write("неповний тиждень")
// } else {
//     document.write(weeks.toFixed(0)," повних");
// }