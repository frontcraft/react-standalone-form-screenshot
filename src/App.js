import React from 'react'
import './App.css'
import Form, {
  FormThemeProvider,
  Input,
  Select,
  MultiSelect,
  Checkboxes,
  Radio,
  Switch,
  TextArea,
  Slider,
  ImageUpload,
  MultiImageUpload,
  FormRow,
  FormButton,
} from 'react-standalone-form'


function App() {
  return (
    <FormThemeProvider>
      <div className="App">
        <Form fields={[
          'input',
          'input-success',
          'input-error',
          'select',
          'multi-select',
          'checkboxes',
          'radio',
          'switch',
          'textarea',
          'slider',
          'image-upload',
          'multi-image-upload',
          ]} required={['input-error']}>
          <FormRow>
            <Input
              name='input'
              label='Label'
              addon='addon'
              placeholder='Placeholder'
              help='Help text'
            />
            <Input name='input-success' label='Success state' />
            <Input name='input-error' label='Error state' />
          </FormRow>
          <FormRow>
            <TextArea name='textarea' label='Text area' rows={3} />
            <Select name='select' label='Select' options={['Option']} />
            <MultiSelect
              name='multi-select'
              label='Multiple select'
              options={['Option 1', 'Option 2']}
              initialValue={['Option 1', 'Option 2']}
            />
          </FormRow>
          <FormRow>
            <Checkboxes
              name='checkboxes'
              label='Checkboxes'
              options={['Option 1', 'Option 2']}
              inline
            />
            <Radio
              name='radio'
              label='Radio'
              options={['Option 1', 'Option 2']}
              inline
            />
            <Switch name='switch' label='Switch' text='Switch me' />
          </FormRow>
          <FormRow>
            <ImageUpload name='image-upload' label='Image upload' />
            <MultiImageUpload
              name='multi-image-upload'
              label='Multiple image upload'
              columns={3}
            />
            <Slider name='slider' label='Slider' />
          </FormRow>
        </Form>
        <FormButton>Submit button</FormButton>
      </div>
    </FormThemeProvider>
  )
}

export default App;
