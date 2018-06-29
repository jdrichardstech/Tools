Seemingly different values equate to true when compared 
with == (loose or abstract equality) because JavaScript (effectively) 
converts each to a string representation before comparison:

// all true
1 == '1';
1 == [1];
'1' == [1];

A more obvious false result occurs when comparing 
with === (strict equality) because the type is considered:

// all false
1 === '1';
1 === [1];
'1' === [1];

Internally, JavaScript sets a value to one of six primitive data types:

Undefined (a variable with no defined value)
Null (a single null value)
Boolean (true or false)
Number (this includes Infinity and NaN – not a number!)
String (textual data)
Symbol (a unique and immutable primitive new to ES6/2015)
Everything else is an Object — including arrays.

As well as a type, each value also has an inherent boolean value, 
generally known as either truthy or falsy. 
Some of the rules are a little bizarre so understanding 
the concepts and effect on comparison helps when debugging JavaScript applications.

The following values are always falsy:

false
0 (zero)
'' or "" (empty string)
null
undefined
NaN (e.g. the result of 1/0)

Everything else is truthy.

That includes:
'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)


_______________________________________________________________________________________________________
|     ==    |   true   | false |   0   |   ''  |  null  | undefined |  NaN  | Infinity |   []  |   {}  |
_______________________________________________________________________________________________________
|    true   |  true    | false | false | false | false  |   false   | false |   false  | false | false |
_______________________________________________________________________________________________________
|   false   |  false   | true  | true  | true  | false  |   false   | false |   false  | true  | false |
_______________________________________________________________________________________________________
|     0     |  false   | true  | true  | true  | false  |   false   | false |   false  | true  | false |
_______________________________________________________________________________________________________
|     ''    |  false   | true  | true  | true  | false  |   false   | false |   false  | true  | false |
_______________________________________________________________________________________________________
|   null    |  false   | false | false | false | true   |   true    | false |   false  | false | false |
_______________________________________________________________________________________________________
| undefined |  false   | false | false | false | true   |   true    | false |   false  | false | false |
_______________________________________________________________________________________________________
|    NaN    |  false   | false | false | false | false  |   false   | false |   false  | false | false |
_______________________________________________________________________________________________________
|  Infinity |  false   | false | false | false | false  |   false   | false |   true   | false | false |
_______________________________________________________________________________________________________
|    []     |  false   | true  | true  | true  | false  |   false   | false |   false  | true  | false |
_______________________________________________________________________________________________________
|    {}     |  false   | false | false | false | false  |   false   | false |   false  | false | true  |
_______________________________________________________________________________________________________

The rules:

1. false, zero and empty strings are all equivalent.
2. null and undefined are equivalent to themselves and each other but nothing else.
3. NaN is not equivalent to anything – including another NaN!
4. Infinity is truthy – but cannot be compared to true or false!
5. An empty array is truthy – yet comparing with true is false and comparing with false is true?!

// all true
false == 0;
0 == '';
null == undefined;
[] == false;
!![0] == true;

// all false
false == null;
NaN == NaN;
Infinity == true;
[] == true;
[0] == true;

1. Avoid Direct Comparisons
It’s rarely necessary to compare two truthy and falsy 
values when a single value will always equate to true or false:

// instead of
if (x == false) // ...
// runs if x is false, 0, '', or []

// use
if (!x) // ...
// runs if x is false, 0, '', NaN, null or undefined

2. Use === Strict Equality
Use a === strict equality (or !== strict inequality) 
comparisons to compare values and avoid type conversion issues:

// instead of
if (x == y) // ...
// runs if x and y are both truthy or both falsy
// e.g. x = null and y = undefined

// use
if (x === y) // ...
// runs if x and y are identical...
// except when both are NaN

3. Convert To Real Boolean Values Where Necessary
Any value can be converted to a real Boolean value using 
a double-negative !! to be absolutely certain a false is 
generated only by false, 0, "", null, undefined and NaN:

// instead of
if (x === y) // ...
// runs if x and y are identical...
// except when both are NaN

// use
if (!!x === !!y) // ...
// runs if x and y are identical...
// including when either or both are NaN

Craig Buckler
https://www.sitepoint.com/javascript-truthy-falsy/