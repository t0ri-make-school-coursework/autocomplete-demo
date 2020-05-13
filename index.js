import Autocomplete from './node_modules/@t0ri/autocomplete/esm/autocomplete.js'
import * as villagers from './villagers.js'

const autocomplete = new Autocomplete(villagers.default, 10, false)
const input = document.getElementById('text-input')
const div = document.getElementsByTagName('div')[0]
input.addEventListener('keydown', () => { showOption() } )

function createOption() {
  return autocomplete.autocomplete(input.value)
}

function showOption() {
  div.innerHTML = ''

  const options = createOption()
  options.forEach((option) => {
    let element = document.createElement('option')
    element.text = option
    element.className = 'option'
    div.appendChild(element)
  })
}