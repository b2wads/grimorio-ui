import '../../../internals/test/helper';

import Slider from './slider-component';

const initialProps = {
  className: 'classnameslider',
  slideClassName: 'slideclassname',
  wrapperClassName: 'wrapperclassname'
 };

/** @test {Slider} */
describe('Slider component', () => {
/** @test {Slider#render} */
  describe('#render', () => {
    let wrapper

    beforeAll(() => {
      wrapper = shallow(
        <Slider {...initialProps}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </Slider>
      );
    })

    it('render default', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });

    describe('render with arrow', () => {
      let instance;
      beforeAll(() => {
        wrapper.setProps({
          arrows: true,
          arrowClassName: 'arrowclassname',
          arrowsGAConfig: {
            category: 'categoria',
            action: 'ação',
            label: 'rótulo'
          }
        })

        instance = wrapper.instance();
      })

      it('Should render correctly with arrows', () => {
        expect(wrapper.debug()).toMatchSnapshot();
      });

      it('should call prevSlide when click on left arrow', () => {
        jest.spyOn(instance, 'prevSlide');
        wrapper.find('.arrowLeft').simulate('click');
        expect(instance.prevSlide).toHaveBeenCalled();

        //after slide changes
        expect(wrapper.debug()).toMatchSnapshot();
      })

      it('should call nextSlide when click on right arrow', () => {
        jest.spyOn(instance, 'nextSlide');
        wrapper.find('.arrowRight').simulate('click');
        expect(instance.nextSlide).toHaveBeenCalled();

        //after slide changes
        expect(wrapper.debug()).toMatchSnapshot();
      })
    })

    describe('render with dots', () => {
      let instance;
      beforeAll(() => {
        wrapper.setProps({
          dots: true,
          dotsClassName: 'dotsclassname',
          dotsBackground: true,
          dotsGAConfig: {
            category: 'categoria',
            action: 'ação',
            label: 'rótulo'
          }
        })

        instance = wrapper.instance();
      })

      it('Should render correctly with dots', () => {
        expect(wrapper.debug()).toMatchSnapshot();
      });

      it('should call goTo with correct param when click on specific dot', () => {
        jest.spyOn(instance, 'goTo');
        wrapper.find('.dotsBtn').at(3).simulate('click');
        expect(instance.goTo).toHaveBeenCalledWith(2);

        //after slide changes
        expect(wrapper.debug()).toMatchSnapshot();

        wrapper.find('.dotsBtn').at(1).simulate('click');
        expect(instance.goTo).toHaveBeenCalledWith(0);

        //after slide changes
        expect(wrapper.debug()).toMatchSnapshot();
      })
    })
  });
});
