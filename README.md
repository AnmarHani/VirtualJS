# [VirtualJS](https://www.npmjs.com/package/virtualjs)

## Description:
A basic, experimental, minimal, and simple Javascript library for building single page web apps.

Combining between complex modern frontend framework with Vanilla Javascript, suitable for new web frontend Javascript learners.

## Getting Started:
To get started, you need to have node installed, then just simply write:

``npx create-virtualjs-app <folder_name> ``


<br>
The working directory will be ``src`` and the root element will be ``App.js`` inspired by ``React``.

```js
/*                      App                       */
export const AppElement = `
    <div id="app">
        ...
    </div>
`
```
Here, we defined an exportable ``AppElement`` which is a must. Also, a literal string so we can put variables inside the string. In the div, we defined the id as "app" (you can change it)


```js
...
        <h1 id="text-value">${value}</h1>
        <button id="increment-btn">Click me to increment</button>
        <button id="decrement-btn">Click me to decrement</button>
...
```
Here, we created ``h1`` we put the ``value`` variable as the text with id "text-value" which we will get to later how we would use it, same with buttons.


```js
Buttons.push(
    {
        id:"increment-btn",
        func:() => increment()
    },
    {
        id:"decrement-btn",
        func:() => decrement()
    }
)
```
Here, you can call ``Buttons`` because it is global and predefined. We push all the buttons we defined with its id and associated function to call it whenever clicked.


```js
import * as Virtual from '../core/index.js'

let value = 0

const increment = () => {
    value++
    Virtual.stateHTML("text-value", `${value}`)
}
const decrement = () => {
    value--
    Virtual.stateHTML("text-value", `${value}`)
}
```
Going back, we imported everything from the core as Virtual (you can name it whatever). We defined ``value`` variable here. We did 2 functions here, one for incrementing the value variable, the other is to decrement. ``stateHTML`` function is called to insert HTML if you have a synchronous value (not an asynchronous fetch call), it takes 2 parameters, one for the id of the element you want to update, and the second is the new value.

<hr>

Finally, you can display the web app by opening the ``index.html`` file. Sometimes, you need an automatic reload or it just display errors that it cant open it, you can use ``Live Preview`` vscode extension to open the ``index.html`` file.
