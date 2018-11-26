// mixin例子，比较HOC(高阶组件)与mixin的好坏
import * as React from 'react'
import { decorate as mixin } from 'react-mixin'

export interface ExampleProps {
    num?: number
}

const mixinMount = {
    componentWillMount() {
        console.log('mixin will mount')
    },
    handleClick: () => {
        console.log('mixin handle click')
    },
    defaultProps: {
        count: '123'
    }
}

const mixinMountTwo = {
    componentWillMount() {
        console.log('mixin will mount two')
    },
}

// 装饰器按照先后顺序执行
@mixin(mixinMount)
@mixin(mixinMountTwo)
class ExampleComponent extends React.Component<ExampleProps, object> {
    static defaultProps = {
        num: '123'
    }
    ipt
    componentWillMount() {
        console.log(this.props.num)
        console.log('component will mount')
    }
    hanldeClick = () => {
        console.log('component handle click')
    }
    handleSubmit = (e) => {
        console.log('value is ' + this.ipt.value)
        e.preventDefault()
    }
    isReactElement = (el) => {
        if (React.isValidElement(el)) {
            console.log('valid')
        } else {
            console.log('invalid')
        }
    }
    renderSubmitButton =  () => {
        const child = React.createElement('button', {type: 'subimt'}, <span>提交</span>)
        this.isReactElement(child)
        return React.cloneElement(child, {type: 'submit'}, <i>提交</i>)
    }
    render() {
        console.log(this.props.num)
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor={'form-ipt'}>Name</label>
                    <input defaultValue="Bob" id="form-ipt" type="text" ref={(ipt) => this.ipt = ipt}/>
                </div>
                {this.renderSubmitButton()}
            </form>
        )
    }
}

export const Example = <ExampleComponent/>

// HOC 的属性代理
const WrapperExample = (ExampleComponent) =>
    class extends React.Component {
        render() {
            const nextProps = {
                num: 123
            }
            return <ExampleComponent {...nextProps}/>
        }
    }

const ExampleWrapper = WrapperExample(ExampleComponent)
export const ExampleWr = <ExampleWrapper/>
