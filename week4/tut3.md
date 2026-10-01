# COMP6080 Tutorial 3

## 1. Quiz 1 prep: Clicker Game - HTML, CSS, JS and its "theory"
1. Fix the HTML code
> why use specific tags, accessibility/screen readers/keyboard only, when are alt tags actually required

2. The game container should additionally:
- be centered vertically and horizontally
- have font-family Silkscreen (googlefonts), fallback Courier New
- have a TOTAL width of 400px
- have a padding of 20px
- have a dashed black border of 5px
- hav all buttons increase by 1.05 when hovered over and have a pointer cursor
- have the reset game button be 50% of the container width
- have the decoration fit within the container
- when the screen size is less than 400px, change the container width to 200px
> what are font fallbacks, what is box-sizing: border-box, what are %'s relative to, why use media queries, accessibility

3. Add JavaScript so:
- the score updates everytime the button is clicked
- the image changes after 10 click and 20 clicks
- after 50 clicks, the click button changes appearance
- clicking reset game resets the game
> using textContent = '', .src = '', .querySelector(''), .classList.add('')

4. Save the score with localstorage
> What type of value does localStorage.getItem('score') return?, localstorage.setItem('score', score), localstorage.getItem('score')

5. Add a dark mode feature 

<link
  href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap"
  rel="stylesheet"
/>

## 5. Accessibility (10min)

Take a look at 

- [`https://mcdonalds.com.au/`](https://mcdonalds.com.au/)
- [`https://www.dymocks.com.au/`](https://www.dymocks.com.au/)
- [`https://www.w3.org/WAI/WCAG21/quickref/`](https://www.w3.org/WAI/WCAG21/quickref/)

For these website, analyse the site
- Visually, in desktop and other smaller sizes
- By attempting to navigate the website using the keyboard only
- By looking through the source code of the website
- By generating a Lighthouse report and going through its findings

For each of these websites, take note of:

The issues or non-compliance instances that the site has in terms of reaching high accessibility standards.

What steps could be taken to rectify these issues.