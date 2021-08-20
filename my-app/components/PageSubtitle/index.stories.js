import PageSubitle from "./index";


const Story = (props) => <PageSubitle {...props} />

// Here we export a variant of the default template passing props
export const PageSubitleStory= Story.bind({})
PageSubitleStory.args = {
    className: 'pageSubitle',
    title: 'Add some basic information to create the event page',
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'PageSubitle',
  component: PageSubitle,
  argTypes: {
    className: { control: 'string' },
  },
};