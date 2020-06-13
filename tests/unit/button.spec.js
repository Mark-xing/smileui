import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/packages/Button.vue'
import Icon from '@/packages/Icon.vue'
describe('Button.vue', () => {  //划分作用域
  it('测试button能否正常限时slot中的内容', () => {  //相等 不等 是否包含
   const wrapper =  shallowMount(Button,{
      slots:{
        default:'zf-ui'
      }
    })
    expect(wrapper.text()).to.equal('zf-ui');
  })
  it('测试icon传入的是否显示正常',()=>{
    const wrapper = shallowMount(Button,{
      stubs:{  //替换功能
        'zf-icon':Icon
      },
      propsData:{
        icon:"sousuo"
      }
    })
    expect(wrapper.find("use").attributes('href')).to.eq('#icon-sousuo');
  })
  it("按钮传入position是否正常显示",()=>{
    const wrapper = shallowMount(Button,{
        attachToDocument:true, //在浏览器上测试
        stubs:{  //替换功能
          'zf-icon':Icon
        },
        slots:{
          default:"zf-ui"
        },
        propsData:{
          iconPosition:"left",
          icon:"sousuo"
        }
    })
    let ele = wrapper.vm.$el.querySelector('span');
    expect(getComputedStyle(ele).order).to.eq('2');
    wrapper.setProps({iconPosition:'right'});
    //设置props 必须要在下一个事件环中取值
    return wrapper.vm.$nextTick().then(()=>{
      expect(getComputedStyle(ele).order).to.eq('1');
    })
  })
  it('测试按钮能否正常点击',()=>{
    const wrapper = shallowMount(Button,{})
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click').length).to.eq(1);
  })
})
