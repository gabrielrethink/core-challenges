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

export const typeItemList = [
  "fee.type",
  "miles.operation",
  "product.type",
  "cancelProduct.type",
  "milesBack.type",
  "cancelFee.type",
  "membership.club.type",
  "booking.flight",
  "booking.seat",
  "booking.baggage",
  "cancelBooking.flight",
  "cancelBooking.baggage",
];

const ProductDictionary = {
  feeType: {
    RESERVATION: "RESERVATION",
    NO_MILES_BOOKING: "NO_MILES_BOOKING",
    BOARDING: "BOARDING",
    CONVENIENCE: "CONVENIENCE_TAX",
    CANCELLATION: "CANCEL_FLIGHT",
  },

  milesOperation: {
    PURCHASE: "PURCHASE",
    REVALIDATION: "MILES_REVALIDATION",
    TRANSFER: "MILES_TRANSFER",
    EXTENSION: "MILES_EXTENSION",
    EXTEND: "MILES_EXTENSION",
  },

  productType: {
    TRAVEL_INSURANCE: "TRAVEL_INSURANCE_BUY",
    UBER_CREDIT: "UBER_CREDIT_BUY",
    UBER_PASS: "UBER_PASS_BUY",
    LOCALIZA: "LOCALIZA_BUY",
    CAR: "LOCALIZA_BUY",
  },

  cancelProductType: {
    TRAVEL_INSURANCE: "TRAVEL_INSURANCE_CANCEL",
    UBER_CREDIT: "UBER_CREDIT_CANCEL",
    UBER_PASS: "UBER_PASS_CANCEL",
    LOCALIZA: "LOCALIZA_CANCEL",
    CAR: "LOCALIZA_CANCEL",
  },

  milesBackType: {
    BOOKING: "MILES_BACK_BOOKING",
    REGULARIZATION: "MILES_BACK_REGULARIZATION",
    DEFAULT: "MILES_BACK",
  },

  cancelFeeType: {
    BOARDING: "CANCEL_FLIGHT",
  },

  membershipClubType: {
    UPGRADE: "UPGRADE_CLUB_SMILES",
    DOWNGRADE: "DOWNGRADE_CLUB_SMILES",
    MEMBERSHIP: "CLUB_SMILES",
    DEFAULT: "CLUB_SMILES",
  },

  bookingFlight: "FLIGHT_BUY",
  bookingSeat: "SEAT_BUY",
  bookingBaggage: "BAGGAGE_BUY",
  cancelBookingFlight: "CANCEL_FLIGHT",
  cancelBookingBaggage: "BAGGAGE_CANCEL",
};

export type productDictionaryType = keyof typeof ProductDictionary;
export { ProductDictionary };
