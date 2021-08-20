import Select from "./index";


const Story = (props) => <Select {...props} />

// Here we export a variant of the default template passing props
export const SelectEvent = Story.bind({})
SelectEvent.args = {
    className: 'selectControl',
    title: 'Select event type',
    valuesArray: ['event1', 'event2'],
    placeholder: 'event',
};

// Here we export a variant of the default template passing props
export const SelectLocation = Story.bind({})
SelectLocation.args = {
    className: 'selectControl',
    title: 'Select location',
    valuesArray: ['location1', 'location2'],
    placeholder: 'location',
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Select',
  component: Select,
  argTypes: {
    className: { control: 'string' },
  },
};