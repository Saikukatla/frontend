let value=25;
let value_1=5;

if(value*value_1===125){
    console.log("True");
}
else if(value<25){
    console.log("value is less than 25");
}
else if(value>=value_1){
    console.log(value,'is greater than of',value_1);
}
else{
    console.log("False");
}



let age=20;
let result=age>=18?'major':'minor';
console.log(result);

let marks=90;
let marks_result=marks>=90?'A Grade':
                 marks>=80?'B Grade':
                 marks>=70?'C Grade':'Fail';
console.log(marks_result);

let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


let ch2='u';
switch(ch2){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("vowel");
        break;
    default:
        console.log("consonant");
}

//asci-A-Z 65-90, a-z 97-122, 0-9 48-57;amercian standard code for information interchange

let ch3="*";
let ch_lower=ch3.toLowerCase();
switch(ch_lower){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("vowel");
break;
default:
        if(ch_lower>='a' && ch_lower<='z'){
            console.log("consonant");
        }
        else if(ch3>='0' && ch3<='9'){
            console.log("Number");
        }
        else{
            console.log("Invalid Data");

        }
    }