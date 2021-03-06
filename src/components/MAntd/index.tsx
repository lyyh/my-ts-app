import * as React from 'react'
import MAntdButton from './Button'
import MAntdIcon from './Icon'
import Input from './Input'

const MAntdButtonGroup = MAntdButton.Group

// 编写测试组件

const getMButton = () => {
    return <MAntdButton>测试</MAntdButton>
}

const getMButtonGroup = () => {
    return (
        <MAntdButtonGroup>
            <MAntdButton>测试1</MAntdButton>
            <MAntdButton>测试2</MAntdButton>
            <MAntdButton>测试3</MAntdButton>
        </MAntdButtonGroup>
    )
}

const getMIcon = () => {
    return (
        <MAntdIcon type={'link'} spin={true}/>
    )
}

const getMInput = () => {
    return (
        <Input value={'123'}/>
    )
}
// export
export const MButton = getMButton()
export const MButtonGroup = getMButtonGroup()
export const MIcon = getMIcon()
export const MInput = getMInput()
