Template for a graph that looks good in light and dark mode
```plantuml-svg
digraph G {
dpi=60
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666"]
	1 -> 2
	2 -> 2
	2 -> 3
	3 -> 1
}
```