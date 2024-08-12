# **TESTING**

[The README document can be found here](README.md)

You can visit the website here: [Forever Foundations](https://forever-foundations-e27644123eb0.herokuapp.com/)

# Manual Testing

For this project I carried out extensive manual testing to ensure that everything is working how a user would expect it to. All aspects and features of the website were tested in detail to ensure a smooth user experience and to validate the funtionality of this project. 

| Category                                | Test Carried Out                                    | Expected Result                                                                                                 | Result | Issue / Solution |
|-----------------------------------------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|--------|------------------|
| **Navigation**                          | Links in the navbar                                 | The links on the landing page take the user to the correct page                                                 | PASS   |                  |
|                                         | Burger Toggle                                       | Nav links turn into a burger toggle in mobile view and navigate correctly                                       | PASS   |                  |
|                                         | Visible nav bar                                     | The nav bar is fully visible across all devices                                                                 | PASS   |                  |
|                                         | Visible Logo                                        | The logo is fully visible across all devices                                                                    | PASS   |                  |
|                                         | Logo Redirect                                       | The user is taken back to the home page upon clicking the logo                                                  | PASS   |                  |
|                                         | Same page reload                                    | All links are reloaded onto the same page as apposed to seperate pages                                          | PASS   |                  |
|                                         | Infinite Scroll                                     | The user is able to continuously scroll down the page as content is being loaded                                | PASS   |                  |
|                                         | View Home page unauthenticated                      | Home page loads and displays posts                                                                              | PASS   |                  |
|                                         | Username links to Profile page                      | Clicking on the username opens the profile page                                                                 | PASS   |                  |
|                                         | View Liked page without liked posts                 | Page loads displaying a message suggesting to like posts                                                        | PASS   |                  |
|                                         | View Liked page with liked posts                    | Page loads with posts they have liked                                                                           | PASS   |                  |
|                                         | View following without following a user             | Prompted to follow a user or adjust the search                                                                  | PASS   |                  |
|                                         | View following with following a user/users          | Page loads with users posts that they are following                                                             | PASS   |                  |
|                                         | Sign out button logs the user out                   | Clicking on the sign out button logs the user out and redirects them to the home page                           | PASS   |                  |
| **Sign Up**                             | Create a profile with valid input                   | Valid username, password and confirm password data registers a user and takes them to sign in page.             | PASS   |                  |
|                                         | Create a profile with invalid input                 | Invalid data, leaving one blank, unmatched passwords and entering an existing username gives an error message.  | PASS   |                  |
| **Sign In**                             | Sign in with correct details                        | Upon entering correct login details, the user is directed to the home page                                      | PASS   |                  |
|                                         | Sign in with incorrect details                      | Missing information fields and feilds filled in incorrectly result in the user recieving an error message.      | PASS   |                  |
| **Posts**                               | Creating a post with valid input                    | Uploading an image and filling in the title field creates a post and redirects the user to their post           | PASS   |                  |
|                                         | Creating a post with invalid input                  | Not uploading an image and/or filling in the title field gives the user an error message.                       | PASS   |                  |
|                                         | Image file too large                                | If the image trying to be uploaded is too large the user will get an error message.                             | PASS   |                  |
|                                         | Edit a Post with valid input                        | Post is updated and user is redirected to post detail.                                                          | PASS   |                  |
|                                         | Edit a Post with invalid input                      | Deleting the title field gives the user an error message.                                                       | PASS   |                  |
|                                         | Delete a Post                                       | The post is successfully deleted                                                                                | PASS   |                  |
|                                         | Opening a Post                                      | Post detail page loads with the correct data                                                                    | PASS   |                  |
|                                         | Searching for a post/posts with valid input         | Page loads and displays posts with related to the keyword used                                                  | PASS   |                  |
|                                         | Searching for a post/posts with invalid input       | Page displays a suggestion to adjust search word                                                                | PASS   |                  |
| **Comments**                            | Displaying comments when unauthenticated            | A none logged in user can view comments but cannot create or interact with any                                  | PASS   |                  |
|                                         | Displaying comments when authenticated              | A logged in user can view comments and create comments                                                          | PASS   |                  |
|                                         | Posting a comment                                   | The comment is added underneath the post, with most recent starting at the top.                                 | PASS   |                  |
|                                         | Editing a comment                                   | Comment is updated. If cancel is selected then the content will not change.                                     | PASS   |                  |
|                                         | Deleting a comment                                  | The comment is deleted and removed from the post.                                                               | PASS   |                  |
|                                         | Comment count goes up                               | New comments will increase the comment count.                                                                   | PASS   |                  |
|                                         | Comment count goes down                             | Deleting comments will decrease the comment count.                                                              | PASS   |                  |
| **Loves**                               | Love count goes up                                  | Love count increases and love icon changes                                                                      | PASS   |                  |
|                                         | Love count goes down                                | Love count decreases and the love icon changes                                                                  | PASS   |                  |
|                                         | Love'd content is shown on the Loved page           | Previously loved and newly loved content will show up on the loved page                                         | PASS   |                  |
|                                         | Love'd content is removed from the Loved page       | Previously unloved and newly unloved content will be removed from the loved page                                | PASS   |                  |
| **Followers**                           | Follow Profile from profile page                    | Clicking on the Follow button adds posts from that Profile to 'Following' page and button changes.              | PASS   |                  |
|                                         | Unfollow a profile from their profile page          | Clicking on the unfollow button removes posts from that Profile from the 'Following' page and button changes.   | PASS   |                  |
|                                         | Follow a profile from sidebar when in desktop view  | Clicking on the Follow button adds posts from that Profile to 'Following' page and button changes.              | PASS   |                  |
|                                         | Unfollow Profile from sidebar when in desktop view  | Clicking on the Follow button removes posts from that Profile from the 'Following' page and button changes.     | PASS   |                  |
| **Profiles**                            | Open the users Profile page                         | Displays the relevant profile page with the correct data                                                        | PASS   |                  |
|                                         | Edit Profile                                        | A new profile picture can be uploaded, bio and email can be filled out. User is taken to Profile page where the updated information is displayed. Clicking cancel takes user back to Profile page.     | PASS   | |
|                                         | Change Username                                     | If data is valid the username is updated and the user is redirected to Profile page.                            | PASS   |                  |
|                                         | Change Password                                     | If data is valid the password is updated and the user is redirected to Profile page                             | PASS   |                  |
| **Reviews**                             | Leave a review                                      | A user can leave a review on another users profile page, cannot leave reviews on their own profile              | PASS   |                  |
|                                         | Edit a review                                       | A user can edit a review that they have left on someone elses profile. Can only edit if they created it.        | PASS   |                  |
|                                         | Delete a review                                     | A user can delete a review that they have left on someone elses profile. Can only delete if they created it.    | PASS   |                  |

# Bugs and fixes

- Once the user has been logged in before and you revisit the page it sometimes keeps trying to redirect the user to the home page and flicks between the two. Once the page refreshes the account is then about to log in and out. This doesn't cause any errors in the console.
- The review form was bugged to allow anyone to edit and delete a review, this has now been resolved.
- Some of the files are names 'Popular owners' this is due to something I wanted to impliment to have seperate features availble for normal users and venue owners. Due to lack of time left I was not about to get this done. However, I have kept the file names as they are as I will be adding this in the future.

# Validations

- All CSS was put through [W3C CSS](https://jigsaw.w3.org/css-validator/#validate_by_input) and came back with no errors.
- All HTML was ran through a HTML Validator and saw '%' errors with the favicon uploads, however these are part of the import name and therefore is needed.