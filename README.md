# KnowBe4 Front End Interview

## Instructions

1. Clone this repository
2. Checkout any of the React, Vue or Svelte branches based on your preference
3. Section 1
   1. Context:
      1. There's a MyComponent component in the components folder.
      2. It's a simple component that displays a checkbox, radio buttons and a text input.
      3. The parent app component has three lines that show the state of each of these inputs.
   2. Complete the following tasks
      1. The first task is to make the parent app component stateful and pass the state to the MyComponent component as props. The MyComponent component should then update the parent app component state when the inputs change.
4. Section 2
   1. Context:
      1. We have a text area
      2. a checkbox with a label of show preview
      3. a place that previews the markdown
      4. The js code for previewing markdown is only required if the Show preview checkbox is ever enabled.
      5. We currently load everything at once which slows down our page
   2. Task:
      1. Implement code splitting such that the preview section is only loaded if the show preview is ever enabled. Use the loading component when the markdown component is loading
