import { Meta, StoryObj } from '@storybook/react';
import Card, { ICard } from './Card';
import { mockCardProps } from './Card.mocks';

const meta: Meta<typeof Card> = {
  title: 'templates/Card',
  component: Card,
  argTypes: {},
};

export default meta;

type Story = StoryObj<ICard>;

export const Template: Story = {
  args: {
    ...mockCardProps.base,
  },
};
