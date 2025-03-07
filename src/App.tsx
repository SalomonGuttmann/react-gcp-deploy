import { Layout, ConfigProvider } from 'antd';
import { AppHeader, AppFooter } from './components';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Users, } from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

const { Content } = Layout;
const queryClient = new QueryClient();


function App() {

  return (
    <ConfigProvider theme={{
      token: {
        borderRadius: 2,
        colorPrimary: "#3abab4",
        colorPrimaryBgHover: "#fb00b7",
        colorPrimaryText: "#ffffff",
        colorBgBase: "#ffffff",
        colorBgLayout: "#ffffff",
        colorTextBase: "#a2a2a8",
        colorPrimaryBg: "#ffffff",
        colorPrimaryBorderHover: "#3abab4",
        colorPrimaryBorder: "#3abab4",
        colorPrimaryHover: "#233d3e",
        colorPrimaryActive: "#3abaab",
      }
    }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout className="layout">
            <AppHeader />
            <Content>
              <div className="site-layout-content">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/users" element={<Users />}></Route>

                </Routes>
              </div>
            </Content>
            <AppFooter />
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App
