---
number: 35
difficulty: Easy
runtime-beats: 
memory-beats:
hints-used:
status:
---

## Task
---
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**
**Input:** nums = [1,3,5,6], target = 5
**Output:** 2

**Example 2:**
**Input:** nums = [1,3,5,6], target = 2
**Output:** 1

**Example 3:**
**Input:** nums = [1,3,5,6], target = 7
**Output:** 4

**Constraints:**

- `1 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`
- `nums` contains **distinct** values sorted in **ascending** order.
- `-104 <= target <= 104`
## Intuition and Brainstorming
---
O(log(n)) time complexity... Recursion? Divide and Conquer?
![[_attachments/Search Insert Position 2024-10-08 13.59.49.excalidraw]]
## Implementation
---