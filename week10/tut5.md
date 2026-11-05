# COMP6080 Tutorial 5

React

## 1. useEffect (20 mins)
The dependency array tells React when to re-run an effect based on changes to specific values.

The dependency array is the second argument passed into `useEffect()`.

```jsx
useEffect(() => {
  // Effect
}, [dependencies]);
```

### 1. Empty dependency array `[]`

```jsx
useEffect(() => {
  console.log("Component mounted!");
}, []);
```

- Runs after the component first mounts.
- Does not re-run when the component updates.
- Useful for effects that only need to happen once per mount, such as fetching initial data.

### 2. Dependency array with values `[count]`

```jsx
useEffect(() => {
  console.log("Count changed!");
}, [count]);
```

- Runs after the component first mounts.
- Runs again whenever `count` changes.
- Useful when an effect depends on a particular state or prop.

You can also include multiple dependencies:

```jsx
useEffect(() => {
  console.log("Something changed!");
}, [count, name]);
```

The effect runs again whenever either `count` or `name` changes.

### 3. No dependency array

```jsx
useEffect(() => {
  console.log("Component rendered!");
});
```

- Runs after every render.
- This includes the initial mount and subsequent updates.
- Be careful, as this can cause unnecessary work or infinite render loops if the effect updates state.

### Task
Create a text box that displays how many characters the user has typed. Use useEffect to update the browser tab's title whenever the character count changes.

## 2. Games (30 mins)
Create a website that hosts a bunch of games. 

1. Create a landing page at /landing
2. Create a button for each game (components)
3. Make a tictactoe game at /tictactoe.

