---
number: 20
difficulty: Easy
runtime-beats: 67.56
memory-beats: 83.29
status: true
hints-used: "1"
---
>Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
>An input string is valid if:
>	1. Open brackets must be closed by the same type of brackets.
>	2. Open brackets must be closed in the correct order
>	3. Every close bracket has a corresponding open bracket of the same type.

Brainstorming ![[_attachments/Leetcode problem solutions 2024-08-20 18.34.16.excalidraw]]
That brainstorming was correct! My solution:
```ts
function isOpenBracket(bracket: string): boolean {
    return bracket === '(' || bracket === '{' || bracket === '[';
}

const match = {
    ')': '(',
    '}': '{',
    ']': '['
};

function isValid(s: string): boolean {
    let open: string[] = [];
    for (let bracket of s) {
        if (isOpenBracket(bracket)) {
            open.push(bracket);
        } else {
            if (open.length === 0 || match[bracket] !== open.pop()) return false;
        }
    }
    if (open.length === 0) return true;
    return false;
};
```
