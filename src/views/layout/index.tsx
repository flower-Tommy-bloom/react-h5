import React from 'react';
import './index.less';
import GlobalContext from '@src/common/global-context';
import { RouteComponentProps } from 'react-router';
import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';
import { Switch } from 'react-router-dom';
import { renderAllRoutes } from '@routes/route-loader';

import { ISider, IHeader } from './components';

import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
const { Content } = Layout;

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
/**
 * 组件派发 action 集合的类型声明
 */
type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>;

/**
 * 组件最终接收的所有 Props 类型声明
 */
type houseProps = RouterProps &
    MapStateFromStoreProps &
    ComponentDispatchProps & {
        routes?: any;
        count?: number;
    };

type houseState = {
    collapsed?: boolean;
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Index extends React.Component<houseProps, houseState> {
    static contextType = GlobalContext;
    constructor(props, context) {
        super(props, context);
        this.state = {
            collapsed: false,
        };
    }

    render() {
        const routes = renderAllRoutes(this.props.routes);
        return (
            <div className="house">
                <Layout style={{ minHeight: '100vh' }}>
                    <IHeader {...this.props} />
                    <Layout>
                        <ISider {...this.props} />
                        <Layout style={{ padding: '0' }}>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Switch>{routes}</Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
