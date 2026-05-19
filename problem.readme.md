# Practice Problems Guide

Problem statements, hints, and solution approaches for every file under [`src/`](./src/).

**Quick index:** [Readme.md](./Readme.md) — links to all files by topic.

**Types:** `exercise` · `demo` · `scratch` (draft / incomplete)

---

## Table of contents

- [Objects and Flattening](#objects-and-flattening)
- [Concepts](#concepts)
- [Array](#array)
- [Strings](#strings)
- [Backtracking](#backtracking)
- [Recursion and Fundamentals](#recursion-and-fundamentals)
- [Practice 3](#practice-3)
- [New Practice 26](#new-practice-26)
- [Promises](#promises)
- [Misc](#misc)

---

## Objects and Flattening

### 1. Object Basics — [`object_basics.js`](./src/objects/object_basics.js) · demo · `#objects`

**Question:** How do you create objects, add dynamic keys, loop keys, and delete properties?

**Input:** Sample `user` object.

**Expected output:** Console logs after create / update / delete.

**Hint:** Use `Object.keys`, `Object.entries`, and `for..in`; `in` checks the prototype chain.

**Approach:** Literal + constructor; dynamic `user[key] = value`; iterate and `delete user.name`.

---

### 2. Object Problems — [`problems.js`](./src/objects/problems.js) · exercise · `#objects`

#### 2a. Is object empty?

**Question:** Is `{}` empty? Is `{ a: 1 }` empty?

**Input:** `{}` · `{ name: "John" }`

**Expected output:** `true` · `false`

**Hint:** `for..in` — return `false` on first key.

**Approach:** Loop keys; no keys found → `true`.

#### 2b. Sum object property values

**Question:** What is the total of all salaries?

**Input:** `{ Ram: 200, Shyam: 300, Jadu: 500 }`

**Expected output:** `1000`

**Hint:** `for..in` and add `salaries[key]`.

**Approach:** Accumulator `sum` in a loop.

#### 2c. Multiply numeric properties by 2

**Question:** Double every numeric property on `menu`.

**Input:** `{ width: 200, height: 300, title: "My menu" }`

**Expected output:** `{ width: 400, height: 600, title: "My menu" }`

**Hint:** `typeof value === "number"` before multiplying.

**Approach:** `for..in`; update only numbers in place.

---

### 3. Object Array — [`array_of_objects.js`](./src/objects/array_of_objects.js) · exercise · `#objects` `#filter` `#map`

**Question:** Filter employees with `age > 25` and add `designation` without mutating originals.

**Input:** `userArray` of `{ name, age }`.

**Expected output:** Filtered list with `designation: "admin"`; copies with `dept` and `location`.

**Hint:** `filter` then `map`; use `{ ...user, dept: "..." }` for immutability.

**Approach:** `filter(age > 25)` → `map` add fields via spread.

---

### 4. Flatten Map — [`flatten_map.js`](./src/objects/flatten_map.js) · exercise · `#objects` `#recursion`

**Question:** Flatten a nested object to dot-notation keys (e.g. `characteristics.height`).

**Input:** Nested `sampleData1` (user, characteristics, techStack).

**Expected output:** `{ name: "sam", "characteristics.height": "6 feet", ... }`

**Hint:** Recurse on plain objects; skip arrays; treat `null` as a leaf.

**Approach:** DFS — prefix `parent.` + merge child keys.

---

### 5. Flatten Array — [`flatten_array.js`](./src/objects/flatten_array.js) · exercise · `#arrays` `#recursion`

**Question:** Flatten a nested array fully, or only up to `level` depth?

**Input:** `[1, 2, [9, 4, [3, 6, [7, 8]]]]` · optional `level = 2`

**Expected output:** `[1, 2, 9, 4, 3, 6, 7, 8]` · or partial flatten per level

**Hint:** If `Array.isArray` and `level > 0`, recurse with `level - 1`; else push as-is.

**Approach:** Recursive flatten with depth counter.

---

### 6. Function.prototype.bind — [`bind.js`](./src/objects/bind.js) · demo · `#bind` `#this`

**Question:** Why does an extracted method lose `this`? How does `bind` fix it?

**Input:** `user` object; `module.getX`.

**Expected output:** Bound call returns `81`; unbound returns `undefined` or wrong value.

**Hint:** `fn.bind(obj)` returns a new function with fixed `this`.

**Approach:** Compare `module.getX()` vs `retrieveX()` vs `boundGetX()`.

---

### 7. Function.prototype.call — [`call.js`](./src/objects/call.js) · demo · `#call` `#this`

**Question:** How do you borrow a parent constructor in a subclass?

**Input:** `new Food("Pizza", 10)`; `greet.call({ name: "John" })`.

**Expected output:** Food instance with Product fields; greeting uses passed object.

**Hint:** `Parent.call(this, ...args)` inside child constructor.

**Approach:** `Product.call(this, name, price)` in `Food`.

---

### 8. Function.prototype.apply — [`apply.js`](./src/objects/apply.js) · demo · `#apply`

**Question:** How do you pass an array as separate arguments to `Math.max`?

**Input:** `[1, 4, 7]`

**Expected output:** `7`

**Hint:** `Math.max.apply(null, arr)` or `Math.max(...arr)`.

**Approach:** `apply` / `push.apply` for array-like spread.

---

### 9. Object Practice — [`objects_practice.js`](./src/objects/objects_practice.js) · demo · `#objects`

**Question:** How do you use bracket notation for hyphenated keys?

**Input:** `{ "first-name": "John", "last-name": "Doe", age: 30 }`

**Expected output:** Key-value pairs logged.

**Hint:** `obj["first-name"]` — dot notation fails on hyphens.

**Approach:** Bracket access + `Object.keys` / `Object.entries`.

---

### 10. Prototype — [`prototype1.js`](./src/objects/prototype1.js) · demo · `#prototype`

**Question:** Where does `nationality` live — instance or prototype?

**Input:** `new Person("Ram", "Singh")`

**Expected output:** `nationality` from `Person.prototype` (`Indian`).

**Hint:** Instance props shadow prototype properties.

**Approach:** Constructor + `Person.prototype.nationality`.

---

### 11. Prototype Inheritance — [`prototype2.js`](./src/objects/prototype2.js) · demo · `#prototype` `#inheritance`

**Question:** How should `Admin` inherit from `User`?

**Input:** User / Admin constructors.

**Expected output:** Shared methods; understand wrong vs right inheritance.

**Hint:** Prefer `Object.create(User.prototype)` or `class extends`.

**Approach:** Constructor + prototype method; explore `Admin.prototype = User` pitfall.

---

### 12. call, apply, bind — [`callBindApply.js`](./src/objects/callBindApply.js) · demo · `#call` `#apply`

**Question:** When do you use `call` vs `apply`?

**Input:** `Engineering` extends `User`; number arrays for `Math.max`.

**Expected output:** User with role; max of array.

**Hint:** `call` = arg list; `apply` = array of args.

**Approach:** `Engineering.call(this, ...)` + `Math.max.apply`.

---

### 13. Different Ways to Create Objects — [`differntWays.js`](./src/objects/differntWays.js) · demo · `#objects` `#class`

**Question:** What are four ways to create an object in JavaScript?

**Input:** N/A (demonstration).

**Expected output:** Instances from constructor, literal, `Object.create`, `class`.

**Hint:** `Object.create(proto)` sets `[[Prototype]]` explicitly.

**Approach:** Side-by-side examples of each pattern.

---

## Concepts

### 1. Closure Example — [`closureExample.js`](./src/concepts/closures/closureExample.js) · demo · `#closures`

**Question:** What does `displayName()` print after `init()`?

**Input:** `name = "Mozilla"` in outer scope.

**Expected output:** `"Mozilla"`

**Hint:** Inner function closes over outer lexical scope.

**Approach:** Nested function reads `name` from parent.

---

### 2. Currying — [`currying.js`](./src/concepts/closures/currying.js) · demo · `#closures` `#currying`

**Question:** What is `multiply(2)(3)(4)`?

**Input:** `multiply(2)(3)(4)`

**Expected output:** `24`

**Hint:** Each call returns a function until all arguments are collected.

**Approach:** `a => b => c => a * b * c`.

---

### 3. Hoisting and Closures — [`hoisting.js`](./src/concepts/closures/hoisting.js) · demo · `#hoisting` `#let` `#setTimeout`

**Question:** What prints for `var` vs `let` inside a `for` + `setTimeout` loop?

**Input:** `for (var i=0; i<3; i++)` vs `for (let i=0; i<3; i++)` with `setTimeout`.

**Expected output:** `3, 3, 3` then `0, 1, 2`

**Hint:** `let` creates a new binding per iteration; `var` shares one.

**Approach:** Compare hoisting, block scope, and loop closures.

---

### 4. Simple Callback — [`callbacksample.js`](./src/concepts/callbackAndPromises/callbacksample.js) · demo · `#callbacks` `#Node.js`

**Question:** How does Node’s error-first callback work?

**Input:** Read `sample.txt`; simulated 5s `fetchData`.

**Expected output:** File data or error; `"Data: someData"`

**Hint:** Always check `err` first: `(err, data) => {}`.

**Approach:** `fs.readFile` callback + `setTimeout` invoking callback.

---

### 5. Child Process Spawn — [`spawnExample.js`](./src/concepts/childProcesses/spawnExample.js) · demo · `#Node.js`

**Question:** How do you run a shell command from Node?

**Input:** `timeout 10` (Windows).

**Expected output:** PIDs and exit code logged.

**Hint:** Listen to `stdout`, `stderr`, `close` on child process.

**Approach:** `spawn` + event handlers.

---

### 6. Debouncing — [`debouncing.js`](./src/concepts/debounceAndThrottle/debouncing.js) · exercise · `#debounce`

**Question:** Run a function only after the user stops calling it for `delay` ms.

**Input:** 3 rapid calls within 2s.

**Expected output:** Single execution after 2s quiet period.

**Hint:** `clearTimeout` on every call; schedule fresh timeout.

**Approach:** Closure holds `timerId`; `apply` preserves `this` and args.

---

### 7. Throttling — [`throttling.js`](./src/concepts/debounceAndThrottle/throttling.js) · exercise · `#throttle`

**Question:** Limit how often a function can run under rapid calls.

**Input:** Rapid successive calls.

**Expected output:** First call immediate; trailing call after window.

**Hint:** `isThrottled` flag + store `lastArgs` for trailing edge.

**Approach:** Skip calls while throttled; flush last args after timeout.

---

### 8. Counter Using Closure — [`counterUsingClosure.js`](./src/concepts/closures/counterUsingClosure.js) · demo · `#closures`

**Question:** Why doesn’t global `count = 7` affect the closure counter?

**Input:** `const c = Counter(); c(); c(); c();`

**Expected output:** `0`, `1`, `2`

**Hint:** Inner `count` is private to each factory call.

**Approach:** Factory returns function that increments enclosed variable.

---

### 9. Promises — [`promises.js`](./src/concepts/callbackAndPromises/promises.js) · demo · `#promises` `#async-await`

**Question:** How do `.then` and `await` consume the same promise?

**Input:** 2s delayed resolve.

**Expected output:** `"Promise Resolved"` logged.

**Hint:** `await` must be inside `async function`.

**Approach:** `new Promise` + `setTimeout` → `.then` and `async/await`.

---

### 10. Streams — [`StreamsExample.js`](./src/concepts/streams/StreamsExample.js) · demo · `#streams` `#Node.js`

**Question:** How do you copy a file with streams?

**Input:** `sample.txt`

**Expected output:** Chunks logged; `output.txt` written.

**Hint:** `createReadStream().pipe(createWriteStream())`.

**Approach:** Pipe + `data` / `finish` events.

---

### 11. Flatten Array Practice — [`test.js`](./src/concepts/test.js) · scratch · `#arrays` `#recursion`

**Question:** Flatten `[1, 2, [9, 4, [3, 6, [7, 8]]]]` and find element not in second array.

**Input:** Nested array; two arrays to compare.

**Expected output:** `[1, 2, 9, 4, 3, 6, 7, 8]`; first unmatched element.

**Hint:** Recurse into arrays; use `Set` for O(n) lookup.

**Approach:** Recursive flatten + membership check.

---

### 12. Flatten Object Practice — [`test2.js`](./src/concepts/test2.js) · scratch · `#objects` `#recursion`

**Question:** Flatten nested object to dot keys (same as flatten map).

**Input:** `sampleData2`

**Expected output:** Flat object with dotted keys.

**Hint:** Same DFS as `flatten_map.js`.

**Approach:** Recursive `flattenMap` with key prefix.

---

## Array

### 1. Even and Odd — [`even_odd_array.js`](./src/practice2/even_odd_array.js) · exercise · `#arrays`

**Question:** Split `[4, 2, 5, 7]` into even and odd arrays.

**Input:** `[4, 2, 5, 7]`

**Expected output:** `{ evenArray: [4, 2], oddArray: [5, 7] }`

**Hint:** `n % 2 === 0` → even bucket.

**Approach:** `forEach` push to even or odd.

---

### 2. Array Sorting — [`array_sorting.js`](./src/practice2/array_sorting.js) · demo · `#sorting`

**Question:** Sort numbers ascending and descending?

**Input:** `[5, 7, 90, 1, 56, 3, 2]`

**Expected output:** Ascending and descending arrays.

**Hint:** `(a, b) => a - b` vs `b - a`.

**Approach:** `Array.sort` with comparators.

---

### 3. Moving Zeros to End — [`moving_zeros.js`](./src/practice2/moving_zeros.js) · exercise · `#arrays` `#two-pointers`

**Question:** Move all `0`s to the end in-place, keep order of non-zeros.

**Input:** `[7, 10, 0, 2, 0, 15, 0, 10]`

**Expected output:** `[7, 10, 2, 15, 10, 0, 0, 0]`

**Hint:** Track `zeroCount`; swap non-zero left by that offset.

**Approach:** Two-pointer style swap when `zeroCount > 0`.

---

### 4. Subsets — [`subsets.js`](./src/practice2/subsets.js) · exercise · `#backtracking` `#subsets`

**Question:** Return all subsets (power set) of `[1, 2, 3]`.

**Input:** `[1, 2, 3]`

**Expected output:** 8 subsets including `[]`

**Hint:** Start `[[]]`; for each num, append to every existing subset.

**Approach:** Iterative cascade build.

---

### 5. Palindrome Check — [`palindrome.js`](./src/practice2/palindrome.js) · exercise · `#strings` `#palindrome`

**Question:** Is `"kayak"` a palindrome?

**Input:** `"kayak"`

**Expected output:** `true`

**Hint:** Compare normalized string to its reverse; or two pointers.

**Approach:** `toLowerCase` + reverse compare.

---

### 6. Array splice, slice, reduce — [`array1.js`](./src/practice1/array1.js) · demo · `#arrays`

**Question:** What is the difference between `splice` and `slice`?

**Input:** `[1, 2, 3, 4, 5]`

**Expected output:** Sum `15`; mutated / copied arrays logged.

**Hint:** `splice` mutates; `slice` copies.

**Approach:** `splice`, `slice`, `reduce` with initial `0`.

---

### 7. Array Collection — [`array2.js`](./src/practice1/array2.js) · exercise · `#arrays` `#backtracking`

Multiple problems in one file:

| Problem | Input (example) | Expected output |
|---------|-----------------|-----------------|
| Remove duplicates | `[1,1,2]` | unique length / array |
| Plus one | `[9,9,9]` | `[1,0,0,0]` |
| Container with most water | height array | max area |
| Subsets / permutations | `[1,2,3]` | all subsets / perms |
| Longest palindrome | `"babad"` | `"bab"` or `"aba"` |

**Hint:** Dedup → two pointers; plus one → carry from end; subsets → iterative or DFS.

**Approach:** See each function in file; expand-around-center for palindrome.

---

### 8. Unequal Triplets, Dedup, Move Zeroes — [`arrayCombination.js`](./src/practice1/arrayCombination.js) · exercise · `#arrays`

**Question:** Count distinct triplets; remove duplicates; move zeroes?

**Input:** `[4,4,2,4,3]` · `[1,1,2]` · `[0,1,0,3,12]`

**Expected output:** triplet count · `2` unique · `[1,3,12,0,0,0]`

**Hint:** Triplets: `i < j < k` and all values different; zeroes: same as moving_zeros.

**Approach:** Triple nested loop; slow/fast dedup; zero swap pattern.

---

### 9. Array Practice Bundle — [`arrayPractice1.js`](./src/practice1/arrayPractice1.js) · exercise · `#arrays`

**Question:** Sort desc, move zeroes, dedup, permutations, all subarrays?

**Hint:** Reuse patterns from `sorting.js`, `moving_zeros.js`, `permutation1.js`.

**Approach:** Combined practice — one technique per function.

---

### 10. Sort Descending and Move Zeroes — [`sorting.js`](./src/practice1/sorting.js) · exercise · `#sorting` `#two-pointers`

**Input:** `[10, 17, 2, 7, 5, 13]` · `[0, 1, 0, 0, 3, 12, 0]`

**Expected output:** descending sorted · zeros at end

**Approach:** `sort((a,b) => b - a)`; zero-count swap loop.

---

### 11. Even/Odd, Weave, Missing Number — [`evenOdd.js`](./src/practice1/evenOdd.js) · exercise · `#arrays`

**Input:** partition array · weave two arrays · `[3, 0, 1]` (n=3)

**Expected output:** even/odd arrays · interleaved · missing `2`

**Hint:** Missing number: `n*(n+1)/2 - sum(arr)` or XOR.

**Approach:** `forEach` partition; `pop` weave; scan `0..n`.

---

### 12. Map Basics — [`mapAndSet1.js`](./src/practice1/mapAndSet1.js) · demo · `#Map`

**Question:** How do `set`, `get`, and iteration work on a `Map`?

**Expected output:** `"Ram"`, `"Jadu"` logged.

**Approach:** `Map` API demonstration loops.

---

### 13–14. Sort Descending / Sort by Frequency — [`Test12.js`](./src/practice1/Test12.js) · [`TestFile.js`](./src/practice1/TestFile.js) · scratch · `#sorting`

**Input:** `[10, 13, 2, 7, 5, 13]` · `[1, 1, 2, 2, 2, 3]`

**Expected output:** descending array · elements by frequency

**Hint:** Custom comparator `(a,b) => freq[b] - freq[a]`.

**Approach:** `sort((a,b) => b - a)`; count with Map then sort.

---

### 15. Practice 2 Test — [`practice2/test.js`](./src/practice2/test.js) · scratch

**Question:** Reduce sum, palindrome, LCP, find missing in second array?

**Hint:** `reduce` for sum/LCP; nested loops or `Set` for missing element.

**Approach:** Multiple small snippets in one file.

---

### 16. Non-Repetitive Elements — [`test.js`](./src/test.js) · exercise · `#frequency`

**Question:** Which numbers appear exactly once?

**Input:** `[2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]`

**Expected output:** `[9, 1]`

**Hint:** Count with object/Map; filter `count === 1`.

**Approach:** Single pass count → collect keys.

---

### 17. Bubble Sort — [`test1.js`](./src/test1.js) · scratch · `#sorting`

**Input:** `[2, 7, 4, 3]`

**Expected output:** sorted (descending in file)

**Hint:** Swap adjacent if out of order; `n-1` passes.

**Approach:** Nested loops with swap.

---

### 18. Merge Two Sorted Arrays — [`test123.js`](./src/test123.js) · scratch · `#merge` `#two-pointers`

**Input:** `a = [1, 4, 8, 9, 20, 21]`, `b = [2, 5, 13]`

**Expected output:** `[1, 2, 4, 5, 8, 9, 13, 20, 21]`

**Hint:** Two indices `i`, `j`; push smaller; append leftovers.

**Approach:** While `i < m && j < n`, compare and advance.

---

## Strings

### 1. Longest Common Prefix — [`longest_common_prefix.js`](./src/practice2/longest_common_prefix.js) · exercise · `#strings`

**Question:** What is the longest common prefix of `["flower","flow","flight"]`?

**Input:** `["flower", "flow", "flight"]`

**Expected output:** `"fl"`

**Hint:** Compare char-by-char; shorten prefix on mismatch.

**Approach:** `reduce` — slice common prefix each step.

---

### 2. Most Frequent Word — [`number_of_words.js`](./src/practice2/number_of_words.js) · exercise · `#strings` `#frequency`

**Question:** Which word appears most often in the text?

**Input:** Long HTML/text sample in file.

**Expected output:** Word with highest count (logged).

**Hint:** `split(/\s+/)`; count in object; `Object.entries` find max.

**Approach:** Tokenize → frequency map → max entry.

---

### 3. Reverse, indexOf, slice — [`string1.js`](./src/practice1/string1.js) · demo · `#strings`

**Input:** `"hello"` · char array

**Expected output:** `"olleh"` · reversed array

**Hint:** `split/reverse/join` or two-pointer swap in array.

**Approach:** Multiple reverse techniques + `substring` vs `slice`.

---

### 4. Valid Anagram and Palindrome Phrase — [`string2.js`](./src/practice1/string2.js) · exercise · `#strings`

**Input:** `"listen"`, `"silent"` · `"A man, a plan, a canal: Panama"`

**Expected output:** `true` · `true`

**Hint:** Anagram: sort both strings; palindrome: strip non-alpha, compare to reverse.

**Approach:** Sort compare; `toLowerCase` + regex clean + reverse.

---

### 5. String Collection — [`string3.js`](./src/practice1/string3.js) · exercise · `#strings` `#stack`

| Problem | Input (example) | Expected output |
|---------|-----------------|-----------------|
| Longest common prefix | `["flower","flight","flame"]` | `"fl"` |
| Group anagrams | `["eat","tea","tan","ate","nat","bat"]` | grouped arrays |
| Valid parentheses | `"()[]{}"` | `true` |
| strstr | `haystack`, `needle` | index or `-1` |
| First unique char | `"leetcode"` | `0` |

**Hint:** Anagram groups: sorted string as Map key; parentheses: stack of expected closers.

**Approach:** See each function in file.

---

### 6. LCP, Reverse, Palindrome, Substring — [`stringPractice1.js`](./src/practice1/stringPractice1.js) · exercise · `#strings` `#sliding-window`

**Input:** LCP array · `"babad"` · `"abcabcbb"`

**Expected output:** `"fl"` · longest palindrome · length `3`

**Hint:** Sliding window + `Set` for unique substring.

**Approach:** `reduce` LCP; expand-center palindrome; sliding window.

---

### 7. All Substrings and LCP — [`stringPractice2.js`](./src/practice1/stringPractice2.js) · exercise · `#strings`

**Input:** `"abc"` · `["flower","flight","flow"]`

**Expected output:** all substrings · common prefix

**Hint:** Double loop `slice(i, j+1)` for substrings.

**Approach:** Nested loops or manual char-by-char LCP.

---

### 8. Longest Palindromic Substring — [`longestPalindrome.js`](./src/practice1/longestPalindrome.js) · exercise · `#palindrome`

**Input:** `"babad"`

**Expected output:** `"bab"` or `"aba"`

**Hint:** Expand around every center (odd and even length).

**Approach:** `expand(i, i)` and `expand(i-1, i)`; track max.

---

### 9. Longest Substring Without Repeating — [`longestSubstring.js`](./src/practice1/longestSubstring.js) · exercise · `#sliding-window`

**Input:** `"abcabcbb"`

**Expected output:** `3`

**Hint:** Shrink `start` while `Set` has duplicate char.

**Approach:** Expand `end`, add to `Set`; on duplicate, remove from `start`.

---

### 10. Longest Substring K Distinct — [`longestSubstringKChar.js`](./src/practice1/longestSubstringKChar.js) · scratch · incomplete

**Input:** `s = "eceba"`, `k = 2`

**Expected output:** length `3`

**Hint:** `Map` of char counts; shrink while `map.size > k`.

**Approach:** Sliding window — finish implementation in file.

---

### 11. Find All Anagram Indices — [`allAnagram.js`](./src/practice1/allAnagram.js) · exercise · `#sliding-window`

**Input:** `s = "abab"`, `p = "ab"`

**Expected output:** `[0, 1, 2]`

**Hint:** Window size `p.length`; compare sorted window to sorted `p`.

**Approach:** Slide window; sort slice and compare.

---

### 12. Generate All Substrings — [`depthFirstSearchAlgo.js`](./src/practice1/depthFirstSearchAlgo.js) · exercise · `#DFS` `#strings`

**Input:** `"abc"`

**Expected output:** `"a"`, `"ab"`, `"abc"`, `"b"`, `"bc"`, `"c"` (order may vary)

**Hint:** DFS include char at index, recurse `i+1`.

**Approach:** Backtracking / or double-loop slice.

---

### 13. Character Frequency String — [`test5.js`](./src/test5.js) · exercise · `#frequency`

**Input:** `"cbdabdcadcdcccda"`

**Expected output:** `"3a2b6c5d"` (sorted key order in solution)

**Hint:** Sort chars; count; concatenate `count + char`.

**Approach:** Sort → frequency object → build string.

---

### 14. Anagram and Queue — [`test4.js`](./src/test4.js) · scratch · `#queue`

**Input:** `"Mary"`, `"Army"`

**Expected output:** anagram `true`; queue dequeue demo

**Hint:** Anagram: sort lowercase; queue: `push` / `pop` from end.

**Approach:** Sort compare; simple array-as-queue.

---

## Backtracking

### 1. Subsets with Duplicates — [`subset1.js`](./src/practice1/subset1.js) · exercise · `#backtracking`

**Input:** `[1, 2, 2]`

**Expected output:** unique subsets only

**Hint:** Sort first; skip duplicate branches at same depth.

**Approach:** DFS include / exclude at each index.

---

### 2. Combination Sum — [`combinationsum1.js`](./src/practice1/combinationsum1.js) · exercise · `#backtracking`

**Input:** `candidates = [2, 3, 6, 7]`, `target = 7`

**Expected output:** `[[2, 2, 3], [7]]`

**Hint:** Reuse same index `j` (not `j+1`); prune when `target < 0`.

**Approach:** DFS + slate push/pop; collect when `target === 0`.

---

### 3. Letter Case Permutation — [`letterCasePermutation.js`](./src/practice1/letterCasePermutation.js) · exercise · `#backtracking`

**Input:** `"a1b2"`

**Expected output:** `["a1b2", "a1B2", "A1b2", "A1B2"]`

**Hint:** Digits: one path; letters: branch upper and lower.

**Approach:** DFS with slate; join at base case.

---

### 4. Letter Case Permutation (variant) — [`letterCasePermutation1.js`](./src/practice1/letterCasePermutation1.js) · exercise

Same as #3 using `charAt(i)` — compare both files.

---

### 5. Permutations — [`permutation1.js`](./src/practice1/permutation1.js) · exercise · `#permutations`

**Input:** `[1, 2, 3]`

**Expected output:** all 6 permutations

**Hint:** Swap `nums[i]` with `nums[j]`, recurse, swap back.

**Approach:** In-place swap backtracking.

---

### 6. Permutations with Duplicates — [`permutation2.js`](./src/practice1/permutation2.js) · exercise

**Input:** `[1, 1, 2]`

**Expected output:** unique permutations

**Hint:** Sort + skip equal adjacent swaps at same level.

**Approach:** Swap DFS + dedup logic.

---

### 7. Subsets and Permutations — [`PermutationAndCombination.js`](./src/practice1/PermutationAndCombination.js) · exercise

**Input:** `[1, 2, 3]`

**Expected output:** power set + all permutations

**Hint:** Subsets: iterative cascade; perms: pick head + permute tail.

**Approach:** Two patterns in one file.

---

### 8. Palindrome Partitioning — [`palindromePartitioning.js`](./src/practice1/palindromePartitioning.js) · exercise · `#palindrome`

**Input:** `"aab"`

**Expected output:** `[["a","a","b"], ["aa","b"]]`

**Hint:** Try every `s[i..j]`; recurse only if substring is palindrome.

**Approach:** DFS + two-pointer `isPalindrome`.

---

## Recursion and Fundamentals

### 1. Recursive Sum and Array Product — [`recursion1.js`](./src/practice1/recursion1.js) · demo · `#recursion`

**Input:** `n = 5` · number array

**Expected output:** `15` · product of array

**Hint:** Base case `n === 0` or `n === 1`.

**Approach:** `n + recursiveSum(n-1)`; `reduce` multiply.

---

### 2. Bitwise XOR — [`logical.js`](./src/practice1/logical.js) · scratch · `#bitwise`

**Input:** `5 ^ 2`

**Expected output:** `7`

**Hint:** `^` is XOR, not power (`**`).

**Approach:** Evaluate `5 ^ 2`.

---

### 3. Hoisting TDZ — [`hoisting.js`](./src/practice1/hoisting.js) · demo · `#hoisting`

**Question:** Why does calling `func` before `const func` throw?

**Expected output:** `ReferenceError`

**Hint:** `let` / `const` are in temporal dead zone until initialized.

**Approach:** Observe error when calling before declaration.

---

## Practice 3

### 1. Non-Repetitive Elements — [`practice3/test.js`](./src/practice3/test.js) · exercise

Same as [Array #16](#16-non-repetitive-elements--testjs--src-testjs--exercise--frequency).

**Input:** `[2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]`

**Expected output:** `[9, 1]`

---

## New Practice 26

### 1. Return Order Data — [`orders.js`](./src/newPractice26/orders.js) · data

**Question:** N/A — sample JSON fixture for object processing.

**Input:** Static `returnOrder` export.

**Expected output:** Used by `1_objectprocessing.js`.

---

### 2. Flatten Return Order — [`1_objectprocessing.js`](./src/newPractice26/1_objectprocessing.js) · exercise · `#objects` `#spread`

**Question:** Merge order header with each `return_item` into separate rows.

**Input:** `returnOrder` from `orders.js` (5 items).

**Expected output:** Array of 5 flat objects (header + one item each).

**Hint:** `const { return_items, ...header } = order`; map items with spread.

**Approach:** Copy header without `return_items` → `{ ...header, ...item }` per row.

---

### 3. Event Loop — [`2_async-task-schedular.js`](./src/newPractice26/2_async-task-schedular.js) · demo · `#event-loop`

**Question:** Predict log order: sync vs `Promise.then` vs `setTimeout(0)`.

**Expected output:** `TASK 1 STARTED` → `TASK 2 STARTED` → `TASK 1 Promise` → `TASK 1 Timeout`

**Hint:** Microtasks before macrotasks.

**Approach:** Run tasks sequentially; note queue ordering.

---

### 4. Counter Using Closures — [`3_counter-using-closures.js`](./src/newPractice26/3_counter-using-closures.js) · demo · `#closures`

**Input:** Three calls to inner function.

**Expected output:** `1`, `2`, `3`

**Approach:** Outer `counter`; inner increments and logs.

---

### 5. Calculator Using Closure — [`4_calculator-using-closure.js`](./src/newPractice26/4_calculator-using-closure.js) · demo · `#currying`

**Input:** `adding(2)(3)`

**Expected output:** `5`

**Approach:** `adding(x) => y => x + y`.

---

## Promises

### 1. Callback Adult Checker — [`1_call_back.js`](./src/newPractice26/10_promises/1_call_back.js) · demo · `#callbacks`

**Input:** `age = 21`

**Expected output:** `IS ADULT: true`

**Hint:** Pass callback; callee invokes with result.

**Approach:** `isAdult(age, cb)` → `cb(isAdult)`.

---

### 2. Promise with async/await — [`2_promises.js`](./src/newPractice26/10_promises/2_promises.js) · demo · `#promises`

**Input:** 2s delayed resolve.

**Expected output:** `"Successfully Fetched the Method"`

**Hint:** Needs ES module for top-level `await`.

**Approach:** `new Promise` + `setTimeout` → `await`.

---

### 3. Promise.all — [`3_promise-api.js`](./src/newPractice26/10_promises/3_promise-api.js) · demo · `#Promise.all`

**Input:** 3 promises, one rejects.

**Expected output:** Rejection — `.then` not called.

**Hint:** Use `Promise.allSettled` to see all results.

**Approach:** `Promise.all` short-circuits on first reject.

---

## Misc

### 1. 100 Doors — [`test6.js`](./src/test6.js) · exercise · `#math`

**Question:** After 100 passes toggling doors, which stay open?

**Input:** Doors `1..100`

**Expected output:** Open doors at perfect squares (1, 4, 9, 16, …)

**Hint:** Toggle count = divisor count; odd count ↔ perfect square.

**Approach:** Count divisors per door; odd → open.

---

### 2. Parking Slot Assignment — [`test7.js`](./src/test7.js) · exercise · `#simulation`

**Question:** Can cars `A` and `B` be assigned slots without conflict?

**Input:** `A = [2, 5, 6, 5]`, `B = [5, 4, 2, 2]`, `S = 8`

**Expected output:** `false`

**Hint:** Track which slot each car already uses on conflict.

**Approach:** Map car → slot; return `false` if both want same slot twice.

---

## Notes

- **Incomplete:** [`longestSubstringKChar.js`](./src/practice1/longestSubstringKChar.js) · [`1_objectprocessing.js`](./src/newPractice26/1_objectprocessing.js) (ends at `Object.keys` exploration).
- **ES modules:** Run `newPractice26/*` with `"type": "module"` or `node --experimental-modules`.
- **Multi-snippet files:** [`array2.js`](./src/practice1/array2.js), [`string3.js`](./src/practice1/string3.js), [`arrayPractice1.js`](./src/practice1/arrayPractice1.js) — several problems per file; see tables above.
