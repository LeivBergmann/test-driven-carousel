import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Carousel from '../src/Carousel';
import slides from '../example/slides';

storiesOf('Carousel', module).add('default', () => (
  <Carousel slides={slides} onIndexChange={action('onIndexChange')} />
));