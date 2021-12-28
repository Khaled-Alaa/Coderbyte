# Coderbyte - Serial Number

Have the function SerialNumber(str) take the str parameter being passed and determine if it is a valid serial number with the following constraints:

1. It needs to contain three sets each with three digits (1 through 9) separated by a period.
2. The first set of digits must add up to an even number.
3. The second set of digits must add up to an odd number.
4. The last digit in each set must be larger than the two previous digits in the same set.

If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "224.315.218" then your program should return "true".

## Examples

```
Input: "11.124.667"
Output: false
```

```
Input: "114.568.112"
Output: true
```

## Problem Link

- Coderbyte - [Serial Number](https://coderbyte.com/editor/Serial%20Number:JavaScript)
