import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-3xl text-center font-bold py-28 bg-violet-50'>Job Questions</h3>
            <div className='py-6 px-6'>
                <div className='m-4'>
                    <h2 className='text-4xl mb-4'>When should you use context API?</h2>
                    <p><span className='font-bold border mr-2'>Example: </span>
                        The Context API in React is a features. I should use the Context API when i have data or behavior that needs to be shared across multiple components in  application. For example, I have a theme that needs to be applied to multiple components, I could use the Context API to provide the theme to those components without having to pass it down as a prop to each one individually.

                    </p>
                </div>
            </div>
            <div className='py-6 px-6'>
                <div className='m-4'>
                    <h2 className='text-4xl mb-4'>What is custom  React Hook?</h2>
                    <p><span className='font-bold border mr-2'>Example: </span>
                        A custom React hook is a function that uses one or more of the built-in React hooks and returns stateful logic that can be reused across multiple components in a React application.
                        instead of writing the same code across multiple components that  the same common stateful logic (a “setState” or localStorage logic), i can put that code inside a custom hook and reuse it.


                    </p>
                </div>
            </div>
            <div className='py-6 px-6'>
                <div className='m-4'>
                    <h2 className='text-4xl mb-4'>what is useRef. where should work?</h2>
                    <p><span className='font-bold border mr-2'>Example: </span>
                        useRef is a built-in hook in React that provides a way to create a mutable reference to a DOM element or any other value that persists across renders. <br />
                        useRef should be used when I need to store mutable values that are not part of the state of a component. It's useful for accessing DOM elements, managing focus, and creating timers or intervals, among other things.

                    </p>
                </div>
            </div>
            <div className='py-6 px-6'>
                <div className='m-4'>
                    <h2 className='text-4xl mb-4'>what is useMemo. where should work?</h2>
                    <p><span className='font-bold border mr-2'>Example: </span>
                        useMemo is a built-in hook in React that allows  to memoize a function or a value to avoid expensive re-calculation of the same value on every render. <br />
                        useMemo should be used when i have a computationally expensive function or a value that depends on expensive computations, and it on every render.


                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;