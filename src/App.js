import * as Virtual from '../core/index.js'
import * as New from './New.js'
// import {firstFunc} from './functions/firstFunc.js'
import {asyncTestFunc} from './functions/async/asyncTestFunc.js'
import {stateValueFunc} from './functions/state/stateValueFunc.js'

Start(async function(){
    await asyncTestFunc()
})

/*                      App                        */
export const AppElement = `
    <div id="App">
        ${New.TitleFunc("hello world")}
        <h1 id="forBtn"></h1>
        <button id="myBtn">Click me</button>
        <button id="myBtnSecond">Click me 2</button>
    </div>
`

Button.push({
    id:"myBtnSecond",
    func:() => stateValueFunc()
})
Button.push({
    id:"myBtn",
    func:() => stateValueFunc()
})

Globals.push({
    myVar:"hello world",
})
