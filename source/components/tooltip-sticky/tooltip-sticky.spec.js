import '../../../internals/test/helper';

import TooltipSticky from './tooltip-sticky-component';

/** @test {TooltipSticky} */
describe('TooltipSticky component', () => {
  /** @test {TooltipSticky#render} */
  describe('#render', () => {
    let wrapper;
    const props = {
      body: <div>conteúdo do body!</div>,
      test: jest.fn(),
    };

    beforeAll(() => {
      global.innerWidth = 1920;
      global.dispatchEvent(new Event('resize'));
    })

    beforeEach(() => {
      jest.spyOn(TooltipSticky.prototype, 'onMouseOver');
      jest.spyOn(TooltipSticky.prototype, 'getTooltipPosition');
      jest.spyOn(TooltipSticky.prototype, 'hideTooltip');
      jest.spyOn(TooltipSticky.prototype, 'clearTimeout');

      wrapper = shallow(
        <TooltipSticky {...props} />
      );
      const selectedInput = 'elemShowTooltip';
      wrapper.instance()[selectedInput] = {
        current: {
          getBoundingClientRect: () => {
            return {
              x: 100,
              y: 100,
              width: 100,
              height: 100,
            }
          },
        }
      }
    });

    it('should render child content', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should call tooltip mouseover', () => {
      wrapper.find('span').at(1).simulate('mouseover');
      expect(TooltipSticky.prototype.clearTimeout).toHaveBeenCalled();
      expect(TooltipSticky.prototype.onMouseOver).toHaveBeenCalled();
      expect(TooltipSticky.prototype.getTooltipPosition).toHaveBeenCalled();

      const expectedState = {
        classPosition: '',
        show: true ,
        position: {
          left: '85px',
          top: '215px'
        },
        posX: 'left',
        posY: 'bottom'
      }
      expect(wrapper.state()).toEqual(expectedState);

      expect(wrapper.find('.tooltip')).toBeTruthy();
    });

    it('should correctly position tooltip when showOnSide is true', () => {
      wrapper = shallow(
        <TooltipSticky {...{...props, showOnSide: true}} />
      );

      const selectedInput = 'elemShowTooltip';
      wrapper.instance()[selectedInput] = {
        current: {
          getBoundingClientRect: () => {
            return {
              x: 100,
              y: 100,
              width: 355,
              height: 100,
            }
          },
        }
      }

      wrapper.find('span').at(1).simulate('mouseover');

      const expectedState = {
        classPosition: '',
        show: true ,
        position: {
          left: '455px',
          top: '85px'
        },
        posX: 'left',
        posY: 'top'
      }
      expect(wrapper.state()).toEqual(expectedState);
      expect(wrapper.find('.tooltip')).toBeTruthy();
    })

    it('should call hideTooltip on mouseout', () => {
      wrapper.find('span').at(1).simulate('mouseout');
      expect(TooltipSticky.prototype.hideTooltip).toHaveBeenCalled();

      const expectedState = {
        classPosition: '',
        show: false,
        position: {},
        posX: undefined,
        posY: undefined
      }
      expect(wrapper.state()).toEqual(expectedState);

      expect(wrapper.find('.tooltip').exists()).toBe(false);
    });


    describe('should correct horizontal position while in mobile', () => {
      let wrapper;
      const props = {
        body: <div>conteúdo do body!</div>,
        test: jest.fn(),
      };

      global.innerWidth = 480;
      global.dispatchEvent(new Event('resize'));

      wrapper = shallow(
        <TooltipSticky {...props} />
      );

      const selectedInput = 'elemShowTooltip';
      wrapper.instance()[selectedInput] = {
        current: {
          getBoundingClientRect: () => {
            return {
              x: -10,
              y: 100,
              width: 210,
              height: 100,
            }
          },
        }
      }

      it('should use minimun value at left when x is negative', () => {
        wrapper.find('span').at(1).simulate('mouseover');

        const expectedState = {
          classPosition: '',
          show: true ,
          position: {
            left: '10px',
            top: '215px'
          },
          posX: 'left',
          posY: 'bottom'
        }
        expect(wrapper.state()).toEqual(expectedState);

        expect(wrapper.find('.tooltip')).toBeTruthy();
      })

      it('when tooltip overflow screen at right, should subtract the overflow size and the minimun value from x', () => {
        wrapper.instance()[selectedInput] = {
          current: {
            getBoundingClientRect: () => {
              return {
                x: 300,
                y: 100,
                width: 210,
                height: 100,
              }
            },
          }
        }
        wrapper.find('span').at(1).simulate('mouseover');

        const expectedState = {
          classPosition: '',
          show: true ,
          position: {
            left: '470px',
            top: '215px'
          },
          posX: 'right',
          posY: 'bottom'
        }
        expect(wrapper.state()).toEqual(expectedState);

        expect(wrapper.find('.tooltip')).toBeTruthy();
      })

      it('should not position on side in mobile screens', () => {
        global.innerWidth = 480;
        global.dispatchEvent(new Event('resize'));

        wrapper = shallow(
          <TooltipSticky {...{...props, showOnSide: true}} />
        );

        const selectedInput = 'elemShowTooltip';
        wrapper.instance()[selectedInput] = {
          current: {
            getBoundingClientRect: () => {
              return {
                x: 100,
                y: 100,
                width: 355,
                height: 100,
              }
            },
          }
        }

        wrapper.find('span').at(1).simulate('mouseover');

        const expectedState = {
          classPosition: '',
          show: true ,
          position: {
            left: '85px',
            top: '215px'
          },
          posX: 'left',
          posY: 'bottom'
        }
        expect(wrapper.state()).toEqual(expectedState);
        expect(wrapper.find('.tooltip')).toBeTruthy();
      })
    })

    it('should call cleatTimeOut on componentWillUnmount', () => {
      wrapper.instance().componentWillUnmount();
      expect(TooltipSticky.prototype.clearTimeout).toHaveBeenCalled();
    })
  });
});
