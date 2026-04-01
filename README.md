# Javascript Objects Project - Odin - Library

2025-09-03 17:41 <br>
Problems encountered: <br>
Container for the form was created early on. So all elements for a books entry
was coded early. But I did not code the div slide in during this time. Now, trying
to add a slide in animation seems impossible. One of the important aspect of
sliding div is that the div and its elements must be 'crushed in'. <br>

2025-09-07 22:26 <br>
Solutions to problem above found. Use a slider with all the elements preserved.
But this solution makes the div width not follow the width of leftBar. The answer
to this was the use of variables in CSS. Values calculated and placed as width
for the sliding div. <br>

Assignment Objectives: <br>
[done] Books stored as array <br>
[done] Create function to add books to the array <br>
[done] All books have unique ids, using cryto.randomUUID() <br>
[done] Display info on all books in library as a card <br>
[done] Add a new book form <br>
[done] New Book form slides in on demand <br>
[done] New Book form slides out when dismissed <br>
[done] Form submit button adds book to Library <br>
[done] New book is immediately shown as card on display <br>
[done] Remove button added to each card on display <br>
[done] Removed button, removes the card from display and library array <br>
[done] Each card has a button that toggle the book status of READ and UNREAD <br>
<br>
2025-09-10 05:17<br>
[done] Visual cues for input text validation<br>
[done] Correction on number input for number of pages<br>
[done] Instruction for user on form requirements<br>
[done] Form reset when it is dismissed<br>

2025-09-23 23:40<br>

<h2>Revisiting Library Project - Refactor code with class</h2>
<pre>
1. New branch created for this repo                     [done]
2. Refactor constructor function to Class               [done]
</pre>

2025-09-25 02:36<br>
Refactoring the script meant renaming the constructor function<br>
from "function Book()" to "class Book{}". The way that the code<br>
was originally written, all the setters/getters need to be coded<br>
for each of the Book's information/data. The first approach was to <br>
code only the class constructor, and the getters for each of the<br>
data or information, and a setter for the book status. Running the code<br>
with the code shows errors that indicate 'setters' for uuid were not<br>
present.<br>
script.js was further updated with the matching getters/setters for each<br>
of the data/information for Book class. After the code update, the<br>
console reported no errors, only the console.log appropriate for each<br>
book addition/removal/update.

2026-02-05<br>
New features to be introduced into this application as per:
"Form Validation with Javascript", 47% of JS path for The Odin Project.

The new features:

1. Include customized error messages
2. [done] Create a fork for this app branch
3. [done] Optional: Use npm method of production
4. [done] Reexamine the Book class and rewrite it
5. [done] Introduce private field/variables to Book class
6. [done] Introduce static field/variables to Book class
7. [done] Introduce static methods to Book class
8. [done] Custom error messages for each input

As a note on how to create a new branch for a repo:

1. create the branch with the name, in this case 'custom_error'
   git checkout -b custom_error
2. on github repo, 'custom_error' isn't created yet. To do so,
   git push -u origin custom_error
3. whenever you push 'custom_error' commits
   git push -u origin custom_error
   note: change branch: "git checkout custom_error" or "git checkout main"

All these changes was done on a new branch "custom_error".
To merge "custom_error" branch with main branch:

1. make sure all changes on 'custom_error' branch has been committed.
2. checkout 'main' branch,
   git checkout main
3. merge the branch
   git merge custom_error
4. check that everything has been merged by checking the log
   git log
5. push your 'main' branch to your github repo,
   git push -u origin main
6. now perform cleanup by,
   git branch -d custom_error
7. cleanup for github repo,
   git push origin --delete custom_error

Migrating over to using npm means that the former method of just add, commiting
all your changes on github, won't work anymore.

Going through the npm process means that there's a new directory added to the
process, 'dist'. This directory is where the result of transpiling will reside.
The directory will house the 'index.html'. This is the file needed to have the
website operate normally by clicking on your website,

- e.g. https://noodin1.github.io/library_project/ <br>
  As a reference, read:
- https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page <br>
  As a summary of the above,
- git branch gh-pages
- git checkout gh-pages && git merge main --no-edit
- npm run build
- git add dist -f && git commit -m "Deployment commit 01"
- git subtree push --prefix dist origin gh-pages
