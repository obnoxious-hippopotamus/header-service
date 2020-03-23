import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Buttons from '../client/src/components/Buttons.jsx';

Enzyme.configure({adapter: new Adapter()});

const app = shallow(<Buttons />);

describe('Buttons Component', () => {
  it('renders', () => {
    expect(app.exists()).toBeTruthy();
  });

  it('contains buttons', () => {
    expect(app.find('button').length).toBeTruthy();
  });

});