import { ORDERS } from '../data/mockOrders';
import { library } from './library';
import { LibraryType, RerturnObjectItem, ReturnObjectType } from './types';

const productListMachine = () => {
  try {
    const formatedData = ORDERS.orderList.map((order: any) => {
      let returnObject: ReturnObjectType = {
        items: [],
        value: {
          miles: parseInt(order.totals.total.miles),
          money: parseInt(order.totals.total.money),
        },
      };
      order = order.itemList.map((itemFromList: any) => {
        let actualItem: RerturnObjectItem = {
          orderId: parseInt(order.orderId),
          date: new Date(order.date).toISOString().toString(),
          status: statusMaker(itemFromList, order.status),
        };

        library.find((item: LibraryType) => {
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

const statusMaker = (item: any, status: string, subStatus?: string) => {
  try {
    const isMilesWithPix = item.paymentData?.gateway === "PIX" && item.miles;
    const notReceived = ["CANCELLED", "PENDING_PAYMENT", "PROCESSED"];

    if (isMilesWithPix) {
      if (status === "PROCESSED" && subStatus === "PROCESSED") {
        return "CONCLUDED";
      }
      if (status === "CANCELLED") {
        return status;
      }
      return "PENDING";
    }

    if (status === "PROCESSED") {
      return "CONCLUDED";
    }
    if (status === "PENDING_APPROVAL") {
      return "PAYMENT_APPROVED";
    }

    if (notReceived.includes(status)) {
      return status;
    } else {
      return "RECEIVED";
    }
  } catch (error: any) {
    console.error(error.message);
  }
};

export default { productListMachine };
