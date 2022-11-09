// PEGAR DATA E MANDAR PARA O SERVICE
import { ORDERS } from "../data/mockOrders";
import { typeItemList, ProductDictionary } from "../utils/productDictionary";
import { propertiesStatus, statusDictionary } from "../utils/statusDictionary";

// Coclocar tudo depois do itemList[] em um array e rodar esse array analisando qual caso passa no if

type productType = {
  productType: string;
  date: string;
  orderId: string;
  status: string;
};

const productListMachine = () => {
  // Aqui deveremos fazer a logica para resolver o problema
  //const data = ORDERS;
  return assembleData();
};

const assembleData = () => {
  const data = ORDERS;
  const summaryData: productType = data.orderList.map((product: any) => {
    return {
      items: getItemList(product),
      value: {
        miles: product.totals?.total?.miles,
        money: product.totals?.total?.money,
      },
    };
  });
  return summaryData;
};

const productTypeDictionary = (conditionValue: string, poductType?: string) => {
  if (poductType) {
    return (ProductDictionary as any)[camelize(conditionValue)][poductType]
      ? (ProductDictionary as any)[camelize(conditionValue)][poductType]
      : (ProductDictionary as any)[camelize(conditionValue)]["DEFAULT"];
  } else {
    return (ProductDictionary as any)[camelize(conditionValue)];
  }
};

const camelize = (str: string): string => {
  return str
    .replace(/\.|\-/g, " ")
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
};

const verifyPropertiesExists = (property: any, fullProperties: any) => {
  const startPoint = fullProperties;

  property.split(".").forEach((prop: any) => {
    if (fullProperties && fullProperties[prop]) {
      fullProperties = fullProperties[prop];
    } else {
      fullProperties = startPoint;
    }
  });
  return fullProperties;
};

const getItemList = (order: any) => {
  let items: any = [];
  // for (let j = 0; j < order.itemList.length; j++) {
  order.itemList.forEach((itemList: any) => {
    let fullProperties = itemList;
    let conditionValue = "null";

    for (let i = 0; i < typeItemList.length; i++) {
      conditionValue = typeItemList[i];
      fullProperties = verifyPropertiesExists(typeItemList[i], fullProperties);

      if (fullProperties != itemList) {
        break;
      }
    }

    const productType =
      typeof fullProperties == "object"
        ? productTypeDictionary(conditionValue)
        : productTypeDictionary(conditionValue, fullProperties);

    items.push({
      productType,
      status: assembleStatus(order, itemList),
      date: order.date,
      orderId: order.orderId,
    });
  });
  return items;
};

export const assembleStatus = (order: any, itemList: any) => {
  const isMilesWithPix =
    itemList.paymentData?.gateway.toUpperCase() === "PIX" && itemList.miles;
  if (isMilesWithPix && order.status != "CANCELLED") {
    if (order.status === "PROCESSED" && order.substatus === "PROCESSED") {
      console.log({ aaaa: order.orderId });
      return "APPROVED";
    } else if (order.status !== "PROCESSED" && order.status !== "CANCELLED") {
      return "PENDING";
    }
  }

  for (const iterator of statusDictionary) {
    for (const key in iterator) {
      console.log({ fora: key, status: order.status, id: order.orderId });

      if (key === order.status) {
        console.log({ dentro: key, status: order.status, id: order.orderId });
        return iterator[key];
      }
    }
  }
};

// const statusOrderPixPayment = (itemList: any) => {
//   let fullProperties = itemList;
//   let verify = false;

//   for (let i = 0; i < propertiesStatus.length; i++) {
//     fullProperties = verifyPropertiesExists(
//       propertiesStatus[i],
//       fullProperties
//     );

//     if (
//       propertiesStatus[i] === "paymentData.gateway" &&
//       fullProperties === "Pix"
//     ) {
//       verify = true;
//       break;
//     } else if (fullProperties === itemList) {
//       break;
//     }
//   }
//   return verify;
// };

export default { productListMachine };
