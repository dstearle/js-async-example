# js-async-example

<br>

**What Is This Project? :**

- An example of javascript callbacks and promises with explanations of what they are for.

<br>

**Async Examples Shown :**

- callbacks.js: Callback Used With setTimeout(), Callback In Parameter.
- promises.js: Basic Promise Example, Promise.all Example, Async / Await Example, Async / Await / Fetch Example.

<br>

**Why Do We Need Callbacks & Promises? :**

-  The main point of using either is to make sure that code is executed when it is intended to
(similar to hooks). However they both have their own uses and differences...

<br>

**Callbacks :**

- What Exactly Is A Callback? : A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action.

<br>

**Promises :**

- What Exactly Is A Promise?: The core idea behind promises is that a promise represents the result of an asynchronous operation.
- Promises Are Asynchrous: Promises are asynchrous meaning that they do multiple tasks at once where a synchrous operation would be queued,
as in the process can only continue until the current action is completed.
- Promises Have Three States: Pending, Fulfilled, and Rejected.
- Why Use A Promise Over A Callback?: With Promises you can use ".then" to avoid "Callback Hell" in which you have too many callbacks nested within 
eachother meaning that Promises are easier to read and maintain.
