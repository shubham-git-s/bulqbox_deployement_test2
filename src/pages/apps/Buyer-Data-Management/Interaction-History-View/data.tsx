import { BuyerInteraction } from './types';

const interactionHistoryData:BuyerInteraction[] = [
    {
        id: "#JD01",
        buyerName: "John Doe",
        date: "2024-03-15",
        message: "Hi, I am interested in the new product launch.",
        responseStatus: "Responded"
    },
    {
        id: "#JS02",
        buyerName: "Jane Smith",
        date: "2024-03-14",
        message: "Can you provide more details about my recent order?",
        responseStatus: "Not Responded"
    },
    {
        id: "#EJ03",
        buyerName: "Emily Johnson",
        date: "2024-03-13",
        message: "I have a question about the return policy.",
        responseStatus: "Responded"
    },
    {
        id: "#MB04",
        buyerName: "Michael Brown",
        date: "2024-03-12",
        message: "When will the next sale be?",
        responseStatus: "Responded"
    },
    {
        id: "#LW05",
        buyerName: "Linda Williams",
        date: "2024-03-11",
        message: "I'm facing issues with my account.",
        responseStatus: "Not Responded"
    },
    {
        id: "#RG06",
        buyerName: "Robert Garcia",
        date: "2024-03-10",
        message: "Do you have recommendations for gifts?",
        responseStatus: "Responded"
    },
    {
        id: "#MM07",
        buyerName: "Maria Martinez",
        date: "2024-03-09",
        message: "Thank you for the prompt delivery!",
        responseStatus: "Responded"
    },
    {
        id: "#DW08",
        buyerName: "David Wilson",
        date: "2024-04-20",
        message: "Can I change my shipping address?",
        responseStatus: "Not Responded"
    },
];

export {interactionHistoryData}
