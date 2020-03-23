import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OtherInfo from '../client/src/components/OtherInfo.jsx';

Enzyme.configure({adapter: new Adapter()});

const app = shallow(<OtherInfo />);

describe('OtherInfo Component', () => {
  it('renders', () => {
    expect(app.exists()).toBeTruthy();
  });
  it('contains correct ClassName', () => {
    expect(app.childAt(0).hasClass('flexRow')).toBeTruthy();
  });
});
