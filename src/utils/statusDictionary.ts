// enum ProductDictionary {
//   // CONDIÇÃO VALUE OF == fee.type

//   RESERVATION = "RESERVATION",

//   NO_MILES_BOOKING = "NO_MILES_BOOKING",

//   BOARDING = "BOARDING",

//   CONVENIENCE = "CONVENIENCE_TAX",

//   CANCELLATION = "CANCEL_FLIGHT",

//   // CONDIÇÃO VALUE OF == miles.operatio

//   PURCHASE = "PURCHASE",

//   REVALIDATION = "MILES_REVALIDATION",

//   TRANSFER = "MILES_TRANSFER",

//   EXTENSION = "MILES_EXTENSION",

//   EXTEND = "MILES_EXTENSION",

//   // CONDIÇÃO VALUE OF == cancelProduct.type
// }

export const propertiesStatus = ["miles", "paymentData.gateway"];

type statusDictionaryType = {
  [key: string]: string;
}[];

const statusDictionary: statusDictionaryType = [
  { PENDING_APPROVAL: "PAYMENT_APPROVED" },
  { PROCESSED: "CONCLUDED" },
  { CANCELLED: "CANCELLED" },
  { PENDING_PAYMENT: "PENDING_PAYMENT" },
];

export { statusDictionary };
