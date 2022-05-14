---
title: "JavaScript Special Operators"
date: "2022-05-14"
description: 'Explaining JavaScript Operators'
---

![](https://res.cloudinary.com/kxnxchukwu/image/upload/v1652523165/FSkdybHaMAAtjy__k6sb4n.jpg)


How to Use Special Operators to Code with JavaScript
====================================================

**JavaScript Special Operators** are symbols and words that perform operations on operands and important functions. The engines that make expressions do their work are called _operators._ They operate on data to produce different results.


Conditional operator
--------------------

The _conditional operator_ (also known as the _ternary operator_) uses three operands. It evaluates a logical expression and then returns a value based on whether that expression is true or false. The conditional operator is the only operator that requires three operands. For example:

    const value = 25;
    const isItBiggerThanTwenty = (value > 10) ? "greater than 20" : "not greater than 20";
    console.log(isItBiggerThanTwenty); // "greater than 20"

Key Takeaway: 

👉 Conditional / Ternary Operator (?:)

➡ Returns the value based on the condition.


Comma operator
--------------

The _comma operator_ evaluates two operands and returns the value of the second one. It’s most often used to perform multiple assignments or other operations within loops. It can also serve as a shorthand for initializing variables. For example:

    const a = 25, b = 30;

Because the comma has the lowest precedence of the operators, its operands are always evaluated separately. 

    let num = 15;
    num = (num--, num++);
    console.log(num); // 14;

Key Takeaway: 

👉 Comma Operator (,)

➡ Allows multiple expressions to be evaluated as a single statement

delete operator
---------------

The delete operator removes a property from an object or an element from an array.

When you use the delete operator to remove an element from an array, the length of the array stays the same. The removed element will have a value of undefined.

    let animals = ['🐕', '🐈', '🐦', '🐙'];
    console.log(animals[3]); // returns 🐙
    delete animals[3];
    console.log(animals[3]); // returns undefined

Key Takeaway:

👉 Delete Operator

➡ Deletes a property from the object

in operator
-----------

The in operator returns true if the specified value exists in an array or object.

    let animals = ['🐕', '🐈', '🐦', '🐙'];
    if (3 in animals) {
        console.log("It's in there"); // "It's in there"
    }

In this example, if the animals array has an element with the index of 3, the string “it’s in there” will print out to the JavaScript console.

Key Takeaway:

👉 In Operator

➡ Checks if the object has the given property or not

instanceof operator
-------------------

The instanceof operator returns true if the object you specify is the type of object that has been specified.

    const myString = new String();
    if (myString instanceof String) {
        console.log("Yup, it's a string!"); // "Yup, it's a string!"
    }

Key Takeaway:

👉 instanceof Operator

➡ Checks if the object is an instance of a given type

new operator
------------

The new operator creates an instance of an object or array. JavaScript has several built-in object types, and you can also define your own. In the following example, Date() is a built-in JavaScript object.

    const today = new Date();
    console.log(today); // Sat May 14 2022 11:50:51 GMT+0100 (Irish Standard Time)
    const obj = new Object;
    console.log(obj); // {}
    const arr = new Array;
    console.log(arr); // []

Key Takeaway:

👉 New Operator

➡ Creates a new object or array

this operator
-------------

The this operator refers to the current object. It’s frequently used for retrieving properties within an object.

typeof operator
---------------

The typeof operator returns a string containing the type of the operand:

    const businessName = "bxp software";
    console.log(typeof(businessName)); // returns "string"
    const number = 10;
    console.log(typeof(number)); // returns "number"

Key Takeaway: 

👉 typeof Operator

➡ Checks the type of variable

void operator
-------------

The void operator causes an expression in the operand to be evaluated without returning a value. The place where you most often see void used is in HTML documents when a link is needed, but the creator of the link wants to override the default behavior of the link using JavaScript:

[This is a link, but it won’t do anything](javascript:void(0);)