import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

// 事件监听器类型 React.MouseEventHandler
// 节点样式类型 React.CSSProperties
export interface IconProps {
    type: string;
    className?: string;
    title?: string;
    onClick?: React.MouseEventHandler<object>;
    spin?: boolean;
    style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
    const { type, className = '', spin } = props;
    const classString = classNames(
        {anticon: true, 'anticon-spin': !!spin || type === 'loading', [`anticon-${type}`]: true},
        className);
    return <i {...omit(props, ['type', 'spin'])} className={classString} />;
};

export default Icon;
