# Frontend Mentor - Intro Component With Sign Up Form Solution

<div align="center">

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NEWBIE](https://img.shields.io/badge/Frontend_Mentor-NEWBIE-3DB8FF?style=for-the-badge)

</div>

A responsive sign up form built as part of a Frontend Mentor challenge.

This project focuses on recreating a modern registration form while implementing custom validation logic, error states, DOM manipulation, responsive layouts, and interactive user feedback using JavaScript.

---

## Preview

![Design preview for the Intro component with sign up form](./preview.jpg)

---

## Live Demo

- Live Site: YOUR_LIVE_URL_HERE
- Frontend Mentor Challenge: https://www.frontendmentor.io/challenges/intro-component-with-signup-form-Bp6mkTIK_

---

# Overview

This project recreates the Intro Component With Sign Up Form design provided by Frontend Mentor.

The main objectives were:

- Semantic HTML5 structure
- Responsive layouts
- Flexbox positioning
- Form validation
- DOM manipulation
- Error state handling
- Custom validation messages
- Input restrictions
- CSS positioning
- Interactive user feedback
- Clean CSS architecture

---

# Challenges Faced

## Understanding Custom Form Validation

One of the first challenges was understanding how form validation works beyond the browser's built-in validation.

To gain complete control over the validation process, I disabled the native validation behavior using:

```html
<form novalidate>
```

and manually handled validation through JavaScript.

This helped me better understand:

- `<form>`
- `submit`
- `required`
- `preventDefault()`
- Custom validation logic

---

## Working with querySelectorAll()

Another challenge was understanding how to work with multiple inputs at once.

I learned that:

```javascript
const inputs = document.querySelectorAll(".form-input");
```

returns a `NodeList`.

Although it looks similar to an array, it is actually a collection of DOM elements.

This allowed me to access individual inputs using indexes:

```javascript
inputs[0];
inputs[1];
inputs[2];
```

and iterate through them efficiently.

---

## Understanding parentElement

One concept that initially felt confusing was applying error styles to elements related to an input rather than to the input itself.

I learned how:

```javascript
input.parentElement
```

returns the direct parent element of a node.

For example:

```html
<div class="input-wrapper">
  <input class="form-input">
</div>
```

allows:

```javascript
input.parentElement
```

to reference:

```html
<div class="input-wrapper">
```

This made it possible to apply validation classes to entire field containers.

---

## Creating Dynamic Error States

Instead of manually changing CSS properties through JavaScript, I learned how to create reusable validation states using classes:

```javascript
wrapper.classList.add("error");
wrapper.classList.remove("error");
```

This kept styling inside CSS and behavior inside JavaScript.

---

## Validating Email Addresses with Regular Expressions

A significant challenge was checking whether the email followed the correct format.

To achieve this, I learned how regular expressions can be used for validation:

```javascript
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

This allowed the form to reject improperly formatted email addresses.

---

## Understanding trim()

While validating form fields, I discovered that users could enter only spaces.

To solve this problem, I learned how:

```javascript
input.value.trim();
```

removes whitespace from the beginning and end of a string.

This ensured that fields containing only spaces would still be considered empty.

---

## Restricting User Input with replace()

Another challenge involved preventing users from entering numbers or special characters into the first name and last name fields.

I learned how to use:

```javascript
replace()
```

to remove invalid characters dynamically.

```javascript
input.value = input.value.replace(
  /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,
  ""
);
```

This allowed only letters and spaces to be entered.

---

## Understanding Why Images Cannot Be Placed Inside Inputs

At first, I wanted to place the validation icon directly inside the input element.

While researching the issue, I learned that:

```html
<input>
```

is a void element and cannot contain child elements.

Because of this limitation, a different structure was required.

---

## Creating Wrapper Containers

To position validation icons visually inside the input fields, I learned how to use wrapper elements.

```html
<div class="input-wrapper">
  <input class="form-input">
  <img class="error-icon">
</div>
```

This structure made it possible to control the position of the icon independently from the input field.

---

## Understanding Relative and Absolute Positioning

Positioning the validation icon required learning how CSS positioning works.

The wrapper became the positioning context:

```css
.input-wrapper {
  position: relative;
}
```

while the icon was positioned independently:

```css
.error-icon {
  position: absolute;
}
```

This was my first practical experience using absolute positioning inside form components.

---

## Understanding Vertical Centering

Another challenge involved understanding how icons are centered vertically.

I learned the purpose of:

```css
top: 50%;
transform: translateY(-50%);
```

`top: 50%` places the top edge of the element at the middle of the container.

`translateY(-50%)` then moves the element upward by half of its own height, creating true vertical centering.

---

## Understanding CSS Sibling Selectors

While displaying validation messages, I learned how adjacent sibling selectors work.

For example:

```css
.error + .error-message
```

selects the element immediately following another element.

This made it possible to reveal error messages automatically whenever a wrapper received the error class.

---

## Showing Validation Messages Without Breaking the Layout

Initially, displaying error messages caused the layout to shift.

I learned the difference between:

```css
display: none;
```

and

```css
visibility: hidden;
```

The final solution used:

```css
visibility: hidden;
```

which reserved space in the layout while hiding the content.

This prevented unwanted movement when validation messages appeared.

---

## Managing Focus and Error States

While styling validation states, I noticed that browser focus styles could interfere with custom error borders.

To solve this issue, I customized:

```css
.form-input:focus
```

and created separate error styles:

```css
.input-wrapper.error .form-input
```

This ensured that focus and validation states remained visually consistent.

---

## Organizing CSS More Effectively

As the stylesheet grew, it became harder to locate specific rules.

I learned the importance of organizing styles into sections such as:

- Variables
- Reset
- Layout
- Typography
- Forms
- Validation
- Components
- Responsive Styles

This made the stylesheet easier to maintain and navigate.

---

# Built With

- HTML5
- CSS3
- JavaScript (ES6)
- Flexbox
- CSS Custom Properties
- Form Validation
- Regular Expressions (Regex)
- DOM Manipulation
- CSS Positioning
- CSS Selectors
- CSS Transitions
- Responsive Design

---

# Responsive Design Approach

The page was built using a responsive-first mindset.

### Desktop Devices

- Promotional content
- Trial offer section
- Registration form
- Validation feedback
- Responsive spacing

### Mobile Devices

- Layout stacking
- Form widths
- Typography sizing
- Component spacing
- Overall alignment

```css
@media (max-width: 48rem) {
  main {
    flex-direction: column;
  }
}
```

This ensures the interface remains accessible and usable across multiple screen sizes.

---

# What I Learned

Through this project I gained more experience with:

- Building responsive forms from design mockups
- Creating accessible HTML forms
- Understanding the purpose of the `form` element
- Using the `novalidate` attribute
- Selecting DOM elements with `querySelector()`
- Selecting multiple elements with `querySelectorAll()`
- Understanding `NodeList`
- Traversing the DOM with `parentElement`
- Handling events with `addEventListener()`
- Preventing default browser behavior with `preventDefault()`
- Adding and removing classes dynamically
- Validating user input
- Performing email validation using regular expressions
- Removing whitespace using `trim()`
- Restricting input using `replace()`
- Preventing numbers and special characters from being entered into text fields
- Creating reusable validation states
- Working with wrapper containers
- Understanding HTML void elements
- Positioning elements with relative and absolute positioning
- Centering elements using `translateY()`
- Understanding descendant selectors
- Understanding adjacent sibling selectors
- Using `visibility` versus `display`
- Preventing layout shifts
- Managing focus and error states
- Working with CSS variables
- Using relative units such as `rem`
- Organizing CSS into logical sections
- Creating smoother user interactions through CSS transitions

---

# Author

- Frontend Mentor - https://www.frontendmentor.io/profile/juansanchezzzzz
- GitHub - https://github.com/juansanchezzzzz