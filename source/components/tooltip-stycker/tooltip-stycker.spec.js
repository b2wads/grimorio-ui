import '../../../internals/test/helper';

import TooltipStycker from './tooltip-stycker-component';

/** @test {TooltipStycker} */
describe('TooltipStycker component', () => {
  /** @test {TooltipStycker#render} */
  describe('#render', () => {
    let wrapper;
    const props = {
      body: <div>conteúdo do body!</div>,
      test: jest.fn(),
    };

    beforeEach(() => {
      jest.spyOn(TooltipStycker.prototype, 'onMouseOver');
      jest.spyOn(TooltipStycker.prototype, 'hideTooltip');
      jest.spyOn(TooltipStycker.prototype, 'clearTimeout');

      wrapper = shallow(
        <TooltipStycker {...props} />
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
      expect(wrapper).toMatchSnapshot();
    });

    it('should call tooltip mouseover', () => {
      wrapper.find('span').simulate('mouseover');
      expect(TooltipStycker.prototype.clearTimeout).toHaveBeenCalled();
      expect(TooltipStycker.prototype.onMouseOver).toHaveBeenCalled();
    });

    it('should call hideTooltip on mouseout', () => {
      wrapper.find('span').simulate('mouseout');
      expect(TooltipStycker.prototype.hideTooltip).toHaveBeenCalled();
    });

    it('should call cleatTimeOut on componentWillUnmount', () => {
      wrapper.instance().componentWillUnmount();
      expect(TooltipStycker.prototype.clearTimeout).toHaveBeenCalled();
    })
  });
});
