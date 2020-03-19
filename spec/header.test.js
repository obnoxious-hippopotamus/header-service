import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../client/src/components/Header.jsx';

Enzyme.configure({adapter: new Adapter()});

const app = shallow(<Header />);

describe('Header Component', () => {
  it('renders', () => {
    expect(app.exists()).toBeTruthy();
  });
});