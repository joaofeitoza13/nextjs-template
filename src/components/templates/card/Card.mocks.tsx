import { ICard } from './Card';

const base: ICard = {
  tag: 'first-card',
  title: `The first card`,
  body: 'This is the body of the first card.',
  author: 'JF',
  time: '2h ago',
};

export const mockCardProps = {
  base,
};
