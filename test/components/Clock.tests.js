import { expect } from 'chai';
import Clock from '../../app/components/Clock';
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
 
describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).to.exist;
  });
});

describe('formatSeconds', () => {
  it('should format seconds', () => {
    const clock = shallow(<Clock/>);
    const seconds = 615;
    const expected = '10 : 15';
    const actual = clock.instance().formatSeconds(seconds)

    expect(actual).to.equal(expected);
  });
  it('should format seconds when min/sec are less than 10', () => {
    const clock = shallow(<Clock/>);
    const seconds = 61;
    const expected = '01 : 01';
    const actual = clock.instance().formatSeconds(seconds)

    expect(actual).to.equal(expected);
  });
});