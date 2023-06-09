### b7a10-chef-recipe-hunter-client-side-GitByImran

**Single Page React Application for Chef Recipes**
This is a single page React application dedicated to showcasing recipes of chefs from a specific cuisine. The website's name, design, and color selection are unique and distinct from any demo project displayed in the course or our conceptual sessions.

[Live site](https://chef-recipe-hunter-c8ddf.web.app/)

##Features
###Navbar
*The navbar contains the following items:*

1. Website name
2. Home
3. Blog
4. User profile picture

The user profile picture on the navbar is conditional. If the user is signed in, the navbar will show the profile picture; otherwise, it will show the Login button. If the user's name is available, the user's name will be visible when the mouse hovers over the profile picture.

##Footer
*The footer is reasonable and meaningful.*

##Login Page
When a user clicks on the Login button, they will be redirected to the login page. 

**The login page contains the following:**

1. Email/Password form
1. Google Sign-in
1. GitHub Sign-in
1. A link that will redirect to the registration page
1. Registration Page

**The registration page contains the following:**

1. Name
1. Email
1. Password
1. Photo URL

**Displaying errors when:**

A user's email address or password doesn't match
The password is less than 6 characters
A user cannot submit empty email and password fields
Homepage

**The homepage contains the following sections:**

1. Banner section with a reasonable design
1. Chef section with at least six cards containing the following information:
1. Chef Picture
1. Chef Name
1. Years of experience
1. Numbers of recipes
1. Likes
1. View Recipes Button
1. Chef Recipes Page
1. When a user clicks on a chef's View Recipes button, he/she will be redirected to the Chef Recipes page. The Chef Recipes page contains the following:

**Banner** - chef picture, chef name, a short bio/description, likes, number of recipes, and years of experience.

1. A section displaying the information of the selected chef's recipes in a tabular form or in a card group.
2. Showing 3 recipes for each chef. If needed, you can have duplicate recipes for each chef.
3. When clicking the Favorite button, showing toast message in the recipe for favorite button and disables the button.
4. Showing a spinner when the data is in a loading state.

###404 Page
Create a 404 page with a picture.

Lazy Load
Apply lazy load to the chef picture either on the banner of Chef Recipes or on the chef pictures of the six cards on the Homepage.

###Fun
Create a heading and add an icon/button. When you click on that button, it will create a PDF and will be downloaded. Your PDF should contain some information about the blog page.

###Environment Variables
Environment variable has used to hide the Firebase config keys.


###Blogs Page
On this page, you can find answers to some questions related to React.

#Conclusion
In this project, we've created a single-page React application that displays recipes for a specific cuisine. We've implemented features such as user authentication, responsive design, lazy loading, and a blogs page. This project demonstrates some of the core concepts of React and provides a solid foundation for building more complex applications.