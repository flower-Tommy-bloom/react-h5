import React from 'react';
import { renderAllRoutes } from '@routes/route-loader';
import { Switch } from 'react-router-dom';
/**
 * 组件最终接收的所有 Props 类型声明
 */
type houseProps = {
    routes?: any;
};
export default class Vip extends React.Component<houseProps> {
    render() {
        const routes = renderAllRoutes(this.props.routes);
        console.log('routes', routes);
        return (
            <div className="vip">
                <Switch>{routes}</Switch>
            </div>
        );
    }
}
