---
difficulty: Easy
runtime-beats: 51.33
memory-beats: 5.08
number: 14
status: true
hints-used: "0"
---

My initial solution:
```ts
function longestCommonPrefix(strs: string[]): string {
    let longest: string = strs[0];
    for (let word of strs) {
        let idx = 0;
        if (word.length < longest.length) longest = longest.slice(0, word.length)
        if (longest.length < word.length) word = word.slice(0, longest.length)
        while (idx < word.length) {
            if (longest.charAt(idx) !== word.charAt(idx)) {
                longest = longest.slice(0, idx);
                idx = word.length;
            }
            idx++;
        }
    }
    return longest;
};
```
However, it performed real bad lol.
Apparently the correct way to do this is by sorting the inputs lexicographically. This is because the common prefix needs to be common to all strings, therefore if we compare the first and last word in that sorted list, we can determine what the maximum prefix length is. 

For example: 
\["car", "cab", "clonk"]
sorted:
\["cab", "car", "clonk"]
as we can see, the longest shared prefix between the left and right word is "c", which is our return value.

With this knowledge, i implemented the following, which has very average performance.

```ts
function longestCommonPrefix(strs: string[]): string {
    strs.sort((a, b) => a.localeCompare(b));
    const first = strs[0];
    const last = strs[strs.length - 1];
    let longest = "";
    for (let i = 0; i < Math.min(first.length, last.length); i++) {
        if (first[i] !== last[i]) return longest;
        longest += first[i];
    }
    return longest;
};
```