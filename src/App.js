import React from 'react'
import './App.css'
import Form, {
  FormThemeProvider,
  Input,
  Select,
  MultiSelect,
  FormRow,
  FormButton,
} from 'react-standalone-form'


function App() {
  return (
    <FormThemeProvider>
      <div className="App">
        <Form fields={['input', 'select', 'multi-select']}>
          <Input
            name='input'
            label='Label'
            addon='addon'
            placeholder='Placeholder'
            help='Help text'
          />
          <FormRow>
            <Select name='select' label='Select' options={['Option']} />
            <MultiSelect name='multi-select' label='Multiple select' />
          </FormRow>
        </Form>
        <FormButton>Submit button</FormButton>
      </div>
    </FormThemeProvider>
  )
}

export default App;
