import React from 'react';
import { shallow } from 'enzyme';
import logger from '@commercetools-local/utils/logger';
import { VersionCheckSubscriber } from './version-check-subscriber';

const createTestProps = props => ({
  fetchServerVersion: jest.fn(),
  clientVersion: '123',
  ...props,
});

jest.mock('@commercetools-local/utils/logger');

describe('rendering', () => {
  let wrapper;
  beforeEach(() => {
    const props = createTestProps();
    wrapper = shallow(<VersionCheckSubscriber {...props} />);
  });
  it('should render nothing', () => {
    expect(wrapper.type()).toBe(null);
  });
});

describe('lifecycle', () => {
  let props;
  let wrapper;
  describe('componentDidMount', () => {
    describe('if env is development', () => {
      const currentEnv = process.env.NODE_ENV;
      beforeEach(() => {
        process.env.NODE_ENV = 'development';
        props = createTestProps();
        wrapper = shallow(<VersionCheckSubscriber {...props} />);
        wrapper.instance().componentDidMount();
      });
      afterEach(() => {
        process.env.NODE_ENV = currentEnv;
      });
      it('should do nothing', () => {
        expect(props.fetchServerVersion).toHaveBeenCalledTimes(0);
      });
    });
    describe('if env is not development', () => {
      beforeEach(() => {
        logger.info.mockReset();
      });
      describe('if deployed version is the same as the one in the browser', () => {
        beforeEach(() => {
          jest.useFakeTimers();
          props = createTestProps({
            fetchServerVersion: jest.fn((url, callback) =>
              callback(null, { revision: '123' })
            ),
            clientVersion: '123',
          });
          wrapper = shallow(<VersionCheckSubscriber {...props} />);
          wrapper.instance().componentDidMount();
          jest.runOnlyPendingTimers();
        });
        it('should not notify', () => {
          expect(logger.info).toHaveBeenCalledTimes(0);
        });
        it('should assign interval reference into component instance', () => {
          expect(wrapper.instance().poll).toBeDefined();
        });
      });
      describe('if deployed version is different then the one in the browser', () => {
        beforeEach(() => {
          jest.useFakeTimers();
          props = createTestProps({
            fetchServerVersion: jest.fn((url, callback) =>
              callback(null, { revision: '456' })
            ),
            clientVersion: '123',
          });
          wrapper = shallow(<VersionCheckSubscriber {...props} />);
          wrapper.instance().componentDidMount();
          jest.runOnlyPendingTimers();
        });
        it('should notify', () => {
          expect(logger.info).toHaveBeenCalledWith(
            'New version available, please reload the page'
          );
        });
        it('should assign interval reference into component instance', () => {
          expect(wrapper.instance().poll).toBeDefined();
        });
      });
    });
  });
  describe('componentWillUnmount', () => {
    describe('if env is development', () => {
      const currentEnv = process.env.NODE_ENV;
      beforeEach(() => {
        jest.useFakeTimers();
        process.env.NODE_ENV = 'development';
        props = createTestProps();
        wrapper = shallow(<VersionCheckSubscriber {...props} />);
        wrapper.instance().poll = 'foo';
        wrapper.instance().componentWillUnmount();
      });
      afterEach(() => {
        process.env.NODE_ENV = currentEnv;
      });
      it('should do nothing', () => {
        expect(clearInterval).toHaveBeenCalledTimes(0);
      });
    });
    describe('if env is not development', () => {
      beforeEach(() => {
        jest.useFakeTimers();
        props = createTestProps();
        wrapper = shallow(<VersionCheckSubscriber {...props} />);
        wrapper.instance().poll = 'foo';
        wrapper.instance().componentWillUnmount();
      });
      it('should clear the interval', () => {
        expect(clearInterval).toHaveBeenCalledWith('foo');
      });
    });
  });
});
