import '../../../internals/test/helper';

import Breadcrumb from './breadcrumb-component';

/** @test {Breadcrumb} */
describe('Breadcrumb component', () => {
  const emptyProps = {
    path: undefined,
    home: undefined,
    onClick: undefined,
    className: undefined,
    onItemClick: undefined,
  }

  let wrapper
  beforeAll(() => {
    wrapper = shallow(
      <Breadcrumb {...emptyProps} />
    );
  })

  describe('#render', () => {
    it('should contains className props', () => {
      const className = 'classeTeste'
      wrapper.setProps({ ...emptyProps, className })
      expect(wrapper.find(`.${className}`)).toHaveLength(1);
    })

    it('when list length is bigger than one', () => {
      const path = 'department/my-amazing-category'
      wrapper.setProps({ ...emptyProps, home: false, path })
      expect(wrapper.debug()).toMatchSnapshot();
    })

    it('when list length is equal one', () => {
      const path = 'department'
      wrapper.setProps({ ...emptyProps, home: false, path })
      expect(wrapper.debug()).toMatchSnapshot();
    })
  });

  describe('call generatePageList', () => {
    it('return list when is NOT home', () => {
      const path = 'department/my-amazing-category'
      wrapper.setProps({ ...emptyProps, home: false, path })
      const resp = wrapper.instance().generatePageList()
      const list = [
        {
          "name": "department",
          "path": "/department",
        },
        {
          "name": "my amazing category",
          "path": "/department/my-amazing-category",
        },
      ]
      expect(resp).toEqual(list);
    });
    it('return list when is home', () => {
      const path = 'department/my-amazing-category'
      wrapper.setProps({ ...emptyProps, home: true, path })
      const resp = wrapper.instance().generatePageList()
      const list = [
        {
          name: true,
          path: "/"
        },
        {
          name: "department",
          path: "/department",
        },
        {
          name: "my amazing category",
          path: "/department/my-amazing-category",
        },
    ]
      expect(resp).toEqual(list);
    })
  })

  it('when click on item', () => {
    const path = 'department/my-amazing-category'
    const props = {
      onItemClick: jest.fn()
    }
    const spy = jest.spyOn(props, 'onItemClick')
    wrapper.setProps({ ...emptyProps, home: false, path, onItemClick: props.onItemClick })

    wrapper.find('span').at(0).props().onClick()
    expect(spy).toHaveBeenCalledWith('/department');
  })
});
