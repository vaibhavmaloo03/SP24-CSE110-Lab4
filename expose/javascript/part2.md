
1. Output from line 12 will be 3, reflecting the number of iterations completed by the loop.
2. Line 13 will produce an output of 150 due to this being the final modification to the discounted price.
3. Line 14 will also display 150, corresponding to the most recent value assigned to finalPrice.
4. The returned array will be [50, 100, 150] since all prices were halved.
5. An error occurs due to the variable i being unavailable outside its loop because it was declared using "let".
6. An error is thrown as discountedPrice falls outside the accessible scope of the for loop or its declaration.
7. The number 150 will be shown, as the variable finalPrice retains its value across the same scope as the output statement.
8. The output will be [50, 100, 150] since discountedPrice is declared within the same scope as the for loop, making it accessible afterwards.
9. Attempting to reference i in line 11 results in a ReferenceError, as its scope is limited to the for loop.
10. Line 12 will print the number 3 because it accesses a constant variable without attempting to modify it.
11. The function will yield [50, 100, 150] as elements within the const array are mutable.
12. Accessing properties of the object:
    1. student.name
    2. student["Grad Year"]
    3. student.greeting()
    4. student["Favorite Teacher"].name
    5. student.courseLoad[0]
13. Arithmetic operations result in:
    1. 32, because '3' concatenated with '2' remains a string.
    2. 1, as '2' is converted to an integer for the subtraction.
    3. 3, since adding null (value of 0) to 3 yields 3.
    4. '3null', with null converted to a string during concatenation.
    5. 4, by adding the integer equivalent of true (1) to 3.
    6. 0, because false and null both equate to 0.
    7. '3undefined', as undefined is treated as a string when concatenated.
    8. NaN, since undefined cannot perform arithmetic with a string.
14. Comparisons produce:
    1. True, as 2 is greater than 1 when typecasted to integers.
    2. False, since character-wise comparison of strings '2' and '1' does not satisfy the condition.
    3. True, with '2' converted to an integer.
    4. False, due to strict comparison of different types (integer vs. string).
    5. False, since true (equivalent to 1) does not equal 2.
    6. True, as Boolean(2) results in true.
15. '==' performs type-coercive comparisons, whereas '===' enforces strict type equality.
16. In another attached file
17. The array [2, 4, 6] results from doubling each array element via the callback in the loop.
18. In another attached file.
19. Execution sequence:
    1
    4
    3
    2