//import Virtual core functions
import * as Virtual from '../core/index.js'

/*                       Title                       */
let [getValue2, setValue2] = Virtual.State(0)

export const TitleElement = `
    <div>
        <h1>Test</h1>
    </div>
`

Button.push({
    id:"myBtn2",
    func:() => setValue2(getValue2++, 'title2', `${getValue2}`)
})
