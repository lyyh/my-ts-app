import * as React from 'react'

export interface P {
    helloString: string
    num: number
}

const MyDecorator = () => {
    // target 表示 MAHello React组件类，所以类型为object
    return (target: object, key: string, descriptor: TypedPropertyDescriptor<Function>) => {
        let fn = descriptor.value
        if (fn) {
            fn()
        }
    }
}

class MAHello extends React.Component<P, object> {
    @MyDecorator()
    callDecorator(value: number) {
        value++
    }
    render() {
        return(
            <div>
                {this.props.helloString}
            </div>
        )
    }
}

export default MAHello
