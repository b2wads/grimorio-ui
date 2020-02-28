import '../../../internals/test/helper';
jest.mock('../svg')
import Modal from './modal-component';
import Button from '../button';

/** @test {Modal} */
describe('Modal component', () => {

  const emptyProps = {
    children: undefined,
    open: undefined,
    showClose: undefined,
    closeOnOverlay: undefined,
    type: undefined,
    confirmInverted: undefined,
    showButton: undefined,
    innerPadding: undefined,
    message: undefined,
    confirmButtonText: undefined,
    cancelButtonText: undefined,
    onClose: undefined,
    onConfirm: undefined,
  }

  let wrapper
  beforeAll(() => {
    wrapper = shallow(
      <Modal {...emptyProps} />
    );
  })

  describe('#render', () => {
    it('should render modal with children', () => {
      wrapper.setProps({ ...emptyProps, children: <div>teste com filho</div> })
      expect(wrapper.html()).toMatchSnapshot();
    });

    describe('render success modal', () => {

      beforeAll(() => {
        wrapper.setProps({
          ...emptyProps,
          type: 'success',
          message: 'mensagem do modal de sucesso',
        })
      })
      
      it('should render right', () => {
        expect(wrapper.html()).toMatchSnapshot();
      })

      it('when receives showButton props, button should call function onClose onClick', () => {
        const props = {
          onClose: jest.fn()
        }
        const spy = jest.spyOn(props, 'onClose')
        wrapper.setProps({showButton: true, onClose: props.onClose})
        wrapper.find('.actions').find(Button).props().onClick()
      expect(spy).toHaveBeenCalled()
      })
      
    });

    describe('render fail modal', () => {

      beforeAll(() => {
        wrapper.setProps({
          ...emptyProps,
          type: 'fail',
          message: 'Ops, algo deu errado :(',
        })
      })
      
      it('should render right', () => {
        expect(wrapper.html()).toMatchSnapshot();
      })

      it('when receives showButton props, button should call function onClose onClick', () => {
        const props = {
          onClose: jest.fn()
        }
        const spy = jest.spyOn(props, 'onClose')
        wrapper.setProps({showButton: true, onClose: props.onClose})
        wrapper.find('.actions').find(Button).props().onClick()
      expect(spy).toHaveBeenCalled()
      })
    });

    describe('should render confirm modal', () => {
     
      beforeAll(() => {
        wrapper.setProps({
          ...emptyProps,
          type: 'confirm',
          message: 'Mensagem do modal de confirm',
          confirmButtonText: 'Tenho certeza'
        })
      })
      
      it('should render right', () => {
        expect(wrapper.html()).toMatchSnapshot();
      })

      it('should call function onClose onClick button close', () => {
        const props = {
          onClose: jest.fn()
        }
        const spy = jest.spyOn(props, 'onClose')
        wrapper.setProps({onClose: props.onClose})
        wrapper.find('.actions').find(Button).at(0).props().onClick()
        expect(spy).toHaveBeenCalled()
      })

      it('should call function onConfirm onClick button close', () => {
        const props = {
          onConfirm: jest.fn()
        }
        const spy = jest.spyOn(props, 'onConfirm')
        wrapper.setProps({onConfirm: props.onConfirm})
        wrapper.find('.actions').find(Button).at(1).props().onClick()
        expect(spy).toHaveBeenCalled()
      })
    });

    describe('when receives showClose props', () => {
      let spy
      beforeAll(() => {
        const props = {
          onClose: jest.fn()
        }
        spy = jest.spyOn(props, 'onClose')
        wrapper.setProps({
          ...emptyProps,
          showClose: true,
          onClose: props.onClose
        })
      })
      
      it('should render icon to close', () => {
        expect(wrapper.find('.close')).toHaveLength(1);
      })
      it('should call onClose props when clicks on icon close', () => {
        wrapper.find('.close').props().onClick()
        expect(spy).toHaveBeenCalled();
      })
    })

    it('When receives closeOnOverlay props, should call onClose function', () => {
      const props = {
        onClose: jest.fn()
      }
      const spy = jest.spyOn(props, 'onClose')
      wrapper.setProps({
        ...emptyProps,
        closeOnOverlay: true,
        onClose: props.onClose
      })
      wrapper.find('.overlay').simulate('click')
      expect(spy).toHaveBeenCalled();
    })
  });
});
