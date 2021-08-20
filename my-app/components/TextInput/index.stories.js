import TextInput from "./index";


const Story = (props) => <TextInput {...props} />

// Here we export a variant of the default template passing props
export const TextInputName = Story.bind({})
TextInputName.args = {
  placeHolder: 'Name',
  label: 'Enter your name',
  className: 'textInput'
};

// Here we export a variant of the default template passing props
export const TextInputEmail = Story.bind({})
TextInputEmail.args = {
  placeHolder: 'Email',
  label: 'Enter your email',
  className: 'textInput'
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'TextInput',
  component: TextInput,
  argTypes: {
    className: { control: 'string' },
  },
};