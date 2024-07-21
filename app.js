// .....................Q no 1...................

let days=["Sunday","Saturday","Monday","Tuesday","wednesday","Thursday","Friday"];
 console.log (days.reverse());


//  ...............Q no 2.............
let myArray=[ 1,2,3,4,5,-1,-2,-3,-4,-5];
console.log( myArray);
let  newArray=myArray.slice(0,5);
console.log(newArray);



// Q no 3


function countVowels(str) {
    str = str.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;
    
    for (let char of str) {
        
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}


console.log(countVowels("Hello")); 
console.log(countVowels("Testing"));





//  ..................Q no 4......................





//....................... Q no 5....................





//  .....................Qno 6...........................
let arr = [1, 2, 3, 4];
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);


// Q no 7
function getLastChracter(str,n){
    let newString = str.subtring(str.length - n);
    return newString
}
let name=("zakia","sara","zara","aliya","noor");
let updatedValue=name.slice(3,5)*4
console.log(updatedValue)




// ................Q no 8.......................

 function angle_Type(angle) {
    if(angle < 90) {
      return "Acute angle."; 
    }
    if(angle === 90) {
      return "Right angle."; 
    }
    if(angle < 180) {
      return "Obtuse angle."; 
    }
    return "Straight angle.";  
  }
  

  console.log(angle_Type(47));   
  console.log(angle_Type(90));  
  console.log(angle_Type(145));  
  console.log(angle_Type(180));

// .................Qno 9.................

function round(){
    let value=prompt (" Enter a number which you want to round up")
    newValue = Math.clice(value);
    console.log
}



// .................Q no 10...............

let fruits=["appel","orange","banana","grapes","lichi"];
for(let i=0; i<fruits.length-1;i++){

    console.log(i);
}



