
import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

type ButtonProps = {
  onClick?: () => void
}
const Button : React.SFC<ButtonProps> = props => 
  <button onClick={props.onClick}>{props.children}</button>

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
