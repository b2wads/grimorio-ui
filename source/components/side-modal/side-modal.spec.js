import '../../../internals/test/helper';

import SideModal from './side-modal-component';

describe('SideModal component', () => {
  let wrapper;

  beforeEach(() => {
    jest.spyOn(SideModal.prototype, 'getStyles');
    jest.spyOn(SideModal.prototype, 'getCustomPositions');
    jest.spyOn(SideModal.prototype, 'getCustomSizes');
    wrapper = shallow(
      <SideModal />
    );
  })
  it('render correctly with position right', () => {
    expect(wrapper.find('.right')).toHaveLength(1);
  });

  it('render correctly with position left', () => {
    wrapper.setProps({position: 'left'});
    expect(wrapper.find('.left')).toHaveLength(1);
  });

  it('render correctly with position top', () => {
    wrapper.setProps({position: 'top'});
    expect(wrapper.find('.top')).toHaveLength(1);
  });

  it('render correctly with position bottom', () => {
    wrapper.setProps({position: 'bottom'});
    expect(wrapper.find('.bottom')).toHaveLength(1);
  });

  it('should call getStyles', () => {
    expect(SideModal.prototype.getStyles).toHaveBeenCalled();
  });

  it('should call getCustomPositions', () => {
    expect(SideModal.prototype.getCustomPositions).toHaveBeenCalled();
  });

  it('should call getCustomSizes', () => {
    expect(SideModal.prototype.getCustomSizes).toHaveBeenCalled();
  });

  it('should set custom width', () => {
    const width = 50;
    wrapper.setProps({width: `${width}%`});
    const selector = wrapper.find('.content').at(0).prop('style');
    expect(selector.width).toEqual(`${width}%`);
    expect(selector.right).toEqual(`-${width}%`)
  });

  it('should set custom height', () => {
    const height = 50;
    const position = 'top';
    wrapper.setProps({height: `${height}%`, position});
    const selector = wrapper.find('.content').at(0).prop('style');
    expect(selector.height).toEqual(`${height}%`);
    expect(selector[position]).toEqual(`-${height}%`)
  });

  it('should set custom top distance', () => {
    const top = 50;
    wrapper.setProps({top});
    const selector = wrapper.find('.content').at(0).prop('style');
    expect(selector.height).toEqual(`calc(100vh - ${top}px)`);
    expect(selector.top).toEqual(`${top}px`);
  });

  it('should set custom bottom distance', () => {
    const bottom = 50;
    wrapper.setProps({bottom});
    const selector = wrapper.find('.content').at(0).prop('style');
    expect(selector.height).toEqual(`calc(100vh - ${bottom}px)`);
    expect(selector.bottom).toEqual(`${bottom}px`);
  });

  it('side distance should be 0, when modal is open', () => {
    const width = 50;
    wrapper.setProps({width: `${width}%`, open: true});
    const selector = wrapper.find('.content').at(0).prop('style');
    expect(selector.right).toEqual('0px');
  });

  it('bottom/top distance should be 0, when modal is open', () => {
    const height = 50;
    const position = 'top';
    wrapper.setProps({height: `${height}%`, position, open:true});
    const selector = wrapper.find('.content').at(0).prop('style');
    expect(selector[position]).toEqual('0px');
  });
});
