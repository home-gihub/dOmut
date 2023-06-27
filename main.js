import * as DOMut from './DOMut.js'

DOMut.InitApp(
  `
  <p id="msg"> </p>
  `
)

DOMut.UpdateInner('msg', 'Hello from DOMut')
