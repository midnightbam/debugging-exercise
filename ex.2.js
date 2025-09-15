const nums = [1, -2, 3, -4, 5];

function lastNegativeIndex(nums) {
  let idx = -1;
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      idx = i;
    }
  }
  return idx;
}

console.log(lastNegativeIndex(nums));

// ตัวอย่างการทำงานที่ถูกต้อง
console.log(lastNegativeIndex([1, -2, 3, -4, 5])); // 3
console.log(lastNegativeIndex([-1, -2, -3])); // 2