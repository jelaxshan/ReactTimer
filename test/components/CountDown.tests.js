import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Countdown from '../../app/components/CountDown';
import TestUtils from 'react-addons-test-utils';


function render(component) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(component);
  return shallowRenderer.getRenderOutput();
}

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).to.exist;
  });
});

describe('handleSetCountdown', () => {
  it('should set state to started and countdown', () => {
    
    const spy = sinon.spy();
    const component = render(<Countdown handleSetCountdown={10}/>);

    //countdown.find('input').simulate('change', {target: {value: '109'}})
    //countDownForm.find('form').simulate('submit', { preventDefault(){} })

    //expect(spy.calledWith(10)).to.be.true;
    //expect(countDownForm.find('input').prop('value'), '');


    //expect(countdown.state.count).to.equal(10);
    //expect(countdown.state.countdownStatus).to.be.true;
  });
});