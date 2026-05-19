/**
 * Generates src/practice-set-all/ — blank practice stubs from problem catalog.
 * Run: node scripts/generate-practice-set-all.js
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src", "practice-set-all");

function stub({
  title,
  type = "exercise",
  tags = [],
  question = "",
  input = "",
  expected = "",
  hint = "",
  exports = false,
  extra = "",
  sampleRun = "",
}) {
  const tagLine = tags.length ? tags.join(" ") : "";
  return `/**
 * Problem: ${title}
 * Type: ${type}
 * Tags: ${tagLine}
 *
 * Question: ${question}
 * Input: ${input}
 * Expected output: ${expected}
 *
 * Hint: ${hint}
 */

${extra}

${exports ? "export " : ""}function solve(/* TODO: parameters */) {
  // TODO: Implement your solution
}

${sampleRun}
`;
}

const catalog = [
  {
    dir: "01-objects-and-flattening",
    items: [
      {
        file: "01-object-basics.js",
        title: "Object Basics",
        type: "demo",
        tags: ["#objects"],
        question: "Create objects, add dynamic keys, loop keys, delete properties.",
        input: "Sample user object",
        expected: "Console logs after create / update / delete",
        hint: "Object.keys, Object.entries, for..in",
      },
      {
        file: "02a-is-object-empty.js",
        title: "Is Object Empty",
        type: "exercise",
        tags: ["#objects"],
        question: "Is {} empty? Is { a: 1 } empty?",
        input: "{} · { name: \"John\" }",
        expected: "true · false",
        hint: "for..in — return false on first key",
        sampleRun: `// console.log(solve({}));
// console.log(solve({ name: "John" }));`,
      },
      {
        file: "02b-sum-object-values.js",
        title: "Sum Object Property Values",
        type: "exercise",
        tags: ["#objects"],
        question: "What is the total of all salaries?",
        input: "{ Ram: 200, Shyam: 300, Jadu: 500 }",
        expected: "1000",
        hint: "for..in and add salaries[key]",
        sampleRun: `const salaries = { Ram: 200, Shyam: 300, Jadu: 500 };
// console.log(solve(salaries));`,
      },
      {
        file: "02c-multiply-numeric-properties.js",
        title: "Multiply Numeric Properties by 2",
        type: "exercise",
        tags: ["#objects"],
        question: "Double every numeric property on menu.",
        input: '{ width: 200, height: 300, title: "My menu" }',
        expected: "{ width: 400, height: 600, title: \"My menu\" }",
        hint: "typeof value === \"number\" before multiplying",
        sampleRun: `const menu = { width: 200, height: 300, title: "My menu" };
// console.log(solve(menu));`,
      },
      {
        file: "03-array-of-objects.js",
        title: "Filter Employees and Add Property",
        type: "exercise",
        tags: ["#objects", "#filter", "#map"],
        question: "Filter age > 25, add designation, immutable copies with dept/location.",
        input: "userArray of { name, age }",
        expected: "Filtered + mapped arrays",
        hint: "filter then map with spread",
        sampleRun: `const userArray = [
  { name: "Ram", age: 32 },
  { name: "Jadu", age: 42 },
  { name: "Madhu", age: 18 },
];
// console.log(solve(userArray));`,
      },
      {
        file: "04-flatten-map.js",
        title: "Flatten Nested Object",
        type: "exercise",
        tags: ["#objects", "#recursion"],
        question: "Flatten nested object to dot-notation keys.",
        input: "Nested sampleData1 (user, characteristics, techStack)",
        expected: '{ "characteristics.height": "6 feet", ... }',
        hint: "DFS on plain objects; skip arrays",
        sampleRun: `const sampleData = {
  name: "sam",
  characteristics: { height: "6 feet", hair: "black" },
};
// console.log(solve(sampleData));`,
      },
      {
        file: "05a-flatten-array-full.js",
        title: "Flatten Nested Array (full depth)",
        type: "exercise",
        tags: ["#arrays", "#recursion"],
        question: "Flatten deeply nested array to one level.",
        input: "[1, 2, [9, 4, [3, 6, [7, 8]]]]",
        expected: "[1, 2, 9, 4, 3, 6, 7, 8]",
        hint: "Recurse into arrays and concat results",
        sampleRun: `const input = [1, 2, [9, 4, [3, 6, [7, 8]]]];
// console.log(solve(input));`,
      },
      {
        file: "05b-flatten-array-level.js",
        title: "Flatten Nested Array (depth limited)",
        type: "exercise",
        tags: ["#arrays", "#recursion"],
        question: "Flatten only up to level depth.",
        input: "[1, 2, [9, 4, [3, 6]]], level = 2",
        expected: "Partially flat array per level",
        hint: "Pass level - 1 to recursive call",
        sampleRun: `const input = [1, 2, [9, 4, [3, 6, [7, 8]]]];
// console.log(solve(input, 2));`,
      },
      {
        file: "06-bind.js",
        title: "Function.prototype.bind",
        type: "demo",
        tags: ["#bind", "#this"],
        question: "Why does extracted method lose this? Fix with bind.",
        input: "user object; module.getX",
        expected: "Bound call returns correct this.x",
        hint: "fn.bind(obj) fixes this permanently",
      },
      {
        file: "07-call.js",
        title: "Function.prototype.call",
        type: "demo",
        tags: ["#call", "#this"],
        question: "Borrow parent constructor in subclass.",
        input: 'new Food("Pizza", 10)',
        expected: "Food instance with Product fields",
        hint: "Parent.call(this, ...args)",
      },
      {
        file: "08-apply.js",
        title: "Function.prototype.apply",
        type: "demo",
        tags: ["#apply"],
        question: "Pass array as arguments to Math.max.",
        input: "[1, 4, 7]",
        expected: "7",
        hint: "Math.max.apply(null, arr) or Math.max(...arr)",
      },
      {
        file: "09-objects-practice.js",
        title: "Bracket Notation Keys",
        type: "demo",
        tags: ["#objects"],
        question: "Access hyphenated keys and iterate.",
        input: '{ "first-name": "John", age: 30 }',
        expected: "Key-value pairs logged",
        hint: 'obj["first-name"]',
      },
      {
        file: "10-prototype.js",
        title: "Constructor and Prototype",
        type: "demo",
        tags: ["#prototype"],
        question: "Where does nationality live?",
        input: 'new Person("Ram", "Singh")',
        expected: "nationality from prototype",
        hint: "Person.prototype.nationality",
      },
      {
        file: "11-prototype-inheritance.js",
        title: "Prototype Inheritance User Admin",
        type: "demo",
        tags: ["#prototype", "#inheritance"],
        question: "How should Admin inherit from User?",
        input: "User / Admin constructors",
        expected: "Shared methods; correct inheritance",
        hint: "Object.create or class extends",
      },
      {
        file: "12-call-bind-apply.js",
        title: "call apply bind combined",
        type: "demo",
        tags: ["#call", "#apply"],
        question: "When to use call vs apply?",
        input: "Constructors; number arrays",
        expected: "User with role; max of array",
        hint: "call = arg list; apply = array of args",
      },
      {
        file: "13-create-objects-ways.js",
        title: "Ways to Create Objects",
        type: "demo",
        tags: ["#objects", "#class"],
        question: "Four ways to create objects?",
        input: "N/A demonstration",
        expected: "Instances from each pattern",
        hint: "literal, constructor, Object.create, class",
      },
    ],
  },
  {
    dir: "02-concepts",
    items: [
      {
        file: "closures/01-closure-example.js",
        title: "Closure Example",
        type: "demo",
        tags: ["#closures"],
        question: "What does displayName() print?",
        input: 'name = "Mozilla"',
        expected: '"Mozilla"',
        hint: "Inner function closes over outer scope",
      },
      {
        file: "closures/02-currying.js",
        title: "Currying multiply(a)(b)(c)",
        type: "demo",
        tags: ["#closures", "#currying"],
        question: "What is multiply(2)(3)(4)?",
        input: "multiply(2)(3)(4)",
        expected: "24",
        hint: "Nested functions return until arity complete",
        sampleRun: "// console.log(solve(2)(3)(4));",
      },
      {
        file: "closures/03-hoisting.js",
        title: "Hoisting and setTimeout loop",
        type: "demo",
        tags: ["#hoisting", "#let", "#setTimeout"],
        question: "var vs let in for + setTimeout?",
        input: "for loops with setTimeout",
        expected: "3,3,3 then 0,1,2",
        hint: "let creates per-iteration binding",
      },
      {
        file: "closures/04-counter-using-closure.js",
        title: "Counter Using Closure",
        type: "demo",
        tags: ["#closures"],
        question: "Why global count does not affect closure counter?",
        input: "Three calls to inner function",
        expected: "0, 1, 2",
        hint: "Private count in closure per factory",
      },
      {
        file: "callbackAndPromises/01-callback-sample.js",
        title: "Simple Callback",
        type: "demo",
        tags: ["#callbacks", "#Node.js"],
        question: "Error-first callback pattern?",
        input: "Read file or simulated fetchData",
        expected: "Data or error handled",
        hint: "Check err first in (err, data)",
        extra: "// Requires sample.txt if using fs — create or mock.",
      },
      {
        file: "callbackAndPromises/02-promises.js",
        title: "Promises and async await",
        type: "demo",
        tags: ["#promises", "#async-await"],
        question: "Consume promise with then and await?",
        input: "2s delayed resolve",
        expected: "Promise Resolved logged",
        hint: "await inside async function",
      },
      {
        file: "childProcesses/01-spawn.js",
        title: "Child Process Spawn",
        type: "demo",
        tags: ["#Node.js"],
        question: "Run shell command from Node?",
        input: "timeout 10 (Windows)",
        expected: "PIDs and exit code",
        hint: "spawn + stdout/stderr/close events",
      },
      {
        file: "debounceAndThrottle/01-debouncing.js",
        title: "Debouncing",
        type: "exercise",
        tags: ["#debounce"],
        question: "Run function only after quiet period?",
        input: "3 rapid calls within 2s",
        expected: "Single execution after delay",
        hint: "clearTimeout on each call",
        sampleRun: `function debounce(func, delay) {
  // TODO
}
// const d = debounce(() => console.log("ran"), 2000);`,
      },
      {
        file: "debounceAndThrottle/02-throttling.js",
        title: "Throttling",
        type: "exercise",
        tags: ["#throttle"],
        question: "Limit execution rate under rapid calls?",
        input: "Rapid successive calls",
        expected: "First immediate; trailing after window",
        hint: "isThrottled flag + lastArgs",
      },
      {
        file: "streams/01-streams-pipe.js",
        title: "Node.js Streams Pipe",
        type: "demo",
        tags: ["#streams", "#Node.js"],
        question: "Copy file with streams?",
        input: "sample.txt",
        expected: "output.txt created",
        hint: "createReadStream().pipe(createWriteStream())",
        extra: "// Place sample.txt in this folder or adjust path.",
      },
      {
        file: "11-flatten-array-practice.js",
        title: "Flatten Array Practice",
        type: "scratch",
        tags: ["#arrays", "#recursion"],
        question: "Flatten nested array; find element not in second array?",
        input: "Nested array; two arrays",
        expected: "Flat array; first unmatched",
        hint: "Recurse; use Set for lookup",
        sampleRun: `const nested = [1, 2, [9, 4, [3, 6, [7, 8]]]];
// console.log(solve(nested));`,
      },
      {
        file: "12-flatten-object-practice.js",
        title: "Flatten Object Practice",
        type: "scratch",
        tags: ["#objects", "#recursion"],
        question: "Flatten nested object to dot keys?",
        input: "sampleData2 nested object",
        expected: "Flat object with dotted keys",
        hint: "Same DFS as flatten-map",
      },
    ],
  },
  {
    dir: "03-array",
    items: [
      mkArray("01-even-and-odd.js", "Even and Odd", "Split into even and odd arrays", "[4, 2, 5, 7]", "{ even: [4,2], odd: [5,7] }", "n % 2 === 0"),
      mkArray("02-array-sorting.js", "Array Sorting", "Sort ascending and descending", "[5, 7, 90, 1]", "Sorted arrays", "(a,b) => a-b vs b-a"),
      mkArray("03-moving-zeros.js", "Moving Zeros to End", "Move 0s to end in-place", "[7, 10, 0, 2, 0, 15, 0, 10]", "[7, 10, 2, 15, 10, 0, 0, 0]", "zeroCount swap pattern"),
      mkArray("04-subsets.js", "Subsets Power Set", "All subsets of [1,2,3]", "[1, 2, 3]", "8 subsets including []", "Start [[]], extend each"),
      mkArray("05-palindrome-check.js", "Palindrome Check", 'Is "kayak" palindrome?', '"kayak"', "true", "Compare to reverse lowercase"),
      mkArray("06-splice-slice-reduce.js", "splice slice reduce", "Difference splice vs slice; sum array", "[1,2,3,4,5]", "sum 15", "splice mutates; slice copies"),
      mkArray("07a-remove-duplicates.js", "Remove Duplicates", "Unique count in-place sorted array", "[1, 1, 2]", "2", "slow/fast pointer"),
      mkArray("07b-plus-one.js", "Plus One", "Increment digit array", "[9, 9, 9]", "[1, 0, 0, 0]", "carry from end"),
      mkArray("07c-container-water.js", "Container With Most Water", "Max water between lines", "height array", "max area integer", "two pointers from ends"),
      mkArray("07d-subsets-iterative.js", "Subsets Iterative", "Power set iterative", "[1, 2, 3]", "all subsets", "cascade each element"),
      mkArray("07e-permutations.js", "Permutations", "All permutations", "[1, 2, 3]", "6 permutations", "swap backtracking"),
      mkArray("07f-longest-palindrome-substring.js", "Longest Palindromic Substring", "Longest palindrome in string", '"babad"', '"bab" or "aba"', "expand around center"),
      mkArray("08a-unequal-triplets.js", "Unequal Triplets", "Count distinct triplets i<j<k", "[4, 4, 2, 4, 3]", "count", "triple nested loop"),
      mkArray("08b-remove-duplicates-combo.js", "Remove Duplicates (combination)", "Dedup pattern", "[1, 1, 2]", "unique prefix", "two pointers"),
      mkArray("08c-move-zeroes-combo.js", "Move Zeroes (combination)", "Move zeroes in-place", "[0, 1, 0, 3, 12]", "[1, 3, 12, 0, 0, 0]", "zeroCount swap"),
      mkArray("09-sort-desc.js", "Sort Descending", "Sort array descending", "[10, 17, 2, 7, 5, 13]", "descending sorted", "sort (a,b) => b-a"),
      mkArray("09b-move-zeroes-bundle.js", "Move Zeroes Bundle", "Move zeroes", "[0, 1, 0, 0, 3, 12]", "zeros at end", "two pointer swap"),
      mkArray("09c-remove-dups-bundle.js", "Remove Duplicates Bundle", "Dedup in-place", "[0,0,1,1,2]", "unique length", "slow/fast"),
      mkArray("09d-permutations-bundle.js", "Permutations Bundle", "Generate permutations", "[1,2,3]", "all perms", "backtracking"),
      mkArray("09e-all-subarrays.js", "All Subarrays", "Every contiguous subarray", "[1, 2, 3]", "all slices", "double loop slice"),
      mkArray("10-sort-and-move-zeroes.js", "Sort Desc and Move Zeroes", "Both in sorting.js", "arrays in file", "sorted + zeroes moved", "sort + swap"),
      mkArray("11a-partition-even-odd.js", "Partition Even Odd", "Split even and odd", "[4, 2, 5, 7]", "two arrays", "forEach % 2"),
      mkArray("11b-weave-arrays.js", "Weave Arrays", "Interleave two arrays", "even and odd arrays", "interleaved", "pop alternate"),
      mkArray("11c-missing-number.js", "Missing Number", "Find missing in 0..n", "[3, 0, 1]", "2", "sum formula or XOR"),
      mkArray("12-map-basics.js", "Map Basics", "Map set get iterate", "Map with keys", "values logged", "for..of map"),
      mkArray("13-sort-descending.js", "Sort Descending Test12", "Sort desc", "[10, 13, 2, 7, 5, 13]", "descending", "b-a comparator"),
      mkArray("14-sort-by-frequency.js", "Sort by Frequency", "Order by freq", "[1, 1, 2, 2, 2, 3]", "by frequency", "Map count + sort"),
      mkArray("15a-reduce-sum.js", "Reduce Sum", "Sum with reduce", "[1,2,3,4,5]", "15", "reduce + initial 0"),
      mkArray("15b-palindrome-test.js", "Palindrome Test", "Check palindrome", '"kayak"', "true", "reverse compare"),
      mkArray("15c-lcp-test.js", "LCP Test", "Longest common prefix", '["flower","flight"]', '"fl"', "reduce char compare"),
      mkArray("15d-missing-in-second.js", "Missing in Second Array", "Element in arr1 not in arr2", "two arrays", "first missing", "Set or nested loop"),
      mkArray("16-non-repetitive-elements.js", "Non Repetitive Elements", "Elements appearing once", "[2,3,4,3,3,2,4,9,1,2,5,5]", "[9, 1]", "frequency count"),
      mkArray("17-bubble-sort.js", "Bubble Sort", "Sort with bubble sort", "[2, 7, 4, 3]", "sorted", "nested swap loops"),
      mkArray("18-merge-sorted-arrays.js", "Merge Sorted Arrays", "Merge two sorted arrays", "a=[1,4,8,9], b=[2,5,13]", "merged sorted", "two indices i,j"),
    ],
  },
  {
    dir: "04-strings",
    items: [
      mkStr("01-longest-common-prefix.js", "Longest Common Prefix", '["flower","flow","flight"]', '"fl"'),
      mkStr("02-most-frequent-word.js", "Most Frequent Word", "long text sample", "word with max count"),
      mkStr("03-reverse-string.js", "Reverse String", '"hello"', '"olleh"'),
      mkStr("04-anagram-and-palindrome-phrase.js", "Anagram and Palindrome Phrase", "listen/silent; Panama phrase", "true"),
      mkStr("05a-longest-common-prefix.js", "LCP (string3)", '["flower","flight","flame"]', '"fl"'),
      mkStr("05b-group-anagrams.js", "Group Anagrams", '["eat","tea","tan","ate","nat","bat"]', "grouped arrays"),
      mkStr("05c-valid-parentheses.js", "Valid Parentheses", '"()[]{}"', "true"),
      mkStr("05d-strstr.js", "strstr", 'haystack="hello", needle="ll"', "2"),
      mkStr("05e-first-unique-char.js", "First Unique Character", '"leetcode"', "0"),
      mkStr("06a-lcp.js", "LCP stringPractice1", '["flower","flight","flame"]', '"fl"'),
      mkStr("06b-reverse-string.js", "Reverse stringPractice1", '"RAMA"', "reversed"),
      mkStr("06c-longest-palindrome.js", "Longest Palindrome", '"babad"', '"bab" or "aba"'),
      mkStr("06d-longest-substring.js", "Longest Substring No Repeat", '"abcabcbb"', "3"),
      mkStr("07-all-substrings-and-lcp.js", "All Substrings and LCP", '"abc"', "substrings + prefix"),
      mkStr("08-longest-palindromic-substring.js", "Longest Palindromic Substring", '"babad"', '"bab"'),
      mkStr("09-longest-substring-no-repeat.js", "Longest Substring Without Repeating", '"abcabcbb"', "3"),
      mkStr("10-longest-substring-k-distinct.js", "Longest Substring K Distinct", 's="eceba", k=2', "3"),
      mkStr("11-find-all-anagram-indices.js", "Find All Anagram Indices", 's="abab", p="ab"', "[0,1,2]"),
      mkStr("12-generate-all-substrings.js", "Generate All Substrings", '"abc"', "all substrings"),
      mkStr("13-character-frequency-string.js", "Character Frequency String", '"cbdabdcadcdcccda"', '"3a2b6c5d"'),
      mkStr("14-anagram-and-queue.js", "Anagram and Queue", "Mary/Army", "anagram true"),
    ],
  },
  {
    dir: "05-backtracking",
    items: [
      mkBt("01-subsets-with-duplicates.js", "Subsets with Duplicates", "[1, 2, 2]", "unique subsets"),
      mkBt("02-combination-sum.js", "Combination Sum", "candidates [2,3,6,7], target 7", "[[2,2,3],[7]]"),
      mkBt("03-letter-case-permutation.js", "Letter Case Permutation", '"a1b2"', '["a1b2","a1B2","A1b2","A1B2"]'),
      mkBt("04-letter-case-permutation-variant.js", "Letter Case Permutation Variant", '"a1b1"', "all case perms"),
      mkBt("05-permutations.js", "Permutations", "[1, 2, 3]", "6 permutations"),
      mkBt("06-permutations-with-duplicates.js", "Permutations with Duplicates", "[1, 1, 2]", "unique perms"),
      mkBt("07-subsets-and-permutations.js", "Subsets and Permutations", "[1, 2, 3]", "power set + perms"),
      mkBt("08-palindrome-partitioning.js", "Palindrome Partitioning", '"aab"', '[["a","a","b"],["aa","b"]]'),
    ],
  },
  {
    dir: "06-recursion-and-fundamentals",
    items: [
      {
        file: "01-recursive-sum-and-product.js",
        title: "Recursive Sum and Array Product",
        type: "demo",
        tags: ["#recursion"],
        question: "recursiveSum(n) and array product?",
        input: "n=5; number array",
        expected: "15; product",
        hint: "base case n===0 or n===1",
        sampleRun: "// console.log(solve(5));",
      },
      {
        file: "02-bitwise-xor.js",
        title: "Bitwise XOR",
        type: "scratch",
        tags: ["#bitwise"],
        question: "What is 5 ^ 2?",
        input: "5 ^ 2",
        expected: "7",
        hint: "^ is XOR not power",
        sampleRun: "// console.log(solve(5, 2));",
      },
      {
        file: "03-hoisting-tdz.js",
        title: "Hoisting TDZ",
        type: "demo",
        tags: ["#hoisting"],
        question: "Why call before const throws?",
        input: "call func before const func",
        expected: "ReferenceError",
        hint: "temporal dead zone for let/const",
      },
    ],
  },
  {
    dir: "07-practice-3",
    items: [
      mkArray("01-non-repetitive-elements.js", "Non Repetitive Elements", "Elements once only", "[2,3,4,3,3,2,4,9,1,2,5,5]", "[9, 1]", "frequency count"),
    ],
  },
  {
    dir: "08-new-practice-26",
    items: [
      {
        file: "data/orders.js",
        title: "Return Order Sample Data",
        type: "data",
        tags: ["#data"],
        question: "N/A — fixture for object processing",
        input: "static JSON",
        expected: "export returnOrder",
        hint: "Do not modify unless extending exercise",
        exports: true,
        extra: `export const returnOrder = {
  order_id: 21476154928208,
  channel_id: 302663,
  return_items: [
    { bundle_sku: "A", sku: "TestProductA1", channel_return_reason: "Size issues" },
    { bundle_sku: "B", sku: "TestProductA2", channel_return_reason: "Size issues" },
  ],
};`,
        sampleRun: "",
      },
      {
        file: "02-flatten-return-order.js",
        title: "Flatten Return Order",
        type: "exercise",
        tags: ["#objects", "#spread", "#ES-modules"],
        question: "Merge header with each return_item into rows",
        input: "returnOrder from data/orders.js",
        expected: "array of flat row objects",
        hint: "destructure return_items; spread merge",
        exports: true,
        extra: 'import { returnOrder } from "./data/orders.js";',
        sampleRun: "// console.log(solve(returnOrder));",
      },
      {
        file: "03-event-loop.js",
        title: "Event Loop Ordering",
        type: "demo",
        tags: ["#event-loop"],
        question: "Predict sync vs Promise vs setTimeout order?",
        input: "two tasks with mixed async",
        expected: "TASK1 STARTED, TASK2 STARTED, TASK1 Promise, TASK1 Timeout",
        hint: "microtasks before macrotasks",
      },
      {
        file: "04-counter-using-closures.js",
        title: "Counter Using Closures",
        type: "demo",
        tags: ["#closures"],
        question: "Factory counter 1,2,3?",
        input: "three inner calls",
        expected: "1, 2, 3",
        hint: "outer counter enclosed",
        sampleRun: "// const c = solve(); c(); c(); c();",
      },
      {
        file: "05-calculator-currying.js",
        title: "Calculator Currying",
        type: "demo",
        tags: ["#currying"],
        question: "adding(2)(3)?",
        input: "adding(2)(3)",
        expected: "5",
        hint: "x => y => x + y",
        sampleRun: "// console.log(solve(2)(3));",
      },
    ],
  },
  {
    dir: "08-new-practice-26/10-promises",
    items: [
      {
        file: "01-callback-adult-checker.js",
        title: "Callback Adult Checker",
        type: "demo",
        tags: ["#callbacks"],
        question: "Check age via callback?",
        input: "age=21",
        expected: "IS ADULT: true",
        hint: "pass callback invoked with result",
        exports: true,
      },
      {
        file: "02-promises-async-await.js",
        title: "Promise async await",
        type: "demo",
        tags: ["#promises"],
        question: "Promise resolving after delay?",
        input: "2s delay",
        expected: "Successfully Fetched the Method",
        hint: "top-level await needs ES module",
        exports: true,
      },
      {
        file: "03-promise-all.js",
        title: "Promise.all",
        type: "demo",
        tags: ["#Promise.all"],
        question: "What if one promise rejects?",
        input: "3 promises one rejects",
        expected: "rejection, then not called",
        hint: "Promise.allSettled for all results",
        exports: true,
      },
    ],
  },
  {
    dir: "09-misc",
    items: [
      mkArray("01-100-doors.js", "100 Doors Locker", "Which doors stay open?", "doors 1..100", "perfect squares open", "motion count odd = open"),
      mkArray("02-parking-slot-assignment.js", "Parking Slot Assignment", "Assign without conflict?", "A,B,S=8", "false", "track slot per car"),
    ],
  },
];

function mkArray(file, title, question, input, expected, hint) {
  return {
    file,
    title,
    type: "exercise",
    tags: ["#arrays"],
    question,
    input,
    expected,
    hint,
    sampleRun: input.startsWith("[")
      ? `const input = ${input};\n// console.log(solve(input));`
      : `// console.log(solve(/* ${input} */));`,
  };
}

function mkStr(file, title, input, expected) {
  return {
    file,
    title,
    type: "exercise",
    tags: ["#strings"],
    question: title,
    input,
    expected,
    hint: "See problem.readme.md for approach",
    sampleRun: `// console.log(solve(/* input */));`,
  };
}

function mkBt(file, title, input, expected) {
  return {
    file,
    title,
    type: "exercise",
    tags: ["#backtracking"],
    question: title,
    input,
    expected,
    hint: "DFS with push/pop on slate",
    sampleRun: `// console.log(solve(/* input */));`,
  };
}

function writeFile(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf8");
}

function main() {
  if (fs.existsSync(ROOT)) {
    fs.rmSync(ROOT, { recursive: true, force: true });
  }
  fs.mkdirSync(ROOT, { recursive: true });

  const index = [];
  let total = 0;

  for (const section of catalog) {
    index.push({ dir: section.dir, files: [] });
    for (const item of section.items) {
      const rel = path.join(section.dir, item.file).replace(/\\/g, "/");
      if (item.type === "data" && item.extra) {
        writeFile(rel, item.extra + "\n");
      } else {
        writeFile(
          rel,
          stub({
            title: item.title,
            type: item.type,
            tags: item.tags,
            question: item.question,
            input: item.input,
            expected: item.expected,
            hint: item.hint,
            exports: item.exports,
            extra: item.extra || "",
            sampleRun: item.sampleRun || "// Uncomment to test:\n// console.log(solve());",
          })
        );
      }
      index[index.length - 1].files.push({ name: item.file, title: item.title });
      total++;
    }
  }

  const readme = generateReadme(index, total);
  writeFile("README.md", readme);

  console.log(`Generated ${total} files under src/practice-set-all/`);
}

function generateReadme(index, total) {
  let md = `# Practice Set (All Problems)

Copy this folder to start fresh — **no solutions included**, only problem stubs.

- Full write-ups: [problem.readme.md](../../problem.readme.md)
- Solutions (after you try): [src/](../) original folders
- Regenerate stubs: \`node scripts/generate-practice-set-all.js\`

**${total} files** · Run with \`node <file.js>\` (ES modules in \`08-new-practice-26/\` use \`"type": "module"\` in package.json or rename to .mjs)

---

## Table of contents

`;
  for (const sec of index) {
    const label = sec.dir.replace(/^\d+-/, "").replace(/-/g, " ");
    md += `### ${sec.dir}\n\n`;
    sec.files.forEach((f, i) => {
      const fp = `./${sec.dir}/${f.name}`.replace(/\\/g, "/");
      md += `${i + 1}. [${f.title}](${fp})\n`;
    });
    md += "\n";
  }
  return md;
}

main();
