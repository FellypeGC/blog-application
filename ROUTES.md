```
SSR -> Server Side Rendering
CSR -> Client Side Rendering

Static / SSG <- I have the HTML ready
Dynamic <- I don't have anything ready
ISR <- Incremental Static Regeneration

/ <- ISR -> After 60s I want to update its content
/ <- ISR -> After 60s of some content being updated, it's updated

/ (Public)
/posts/[slug] (Public)

/admin/post (Private - Dynamic) - Read (R) List of posts / (D) Delete
/admin/post/[id] (Private - Dynamic) - Update (U) a post
/admin/post/new (Private - Dynamic) - Create (C) a post

/admin/login (Dynamic) - User's login
```