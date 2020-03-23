import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DropList from '../client/src/components/DropList.jsx';

Enzyme.configure({adapter: new Adapter()});
const sampleTitles = [
  {title: 'Test Movie 1', movie_id: 1},
  {title: 'Test Movie 2', movie_id: 2},
  {title: 'Test Movie 3', movie_id: 3},
  {title: 'Test Movie 4', movie_id: 4},

];

const app = mount(<DropList titles={sampleTitles} />);

describe('DropList Component', () => {
  it('renders', () => {
    expect(app.exists()).toBeTruthy();
  });
});