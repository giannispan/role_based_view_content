# role_based_view_content
A simple app in node.js, using passport.js to authenticate users and let them view some content based on their roles

Make user you have node.js and mongodb running in port 27017. Before you start the server uncommnet line 12 in server.js
1. Run "npm install"
2. Run "node server.js"

In postman visit make a post request : http://localhost:8080/api/auth/login and provide in body request email and password from your mongo db.
Then having the token provided after authentication you can make some get requests as defined in routes/index.js (eg. http://localhost:8080/api/viewDepartmentDocs) by passing the token to the headers.
You can login with diffent users in order to see how roles work.
