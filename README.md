# RxJS Pipeable Operators

## Order of progression

### generic-subscriber
Observables never run until you invoke them with subscribe. This also means that the values from the observable don't go anywhere unless you use a subscriber. A basic subscriber is either a function to handle the next value or an object with functions to handle next, complete, and error scenarios.

### extend-subscriber
The Subscriber class exposes a _next method which you can override to handle how the destination's next function will be called. This allows you to create your own variations of the Subscriber class to intercept what happens between the observable and the destination subscriber.

### connect-source-to-subscriber
Observable's pipe method is all about connecting a source to a subscriber through an operator. While you wouldn't normally manually invoke connect the pieces together the way this lesson does, it's important to understand how the internals work before working with the RxJS api.


### connect-source-to-subscriber-with-lift
The lift method on each source hides away the internals of RxJS so you can simply connect a source to the subscriber you're working with. The lift method take an object with a call function with subscriber and source arguments, then it's up to you how you want to connect them together.