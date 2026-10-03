# Dev Stack Builder

Description

Its a React app where i can explore frontend, backend, database, language, styling, DevOps and tooling options, then pick the ones i like to build my own ideal development stack. The technology data is loaded from a JSON file.Users can view technology details and add, remove, or manage their selected technologies in a personal stack.


Technologies Used

React
TypeScript
Tailwind CSS
React Toastify
Vite
Features
JSON 

Features

Browse development technologies in a responsive card grid 
Build a personalized technology stack in the "Your Stack" sidebar, with duplicates blocked
Add and remove technologies dynamically, including a "Remove All" button.


Question Answer 

1. What is JSX, and why is it used in React?
   ans: JSX is a syntax that used in React.And its help to write HTML code inside JavaScript or TypeScript.
   It makes React code easier to read and write because we can describe the UI directly inside the component

2. What is the difference between props and state?
   ans:Props are used to pass data from a parent component to a child component and Props are read-only.
   State is used to store data inside a component and State can be updated.

3. What does the useState hook do, and where did you use it in this project?
   ans:The useState hook is used to create and manage state inside a React component.When the state changes, React              re-renders the component to show the updated data.
   In this project, I used useState in App.tsx to manage the selected technologies in the Your Stack section.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
   ans: useEffect is used to handle side effects in React. I used it to load the JSON data when the component mounted and       store the data in state.so it could be displayed in the technology cards.

5. Why does every item in a .map() list need a unique key prop?
   ans:A unique key prop helps react identify each list item and efficiently update the UI when the list changes.

6. What is conditional rendering?
   ans:Conditional rendering means displaying ui elements based on a condition. In my project, the Remove all button is         shown only when the stack has at least one technology.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   ans: We pass data from parent to child using props.A child communicates back to the parent by calling a function passed      from the parent as a prop.











