import React from 'react';
import { mount } from 'enzyme';
import CommetBox from 'components/CommentBox';

it('has a text area and a button',() => {
  const wrapped = mount(<CommetBox />);

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})