import { Meta, StoryObj } from '@storybook/react';
import SidebarLayout, { ISidebarLayout } from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

const meta: Meta<typeof SidebarLayout> = {
  title: 'templates/SidebarLayout',
  component: SidebarLayout,
  argTypes: {},
};

export default meta;

type Story = StoryObj<ISidebarLayout>;

export const Template: Story = {
  args: {
    ...mockSidebarLayoutProps.base,
  },
};
