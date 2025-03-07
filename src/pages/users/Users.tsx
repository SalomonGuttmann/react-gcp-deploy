import { Col, Row, Spin, Avatar, Space } from 'antd';
import { DataTable } from '../../components';
import { DataType } from '../../components/DataTable/DataTable';
import { useQuery } from 'react-query';
import { getUsers } from "../../api/services";
import { ColumnsType } from 'antd/es/table';
import { generateRandomColor } from '../../utils';


const columns: ColumnsType<DataType> = [{
    key: "username",
    title: "USERNAME",
    dataIndex: "username",
    render: (text: string) => {
        const color = generateRandomColor();
        return (
            <Space size="small" direction='horizontal' >
                <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="large" gap={10}>
                    {text.substring(0, 1).toUpperCase()}
                </Avatar>
                <span>{text}</span>
            </Space>
        )
    }
},
{
    key: "name",
    title: "NAME",
    dataIndex: "name"
},
{
    key: "phone",
    title: "PHONE",
    dataIndex: "phone"
},
{
    key: "website",
    title: "WEBSITE",
    dataIndex: "website"
},
{
    key: "actions",
    title: "ACTIONS",
    dataIndex: "actions"
}];

const Users = ({ }) => {
    const { isLoading, error, data } = useQuery('data', () => getUsers());

    if (isLoading) {
        return (
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>)
    }

    if (error) {
        console.error(error);
        return null;
    }
    return (
        <Row justify="center" align="middle">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <DataTable
                    columns={columns}
                    dataSource={data}
                    onChange={() => { }}
                    total={data?.length}
                    loading={isLoading}
                    rowKey="id"
                >

                </DataTable>
            </Col>
        </Row>
    )
};

export { Users };