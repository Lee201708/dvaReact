import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { type } from 'os';
import Siders from '../components/Layout/sider'
import styles from "./app.css"
import { withRouter } from 'dva/router'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



const App = ({children, dispatch, app, loading, location, match}) => {

    console.log(location);
    console.log(match);

    const { collapsed } = app;
    function toggle(){
        console.log("dianjijiehuan1");
        dispatch({type:'app/onToggle'})
    }
    return (
        <Layout style={{height:"100%"}}>


            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className="logo" style={{width:"100%",height:"64px"}}/>
                <Siders />
            </Sider>


            <Layout>


                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className={styles.trigger}
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={toggle}
                    />
                </Header>

                <Breadcrumb/>


                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    {children}
                </Content>


            </Layout>
        </Layout>
    )
}


export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))