---
type: university-assignment
assignment-course: "[[Exercise|Computer Architecture (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
[ra_uebungsblatt_08_ss_24.pdf](file:///C:%5CUsers%5Ckirag%5COneDrive%5CJKU%5CSS24%5CRechnerarchitektur%5Cangaben%5Cra_uebungsblatt_08_ss_24.pdf)

![[_attachments/Pasted image 20240612234119.png]]

![[_attachments/Pasted image 20240612234207.png]]

![[_attachments/Pasted image 20240612234245.png]]
Explanation:
An associative cache has no fixed mapping of addresses to cache slots. Each address is compared with all cache tags in parallel.
- If the cache is full and there it's a cache miss, it's called a capacity miss.
	- The solution is to replace an older entry using LRU, LFU or FIFO. (Least Recently/Least Frequently used, ...).
- Just check if it's a hit, if not, choose a slot for it depending on the algorithm used. ez
- For LRU, just see "how far you can go back" on each line before hitting an entry and choose the line that goes back the furthest (only works if you re-enter hit entries ofc)
- For LFU, if there are multiple entries with the same lowest number of uses (e.g. all 0, or all least used entries have had 1 use), then we just use LRU on those entries.