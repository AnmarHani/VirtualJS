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

/*                      App                        */
export const AppElement = `
    <div id="app">
        <h1 id="text-value">${value}</h1>
        <button id="increment-btn">Click me to increment</button>
        <button id="decrement-btn">Click me to decrement</button>
    </div>
`

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