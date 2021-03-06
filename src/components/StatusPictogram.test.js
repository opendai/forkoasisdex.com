/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';
import { shallow } from 'enzyme';
import StatusPictogram from './StatusPictogram';


describe('(Component) StatusPictogram', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <StatusPictogram {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
