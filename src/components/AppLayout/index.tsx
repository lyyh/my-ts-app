import * as React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { MButton, MButtonGroup, MIcon, MInput } from '../MAntd';
import { CusButtonGroup } from '../MAntd/custom-index';
import { Example, ExampleWr } from '../Example'
// import Hello from '../Hello'
import Foo from '../Foo/Foo'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export interface AppLayoutProps {}

class AppLayout extends React.Component<AppLayoutProps, object> {
    state = {
        selectedKey: 'icon'
    }
    handleSwitchMenu = (target: any) => {
        const {key} = target
        this.setState({
            selectedKey: key
        })
    }
    MenuController = (key) => {
        switch (key) {
            case 'foo':
                return <Foo/>
            case 'icon':
                return MIcon
            case 'button':
                return MButton
            case 'buttonGroup':
                return MButtonGroup
            case 'input':
                return MInput
            case 'cusButtonGroup':
                return CusButtonGroup
            case 'example':
                return Example
            case 'exampleWrapper':
                return ExampleWr
            default:
                return MIcon
        }
    }
    render() {
        const {selectedKey} = this.state
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.handleSwitchMenu}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />基础组件</span>}>
                                <Menu.Item key="icon">Icon</Menu.Item>
                                <Menu.Item key="button">Button</Menu.Item>
                                <Menu.Item key="buttonGroup">ButtonGroup</Menu.Item>
                                <Menu.Item key="input">input</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />自定义组件</span>}>
                                <Menu.Item key="cusButtonGroup">ButtonGroup</Menu.Item>
                                <Menu.Item key="example">example</Menu.Item>
                                <Menu.Item key="exampleWrapper">exampleWrapper</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />typescript</span>}>
                                <Menu.Item key="foo">类型注解</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            {
                                this.MenuController(selectedKey)
                            }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default AppLayout
