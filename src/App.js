import React from "react";
import { Outlet } from "react-router-dom";
import { Space, Layout } from "antd";
import CreatePost from "./api/CreatePost.jsx";

const App = () => {
  const { Header, Footer, Content } = Layout;
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: "10vh",
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
    height: "auto",
    padding: "50px",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
    height: "10vh",
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Layout>
          <Header style={headerStyle}>List</Header>
          <Content style={contentStyle}>
            <Outlet />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
    </>
  );
};

export default App;
