import * as React from 'react';

// 工具泛型的使用方法
const options = {
    a: 1
};
type opt = typeof options

export interface P {
    // onClick(e: React.MouseEvent<HTMLDivElement>): void
    onClick: React.MouseEventHandler<HTMLDivElement>,
}
// 将所有值变成可选值
const Button: React.SFC<Partial<P>> = ({onClick, children}) => {
    return (
        <div onClick={onClick}>
            {children}
        </div>
    );
};
const Button1: React.SFC<Required<P>> = ({onClick, children}) => {
    return (
        <div onClick={onClick}>
            {children}
        </div>
    );
};
export default class FooComp extends React.Component<P> {
    testOptionsT() {
        const a: opt = {a: 1};
        console.log(a);
    }

    componentDidMount() {
        this.testOptionsT();
    }

    render() {
        const {
            onClick,
        } = this.props;
        return (
            <div onClick={onClick}>
                <Button>this is a SFC button</Button>
                <Button1 onClick={() => 1}>this is a SFC button1</Button1>
            </div>
        );
    }
}
