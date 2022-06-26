// Problem -1


let n =4;
let string = "";
// External loop
for (let i = 0; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n-i ; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k <= i ; k++) {
    string += " *";
  }
  string += "\n";
}
console.log("This is the solution for problem - 1 :-");
console.log( string);



// Problem -2

function fino(){

var n1 = 0,  n2 = 1, next_num, i;  
var num = parseInt (prompt (" Enter the limit for Fibonacci Series "));  
document.write( "Fibonacci Series: ");  
for ( i = 1; i <= num; i++)  
{  document.write ( "<br>"+ n1); // printing the n1  
    next_num = n1 + n2; // sum of n1 and n2 into the next_num  
      
    n1 = n2; // assigning the n2 value into n2  
    n2 = next_num; // assigning the next_num into n2  
}  
}


// Problem-3

function pro3(){

let arr = [2,5,22,44,52,65,87,56,98,08];
	let x = arr.length;
	thirdLargest(arr, x);
function thirdLargest(arr, arr_size)
{
		
	// Find first
	// largest element
	let first = arr[0];
	for (let i = 1;
			i < arr_size ; i++)
		if (arr[i] > first)
			first = arr[i];
	
	// Find second
	// largest element
	let second = Number.MIN_VALUE;
	for (let i = 0;
			i < arr_size ; i++)
		if (arr[i] > second &&
			arr[i] < first)
			second = arr[i];
	
	// Find third
	// largest element
	let third = Number.MIN_VALUE;
	for (let i = 0;
			i < arr_size ; i++)
		if (arr[i] > third &&
			arr[i] < second)
			third = arr[i];

  document.write("<br>");
	document.write("The third Largest " +
				"element is ", third);
}
};


// Problem-4

function pro4() {
  

let str=['b', 'y', 'e'];
	subString(str, str.length);
	
	// Function to print all sub strings
	function subString(str,n)
	{
		// Pick starting point
		for (let len = 1; len <= n; len++) {
			// Pick ending point
			for (let i = 0; i <= n - len; i++) {
				// Print characters from current
				// starting point to current ending
				// point.
				let j = i + len - 1;
				for (let k = i; k <= j; k++) {
					document.write(str[k]);
				}

				document.write(",");
			}
		}
	}
	};



// Problem - 5

function pro5() {
  

const str = "Jack went to the doctor due to his tooth ache";
const largestSmallest = str => {
   const strArr = str.split(" ");
   let min = strArr[0];
   let max = strArr[0];
   for(let i = 1; i < strArr.length; i++){
      if(strArr[i].length < min.length){
         min = strArr[i];
      };
      if(strArr[i].length > max.length){
         max = strArr[i];
      };
   };
   return [min, max];
};
document.write(largestSmallest(str));
};	


// Problem- 6
function pro6() {
var sort = [
    'random', 'people', 'sometimes', 'give', 'the', 'best', 'advice'
];
	sort.sort();
document.write(sort);

};

