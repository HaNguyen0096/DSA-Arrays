
function urlifyString(string) {
    string = string.trim();
    let output = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        output += '%20';
      } else {
        output += string[i];
      }
    }
    return output;
}
  
//console.log(urlifyString('  hello world !'));

function filterArray(arr) {
    let newArr = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i]>=5){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
//const testArr=[1,6,3,7];
//console.log(filterArray(testArr))

function findMaxSum(arr){
    let sum=0;
    let maxSum=0;
    for (let i=0; i<arr.length; i++){
        sum+=arr[i];
        if(sum<0){
            sum=0;
        }
        else if(sum>maxSum){
            maxSum=sum;
        }

    }
    return maxSum;
}
//testArr=[-3,4,6,-3,5,-2,1,-7,1];
//console.log(findMaxSum(testArr));


function mergedArray(arr1,arr2){
    let merged=[];
    let i=0;
    let j=0;
    let a1=arr1.length;
    let a2=arr2.length;
    while (i<a1 && j<a2){
        if(arr1[i]<=arr2[j]){
            merged.push(arr1[i++]);
        }
        else{
            merged.push(arr2[j++]);
        }
    }
    while (i<a1){
        merged.push(arr1[i++]);
    }
    while (j<a2){
        merged.push(arr2[j++]);
    }
    return merged;
}
//const arr1=[1,3,5,7,9];
//const arr2=[2,4,5,8,10,11];
//console.log(mergedArray(arr1,arr2))

function removeChar(string, chars) {
    let output = '';
    for (let i = 0; i < string.length; i++) {
      let contained = true;
      for (let j = 0; j < chars.length; j++) {
        if (string[i] === chars[j]) {
          contained = false;
        }
      }
      if (contained) {
        output += string[i];
      }
    }
    return output;
}
//console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

function products(arr) {
    let product=1;
    for (let i=0; i<arr.length; i++){
        product*=arr[i];
    }
    for (let j=1; j<arr.length; j++){
        arr[j]=product/arr[j];
    }
    return arr;
}

//const arr=[1,3,5,7];
//console.log(products(arr));

function setZero(arr){
    let output=[];
    let row = [];
    let column =[];
    for(let i=0;i<arr.length;i++){
      for(let j=0; j<arr[0].length;j++){
        if(arr[i][j]===0){
          row[i]=1;
          column[j]=1;
        } 
      }
    }
    for(let i=0;i<arr.length;i++){
      if(!output[i]){
        output[i]=[];
      }
      for(let j=0; j<arr[0].length;j++){
        if(row[i]||column[j]){
          output[i][j]= 0;
        } else {
          output[i][j]=1;
        }
      }
    }
    return output;      
  }

arr=[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
//console.log(setZero(arr));

function stringRotation(str1,str2){
    if(str1.length !== str2.length){
      return false;
    }
    let doublestr1 = str1 + str1;
  
    if(doublestr1.indexOf(str2)===-1){
      return false;
    } else {
      return true;
    }   
}

console.log(stringRotation('amazon','azonma'));
console.log(stringRotation('amazon','azonam'));