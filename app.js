var empty = [];
var arr = [0, 1 , 2, 3];
document.write(arr[0] + " " + arr[1] + " "+ arr[2] + " " + arr[3]);
document.write(`<br>`);
document.write(arr[1] + " " + arr[0] + " "+ arr[1] + " " + arr[2]);
document.write(`<br>`);
document.write(arr[2] + " " + arr[0] + " "+ arr[2] + " " + arr[1]);
document.write(`<br>`);
for (var i = 0; i <= 10; i++) {
    document.write(i + "<br>");
}


// next
var table = prompt("Enter the number for the multiplication table:");
    var length = prompt("Enter the length of the multiplication table:");

    document.write("Multiplication Table of " + table + ":<br><br>");
    for (var i = 1; i <= length; i++) {
        document.write(table + " x " + i + " = " + (table * i) + "<br>");
    }

    // next
    document.write(`<br>`);
    var fruits = ["apple", "banana", "orange" , "mango"];

    for (var i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
    document.write(`<br>`);
    document.write("Element at index 0 is" + " " + fruits[0]);
    document.write(`<br>`);
    document.write("Element at index 1 is" + " " + fruits[1]);
    document.write(`<br>`);
    document.write("Element at index 2 is" + " " + fruits[2]);
    document.write(`<br>`);
    document.write("Element at index 3 is" + " " + fruits[3]);
    document.write(`<br>`);

    // next
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<h1>Forward Counting</h1>`);
    for (var i = 1; i <= 15; i++) {
        document.write(i + "<br>");
    }
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<h1>Backward Counting</h1>`);
    for (var i = 10; i >= 1; i--) {
        document.write(i + "<br>");
    }
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<h1>Even numbers</h1>`);
    for (var i = 0; i <= 20; i += 2) {
        document.write(i + "<br>");
    }
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<h1>Odd number</h1>`);
    for (var i = 1; i < 20; i += 2) {
        document.write(i + "<br>");
    }
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<h1>Series</h1>`);
    for (var i = 1; i <= 20; i += 2) {
        document.write(i + "K" + "<br>");
    }
// next
var bakry =prompt("welcom to abc bakery what do you want to order sit/ma'am?");


// Check the order
if (order.toLowerCase() === "cookies") {
    alert("Cookies are available at index 2 in our bakery.");
} else if (order.toLowerCase() === "pastry") {
    alert("We're sorry. Pastries are not available in our bakery.");
} else {
    alert("Sorry, we don't have that item. Please choose cookies or pastries.");
}
