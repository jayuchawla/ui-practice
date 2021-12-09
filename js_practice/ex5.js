const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// 1. list of orders for cutomer 234 that are not yet delivered
const listOrdersNotDelivered = (arr, order_id) => {
    return arr.filter((item) => item.customerId === order_id && !item.delivered)
}
console.log(listOrdersNotDelivered(orders, '234'))

// 2. create a new property on each order with total price of items ordered
console.log(orders.map((order) => order.items.reduce((priceSum, product) => priceSum + product.price, 0)))

// 3. have all the orders been delivered
orders.reduce((deliveredStatus, order) => deliveredStatus && order.delivered, true)

// 4. has the customer with id '123' made any orders
orders.some((order) => order.customerId === '123')
// orders.filter((order) => order.customerId === '123' && order.items.length > 0).length > 0 ? true:false

// 5. have any orders with id '123' been sold
orders.some((order) => order.items.some((product) => product.productId === '123'))
orders.reduce((totalProductCount, order) => totalProductCount + order.items.reduce((productCount, product) => productCount + (product.productId === '123' ? 1:0), 0), 0)

// 6. 