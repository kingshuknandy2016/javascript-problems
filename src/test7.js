function solution(A, B, S) {
  const slot = {};
  // Implement your solution here

  for (let i = 0; i <= S - 1; i++) {
    const elementA = A[i];
    const elementB = B[i];
    if (!slot[elementA]) {
      slot[elementA] = i + 1;
    } else if (!slot[elementB]) {
      slot[elementB] = i + 1;
    } 
    else {
      return false;
    }
  }

  console.log(slot);
  const slots = Object.keys(slot);
  console.log(slots.length);
  return slots.length <= S ? true : false;
}

console.log(solution([2, 5, 6, 5], [5, 4, 2, 2], 8));
