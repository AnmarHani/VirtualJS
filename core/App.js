import * as Virtual from './index.js'
import * as App from '../src/App.js'

Virtual.ClearGlobal()

Virtual.Global(Globals)

Virtual.Render(App.AppElement)

Virtual.Buttons(Buttons)
