import * as Virtual from '../../../core/index.js'

let value = 0

export const stateValueFunc = () => {
    value++
    Virtual.stateHTML("forBtn", `${value}`)
}
