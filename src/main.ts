import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import { charmander } from './bases/06-decorators-2'
// import { charmander } from './bases/05-decorators'
// import { charmander } from './bases/04-injection'
// import { charmander } from './bases/02-objects'
// import { charmander } from './bases/03-clases'
// import  { name, age } from './bases/01-types'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <h3>${charmander.name}</h3>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
