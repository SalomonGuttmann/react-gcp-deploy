import { useState } from "react";
import { Layout, Col, Row, MenuProps, Menu } from "antd";
import "./AppHeader.css";
import { Link } from "react-router-dom";
const { Header } = Layout;

interface MenuItems extends MenuProps {
  key: string;
  label: string;
  link: string;
}

const items: MenuItems[] = [
  {
    label: 'Home',
    key: '',
    link: '/',
  }, {
    label: 'Users',
    key: 'users',
    link: '/users',
  },
];

export const AppHeader = () => {
  const [current, setCurrent] = useState(getCurrentUrl());

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Header data-testid="header-id" style={{ top: 0, zIndex: 1, width: "100%" }}>
      <Row justify="center" align="middle">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
            {
              items.map((item) => {
                return (
                  <Menu.Item key={item.key}>
                    <Link to={item.link} >
                      {item.label}
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu >
        </Col>
      </Row>
    </Header >
  );
};

export const getCurrentUrl = () => {
  const url = window.location.pathname;
  return url.substring(1, url.length);
}