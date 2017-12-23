import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Counter from '../../src/components/Counter';

describe('Counter component', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Counter value={5} incrementValue={jest.fn()} decrementValue={jest.fn()} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
