# data1700-oblig1-balin6546

Oblig 1 - DATA1700 Webprogrammering - OsloMet vår 2024 - balin6546

This is a small web app that simulates a movie ticket ordering system.

Input is validated both with regex and checked for empty input fields,
and is updated with error messages in real time on change. One general
input validation function is used for every field, but each of the fields
have separate function calls that input the correct html id and correct
regex for the general input validation function to process. All of the
regex formats are stored in a separate object to be easily called in the
validation functions.

A ticket will not be made unless every input is validated and returns a
true statement. This is checked upon interacting with the purchase button
and will stop the function if false. The function that validates the whole
form store all of the input validations in a bool-array to give a complete
update on all the input field error messages, and then checks the array for 
false returns.

The purchased tickets are displayed in a table that is updated on a function
call when a valid ticket is made. Here all of the html is written in the
function, the array is looped through and all values are concatinated onto
the table before it's added to the inner HTML of the "billettListe" element.

Everything seems to be working well, but the function that validates the whole
form could probably be more efficient. The regex is also probably pretty bad.