//Assignement no 6 Roll NO:WM6613 Name:Muhammad Bilal Email:bilalmohib7896@gmail.com
// CHAPTER 21 to 25
// Q#1
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// var firstName=prompt("Enter the first Name: ");
// var secondName=prompt("Enter the second Name: ");
// var fullName=firstName+" "+secondName;
// alert("Welcome "+fullName);
// Q#2
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// var favoriteMobile=prompt("Enter your favorite Mobile Phone Model: ");
// var length=favoriteMobile.length;
// document.write("<h3>My favorite Phone is : "+favoriteMobile+" "+"</h3>");
// document.write("<h3>Length of String: "+length+"</h3>");

// Q#3
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser
// var str="Pakistani";
// var index=str.indexOf('n');
// document.write("<h3>String : "+str+" "+"</h3>");
// document.write("<h3>Index of 'n' : "+index+"</h3>");

// Q#4
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser
// var str="Hello World";
// var index=str.lastIndexOf('l');
// document.write("<h3>String : "+str+" "+"</h3>");
// document.write("<h3>Last index of 'l' : "+index+"</h3>");

// Q#5
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// var str="Pakistani";
// var index=str.charAt(3);
// document.write("<h3>String : "+str+" "+"</h3>");
// document.write("<h3>Character at index 3 : "+index+"</h3>");

// Q#6
// 6. Repeat Q1 using string concat() method.
//Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// var firstName=prompt("Enter the first Name: ");
// var secondName=prompt("Enter the second Name: ");
// var a="asdf";
// var fullName=firstName.concat(" ",secondName);
// document.write("Welcome "+fullName);

// Q#7
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser
// var str="Hyderabad";
// document.write("City: "+str+"<br>");
// var rep=str.replace("Hyder","Islam");
// document.write("After replacement: " + rep);

// Q#8
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace=message.replace(/and/g,"&");
// document.write("<b>Message:</b> "+message+"<br>");
// document.write("<b>After replacement:</b> "+replace);

// Q#9
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var str="472";
// var strtype=typeof(str);
// var num=parseInt(str);
// var numtype=typeof(num);
// document.write("Value: "+str+"<br>");
// document.write("Type: "+strtype+"<br>");
// document.write("Value: "+num+"<br>");
// document.write("Type: "+numtype+"<br>");

// Q#10
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var input=prompt("Enter the string");
// var convert=input.toUpperCase();

// document.write("User Input: "+input+"<br>");
// document.write("Upper Case: "+convert);
// Q#11
// 11. Write a program that takes user input. Convert and
// show the input in title case.
// var ent=prompt("Enter the input to convert to Title Case");
// var str=ent.toLowerCase();
// str=str.split("&nbsp;");
// for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1); 
// }
// str=str.join(" ");
// document.write("User Input: "+ent+"<br>");
// document.write("Title case: "+str+"<br>");

// Q#12
// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var number=35.36;
// var inString=number.toString();
// var replace=inString.replace(".","");
// document.write("Number :"+number);
// document.write("<br>Number :"+replace);

// Q#13
// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// var userName=prompt("Enter your Input: ");
// var message;
// var split=[];
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     split[i]=userName.split("&nbsp;");
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("please enter a valid userName");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             split[i]=userName.split("&nbsp;");
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }

// }
// alert(message);
// Q#14
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// var A=["cake", "apple pie","cookie", "chips", "patties"];
// var userI=prompt("Enter the item for searching it?");
// userInput=userI.toLowerCase();
// var news;
// var length=A.length;
// var found=false;
// for(var i=0;i<length;i++)
// {
//     if(userInput===A[i])
//     {
//         found=true;
//         alert(userI+" is available at index "+(i+1)+" of our bakery");
//         break;
//     }
// }
// if(found===false)
// {
//    alert("WE are Sorry "+userI+" is not available in our bakery");
// }

// Q#15
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// var password=prompt("Enter the password: ");
// var splitPassword=[];
// splitPassword=password.split("");
// var formatPassword=splitPassword.join("");
// document.write("Entered password: "+password+"<br>");
// for(var i=0;i<formatPassword.length;i++)
// {
//     var message;
//     var firstCondition=formatPassword.charCodeAt(0);
//     var secondCondition=formatPassword.charCodeAt((i));
//     var thirdCondition=formatPassword.charCodeAt(i);
//     document.write("first condition: "+firstCondition+"<br><br>");
//     document.write("2nd condition: "+secondCondition+"<br><br>");
//     while((secondCondition<48&&secondCondition>30)||(secondCondition<=64&&secondCondition>=58)
//     ||(firstCondition>=48&&firstCondition<=57)||(formatPassword.length<6)
//     ||isNaN(secondCondition)||(secondCondition<=96&&secondCondition>=91)||(secondCondition>=123))
//     {
//         alert("Wrong password");
//         password=prompt("Enter the password: ");
//         splitPassword=password.split("");
//         formatPassword=splitPassword.join("");
//         firstCondition=formatPassword[0].charCodeAt(0);
        
//     }
//     if((firstCondition<49&&firstCondition>57)&&(formatPassword.length>=6))
//     {
//         document.write("Correct!");   
//         break;
//     }
// }
// Q#16
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// var university="University of Karachi";
// var Splited=[];
// var arr=[];
// Splited=university.split("");
// var formatArray=Splited.join("");
// for(var i=0;i<formatArray.length;i++)
// {
//     document.write(formatArray[i]+"<br>");
// }

// Q#17
// 17. Write a program to display the last character of a user
// input.
// var string=prompt("Enter the number to display its last character ");
// var leng=string.length;
// var ind=string.charAt(leng-1);
// document.write("User Input: "+string+"<br>");
// document.write("Last Character: "+ind+"<br>");
// Q#18
// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// var check=prompt("Enter string to count the occurence of word 'the'");
// var countThe=(check.split("the").length - 1);
// document.write("Text: "+check+"<br>");
// document.write("There are "+countThe+ " occurences of the word 'the'");
// CHAPTER 21 to 25


//CHAPTER 26 TO 30

//question 1
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
//The number must be positive integer so parse int I have used so ceil/float and floor are the same


// var num=prompt("Enter the positive integer");
// num=parseInt(num);
// if(num>0)
// {
//     var roundoffNum=Math.round(num);
//     var floorNum=Math.floor(num);
//     var ceilNum=Math.ceil(num);
//     document.write("number: "+num+"<br>");
//     document.write("Round off value: "+roundoffNum+"<br>");
//     document.write("Floor value: "+floorNum+"<br>");   
//     document.write("Ceil value: "+ceilNum);  
// }
// while(num<0)
// {
//    alert("Please enter a postive num");
//    num=prompt("Enter a positive number");
//    num=parseInt(num);
//    if(num>0)
//    {
//        alert("You entered positive");
//        break;
//    }
// }

//question 2
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var num=prompt("Enter the positive integer");
// num=parseFloat(num);
// if(num<0)
// {
//     var roundoffNum=Math.round(num);
//     var floorNum=Math.floor(num);
//     var ceilNum=Math.ceil(num);
//     document.write("number: "+num+"<br>");
//     document.write("Round off value: "+roundoffNum+"<br>");
//     document.write("Floor value: "+floorNum+"<br>");   
//     document.write("Ceil value: "+ceilNum);  
// }
// while(num>0)
// {
//    alert("Please enter a negative num");
//    num=prompt("Enter a negative number");
//    num=parseInt(num);
//    if(num<0)
//    {
//        alert("You entered negative");
//        break;
//    }
// }


//question3
// 3.Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var num=prompt("Enter the value to display absolute value: ");
// num=parseInt(num);
// var numAbsoluteValue=Math.abs(num); 
// document.write("The absolute value of "+num+" is "+numAbsoluteValue);


//question4
// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var randomNum=Math.floor(Math.random()*7);
// document.write("random dice value "+randomNum);

//question5
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var num=Math.random()*2;
// var coin=Math.floor(num);
// var value;
// if(coin===1)
// {
//     value="Heads";
// }
// else{
//     value="Tails";
// }
// document.write(coin+"<br>");
// document.write("random coin value: "+value+"<br>");

//question6
// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// var randomNumber=Math.floor(Math.random()*100);
// document.write("Random number between 1 and 100 is: "+randomNumber);

//question7
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var weight=prompt("Enter your weight?");
// weight=parseFloat(weight);
// document.write("The weight of user is: "+weight+" kilograms");

//question8
// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// var randomNumber=Math.random()*10;
// var num=Math.floor(randomNumber);
// var input=prompt("Enter the number between 1 to 10","for example:5");
// input=parseInt(input);
// while(input<=0||input>10)
// {
//     alert("Please enter between 1 to 10 to find the number ");
//     input=prompt("Please again Enter the number between 1 to 10","for-example:10");
// input=parseInt(input);
// if(input>=1&&input<=10)
// {
//     break;
// }
// }
// if(input===num)
// {
//     alert("Congratulations you found the number");
// }
// else{
//     alert("The number was not found between 1 to 10");
// }
//CHAPTER 26 TO 30


//CHAPTER 31 TO 34

//question1
// 1. Write a program that displays current date and time in
// your browser.
// var date=new Date();
// document.write(date);
 
//question2
// 2. Write a program that alerts the current month in words.
// For example December.
// var arrMonths=["January","February","March","April","May","June","July","August","September",
// "October","November","December"];
// var Month=new Date();
// var month=Month.getMonth();
// document.write("Current Month: "+arrMonths[month+1]);

//question3
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun
// var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var Day=new Date();
// var day=Day.getDay();
// var CurrentDay=arrDays[day];
// CurrentDay=CurrentDay.slice(0,3);
// document.write("Today is: "+CurrentDay);


//question4
// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var Day=new Date();
// var day=Day.getDay();
// var CurrentDay=arrDays[day];
// CurrentDay=CurrentDay.slice(0,3);
// if(CurrentDay==="Sat"||CurrentDay==="Sun")
// {
//     document.write("Its fun day");
// }
// else{
//     document.write("Its a working day");
// }

//question5
// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// var Date=new Date();
// var date=Date.getDate();
// if(date<16)
// {
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//question6
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// var num=new Date();
// var millisecondsSinceMidnight=num.getTime();
// var InSeconds=(millisecondsSinceMidnight/1000);
// var InMinutes=InSeconds/60;
// document.write("Current date:- "+num+"<br>");
// document.write("Ellapsed Milliseconds since Jan. 1, 1970:"+millisecondsSinceMidnight+"<br>");
// document.write("Ellapsed Minutes since Jan. 1, 1970:"+InMinutes+"<br>");

//question7
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var num=new Date();
// var check=num.getHours();
// if(check<12)
// {
//     alert("Its AM");
// }
// else{
//     alert("Its PM");
// }

//question8
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// var laterDate=new Date(2020,11,31);
// document.write("Later Date: "+laterDate);

//question9
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// var num1=new Date(2020,3,24);
// var num2=new Date();
// sdr=num1.getTime();
// edr=num2.getTime();
// var num=Math.floor(((edr-sdr) / (1000 * 60 * 60 * 24)));
// document.write(num+" days have passed since "+num1);

//question10
// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// var num1=new Date(2020,0,1);
// var num1c=num1.getTime();
// var num2=new Date();
// var num2c=num2.getTime();
// var diff=num2c-num1c;
// var secPassed=Math.floor((diff/1000));
// document.write("On reference date "+num1+"  "+secPassed+" seconds  "+" had passed since beginning of 2020");

//question11
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// var currentDate=new Date();
// var getHours=currentDate.getTime();
// var currentTime=Math.floor(getHours/(1000*60*60));
// getHours=getHours+(1000*60*60);
// var incrementedTime=Math.floor(getHours/(1000*60*60));
// var diff=incrementedTime-currentTime;
// diff--;
// var newDate=new Date();
// newDate.setHours(diff);
// document.write("Current date: "+currentDate+"<br>"+"One hour ahead it will be: "+newDate);

//question12
// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// var currentDate=new Date();
// var currentYear=currentDate.getFullYear();
// var YearBack100=currentYear-100;
// var YearBack100Date=new Date();
// YearBack100Date.setFullYear(YearBack100);
// alert("Current Date:"+currentDate+"\n"+"100 years back it was: "+YearBack100Date);

//question13
// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser
// var age=prompt("Enter your age?");
// age=parseInt(age);
// var date=new Date();
// var currentYear=date.getFullYear();
// var HisAge=currentYear-age;
// var dateofBirth=new Date(HisAge);
// var yearDate=dateofBirth.setFullYear(HisAge);
// var YearOfdateofBirth=dateofBirth.getFullYear();
// document.write("Your age is: "+age+"<br>"+"Year of date of birth is: "+YearOfdateofBirth);


//question14
// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
//Sir I have checked on the net for k-billing it is 10% for the late payment surcharge

// var name=prompt("Enter your name?");
// var month=prompt("Enter the month?");
// var units=prompt(name+" Please! Enter the units consumed in the month of "+month+"?");
// units=parseFloat(units);
// var chargesPerUnit=prompt(name+" Please enter the charges per unit?");
// chargesPerUnit=parseFloat(chargesPerUnit);

// var netAmountPayable=units*chargesPerUnit;
// var NetAmountPayable=netAmountPayable.toFixed(2);
// var LatePaymentSurcharge=(10/100)*NetAmountPayable;
// var latePaymentSurcharge=LatePaymentSurcharge.toFixed(2);
// var GrossAmountPayable=netAmountPayable+LatePaymentSurcharge;
// GrossAmountPayable=GrossAmountPayable.toFixed(2);

// var finalUnits=units.toFixed(2); 
// var finalChargesPerUnit=chargesPerUnit.toFixed(2);

// document.write("Customer Name: "+name+"<br>"+"Month: "+month+"<br>"+"Number of units: "
// +finalUnits+"<br>"+"Charges per unit: "+finalChargesPerUnit+"<br><br><br>"+"Net Amount"+
// "Payable (within due date) :"+NetAmountPayable+"<br>LatePaymentSurcharge :"+latePaymentSurcharge+
// "<br>Gross Amount Payable (After due date): "+GrossAmountPayable);

//CHAPTER 31 TO 34

///////////////////////////////////////////////////////////////////////////////////////

//CHAPTER 35 to 38

//question1
// 1. Write a function that displays current date & time in your
// browser

// displayDate();
// function displayDate()
// {
//     var date=new Date();
//     document.write(date);
// }


//question2
// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// var firstName=prompt("Enter the first Name: ");
// var secondName=prompt("Enter the second Name: ");
// greet(firstName,secondName);
// function greet(fn,ln)
// {
//     var fullName=fn+ln;
//     alert("Welcome "+fullName);
// }


//question3
// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// var num1=prompt("Enter first number:");
// var num2=prompt("Enter second number:");
// var sum=sum(num1,num2);
// alert("The sum of "+num1+" and "+num2+" is: "+sum);
// function sum(n1,n2)
// {
//     n1=parseInt(n1);
//     n2=parseInt(n2);
//     var sum=n1+n2;
//     return sum;
// }


//question4
// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
// var num1=prompt("Enter first number:");
// var num2=prompt("Enter second number:");
// var operator=prompt("Enter +,-,* or / to perform");
// var check=false;
// if(operator==="+"||operator==="-"||operator==="*"||operator==="/")
// {
//     check=true;
// }
// else{
//     check=false;
// }
// while(check===false)
// {
//     alert("Please enter right operation");
//     operator=prompt("Enter the operatoion +,-,x or / to perform");
//     if(operator==="+"||operator==="-"||operator==="*"||operator==="/")
//     {
//         check=true;
//         break;
//     }
// }
// var result=calculator(num1,num2,operator);
// if(operator==="+")
// { 
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The sum of "+num1+" and "+num2+" is: "+result);
// }
// else if(operator==="-")
// {
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The difference of "+num1+" and "+num2+" is: "+result)
// }
// else if(operator==="*")
// {
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The product of "+num1+" and "+num2+" is: "+result)
// }
// else if(operator==="/")
// {
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The division of "+num1+" and "+num2+" is: "+result)
// }
// function calculator(n1,n2,o)
// {
//     n1=parseInt(n1);
//     n2=parseInt(n2);
//     var result;
//     if(o==="+")
//     { 
//         result=n1+n2;
//     }
//     else if(o==="-")
//     {
//         result=n1-n2;
//     }
//     else if(o==="*")
//     {
//         result=n1*n2;
//     }
//     else if(o==="/")
//     {
//         result=n1/n2;
//     }
//     return result;
// }


//question5
// 5. Write a function that squares its argument.
// var num=prompt("Enter a number to find its square?");
// var result=square(num);
// document.write("The square of "+num+" is = "+result);
// function square(n)
// {
//     n=parseInt(n);
//     var square=n*n;
//     return square;
// }

//question6
// 6. Write a function that computes factorial of a number
// var fact=prompt("Enter a number to find its factorial?");
// var result=factorial(fact);
// document.write("The factorial of "+fact+" is = "+result);
// function factorial(n)
// { 
//     n=parseInt(n);
//     var fact=1;
//     for(var i=1;i<=n;i++)
//     {
//         var result=fact*(n-i);
//         var fact=fact+result;
//     }
//     return fact;
// }


//question7
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
// var ns=prompt("Enter the starting number?");
// var ne=prompt("Enter the ending number?");
// while(ns>ne)
// {
//     alert("Enter right number");
//     ns=prompt("Enter the starting number?");
//     ne=prompt("Enter the ending number?");
//     if(ns<=ne)
//     {
//         break;
//     }
// }
// counting(ns,ne);
// function counting(sn,en)
// {
//     sn=parseInt(sn);
//     en=parseInt(en);
//     for(var i=sn;i<=en;i++)
//     {
//         document.write(i+"<br>");
//     }
// }


//question8
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// var b=prompt("Enter the base of triangle");
// var p=prompt("Enter the prependicuar of trianlge");
// var result=hypotenous(b,p);
// document.write("The hypotenous of base"+b+" and "+" prependicular "+p+" is = "+result);
// function hypotenous(b,p)
// {
//     b=parseInt(b);
//     p=parseInt(p);
//     var h=square(b,p);
//     function square(b,p)
//     {
//         var bi=b*b;
//         var pi=p*p;
//         var sum=bi+pi;
//         return sum;
//     }
//     return h;
// }


//question9
// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// var w=prompt("Enter the width of rectangle");
// var h=prompt("Enter the height of rectamgle");
// var result=Area(w,h);
// document.write("The area of rectangle is: "+result);
// function Area(w,h)
// {
//     w=parseFloat(w);
//     h=parseFloat(h)
//     var a=w*h;
//     return a;
// }


//question10
// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// var s=prompt("Enter the string to check for palindrome");
// palindrome(s);
// function palindrome(s)
// {
//     var spl;
//     spl=s.split("").reverse().join("");
//     if(s===spl)
//     {
//         alert(s+" is a palindrome");
//     }
//     else{
//         alert(s+" is not a palindrome");
//     }
// }

//question11
// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// var s=prompt("Enter the string");
// var s1=capital(s);
// document.write(s1);
// function capital(s)
// {
//    var s=s.split(" ");
//    var len=s.length;
//    for(i=0;i<len;i++)
//    {
//     s[i] = s[i][0].toUpperCase() + s[i].substr(1);
//    }
//    return s.join(" ");
    
// }

//question12
// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// var str=prompt("Enter the string");
// var strr=fLW(str);
// document.write("The longest word is: "+strr);
// function fLW(str) {
//     var strSplit = str.split(' ');
//     var lW = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > lW){
//       lW = strSplit[i].length;
//        }
//     }
//     return lW;
//   }

//question13
// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// var str=prompt("Enter str");
// var letter=prompt("Enter letter");
// var res=char_count(str,letter);
// document.write(letter+" is "+res+" times");
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }



//question14
// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// var radius=prompt("Enter the radius");
// radius=parseInt(radius);
// calcCircumference(radius);
// calcArea(radius);
// function calcCircumference(radius)
// {
//     var c=2*(3.14)*radius;
//     document.write("The crcumference is: "+c+"<br>");
// }
// function calcArea(radius)
// {
//     var a=(3.14*radius*radius);
//     document.write("The radius is: "+a);
// }
//CHAPTER 35 to 38
///////////////////////////////////////////////////////////////////////////////////////