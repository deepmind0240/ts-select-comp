import { useState } from "react"
import { Select, SelectOption } from "./Select"

const options = [
  {label: 'First', value: 1},
  {label: 'Second', value: 2},
  {label: 'Third', value: 3},
  {label: 'Fourth', value: 4},
  {label: 'Fifth', value: 5},
  {label: 'Sixth', value: 6},
  {label: 'Seventh', value: 7},
  {label: 'Eighth', value: 8},
  {label: 'Random', value: 9},
  {label: 'Tags', value: 10},
  {label: 'React', value: 11},
  {label: 'TypeScript', value: 12},
  {label: 'Vue', value: 13},
]

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[10]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[10])

  return (
    <>
      <Select multiple value={value1} options={options} onChange={o => setValue1(o)} />
      <br />
      <Select value={value2} options={options} onChange={o => setValue2(o)} />
    </>
  )
}

export default App
