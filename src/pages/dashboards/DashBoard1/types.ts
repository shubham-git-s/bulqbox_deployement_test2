export type Message = {
    id: number;
    avatar: string;
    sender: string;
    text: string;
    time: string;
};

export type OrderDetail = {
    id: number;
    orderId: string;
    orderDate: string;
    deliveryDate: string;
    time: string;
    status: string;
    variant: string;
};