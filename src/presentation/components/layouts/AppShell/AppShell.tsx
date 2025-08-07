import * as React from 'react';
import { Flex, Layout, Typography } from 'antd';
import { Outlet } from 'react-router';
import Container from '../Container/Container';

const { Header, Footer, Content } = Layout;

const styleHeader: React.CSSProperties = {
  backgroundColor: 'oklch(54.1% 0.281 293.009)',
  color: 'oklch(97% 0 0)',
  position: 'fixed',
  zIndex: 999,
  width: '100%',
  top: 0,
};

const styleFooter: React.CSSProperties = {
  backgroundColor: 'oklch(54.1% 0.281 293.009)',
  color: 'oklch(97% 0 0)',
  marginTop: '2rem',
};

const styleMain: React.CSSProperties = {
  marginTop: '80px',
  minHeight: '100dvh',
};
export default function AppShell() {
  return (
    <Layout>
      <Header style={styleHeader}>
        <Container style={{height: '100%'}}>
          <Flex style={{height: '100%'}} align="center">
            <Typography.Title level={5} style={{ color: 'inherit', margin: 0, padding: 0 }}>
              News Portal | Home Test Eigen
            </Typography.Title>
          </Flex>
        </Container>
      </Header>
      <main style={styleMain}>
        <Content>
          <Container>
            <Outlet/>
          </Container>
        </Content>
      </main>
      <Footer style={styleFooter}>
        <Container style={{height: '100%'}}>
          <Flex style={{height: '100%'}} align="center">
            <Typography.Title level={5} style={{ color: 'inherit', margin: 0, padding: 0 }}>
              Zidane Novanda Putra | Candidate Frontend Engineer
            </Typography.Title>
          </Flex>
        </Container>
      </Footer>
    </Layout>
  );
}
