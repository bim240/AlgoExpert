// This alogo solves the following problem
// in a given array find the 2 number whose sum is equal to given sum in shortest time


function findNumber(array,sum){
  var arr = array;
  var start = 0;
  var last = array.length-1;
  var reuslt = []
  array = array.sort((a,b) => a-b)
  do{
  	var flag= true
  	var newSum = array[start]+array[last];
  	if(newSum === sum) {
  		reuslt.push(array[start],array[last])
  		flag = false
  	} else if(newSum > sum) {
  		last -= 1;
  	} else {
  		start += 1
  	}

  }while(flag)
  return reuslt
}

var testArray = [1,8,9,12,2,5,6,13,54];
console.log(findNumber(testArray, 25))