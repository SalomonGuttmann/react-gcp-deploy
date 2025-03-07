import { Col, Row, Typography } from 'antd';
import { description, paragraph, title } from './text';
import REACT_LOGO from "../../assets/react.svg";
import GOOGLE_LOGO from "../../assets/google.svg";
import CLOUD_RUN_LOGO from "../../assets/cloud-run.svg";
import GITHUB_ACTIONS_LOGO from "../../assets/github-actions.svg";
import "./home.css";


const LOGOS = [
    {
        key: "1",
        img: REACT_LOGO
    },
    {
        key: "2",
        img: GOOGLE_LOGO
    },
    {
        key: "3",
        img: CLOUD_RUN_LOGO
    }
    , {
        key: "5",
        img: GITHUB_ACTIONS_LOGO
    }
];

const Home = () => {
    return (
        <>
            <Row justify="center" align="middle">
                <Col className="centered-col" xs={24} sm={24} md={24} lg={24} xl={24}>
                    <p style={{ textAlign: 'center' }}>
                        <Typography.Title level={1}>{title}</Typography.Title>
                        <Typography.Title level={5}>{description}</Typography.Title>
                        <Typography.Paragraph>{paragraph}</Typography.Paragraph>
                    </p>
                </Col>
            </Row>
            <Row className="logo-container" justify="center" align="middle" >
                {
                    LOGOS.map((item) => {
                        return (
                            <Col key={item.key} className="centered-col" xs={24} sm={24} md={24} lg={12} xl={12}>
                                <img src={item.img} alt="logo" className='logo-svg' />
                            </Col>

                        )
                    })
                }

            </Row >
        </>
    )
};

export { Home };