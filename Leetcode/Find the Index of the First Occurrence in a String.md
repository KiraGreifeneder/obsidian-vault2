---
number: 28
difficulty: Easy
runtime-beats: 64.47
memory-beats: 4.28
hints-used: "0"
status: true
---

## Task
---
Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

**Example 1:**

**Input:** haystack = "sadbutsad", needle = "sad"
**Output:** 0
**Explanation:** "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

**Example 2:**

**Input:** haystack = "leetcode", needle = "leeto"
**Output:** -1
**Explanation:** "leeto" did not occur in "leetcode", so we return -1.

**Constraints:**

- `1 <= haystack.length, needle.length <= 104`
- `haystack` and `needle` consist of only lowercase English characters.
## Intuition and Brainstorming
---
Just use JS standard lib function? but it's not the fastest...

So what's the most efficient way we could do this manually? Why ISN'T this the most efficient?

![[_attachments/Find the Index of the First Occurrence in a String 2024-09-04 15.18.24.excalidraw]]
Maybe  a sliding window implmentation is possible. Let's say we have "baseball" and want to find "ball". Out starting indexes are 0 and 1.
```
start = 0, end = 1, needleIdx = 0
b aseball                // end matches first letter, increase needleIdx and b

start = 0, end = 2, needleIdx = 1
ba seball                // end matches next letter

start = 0, end = 3, needleIdx = 2
bas eball                // end does not match next letter. reset needle, start = end

start = 3, end = 3, needleIdx = 0
s eball                  // does not match

start ...
```
hmm ok, maybe not like this... seeems inefficient. let's look at solutions oof

## Implementation
---
Initially, I just went with the following:

```ts
function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
};
```

But it turned out to be very average in terms of runtime (duh, everyone will have used it). Another solution seems to be this:
```ts
function strStr(haystack: string, needle: string): number { 
	const arr = haystack.split(needle); 
	if(arr.length > 1) { return arr[0].length; } 
	return -1; 
};
```
We can split the arry into needle and not needle. If there is only one entry, it means that the haystack never even contained the needle. If there are at least one split, we'll look at where the first entry ends. If the needle was right in the beginning, there will be a zero-length string as the first element. Otherwise, it will bee at thee position where the first element ends.
Demonstration:
```ts
const haystack = "sadbutsad";
const arr = haystack.split("sad");
console.log(arr)
// output: ["", "but", ""]
```

LMAO it turns out that that is even slower hahah. OK. At least it is WILDLY inconsistent.

Native implementation is best. Beats 99.8% for some people. 