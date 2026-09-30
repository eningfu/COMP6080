# COMP6080 Tutorial 2

## 1. Devtools (15min)
> debugging, modifying elements, network tab

## 2. ids, Javascript in Web (10min)
> console.log, == vs ===

> getElementById, querySelector, getElementsByClassName

> createElement, textContent/createTextNode, appendChild

> style, classList

## 3.Fully generate HTML with Vanilla JS DOM manipulation (15min)

A stub page has been created in `page.html`. This page has an empty body tag, and we want you to build the page below, however, only using javascript and the DOM API. The DOM lectures will give you a starting point for this work.

Fill the script `build.js` file to build the following HTML elements within the body tag.

```html
<p>Hello there,</p>
<p>I am a llama, hear my sirens roar:</p>
<ul>
    <li>The</li>
    <li>Duck</li>
    <li>Lemonade</li>
    <li>Stand</li>
</ul>
```

## 4. Build HTML and Vanilla JS form to collect and validate details (15min)
Build a simple form in `form.html` that collects an email address and first name from a user before submitting it. We have provided some stub code.

Valid inputs:
 * A valid first name is defined as only lowercase and uppercase letters, between 2 and 20 characters long inclusively.
 * A valid email is defined by the regular expression `.+\@.+\..+` (read more on that here)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions].

Important facts about form state:
 * The submit button remains disabled until both a valid firstName and valid email are entered. The state change occurs on keyup of either input fields.
 * On blur of either input fields, if their value is invalid, the background of the input is turned a light red.
 * On focus of either input fields, we removed any error backgrounds.

## 5. Dark Mode (10min)
> Event listeners, localstorage.setItem(), localstorage.getItem()