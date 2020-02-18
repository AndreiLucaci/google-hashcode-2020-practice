# More pizza

#### Hash Code practice problem

## Problem description

You are organizing a Hash Code hub and want to order pizza for your hub’s
paicipants. Luckily, there is a nearby pizzeria with really good pizza.
The pizzeria has dierent types of pizza, and to keep the food oering for your hub
interesting, you can only order **at most one pizza of each type**. Founately, there are
many types of pizza to choose from!
Each type of pizza has a specied size: the size is the number of slices in a pizza of this
type.
You estimated the maximum number of pizza slices that you want to order for your
hub based on the number of registered paicipants. In order to reduce food waste,
your goal is to order **as many pizza slices as possible** , but **not more than the
maximum number**.

## Input data set

## File format

Each input data set is provided in a plain text le containing exclusively ASCII
characters with lines terminated with a single '\n' character (UNIX- style line endings).
When a single line contains multiple elements, they are separated by single spaces.
The rst line of the data set contains the following data:
● an integer **_M_** ( _1 ≤_ **_M_** _≤ 10_^9 ) – the maximum number of pizza slices to order
● an integer **_N_** ( _1 ≤_ **_N_** _≤ 10_^5 ) – the number of dierent types of pizza


The second line contains N integers – the number of slices in each type of pizza, in
non-decreasing order:
● 1 _≤_ S 0 _≤_ S 1 _≤_ ... _≤_ S N-1 <= **_M_**^

### Example

```
Input file Description
17 4
2 5 6 8
17 slices maximum, 4 dierent types of pizza
type 0 has 2 slices, type 1 has 5 , type 2 has 6 , and type 3 has 8 slices
S 0 (2 slices) S 1 (5 slices) S 2 (6 slices) S 3 (8 slices)
```
## Submissions

### File format

The output should contain two lines:
● The rst line should contain a single integer **_K_** (0 _≤_ **_K_** _≤_ **_N_** ) – the number of
dierent types of pizza to order.
● The second line should contain **_K_** numbers – the types of pizza to order (the
types of pizza are numbered from 0 to **_N_** -1 in the order they are listed in the
input).
The total number of slices in the ordered pizzas must be less than or equal to **_M_**.


### Example

```
Submission file Description
3
0 2 3
3 types of pizza
ordering pizzas: S 0 , S 2 , and S 3
```
## Scoring

The solution gets 1 point for each slice of pizza ordered.
For **example** , above we ordered 3 pizzas: **S 0** , **S 2** , and **S 3**. We know that the pizza slices
in each of these are 2, 6, and 8 respectively.
So the score is: 2+6+8 = **16 points
Note that there are multiple data sets representing separate instances of the
problem. The nal score for your team will be the sum of your best scores for the
individual data sets.**


