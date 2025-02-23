<% '---' %>
type: university-assignment
assignment-course: "<% tp.user.make_link(tp.file.folder(), tp.file.folder(true).replace(/^University\/[^\/]+\/([^\/]+)\/([^\/]+)$/, '$1 ($2)')) %>"
assignment-status: <% await tp.system.suggester(x => x, ['Expected', 'New', 'Active', 'Resolved', 'Closed'], false, 'Expected') %>
assignment-deadline: 
<% '---' %>
<%* const title = tp.user.get_next_note('Assignment ?', '?') -%>
<%* await tp.file.rename(title) -%>
```dataviewjs
dv.el("span", 
	  (dv.el("div", "Kira Greifeneder (k12242829)"), dv.el("div", new Date().toLocaleString("de"))),
	  {attr: {style: "padding-top:100px"}}
)
```

## Instructions

## Solutions

<% tp.file.content %>