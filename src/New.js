//import Virtual core functions
import * as Virtual from '../core/index.js'
import * as New2 from './New2.js'

/*                       Title                       */
let [getValue2, setValue2] = Virtual.State(0)

export const TitleFunc = (title) => {
    return `
        <div>
            ${title}
            <hr>
            ${New2.TitleElement}
            <hr>
            <h3>This is my Title. Usually, Suppose to be...</h3>
            <h1 id='title2'>${getValue2} and The Global is ${Virtual.GetGlobal("myVar")}</h1>
            <button id="myBtn2">Click me</button>
        </div>
    `
} 

Button.push({
    id:"myBtn2",
    func:() => setValue2(getValue2++, 'title2', `${getValue2}`)
})
