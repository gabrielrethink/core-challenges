import { ORDERS } from '../data/mockOrders';
import { library } from './library';
import { LibraryType, ReturnObjectType } from './types';

const productListMachine = () => {
  try {
    const formatedData = ORDERS.orderList.map((order: any) => {
      let returnObject: ReturnObjectType = {
        items: [],
        value: {
          miles: 0,
          money: 0,
        },
      };
      returnObject.value.miles += parseInt(order.totals.total.miles);
      returnObject.value.money += parseInt(order.totals.total.money);
      order = order.itemList.map((itemFromList: any) => {
        let actualItem: any = {};

        library.find((item: LibraryType) => {
          actualItem.orderId = parseInt(order.orderId);
          actualItem.date = new Date(order.date);
          if (itemFromList[item.condition[0]]) {
            if (item.condition[1] === "notNull") {
              const metConditions = item.nextCondition?.find(
                (finder) => itemFromList[item.condition[0]][finder.key]
              );
              actualItem.productType = metConditions?.value;
              returnObject.items.push(actualItem);
              return true;
            }

            if (itemFromList[item.condition[0]][item.condition[1]]) {
              actualItem.productType =
                item.productType[
                  itemFromList[item.condition[0]][item.condition[1]]
                ];
              returnObject.items.push(actualItem);
              return true;
            }
          }

          return false;
        });
        return actualItem;
      });
      return returnObject;
    });
    return formatedData;
  } catch (error: any) {
    console.log({ message: error.message });
  }
};

const statusMaker = (order: any) => {
  try {
  } catch (error: any) {
    console.error(error.message);
  }
};

export default { productListMachine };
