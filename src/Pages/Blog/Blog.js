import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1>What is unit testing?</h1>
                <p>unit testing is a type of software testing where individuals components of a software are tested.  The purpose is to validate that each unit of the software code performs as expected.</p>
                <h1>Why should write unit tests?</h1>
                <p>
                    1. It simplifies the debugging process.
                    2.Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                    3.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                    4.Unit tests help to fix bugs early in the development cycle and save costs.
                </p>
            </div>
            <div>
                <h1>How does prototypical inheritance work?</h1>
                <p>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__</p>

            </div>
            <div>
                <h1> Why you do not set the state directly in React.</h1>
                <p>1.If you update it directly, calling the setState() afterward may just replace the update you made.
                    2.When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    3.You will lose control of the state across all components.
                </p>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Blog;