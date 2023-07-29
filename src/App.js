import React from "react";
import { Outlet } from "react-router-dom";
import { Space, Layout } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // true
      retry: false, // true
      cacheTime: 0, // 只要QUERYKEY一樣  會優先給你看快取
      staleTime: 0, // 只要QUERYKEY一樣   時間內都不會去打API
    },
  },
});

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
      <QueryClientProvider client={queryClient}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Layout>
            <Header style={headerStyle}>List</Header>
            <Content style={contentStyle}>
              <Outlet />
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Space>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
