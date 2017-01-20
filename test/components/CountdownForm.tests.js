import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CountdownForm from '../../app/components/CountdownForm';

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).to.exist;
  });
  it('should call onSetCountdown if valid seconds entered', () => {
    const spy = sinon.spy();
    const countDownForm = shallow(<CountdownForm onSetCountdown={spy}/>)

    countDownForm.find('input').simulate('change', {target: {value: '109'}})
    countDownForm.find('form').simulate('submit', { preventDefault(){} })

    expect(spy.calledWith(109)).to.be.true;
    expect(countDownForm.find('input').prop('value'), '');

  });
});
