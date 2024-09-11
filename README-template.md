# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

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

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### Continued development

This project was fine for the most part. I learned a lot about styling forms and setting up displays for errors.

The biggest challenge I had was actually self-inflicted, as I wanted the elements to move across the screen as a transition from submitting your email to having the success message. Before this point, everything was styled and working fine, but in order to get the transition to work I had to change everything to absolute positioning. I'm sure there was a better way to handle this, but this was just how I figured it out. One of the major issues with this is the fact that the major sections are no longer easily centered on the screen, and I had to use some magic numbers to get them to look right. It also messed up the views from desktop to mobile, which required some more magic numbers to get to look right on mobile view.

Overall I cannot say I am particularly proud of the solution I made, but it looks well enough so long as the format doesn't change too much. I would like to invest in researching better solutions for transitioning elements around like that in the future.
