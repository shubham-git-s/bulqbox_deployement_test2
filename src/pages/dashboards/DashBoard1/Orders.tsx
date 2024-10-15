import { Badge, Card, Dropdown, Table } from 'react-bootstrap';

// type
import { OrderDetail } from './types';

type ProjectsProps = {
    orderDetails: OrderDetail[];
};

const Orders = ({ orderDetails }: ProjectsProps) => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Anothther Action</Dropdown.Item>
                        <Dropdown.Item>Something Else</Dropdown.Item>
                        <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mt-0 mb-3">Latest Orders</h4>

                <Table responsive hover className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Delivery Date</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(orderDetails || []).map((orderDetail, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <td>{orderDetail.id}</td>
                                    <td>{orderDetail.orderId}</td>
                                    <td>{orderDetail.orderDate}</td>
                                    <td>{orderDetail.deliveryDate}</td>
                                    <td>{orderDetail.time}</td>
                                    <td>
                                        <Badge bg={orderDetail.variant}>{orderDetail.status}</Badge>
                                    </td>
                                    
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Orders;
