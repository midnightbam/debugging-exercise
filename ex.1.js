function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// ตัวอย่างการทำงานที่ถูกต้อง
console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(0)); // true
