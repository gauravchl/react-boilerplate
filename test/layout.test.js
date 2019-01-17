import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import Layout from 'layout.jsx';


spy(Layout.prototype, 'render');

describe('<Layout />', () => {
  it('calls render', () => {
    const wrapper = shallow(<Layout />);
    expect(Layout.prototype.render).to.have.property('callCount', 1);
  });
});
