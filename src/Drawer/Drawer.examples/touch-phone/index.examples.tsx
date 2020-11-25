import { withKnobs } from '@storybook/addon-knobs';

import { EXAMPLE_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './big.examples';
export * from './custom-title.examples';
export * from './nested.examples';
export * from './small.examples';
export * from './playground.examples';

export default {
    title: EXAMPLE_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'touch-phone' })],
    parameters,
};
