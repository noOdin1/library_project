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
2. Create a fork for this app branch
3. Optional: Use npm method of production [done]
