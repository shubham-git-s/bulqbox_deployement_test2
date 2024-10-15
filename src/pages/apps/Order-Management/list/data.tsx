
import { orderManagementList } from './types';

const orderManagementData:orderManagementList[] = [
    {
        orderId: "1001",
        buyerName: "John Doe",
        trackingId: "TRACK123456",
        status: "Shipped"
    },
    {
        orderId: "1002",
        buyerName: "Jane Smith",
        trackingId: null,
        status: "Processing"
    },
    {
        orderId: "1003",
        buyerName: "Sam Johnson",
        trackingId: "TRACK654321",
        status: "Delivered"
    }
];

export {orderManagementData}
