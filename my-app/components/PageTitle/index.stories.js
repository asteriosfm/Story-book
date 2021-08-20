import PageTitle from "./index";


const Story = (props) => <PageTitle {...props} />

// Here we export a variant of the default template passing props
export const PageTitleStory= Story.bind({})
PageTitleStory.args = {
    className: 'pageTitle',
    title: 'Create new event',
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'PageTitle',
  component: PageTitle,
  argTypes: {
    className: { control: 'string' },
  },
};