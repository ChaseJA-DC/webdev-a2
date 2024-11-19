---
data: posts.posts
layout: index.njk
---

![profile-photo.jpg](/assets/Dclogo.png)
<br>
<br>
<br>
<br>
{% for post in posts.posts | limit(5) %}
[{{post.title}}](/blog/{{post.path}})
{% endfor %}
