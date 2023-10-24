import { Meta, StoryObj } from '@storybook/react';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';

const meta: Meta<typeof PrimaryLayout> = {
  title: 'templates/PrimaryLayout',
  component: PrimaryLayout,
  argTypes: {},
};

export default meta;

type Story = StoryObj<IPrimaryLayout>;

export const Template: Story = {
  args: {
    ...mockPrimaryLayoutProps.base,
  },
};
