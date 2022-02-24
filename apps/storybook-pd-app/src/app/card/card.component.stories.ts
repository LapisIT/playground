import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CardComponent } from './card.component';
import { CardModule } from './card.module';

export default {
  title: 'CardComponent',
  component: CardComponent,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ CardModule ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 1px">${story}</div>`),
  ],
} as Meta<CardComponent>;

const actionsData = {
  selectedCard: action('selectedCard'),
};

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: {
    ...args,
    ...actionsData,
  },
});

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  card: {
    title: 'John Smith',
  }
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  card: {
    title: 'John Smith',
    subtitle: '16/01/1950'
  }
};

export const WithContent = Template.bind({});
WithContent.args = {
  card: {
    title: 'John Smith',
    subtitle: '16/01/1950',
    content: 'This is some content.'
  }
};

export const WithHTMLContent = Template.bind({});
WithHTMLContent.args = {
  card: {
    title: 'John Smith',
    subtitle: '16/01/1950',
    content: 'This is some content. And this is <b>bold</b>.'
  }
};