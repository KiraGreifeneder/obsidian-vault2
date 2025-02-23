## Used for:
- Finding a window or range in input data, e.g. arrays or strings. 
- Finding subarrays with a specific sum
- Finding the longest substring with unique characters
- Whenever fixed-size windows make processing more efficient

## Identification
- Max/min subarray or substrings satisfying some condition

## Example
### Maximum sum in a subarray of size k
Going through every possible subarry would require nesting loops,
leading to an O(N^2) time complexity.

Instead of taking each possible k sized subarray and calculating the sum for it, 
we can calculate the first k sized segment, then as we shift the window, only
add and subtract the cells at the start and end of the segment.

This leaves us with an O(n) time complexity.

### Smallest subarray adding up to a sum x
- Start with an empty subarray
- Add elements to the subarray while the sum is less than x
- If the sum is greater than x, remove elements from the start of the current subarray.

## General use
### Fixed size windows
- Find the size of the window required, say K.
- Compute the result for 1st window, i.e. include the first K elements of the data structure.
- Then use a loop to slide the window by 1 and keep computing the result window by window.

### Variable size windows
- increase the right pointer one by one till our condition is true.
- At any step if our condition does not match, we shrink the size of our window by increasing left pointer.
- Again, when our condition satisfies, we start increasing the right pointer and follow step 1.
- We follow these steps until we reach to the end of the array.