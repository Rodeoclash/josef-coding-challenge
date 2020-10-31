# Josef coding test

## Initial thoughts

This is a bit of a stream of consciousness as I work through the given problem. Initial thoughts:

* The organistion of questions / groups reminds me a bit of https://en.wikipedia.org/wiki/Rete_algorithm
* I've decided to do the test in JavaScript with the addition of one library (Lodash/FP) as functional programming is a good solution to this problem.
* I don't want to come across as "over solving" the solution. Any real work I would do like this, I would discuss with other developers before starting.

Ok, now to jump into the solution in a bit more detail:

* Straight off the bat I can spot a things that I don't like, that is:
    * `user_answers` is scoped to the outside of the `checkRule` function. This makes `checkRule` a non-pure function (I won't always get the same results from it with the same arguments).
    * The key used in the `user_answers` map doesn't take into account the nested rule groups. I wonder if a better solution might be two data structures, one for questions and one for groups?
    * The top level `rule_group` key is a bit strange, I've delt with this as a plain object.

At this point I'm going to implement the code.


## Post implementation thoughts
