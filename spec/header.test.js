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
  it('contains a poster tag', () => {
    expect(app.find('img.poster').length).toBeGreaterThan(0);
  });
  it('contains a DropList component', () => {
    expect(app.find('DropList').length).toBeGreaterThan(0);
  });
  it('contains a Title component', () => {
    expect(app.find('Title').length).toBeGreaterThan(0);
  });
  it('contains a Ratings component', () => {
    expect(app.find('RatingBar').length).toBeGreaterThan(0);
  });
  it('contains a Description component', () => {
    expect(app.find('Description').length).toBeGreaterThan(0);
  });
  it('contains a Buttons component', () => {
    expect(app.find('Buttons').length).toBeGreaterThan(0);
  });
  it('contains a OtherInfo component', () => {
    expect(app.find('OtherInfo').length).toBeGreaterThan(0);
  });
});
