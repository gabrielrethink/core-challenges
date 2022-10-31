// PEGAR DATA E MANDAR PARA O SERVICE
import { ORDERS, ORDERS_FINAL_RESPONSE } from '../data/mockOrders';

const productListMachine = () => {
  const newData = ORDERS.orderList[0];
  return ORDERS_FINAL_RESPONSE;
};

export default { productListMachine };
