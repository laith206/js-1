//document.getElementById("laith").innerHTML = "aaaaa"

//console.log("welcom laith")

//var name ="laith"
//var age ="30"
//var aaa =prompt("yor name")

//window.alert("you name is:"+ aaa + " you age is:" + age   )

//var aaa =prompt("yor name")

//var num1 = Number(prompt("enter num"));
//var num2 = Number(prompt("enter num"));
//var result = num1 + num2;

//console.log("your result is:"+ result  );


//var x = 100
//if (x>110)  
//{
//    console.log("one" )
//}else
//{
//    console.log("tow" )
//}
//contr+Shift+L   The output (on a new line) will be: console.log('variable: ', variable);
//var pass = Number(prompt("enter pass"));

//// === comper value and datatype
//if (pass === "111") {
//    console.log("login ok")
//} else if (pass == 222) {
//    console.log("login ok")
//} else {
//    console.log("pass is faild")
//}
//for (i = 0; i < 20; i++) {
//    console.log('i: ', i);
//}



// question1- Write a program that allow to user enter number then printit
function q1() {
    var num = Number(prompt("enter num"));
    if (isNaN(num)) {
        alert("error")
    } else {
        alert(num)
    }



}

//  question2  Write a program that take number from user then print yes if that number can divide by 3
function q2() {
    var num = Number(prompt("check if that number can divide by 3 \n Enter Number"));
    if (isNaN(num)) {
        alert("error input")
    } else {
        if (num !== null && num !== '' && num !== 0) {
            if (num % 3 == 0) {
                alert("yes")
            } else {
                alert("no")
            }
        } else {
            alert("Enter Number")
        }
    }
}


//  question3 Write a program that allows the user to insert 2 integers then print the max
function q3() {
    var num1 = Number(prompt("insert 2 integers then print the max \n Enter The first Number"));
    var num2 = Number(prompt(" Enter The second Number"));
    if (isNaN(num1 && num2)) {
        alert("error input")
    } else {
        if (num1 !== null && num1 !== '' || num2 !== null && num2 !== '') {
            if (num1 > num2) {
                alert("The first Number " + " " + num1 + " " + " is max ")
            } else {
                alert(" The second Number " + " " + num2 + " " + " is max ")
            }
        } else {
            alert("Enter Number")
        }
    }
}


//  question4   Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
function q4() {
    var num = Number(prompt("insert an integer then check it negative or positive. \n Enter The Number"));
    if (isNaN(num)) {
        alert("error input")
    } else {
        if (num !== null && num !== '') {
            if (num >= 0) {
                alert("The  Number is = positive ")
            } else {
                alert("The  Number is = negative ")
            }
        } else {
            alert("Enter Number")
        }
    }
}



//  question5 Write a program that take 3 integers from user then print the max element and the min element.
function q5() {
    var num1 = Number(prompt("insert 3 integers and check max  and min element. \n Enter The Number"));
    var num2 = Number(prompt(" \n Enter The Number"));
    var num3 = Number(prompt(" \n Enter The Number"));
    if (isNaN(num1)) {
        alert("error input")
    } else {
        if (num1 !== null && num1 !== '' && num2 !== null && num2 !== '' && num3 !== null && num3 !== '') {
            var max = Math.max(num1, num2, num3)
            var min = Math.min(num1, num2, num3)
            alert("The therd Number " + " " + max + " " + " is max \n " + " The first Number " + " " + min + " " + " is minimam ")
        }
    }
}


//  question6 Write a program that allows the user to insert integer number thencheck If a number is oven or odd
function q6() {
    var num = Number(prompt("insert integer number then check If a number is even or odd \n Enter The Number"));

    if (isNaN(num)) {
        alert("error input")
    } else {
        if (num !== null && num !== '') {
            if (num !== null && num !== '') {
                if (num % 2 == 0) {
                    alert("The  Number is : even ")
                } else {
                    alert("The  Number is : odd ")
                }
            }
        }
    }
}

//  question7 Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonan
function q7() {
    var num = prompt("insert character then if it is vowel chars (a,e,I,o,u)  then i tell you \n Enter The Number");


    if (num !== null && num !== '') {
        if (num == "u" || num == "e" || num == "a" || num == "i" || num == "o") {
            alert("you entered  :  vowel chars ")
        } else {
            alert("you entered  : consonan chars ")
        }
    }
}


//  question 8  Write a program that allows user to insert integer then print all numbers between 1 to that’s number
function q8() {
    var num = Number(prompt(" insert integer then print all numbers between 1 to that’s number \n Enter The Number"));

    if (isNaN(num)) {
        alert("error input")
    } else {
        if (num !== null && num !== '') {
            console.log(" you entered number is " + num)
            for (i = 1; i <= num; i++) {
                console.log(i + "\n ")

            }

        }
    }
}

//  question 9  Write a program that allows user to insert integer then print a multiplication table up to 12.
function q9() {
    var num = Number(prompt(" insert integer then print a multiplication table up to 12.\n Enter The Number"));
    if (isNaN(num)) {
        alert("error input")
    } else {
        if (num !== null && num !== '') {
            console.log(" you entered number is " + num)
            for (i = 1; i <= 12; i++) {
                console.log(i + "*" + num + "=" + i * num)
            }

        }
    }
}


//  question 10 Write a program that allows to user to insert number then print all even numbers between 1 to this number
function q10() {
    var num = Number(prompt("insert number then print all even numbers between 1 to entered \n Enter The Number"));
    if (isNaN(num)) {
        alert("error input")
    } else {
        if (num !== null && num !== '') {
            console.log(" you entered number is " + num)
            if (num % 2 == 0) {
                for (i = 2; i <= num; i += 2) {
                    console.log(i + "\n ")
                }
            } else {
                for (i = 1; i <= num; i += 2) {
                    console.log(i + "\n ")
                }
            }
        }
    }
}


//  question 11 Write a program that take two integers then print the power
function q11() {
    var num1 = Number(prompt("program that take two integers then print the power \n Enter The first Number"));
    var num2 = Number(prompt(" \n Enter The second Number"));

    if (isNaN(num1)) {
        alert("error input")
    } else {
        if (num1 !== null && num1 !== '' && num2 !== null && num2 !== '') {
            console.log(Math.pow(num1, num2));

        }
    }
}


//  question 12  Write a program to enter marks of five subjects and calculate total, average and percen tage.
function q12() {
    var num1 = Number(prompt("enter marks of five subjects \n Enter The first Number"));
    var num2 = Number(prompt(" \n Enter The second Number"));
    var num3 = Number(prompt(" \n Enter The second Number"));
    var num4 = Number(prompt(" \n Enter The second Number"));
    var num5 = Number(prompt(" \n Enter The second Number"));
    var sum = num1 + num2 + num3 + num4 + num5

    if (isNaN(num1)) {
        alert("error input")
    } else {
        if (num1 !== null && num1 !== '' && num2 !== null && num2 !== '') {
            var sum = num1 + num2 + num3 + num4 + num5;

            var avr = sum / 5;

            var percen = (sum / 5) * 100;
            alert("the total of this 5 degre is  " + sum + " \n" + " the averg of this 5 degre is  " + avr + "\n " + " the averg of this 5 degre is  " + percen);
        }
    }
}

//  question 13  -Write a program to input month number and print number of days in that month.
function q13() {
    var num = Number(prompt("input month number and print number of days \n Enter The first Number"));
    if (isNaN(num)) {
        alert("error input")
    } else {
        if (num !== null && num !== '') {
            if (num == "4" || num == "6" || num == "9" || num == "11") {
                alert(" 30 day in this mounth")
            }
            else if (num == "2") {
                alert(" 28 day in this mounth")
            } else {
                alert(" 31 day in this mounth")
            }
        }
    }
}