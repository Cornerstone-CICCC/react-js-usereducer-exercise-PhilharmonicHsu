[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/lLfW7N3e)
# React JS - useReducer Exercise

**Goal:** To understand and use the `useReducer` hook properly.

## Instructions

1. Create a new React project by running `npm create vite@latest reducer-exercise`.
2. Create one reducer that holds 2 properties: `isDark` and `fSize`.

    ```ts
    {
      isDark: boolean,
      fSize: number
    }
    ```

3. In your `App.tsx`, wrap your App component in a `div`, add some dummy text, and create three buttons:

    ```html
    <button>Toggle Dark Mode</button>
    <button>Increase Font Size</button>
    <button>Decrease Font Size</button>
    ```

4. Clicking on the toggle button will toggle the background of the `div` to black and text color to white if it `isDark` is true. Just use inline styling or **Tailwind CSS** to change the colors.

5. Clicking the font size buttons will increase or decrease the font size by 1px of the texts inside the `div`. Just use `16` as the default size for your reducer state. You can use inline styling or **Tailwind CSS** to change the font sizes.

6. Commit and push your changes.
