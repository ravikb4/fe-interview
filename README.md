# KnowBe4 Front End Interview

## Instructions

1. Clone this repository
2. Checkout any of the React, Vue or Svelte branches based on your preference
3. Context:
   1. There's a MyComponent component in the components folder.
   2. It's a simple component that displays a checkbox, radio buttons and a text input.
   3. The parent app component has three lines that show the state of each of these inputs.
4. Complete the following tasks
   1. The first task is to make the parent app component stateful and pass the state to the MyComponent component as props. The MyComponent component should then update the parent app component state when the inputs change.
   2. If you notice the MyComponent's on mounts, you will see that we have a time consuming function that runs on mount. Edit the project such that the MyComponent is loaded lazily.
   3. Our project has grown quite a bit and the JS files have gotten very large. What can we do to make our page load faster?
