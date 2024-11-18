---
data: posts.posts
layout: index.njk
---

![profile-photo.jpg](/assets/profile-photo.png)

# Test

{% for post in posts.posts | limit(5) %}
[{{post.title}}](/blog/{{post.path}})
{% endfor %}
