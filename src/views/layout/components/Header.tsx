import React from 'react';

import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Header } = Layout;
/**
 * 组件最终接收的所有 Props 类型声明
 */
type IHeaderProps = {
    baseImgUrl?: string;
};

type IHeaderState = {
    collapsed?: boolean;
};

export default class IHeader extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1st menu item
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2nd menu item
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        3rd menu item
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <Header className="header">
                    <div className="header__logo">
                        <img src={this.props.baseImgUrl + 'logo.svg'} alt="" />
                    </div>
                    <div className="header__user">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                welcome tommmy <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                </Header>
            </div>
        );
    }
}
