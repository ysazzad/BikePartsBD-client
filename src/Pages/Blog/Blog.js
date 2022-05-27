import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-3 gap-5 mx-4 mt-4'>
            <div className='border'>
                <h1 className='text-xl text-red-400 p-2'>What is unit testing?</h1>
                <p className='p-2'>unit testing is a type of software testing where individuals components of a software are tested.  The purpose is to validate that each unit of the software code performs as expected.</p>
                <h1 className='text-xl text-red-400 p-2'>Why should write unit tests?</h1>
                <p className='p-2'>
                    1. It simplifies the debugging process.
                    2.Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                    3.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                    4.Unit tests help to fix bugs early in the development cycle and save costs.
                </p>
            </div>
            <div className='border'>
                <h1 className='text-xl text-red-400 p-2'>How does prototypical inheritance work?</h1>
                <p className='p-2'>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__</p>

            </div>
            <div className='border'>
                <h1 className='text-xl text-red-400 p-2'> Why you do not set the state directly in React.</h1>
                <p className='p-2'>1.If you update it directly, calling the setState() afterward may just replace the update you made.
                    2.When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    3.You will lose control of the state across all components.
                </p>
            </div>
            <div className='border'>
                <h1 className='text-xl text-red-400 p-2'>How will you improve the performance of a React Application?</h1>
                <p className='p-2'>
                    1. useMemo():This is a React hook that is used to cache functions in React, CPU-expensive functions.This will make the App component highly optimized. <br />
                    2.  Virtualize long lists : If you render large lists of data, it is recommended that you render only a small portion of the datasets at a time within the visible viewport of a browser, then the next data are rendered as the lists is scrolled, this is called windowing. <br />

                    3.Caching functions : The best thing to do is to cache the function’s input against the output so that the continuous execution of the function gets faster as the same inputs occur again. <br />
                    4.Using reselect selectors : Using reselect optimizes our Redux state management. As Redux practices immutability that means new object references will be created every time on action dispatch <br />
                    5.Lazy loading : Lazy loading has come to be one of the optimization techniques widely used now to speed up the load time. The prospect of Lazy Loading helps reduce the risk of some of the web app performance problems to a minimal.

                </p>
            </div>
            <div className='border'>
                <h1 className='text-xl text-red-400 p-2' > What are the different ways to manage a state in a React application?</h1>
                <p className='p-2'>
                    1. Local state :  Local state is data we manage in one or another component.
                    Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />
                    2.Global  state : Global state is data we manage across multiple components.
                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global.
                </p>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Blog;