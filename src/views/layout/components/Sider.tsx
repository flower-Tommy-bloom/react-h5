import React from 'react';
import { RootDispatch, RootState } from '@src/store';
import { RouteComponentProps } from 'react-router';
import { connect } from '@store/connect';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

function mapStateToProps(state: RootState) {
    const {
        global: { baseImgUrl },
    } = state;
    return { baseImgUrl };
}

function mapDispatchToProps(dispatch: RootDispatch) {
    const { login } = dispatch;
    return {
        increment: login.INCREMENT,
        decrement: login.decrement,
    };
}
/**
 * 路由参数 Props 类型声明
 */
type RouterProps = RouteComponentProps<any>;

/**
 * 映射状态（从 store 中获取某些状态并传递给当前组件）类型声明
 */
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>;

type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>;

/**
 * 组件最终接收的所有 Props 类型声明
 */
type ISiderProps = RouterProps & {
    routes?: any;
    count?: number;
    history?: {};
};

type ISiderState = {
    collapsed?: boolean;
};

export default class ISider extends React.Component<ISiderProps, ISiderState> {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    };
    handleLinkClick = path => {
        this.props.history.push(path);
    };

    render() {
        return (
            <div>
                <Sider
                    width={200}
                    className="site-layout-background"
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    {/**
                     * Menu 的key是使用了path，默认展开defaultOpenKeys，默认选中defaultSelectedKeys，需要获取当前的url来动态默认选钟
                     */}
                    <Menu
                        defaultOpenKeys={[this.props.location.pathname.replace(/\/[a-z]+$/, '')]}
                        defaultSelectedKeys={[this.props.location.pathname]}
                        mode="inline"
                    >
                        {this.props.routes &&
                            this.props.routes.map((v, k) => {
                                return v.routes ? (
                                    <SubMenu
                                        key={v.path}
                                        title={
                                            <span>
                                                <UserOutlined />
                                                <span>{v.name}</span>
                                            </span>
                                        }
                                    >
                                        {v.routes &&
                                            v.routes.map((item, index) => (
                                                <Menu.Item
                                                    onClick={this.handleLinkClick.bind(
                                                        this,
                                                        item.path,
                                                    )}
                                                    key={item.path}
                                                >
                                                    {item.name}
                                                </Menu.Item>
                                            ))}
                                    </SubMenu>
                                ) : (
                                    <Menu.Item
                                        onClick={this.handleLinkClick.bind(this, v.path)}
                                        key={v.path}
                                    >
                                        <UserOutlined />
                                        <span>{v.name}</span>
                                    </Menu.Item>
                                );
                            })}
                    </Menu>
                </Sider>
            </div>
        );
    }
}
