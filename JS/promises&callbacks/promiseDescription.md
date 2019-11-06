#Promise

-Promises (like callbacks) allow us to wait on certain code to finish execution prior to running the next bit of code.
-Why is this important? Think about a website that loads data from an API then processes and formats the data to display to the user. If we try to process and format our data before the API has even fetched the information, we’re either going to get an error or a blank website. By using a Promise, we can ensure that the API data isn’t processed/formatted until after our API call has succeeded.
-In JavaScript, a Promise represents the eventual result of an asynchronous operation. Think of it as a placeholder. This placeholder is essentially an object on which we can attach callbacks.
-Our Promise can have one of three states:
a.Pending — Asynchronous operation has not completed yet
b.Fulfilled — Operation has completed and the Promise has a value
c.Rejected — Operation has completed with an error or failed.
A promise is settled if it is not pending. Once a Promise has settled, it is settled for good. It cannot transition to any other state.
-Most of the time when working with Promises, you will be consuming already-created promises that have been returned from functions. However, you can also create a promise with it’s constructor.

#Second Description
https://javascript.info/promise-basics#loadscript

#Promise
Imagine that you’re a top singer, and fans ask day and night for your upcoming single.

To get some relief, you promise to send it to them when it’s published. You give your fans a list. They can fill in their email addresses, so that when the song becomes available, all subscribed parties instantly receive it. And even if something goes very wrong, say, a fire in the studio, so that you can’t publish the song, they will still be notified.

Everyone is happy: you, because the people don’t crowd you anymore, and fans, because they won’t miss the single.

This is a real-life analogy for things we often have in programming:

A “producing code” that does something and takes time. For instance, a code that loads the data over a network. That’s a “singer”.
A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.
The analogy isn’t terribly accurate, because JavaScript promises are more complex than a simple subscription list: they have additional features and limitations. But it’s fine to begin with.
