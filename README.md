# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Newsletter sign-up form with success message solution](#frontend-mentor---newsletter-sign-up-form-with-success-message-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshots](#screenshots)
      - [Mobile Screenshots](#mobile-screenshots)
      - [Desktop Screenshots](#desktop-screenshots)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Features I added](#features-i-added)
    - [What I Learned \& Useful Resources](#what-i-learned--useful-resources)
      - [Useful Resources:](#useful-resources)
    - [Continued development](#continued-development)
  - [Installation Instructions](#installation-instructions)
  - [Dependencies](#dependencies)
  - [Usage Instructions](#usage-instructions)
  - [Project Structure](#project-structure)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

##### Mobile Screenshots

<table>
  <tr>
    <td>
      <strong>Mobile View:</strong><br>
      <img src="public/screenshots/screenshot-of-mobile.png" alt="Mobile View" width="300"/><br>
    </td>
    <td>
      <strong>Mobile View with Error:</strong><br>
      <img src="public/screenshots/error-mobile-screenshot.png" alt="Mobile View with Error" width="300"/><br>
    </td>
  </tr>
</table>

##### Desktop Screenshots

<table>
  <tr>
    <td>
      <strong>Desktop View:</strong><br>
      <img src="public/screenshots/screenshot-of-desktop.png" alt="Desktop View" width="500"/><br>
    </td>
    <td>
      <strong>Desktop View with Error:</strong><br>
      <img src="public/screenshots/error-state-screenshot.png" alt="Desktop View with Error" width="500"/><br>
    </td>
  </tr>
  <tr>
    <td>
      <strong>Desktop with Interactive Elements:</strong><br>
      <img src="public/screenshots/screenshot-of-desktop-two.png" alt="Desktop with Interactive Elements" width="500"/><br>
    </td>
    <td>
      <strong>Success Message:</strong><br>
      <img src="public/screenshots/screenshot-of-success-message.png" alt="Success Message" width="450"/><br>
    </td>
  </tr>
</table>

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/reactpowered-responsive-newsletter-form-chOYm5GhMo)
- Live Site URL: [Live site URL here](https://newsletter-form-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### Features I added

- **Real-time Email Validation**: I implemented a feature that provides instant validation feedback as the user types their email. This enhancement helps users correct mistakes before submitting the form.
- **Hybrid Approach for Error Handling**: I added a "recomputing" animation next to the error message. This ensures users know that validation is still in progress, making the experience feel smoother and more interactive.

### What I Learned & Useful Resources

In this project, I gained experience in handling form validation in React, working with state, and improving accessibility.

#### Useful Resources:

- [React - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [React - Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
- [React - Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- [React Hooks Cheat Sheet](https://react-hooks-cheatsheet.com/)
- [MDN - Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

### Continued development

I plan to:

- Enhance skills in managing different states with React
- Explore more about React hooks
- Understand the lifecycle of components
- Ensure smooth user experience across different devices

## Installation Instructions

1. Clone the repository:

   ```sh
   git clone https://github.com/YourUsername/newsletter-signup-form.git

   ```

2. Navigate to the project directory:

   ```sh
   cd newsletter-signup-form

   ```

3. Install dependencies:

   ```sh
   npm install

   ```

4. Start the development server:
   ```sh
   npm start
   ```

## Dependencies

- React.js
- React Hooks

## Usage Instructions

1. Open the application in the browser.
2. Enter an email address into the input field and submit the form.
3. If the form is correctly filled, a success message will appear with the email.
4. If there are errors (empty field or incorrect email format), validation messages will be shown.
5. Resize the browser window to check the responsiveness across mobile and desktop layouts.

## Project Structure

```
newsletter-signup-form/
├── public/
│ ├── images/
│ ├── screenshots/
├── src/
│ ├── components/
│ ├── index.css
│ ├── App.js
│ ├── index.js
├── package.json

```

## Author

- LinkedIn - [Doina Leovchin](https://www.linkedin.com/in/doinaleovchindeveloper/)
- Frontend Mentor - [@yDoileo](https://www.frontendmentor.io/profile/Doileo)
