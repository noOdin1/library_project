# Javascript Objects Project - Odin - Library

2025-09-03 17:41

Problems encountered:
Container for the form was created early on. So all elements for a books entry
was coded early. But I did not code the div slide in during this time. Now, trying
to add a slide in animation seems impossible. One of the important aspect of
sliding div is that the div and its elements must be 'crushed in'.

2025-09-07 22:26
Solutions to problem above found. Use a slider with all the elements preserved.
But this solution makes the div width not follow the width of leftBar. The answer
to this was the use of variables in CSS. Values calculated and placed as width
for the sliding div.

Assignment Objectives:
[done] Books stored as array
[done] Create function to add books to the array
[done] All books have unique ids, using cryto.randomUUID()
[done] Display info on all books in library as a card
[done] Add a new book form
[done] New Book form slides in on demand
[done] New Book form slides out when dismissed
[done] Form submit button adds book to Library
[done] New book is immediately shown as card on display
[done] Remove button added to each card on display
[done] Removed button, removes the card from display and library array
[done] Each card has a button that toggle the book status of READ and UNREAD
