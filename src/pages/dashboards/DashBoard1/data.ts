// types
import { Message, OrderDetail } from './types';

// images
import avatar1 from '../../../assets/images/users/user-1.jpg';
import avatar2 from '../../../assets/images/users/user-2.jpg';
import avatar3 from '../../../assets/images/users/user-3.jpg';
import avatar4 from '../../../assets/images/users/user-4.jpg';
import avatar5 from '../../../assets/images/users/user-5.jpg';

const messages: Message[] = [
    {
        id: 1,
        avatar: avatar1,
        sender: 'Arjun',  
        text: "Hey! there I'm available...",
        time: '13:40 PM',
    },
    {
        id: 2,
        avatar: avatar2,
        sender: 'Aishwarya',  
        text: "I've finished it! See you so...",
        time: '13:34 PM',
    },
    {
        id: 3,
        avatar: avatar3,
        sender: 'Vikram',  
        text: 'This theme is awesome!',
        time: '13:17 PM',
    },
    {
        id: 4,
        avatar: avatar4,
        sender: 'Rajesh',  
        text: 'Nice to meet you',
        time: '12:20 PM',
    },
    {
        id: 5,
        avatar: avatar5,
        sender: 'Karan',  
        text: "Hey! there I'm available...",
        time: '10:15 PM',
    },
];



const orderDetails: OrderDetail[] = [
    {
        id: 1,
        orderId: 'ORD001',
        orderDate: '01/01/2017',
        deliveryDate: '26/04/2017',
        time: '10:00 AM',
        status: 'Delivered',
        variant: 'success',
    },
    {
        id: 2,
        orderId: 'ORD002',
        orderDate: '02/01/2017',
        deliveryDate: '26/04/2017',
        time: '12:30 PM',
        status: 'Pending',
        variant: 'danger',
    },
    {
        id: 3,
        orderId: 'ORD003',
        orderDate: '03/05/2017',
        deliveryDate: '10/05/2017',
        time: '03:00 PM',
        status: 'In Progress',
        variant: 'purple',
    },
    {
        id: 4,
        orderId: 'ORD004',
        orderDate: '05/01/2017',
        deliveryDate: '31/05/2017',
        time: '09:15 AM',
        status: 'Delivered',
        variant: 'success',
    },
    {
        id: 5,
        orderId: 'ORD005',
        orderDate: '10/01/2017',
        deliveryDate: '31/05/2017',
        time: '11:45 AM',
        status: 'In Progress',
        variant: 'purple',
    },
    {
        id: 6,
        orderId: 'ORD006',
        orderDate: '12/01/2017',
        deliveryDate: '31/05/2017',
        time: '02:30 PM',
        status: 'Pending',
        variant: 'danger',
    },
];


export { messages, orderDetails };
