# NextJS Tutorial

## Assignment Brief: Understanding React & Introduction to NextJS

### 📹 Instructor Video Overview:

[Watch Here](https://youtu.be/Jg2v8MsqjOc)

### 🎯 Objective:

This assignment aims to acquaint you with React and NextJS, two integral tools used in modern web development.

## 📘 Part I - React

Begin by gaining a deeper understanding of React, its origins, and its purpose. A comprehensive documentary on the creation of React at Facebook has been made available to provide you valuable insights into React's inner workings and philosophy. This documentary is not just informative, but is also crucial to building your foundation in React.

Documentary link: [React: The Creation at Facebook](https://www.youtube.com/watch?v=8pDqJVdNa44&t=1s)

## 📘 Part II - NextJS

Moving on, familiarize yourself with NextJS. Despite being based on HTML, CSS, and JavaScript, NextJS is a powerful framework that has earned its place among the most popular and potent web application frameworks globally. Also known as server-side React, NextJS is an excellent stepping stone into the world of React. Don't let this intimidate you; instead, embrace the opportunity to explore its capabilities.

Overview link: [Understanding NextJS](https://www.youtube.com/watch?v=Sklc_fQBmcs)

## Part III - Practice

After developing a conceptual understanding of React and NextJS, apply what you've learned in a practical exercise. For this part, you are required to complete a series of text-based tutorials. These tutorials will guide you through the steps to get a great handle on NextJS and the very basics of React.

You need to complete these tutorials outside of this project because they will instruct you to clone a new starting repository for each tutorial. Once you complete the final tutorial put the code in the files that I have provided for you in this project and when you have successfully done this, run the Playwright tests and when they all pass submit to GitHub and enable the GitHub Pages Action. I took the code out of the files in this project, but left the folders and files you need to add the code to. You will have to add all of the code from the final project except for the package.json file, if you change this it will break the project grading.

**Complete The following Tutorials - They don't take long (10-20 minutes each on average):**

- https://nextjs.org/learn/basics/create-nextjs-app
- https://nextjs.org/learn/basics/navigate-between-pages
- https://nextjs.org/learn/basics/assets-metadata-css
- https://nextjs.org/learn/basics/data-fetching
- https://nextjs.org/learn/basics/dynamic-routes
- https://nextjs.org/learn/basics/api-routes
- https://nextjs.org/learn/basics/deploying-nextjs-app

## 📤 Submission Guidelines

<!--Clarify what this means-->

Complete through deploying your NextJS app to GitHub Pages, its better than GitHub Pages.

Put a link to your site hosted on GitHHub pages [here](#)

Submit a link to your repository to Canvas when your code passes the Playwright tests.

## 🚀 Setup & Testing Guide

# Install Instructions:

**Installation**:

```bash
npm install
npx playwright install
```

**Starting Development Server**:

```bash
npm run dev
```

**Running Tests**:
Open another terminal window and execute:

```bash
npm run test
```

This runs all the tests in the repo, running this command can help you understand if your tests will pass the autograder.

After part 3, there is a test designed to test it subsequent part completed. In order to run one of these tests run "npm run part-(part-number)". For e.g

```bash
npm run part-3
```

This above command will run all the tests that test part 3 of the tutorial

## 🚀 Understanding Playwright Tests

There are multiple different tests in this assignment meant to test that you've successfully completed different parts of the nextjs tutorial. Below is an explanation of the different things being tested to help you better understand the assignment or give you guidance on what is needed in case one of the tests fails.

try to follow the tutorial as closely as possible

1. **Test 1**: This test checks that the layout.module.css file is properly applied to the layout component.

2. **Test 2**: This test checks to make sure that the globals.css was copied correctly and is applied to the \_app.js file.

3. **Test 3**: This test checks that you've updated the placeholder "Your Name" to be your actual Name.

4. **Test 4**: Similar to the previous tests, this one checks that you've updated the description from the placeholder "[Your Self Introduction]"

5. **Test 5**: This test checks that your home page shows all the blogs created.

6. **Test 6**: This test checks that the blogs in the home page have the correct names matching the blogs from the tutorial.

7. **Test 7**: This test checks that the date in each blog is correctly formatted based on the format specified in date.js

8. **Test 8**: This test checks that that each blog contains content and is not blank.

9. **Test 9**: This test checks that the back to home button on each blog works correctly

10. **Test 10**: This test checks that you created an api route and navigating to it returns a success status

Remember that the failure of any test is an opportunity to understand where something might be wrong in your code. Use the explanations above as a guide to pinpoint the issue.
