let score=null

console.log(typeof score)
console.log(typeof (score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// null to number=0
// undefined to number=NaN
// string to number=number if string is valid else NaN
// boolean to number=true=1,false=0
// number to number=number

//"33" =>33
//"33abc" =>NaN
//true =>1; false=>0

let isloggedIn=1
let booleanIsLoggedIn=Boolean(isloggedIn)
console.log(booleanIsLoggedIn)

// 1=>true; 0=>false
// ""=>false
// "Ravi"=>true

let somenumber=33
let stringnumber=String(somenumber)
console.log(stringnumber)
console.log(typeof stringnumber);