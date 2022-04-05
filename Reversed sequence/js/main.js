// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = []
    for (i = 0; i <= n - 1; i++){
      arr[i] = n - i;
    }
    return arr;
  };

console.log(reverseSeq(10));

