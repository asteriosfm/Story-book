import SmartButton from "./index";


const Story = (props) => <SmartButton {...props} />

// Here we export a variant of the default template passing props
export const WhiteButton= Story.bind({})
WhiteButton.args = {
    className: 'whiteButton',
    title: 'Cancel',
};

// Here we export a variant of the default template passing props
export const BlackButton= Story.bind({})
BlackButton.args = {
    className: 'blackButton',
    title: 'Create event',
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'SmartButton',
  component: SmartButton,
  argTypes: {
    className: { control: 'string' },
  },
};