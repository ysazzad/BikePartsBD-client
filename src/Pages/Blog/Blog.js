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

            </div>

        </div>
    );
};

export default Blog;