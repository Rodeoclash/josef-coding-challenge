# Josef coding test

## Initial thoughts

This is a bit of a stream of consciousness as I work through the given problem. Initial thoughts:

* The organistion of questions / groups reminds me a bit of https://en.wikipedia.org/wiki/Rete_algorithm
* I've decided to do the test in JavaScript with the addition of one library (Lodash) as I feel functional programming will be  a good solution to this problem.
* I don't want to come across as "over solving" the solution. In a real world situation I would follow conventions in the code base, discuss with fellow developers.

Ok, now to jump into the solution in a bit more detail:

* Straight off the bat I can spot a things that I don't like, that is:
    * `user_answers` is scoped to the outside of the `checkRule` function. This makes `checkRule` a non-pure function (I won't always get the same results from it with the same arguments).
    * The key used in the `user_answers` map doesn't take into account the nested rule groups. I wonder if a better solution might be two data structures, one for questions and one for groups?
    * The top level `rule_group` key is a bit strange? I've removed this (hoping I still stay in the spirit of the coding challenge!)

At this point I'm going to implement the code.


## Post implementation thoughts

Ok, I've now finished up implementing the challenge. My first assumption is that I may have overcooked the result or possibly been "too clever". As per my initial assumption, I went with a functional programming paradigm for the challenge.

I started by porting the existing python code to JS and implementing a test suite to ensure it was correct. I have rewritten some code to make it more "JavaScripty" as well as adjusting some of the data structures slightly to make them easier to recurse over.

If I'm working in an existing codebase I wouldn't go to the extremes that I have here in implementing the solution and would stick to the conventions already set. To some degree, coding tests are a balance between demonstrating an ability to code vs. an ability to follow instructions. Here I've opted a bit more towards the "demonstrating to code".

## Running the code

With `docker` and `docker-compose` installed, run `docker-compose run coding-test jest` to execute the test suite.
