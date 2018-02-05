import { Menu, Icon } from 'antd';
import Menus from "../../menu";
import { Link } from 'react-router-dom'

const Siders = () => {

    // const menu = [
    //     {
    //         id: "A",
    //         name: "A",
    //         children: [
    //             { id: "A_01", name: "A_01", children: [] },
    //             { id: "A_02", name: "A_02", children: [] },
    //         ]
    //     }, {
    //         id: "B",
    //         name: "B",
    //         children: [
    //             { id: "B_01", name: "B_01", children: [] },
    //             { id: "B_02", name: "B_02", children: [] },
    //         ]
    //     },
    // ]

    const menu = listToTree(Menus)

    function listToTree(data) {
        var tree = [];
        for (let i = 0, length = data.length; i < length; i++) {
            let item = data[i];
            let menuItem = {};
            menuItem.id = item.id;
            menuItem.name = item.name;
            menuItem.icon = item.icon;
            if (item.children && item.children.length > 0) {
                menuItem.children = [];
                item.children.map((item, key) => {
                    menuItem.children.push({ id: item.id, name: item.name, route: item.route })
                })
            }
            tree.push(menuItem);
        };
        return tree;
    }

    return (
        <div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {
                    menu.map((item, key) => {
                        if (item.children) {
                            return (
                                <Menu.SubMenu key={item.id} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                                    {item.children.map(itemB => {
                                        return (
                                            <Menu.Item key={itemB.id}>
                                                <Link to={{pathname:itemB.route}}>
                                                    <span>{itemB.name}</span>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })}
                                </Menu.SubMenu>
                            )
                        } else {
                            return (
                                <Menu.Item key={item.id}>
                                    <Link to={{pathname:item.route}}>
                                        {<span><Icon type={item.icon} /><span>{item.name}</span></span>}
                                    </Link>
                                </Menu.Item>
                            )
                        }
                    })
                }
            </Menu>
        </div>
    )
}

export default Siders;