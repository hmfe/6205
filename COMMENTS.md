# Developer Comments

While doing this application there where several decisions I made in the way for excercises 1 and 3

# 1 - CssWizardry

This excercise had a lot of a small details that I was able to find and incorporate in the button but I wouldn't say is perfect, in scenarios such as this I would work closely with the UI designer to make sure all the styles are correct, starting with the size of the button along with the margins, padding and other elements.
There were a number of things that were hard to find like the linear gradient in the background of the button which is incorporated in the style but I am affraid I may have missed something.

If I where to developed a button such as this in a context of React, Angular, VueJS or Svelte my approach to this would of changed a little incorporating more elements into the button just to make it configurable and make things like the text and icon configurable. 

Things I could change from the current solution, I would of liked to just put everything inside the button tag and probably render the icon through css but in my personal opinion since we are using svg I prefer to see the tag as part of the HTML than to set it up through css.

# 3 - SearchApp

I editted the readme section of the app. The tools I used to develop the solution here were
- react-create-app (Comes with eslint and many other tools to use)
- React
- Jest & Enzyme
- Material-ui
- Docker

Some other tools I would of liked to use for this project are

- Husky To setup triggers on pre-commit and pre-push operations used for larger projects to not allow developers to push code that hasn't been properly unit tested 
- Eslint to make sure the code follows the code standards of the organization
- CI/CD Tools I would of liked to implement a pipeline that can take the solution from development, to staging and finally to production.

### There is more technical information about the Search-App Project in `3-SearchApp/README.md`
