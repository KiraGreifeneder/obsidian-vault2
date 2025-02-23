<% '---' %>
type: university-assignment
assignment-course: "<% tp.user.make_link(tp.file.folder(), tp.file.folder(true).replace(/^University\/[^\/]+\/([^\/]+)\/([^\/]+)$/, '$1 ($2)')) %>"
assignment-status: Expected
assignment-deadline: 
<% '---' %>
<%* const title = tp.user.get_next_note('Assignment ?', '?') -%>
<%* await tp.file.rename(title) -%>
Kira Greifeneder (k12242829)
## Instructions


## Solutions
<% tp.file.content %>