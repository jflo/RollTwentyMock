# RollTwentyMock

A library that approximates the API made available to scripts for the sole purpose of testing those scripts offline.

**This project is not a product of Roll20 or Orr Group. No Roll20 or Orr Group materials are included in this project.**

This project was inspired by this thread:
https://app.roll20.net/forum/post/431906/testing-how-to-set-up-automated-tests-that-execute-outside-of-roll20-environment

## Using This Code

The most likely ways to use this depend on how you plan to test your scripts. This outlines what we expect to be
the most common methods:

* Concatenate this file and your scripts together into one big file for testing using Node or a browser; in this case
you probably want `RollTwentyMock.js` **before** your scripts
* Write an HTML file that has `<script>` tags for RollTwentyMock.js and your scripts for testing in a browser; again
you will probably want `RollTwentyMock.js` included in the document ahead of your scripts
* In the test scripts themselves, use Node's `require()` to load both `RollTwentyMock.js` and your scripts

The first one can probably be achieved via something like:

        type RollTwentyMock.js my_script.js my_tests.js > temporary_test_runner.js

or

        cat RollTwentyMock.js my_script.js my_tests.js > temporay_test_runner.js

depending on whether you use Windows/DOS (first example) or Unix/Mac (second example).

More advanced tricks would entail automating your build/test environment with e.g. Grunt, which is outside the scope
of this document. The authors of this project include it in their campaign's repository as a git submodule, which may
or may not be a useful installation model for your case.

For anyone using `require()`: Note that at the tail end of `RollTwentyMock.js` the documented API functions (and `state`
object) are forced into the global namespace. This happens even when the script is loaded with require, which may or may
not be what your tests expect. It's easy enough to comment out the last three lines if weird stuff happens.

## FAQ

**What file(s) do I need to download from GitHub?**

The only file you need is `src/RollTwentyMock.js` which you can probably get using [this link]().

Yeah, sorry. There are a ton of files in the repository that are either about the project or used for testing the
project.  You can safely ignore all of them if you're not planning to contribute to the project.

**How do I use this to play a game?**

You can't. Nor will this ever be added.

This does not implement any of the features that allow gameplay. It can only be used by people who write
scripts for the API and want to test their scripts before they upload them to the service.

**How do I load this into Roll20?**

Please don't. It will not do anything helpful and it will cause errors in your game. Errors cause the service to disable
your game's scripts until they are fixed.

## Proprietary Information

It is the intent of the authors that this project complies entirely with the Roll20 Terms of Service and Privacy Policy.

This project was a clean-room implementation developed entirely to the API specification described in Roll20's public
wiki at https://wiki.roll20.net/API:Introduction

This project is not a product of Roll20 or Orr Group. No Roll20 or Orr Group materials are included in this project.

No attempts were made to reverse engineer, decompile, or otherwise attempt to discover the source code of Roll20
software.

No employees, contractors, or agents of Orr Group participated in this project.

Use of the Roll20 name does not indicate endorsement by Orr Group.
