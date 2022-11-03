import { LibraryType } from './types';

export const library: LibraryType[] = [
  {
    condition: ["fee", "type"],
    productType: {
      RESERVATION: "RESERVATION",
      NO_MILES_BOOKING: "NO_MILES_BOOKING",
      BOARDING: "BOARDING",
      CONVENIENCE: "CONVENIENCE_TAX",
      CANCELLATION: "CANCEL_FLIGHT",
    },
  },
  {
    condition: ["miles", "operation"],
    productType: {
      PURCHASE: "PURCHASE",
      REVALIDATION: "MILES_REVALIDATION",
      TRANSFER: "MILES_TRANSFER",
      EXTENSION: "MILES_EXTENSION",
      EXTEND: "MILES_EXTENSION",
    },
  },
  {
    condition: ["product", "type"],
    productType: {
      TRAVEL_INSURANCE: "TRAVEL_INSURANCE_BUY",
      UBER_CREDIT: "UBER_CREDIT_BUY",
      UBER_PASS: "UBER_PASS_BUY",
      LOCALIZA: "LOCALIZA_BUY",
      CAR: "LOCALIZA_BUY",
    },
  },
  {
    condition: ["cancelProduct", "type"],
    productType: {
      TRAVEL_INSURANCE: "TRAVEL_INSURANCE_CANCEL",
      UBER_CREDIT: "UBER_CREDIT_CANCEL",
      UBER_PASS: "UBER_PASS_CANCEL",
      LOCALIZA: "LOCALIZA_CANCEL",
      CAR: "LOCALIZA_CANCEL",
    },
  },
  {
    condition: ["booking", "notNull"],
    productType: {},
    nextCondition: [
      { key: "flight", value: "FLIGHT_BUY" },
      { key: "seat", value: "SEAT_BUY" },
      { key: "baggage", value: "BAGGAGE_BUY" },
    ],
  },
  {
    condition: ["milesBack", "type"],
    productType: {
      BOOKING: "MILES_BACK_BOOKING",
      REGULARIZATION: "MILES_BACK_REGULARIZATION",
      __MILES_BACK_DEFAULT_KEY__: "MILES_BACK",
    },
  },
  {
    condition: ["cancelBooking", "notNull"],
    nextCondition: [
      { key: "baggage", value: "BAGGAGE_CANCEL" },
      { key: "flight", value: "CANCEL_FLIGHT" },
    ],
    productType: {},
  },
  {
    condition: ["cancelFee", "type"],
    productType: { BOARDING: "CANCEL_FLIGHT" },
  },
  {
    condition: ["membership", "club", "type"],
    productType: {
      UPGRADE: "UPGRADE_CLUB_SMILES",
      DOWNGRADE: "DOWNGRADE_CLUB_SMILES",
      MEMBERSHIP: "CLUB_SMILES",
      __CLUB_SMILES_DEFAULT_KEY__: "CLUB_SMILES",
    },
  },
];
