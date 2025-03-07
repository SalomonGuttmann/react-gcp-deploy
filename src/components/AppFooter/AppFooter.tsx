import { Layout, Row, Col } from "antd";
import "./AppFooter.css";

const { Footer } = Layout;
export const AppFooter = () => {
  return (
    <Footer data-testid="footer-id">
      <Row justify="center" align="middle">
        <Col xs={24} sm={24} md={12} lg={24} xl={24} flex="auto"></Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={12} lg={24} xl={24} flex="none">
          <span className="copyright">Copyright © 2023 DD</span>
        </Col>
      </Row>
    </Footer>
  );
};
