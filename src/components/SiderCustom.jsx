/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: ''
    };
    componentDidMount() {
        this.setMenuOpen(this.props);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps)
    }
    setMenuOpen = props => {
        const {path} = props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);
    };
    openMenu = v => {
        console.log(v);
        this.setState({
            openKey: v[v.length - 1]
        })
    };



    data = [
        {
        "key": 1,
        "icon": "appstore",
        "title": "软件测试科",
        "url": "",
        "children": [
            {
                "key": 4,
                "title": "广电组",
                "url": "",
                "children": [
                    {
                        "key": 8,
                        "title": "客制化",
                        "url": "",
                        "children": [
                            {
                                "key": 19,
                                "title": "版本测试",
                                "url": ""
                            }
                        ]
                    }, {
                        "key": 9,
                        "title": "客供",
                        "url": ""
                    }
                ]
            }, {
                "key": 5,
                "title": "光通组",
                "url": "",
                "children": [
                    {
                        "key": 16,
                        "text": "版本测试",
                        "title": "",
                        "url": ""
                    }
                ]
            }
        ]
    }, {
        "key": 2,
        "icon": "setting",
        "title": "硬件测试科",
        "url": ""
    }, {
        "key": 3,
        "icon": "mail",
        "title": "EMC测试科",
        "url": ""
    }];



    recursion(dataSource) {
        return (
            dataSource.map((menu, index) => {
                if (menu.children) {
                    return (
                        <SubMenu
                            key={menu.key}
                            title={<span><Icon type="bars" /><span className="nav-text">{menu.title}</span></span>}
                        >
                            {this.recursion(menu.children)}
                        </SubMenu>
                    )
                } else {
                    return (<Menu.Item key={menu.key}><span>{menu.title}</span></Menu.Item>)
                }
            })
        )
    }




    render() {
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.props.collapsed}
                style={{overflowY: 'auto'}}
            >
                <div className="logo" />
                <Menu
                    onClick={this.menuClick}
                    theme="dark"
                    mode={this.state.mode}
                    // selectedKeys={[this.state.selectedKey]}
                    // openKeys={[this.state.openKey]}
                    // onOpenChange={this.openMenu}
                >
                    {this.recursion(this.data)}
                    {/*<Menu.Item key="/app/dashboard/index">*/}
                        {/*<Link to={'/app/dashboard/index'}><Icon type="home" /><span className="nav-text">首页</span></Link>*/}
                    {/*</Menu.Item>*/}
                    {/*<SubMenu*/}
                        {/*key="/app/todo"*/}
                        {/*title={<span><Icon type="bars" /><span className="nav-text">我的任务</span></span>}*/}
                    {/*>*/}
                        {/*<Menu.Item><Icon type="edit" /><span>我的待办</span></Menu.Item>*/}
                        {/*<Menu.Item><Icon type="book" /><span>我的已办</span></Menu.Item>*/}
                        {/*<Menu.Item><Icon type="check-square-o" /><span>我的办结</span></Menu.Item>*/}
                        {/*<Menu.Item><Icon type="user" /><span>个人相关</span></Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu*/}
                        {/*key="/app/keytask"*/}
                        {/*title={<span><Icon type="exception" /><span className="nav-text">重点任务</span></span>}*/}
                    {/*>*/}
                        {/*<Menu.Item key="/app/keytask/add"><Link to={'/app/keytask/add'}><Icon type="file-add" /><span>重点任务录入</span></Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/keytask/selectUser"><Link to={'/app/keytask/selectUser'}><Icon type="solution" /><span>重点任务总览</span></Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/keytask/search"><Link to={'/app/keytask/search'}><Icon type="search" /><span>重点任务查询</span></Link></Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu*/}
                        {/*key="/app/daily"*/}
                        {/*title={<span><Icon type="calendar" /><span className="nav-text">日常派工</span></span>}*/}
                    {/*>*/}
                        {/*<Menu.Item><Icon type="team" /><span>公司级派工</span></Menu.Item>*/}
                        {/*<Menu.Item><Icon type="solution" /><span>部门级派工</span></Menu.Item>*/}
                        {/*<Menu.Item><Icon type="search" /><span>综合查询</span></Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu*/}
                        {/*key="/app/meeting"*/}
                        {/*title={<span><Icon type="team" /><span className="nav-text">会议管理</span></span>}*/}
                    {/*>*/}
                        {/*<Menu.Item><Icon type="edit" /><span>会议记录维护</span></Menu.Item>*/}
                        {/*<Menu.Item><Icon type="search" /><span>会议内容查看</span></Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu*/}
                        {/*key="/app/event"*/}
                        {/*title={<span><Icon type="tag-o" /><span className="nav-text">要是回顾</span></span>}*/}
                    {/*>*/}
                        {/*<Menu.Item><Icon type="file-add" /><span>要事录入</span></Menu.Item>*/}
                        {/*<Menu.Item><Icon type="search" /><span>要事查询</span></Menu.Item>*/}
                    {/*</SubMenu>*/}

                    {/*/!*}<SubMenu*/}
                        {/*key="/app/ui"*/}
                        {/*title={<span><Icon type="scan" /><span className="nav-text">UI</span></span>}*/}
                    {/*>*/}

                        {/*<Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}>按钮</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}>图标</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}>加载中</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/ui/modals"><Link to={'/app/ui/modals'}>对话框</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/ui/notifications"><Link to={'/app/ui/notifications'}>通知提醒框</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/ui/tabs"><Link to={'/app/ui/tabs'}>标签页</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/ui/banners"><Link to={'/app/ui/banners'}>轮播图</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/ui/wysiwyg"><Link to={'/app/ui/wysiwyg'}>富文本</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/ui/drags"><Link to={'/app/ui/drags'}>拖拽</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/ui/gallery"><Link to={'/app/ui/gallery'}>画廊</Link></Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu*/}
                        {/*key="/app/animation"*/}
                        {/*title={<span><Icon type="rocket" /><span className="nav-text">动画</span></span>}*/}
                    {/*>*/}

                        {/*<Menu.Item key="/app/animation/basicAnimations"><Link to={'/app/animation/basicAnimations'}>基础动画</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/animation/exampleAnimations"><Link to={'/app/animation/exampleAnimations'}>动画案例</Link></Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu*/}
                        {/*key="/app/table"*/}
                        {/*title={<span><Icon type="copy" /><span className="nav-text">表格</span></span>}*/}
                    {/*>*/}

                        {/*<Menu.Item key="/app/table/basicTable"><Link to={'/app/table/basicTable'}>基础表格</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/table/advancedTable"><Link to={'/app/table/advancedTable'}>高级表格</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/table/asynchronousTable"><Link to={'/app/table/asynchronousTable'}>异步表格</Link></Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu*/}
                        {/*key="/app/form"*/}
                        {/*title={<span><Icon type="edit" /><span className="nav-text">表单</span></span>}*/}
                    {/*>*/}

                        {/*<Menu.Item key="/app/basicForm"><Link to={'/app/form/basicForm'}>基础表单</Link></Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu*/}
                        {/*key="/app/chart"*/}
                        {/*title={<span><Icon type="area-chart" /><span className="nav-text">图表</span></span>}*/}
                    {/*>*/}
                        {/*<Menu.Item key="/app/chart/echarts"><Link to={'/app/chart/echarts'}>echarts</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/chart/recharts"><Link to={'/app/chart/recharts'}>recharts</Link></Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu*/}
                        {/*key="sub4"*/}
                        {/*title={<span><Icon type="switcher" /><span className="nav-text">页面</span></span>}*/}
                    {/*>*/}
                        {/*<Menu.Item key="/login"><Link to={'/login'}>登录</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/404"><Link to={'/404'}>404</Link></Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu*/}
                        {/*key="/app/auth"*/}
                        {/*title={<span><Icon type="safety" /><span className="nav-text">权限管理</span></span>}*/}
                    {/*>*/}
                        {/*<Menu.Item key="/app/auth/basic"><Link to={'/app/auth/basic'}>基础演示</Link></Menu.Item>*/}
                        {/*<Menu.Item key="/app/auth/routerEnter"><Link to={'/app/auth/routerEnter'}>路由拦截</Link></Menu.Item>*/}
                    {/*</SubMenu>*!/*/}
                </Menu>
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
        )
    }
}
SiderCustom.__ANT_LAYOUT_SIDER = true;
export default SiderCustom;
