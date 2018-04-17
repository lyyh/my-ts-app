import * as React from 'react'
import './index.css'

class ButtonGroup extends React.Component {
    render () {
        return (
            <div className={'btn-group'}>
                <button className={'btn'}>1</button>
                <button className={'btn'}>2</button>
                <button className={'btn'}>3</button>
            </div>
        )
    }
}

export default ButtonGroup
