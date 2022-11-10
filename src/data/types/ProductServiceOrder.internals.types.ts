import { OrderStatus, OrderStatusRaw } from './ProductServiceOrder.types';

// NOTE: Do NOT export these types for the client
type FeeTypes =
  | "RESERVATION"
  | "NO_MILES_BOOKING"
  | "BOARDING"
  | "COVENIENCE"
  | "CANCELLATION";

type MilesOperation =
  | "PURCHASE"
  | "REVALIDATION"
  | "TRANSFER"
  | "EXTENSION"
  | "EXTEND";

type ProductType =
  | "TRAVEL_INSURANCE"
  | "UBER_CREDIT"
  | "UBER_PASS"
  | "LOCALIZA"
  | "CAR"
  | "CANCEL_FEE";

type Baggage = {
  flightList: Array<BaggageFlight>;
};

type Booking = {
  flight?: Flight;
  seat?: Seat;
  baggage?: Baggage;
};

export type Fee = MilesMoney & {
  type: FeeTypes;
  subType: string | null;
};

type Product = MilesMoney & {
  type: ProductType;
  subType: string;
  creditValue?: string;
  gift?: string;
  giftDate?: string;
  transactionId?: string;
  bonusMiles?: string;
  sendApprovalDate?: string;
  travelList?: Array<Travel>;
  acumulateMiles?: string;
  defaultAcumulateMiles?: string;
  acumulateMilesClub?: string;
  defaultMiles?: string;
  milesClub?: string;
  car?: Car;
};

type CancelBooking = {
  isFraud?: string;
  isInvoluntary?: string | null;
  isInvoluntaryChange?: string | null;
  flight: Flight;
  baggage?: Baggage;
};

type CancelFee = MilesMoney & {
  type: string;
  subType: string | null;
};

type TravelInsurance = {
  code: string;
  name: string;
  value: TravelInsuranceValue;
};

export type MemberShip = {
  club: {
    planId: string;
    type: string;
    expirationDay: string;
    isRegularization: string;
    isSameCard: string;
    signatureCode: string;
    money: string;
    saveCard: string;
    milesQuantity: string;
    qualifyingMilesQuantity: string;
  };
};

type Miles = {
  quantity: string;
  optionId: string;
  unitCost: string;
  subTotalCost: string;
  discount: string;
  totalCost: string;
  expiryDate: string;
  operation: MilesOperation;
  smilesClubMilesBonus: string;
  milesBonus?: string;
  receiver?: {
    memberNumber: string;
    cpf: string;
    name: string;
  };
};

type MilesBackRaw = {
  type: string;
  subType?: string;
  milesBackQuantity?: string;
  quantity?: string;
  variant: { minValue: string; maxValue: string } | null;
  parentId?: string;
  priceId?: string;
};

type Car = {
  id: string;
  quoteId: string;
  pickupAgencyCode: string;
  pickupAgencyName: string;
  returnAgencyCode: string;
  returnAgencyName: string;
  pickUpDateTime: string;
  returnDateTime: string;
  vehicleCode: string;
  vendorCarType: string;
  ratePeriod: string;
  rateQualifier: string;
  rateCategory: string;
  selectedCharge: string;
  selectedOffer: string;
  selectedMileage: string;
  model: string;
  smilesCategory: string;
  availableChargeList: MilesMoney &
    {
      id: string;
      type: string;
      offer: string;
      milesClub: string;
      extra: string;
      taxPaymentType: string;
      tax: string;
      taxMiles: string;
      taxRatio: string;
      devolutionTax: string;
      devolutionTaxMiles: string;
      unitCost: string;
      quantity: string;
      freeMileage: string;
      mileage: string;
      referenceId: string;
      requestorId: string;
    }[];
  accessoryList: {
    id: string;
    code: string;
    description: string;
  }[];
  additionalList: MilesMoney &
    {
      id: string;
      type: string;
      code: string;
      paymentType: string;
      description: string;
      includedInRate: string;
      selected: string;
    }[];
  driver: {
    id: string;
    fullName: string;
    email: string;
    phone: {
      internationalCode: string;
      areaCode: string;
      number: string;
    };
    document: {
      number: string;
      type: string;
    };
  };
  freeDailys: string;
};

type ItemBase = {
  id: string;
  status: OrderStatusRaw;
  subStatus?: string;
  voucherNumber?: string;
  maxInstallments?: string;
  paymentData?: PaymentData;
  paymentDataList?: Array<PaymentData>;
  transactionList: Array<Transaction>;
  totals?: Totals;
};

export type OrderTypes = {
  fee?: Fee;
  miles?: Miles;
  product?: Product;
  cancelProduct?: Product;
  booking?: Booking;
  cancelBooking?: CancelBooking;
  milesBack?: MilesBackRaw;
  cancelFee?: CancelFee;
  membership?: MemberShip;
};

export type ItemRaw = ItemBase & OrderTypes;

type Transaction = {
  id: string;
  productName: string;
  description: string;
};

type MilesMoney = {
  miles?: string | null;
  money?: string | null;
};

type Route = {
  originAirportCode: string;
  destinationAirportCode: string;
  departureDate: string;
};

type Airline = {
  code: string;
  name: string;
  companyName?: string;
  documentNumber?: string;
};

type Airport = {
  code: string;
  name: string;
  city: string;
  mac?: string;
  state: string;
  country: string;
};

type DepartureArrival = {
  date: string;
  airport: Airport;
};

type Leg = {
  cabin: string;
  departure: DepartureArrival;
  arrival: DepartureArrival;
  flightNumber: string;
  marketingAirline: Airline;
  operationAirline: Airline;
  equipment: string;
};

type ChosenFare = MilesMoney & {
  type: string;
  baseMiles: string;
  highlightText?: string | null;
};

type Tax = MilesMoney & {
  hasPaymentInMiles: string;
  selectedOption: string;
};

type DynamicAttribute = {
  type: string;
  show: string;
  required: string;
};

type ChosenFlight = {
  stops: string;
  cabin: string;
  airline: Airline;
  departure: DepartureArrival;
  arrival: DepartureArrival;
  duration: {
    hours: string;
    minutes: string;
  };
  legList: Array<Leg>;
  chosenFare: ChosenFare;
  boardingTax: Tax;
  dynamicAttributeList: Array<DynamicAttribute>;
  cancellationTax: string;
  airlineTax: string;
  airlineTaxValues: Tax;
};

export type Total = MilesMoney & {
  type?: string;
  interest?: string | null;
  paidMoney?: string;
};

type TotalByPassenger = {
  type: string;
  totalPassengers: string;
  total: Total;
};

export type Totals = {
  total: Total;
  installmentList?: Array<Installment>;
  totalPassengers?: string;
  totalByTypeList?: Array<Total>;
  totalByPassengerTypeList?: Array<TotalByPassenger>;
  totalByCardList?: Array<TotalByCard>;
  totalTaxList?: Array<TotalTax>;
};

type Document = {
  number: string;
  type: string;
};

type Address = {
  streetName: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
};

type Passenger = {
  index?: string;
  type: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  email: string;
  phoneNumber?: string;
  ticketNumber?: string;
  documentList?: Array<Document>;
  redressNumber?: string | null;
  requestSpecialServiceList?: [];
  travelInsurance?: TravelInsurance;
  address?: Address;
};

type ChosenFlightSegment = {
  type: string;
  chosenFlight: ChosenFlight;
  recordLocator: string;
  totals: Totals;
  passengerList: Array<Passenger>;
  refundable?: string;
};

type Flight = {
  routeList: Array<Route>;
  adults: string;
  children: string;
  infants: string;
  currencyCode: string | null;
  discount?: string;
  chosenFlightSegmentList: Array<ChosenFlightSegment>;
  passengerList: Array<Passenger>;
  source: string;
  discountMiles?: string;
  isEmissionChildAlone?: string;
};

type ChooseSeat = MilesMoney & {
  passenger: {
    index: string;
    firstName: string;
    lastName: string;
  };
  seat: string;
  category: string;
};

type DepartureArrivalAirport = {
  date: string;
  airportCode: string;
  airportName: string;
  airportCity: string;
};

type SeatFlight = {
  recordLocator: string;
  flightNumber: string;
  departure: DepartureArrivalAirport;
  arrival: DepartureArrivalAirport;
  chooseSeatList: Array<ChooseSeat>;
  totalByType: Total;
};

type Seat = {
  flightList: Array<SeatFlight>;
};

type PassengerBaggage = MilesMoney & {
  passenger: {
    index: string;
    firstName: string;
    lastName: string;
  };
  baggage: {
    code: string;
    quantity: string;
    amount: string;
    weight: string;
    maxWeight: string;
    keyValue: string;
    cartQuantity: string;
  };
  interest: string | null;
};

type BaggageFlight = {
  recordLocator: string;
  flightNumber: string;
  departure: DepartureArrivalAirport;
  arrival: DepartureArrivalAirport;
  passengerBaggageList: Array<PassengerBaggage>;
  totalByType: Total;
};

type Travel = {
  recordLocator: string;
  initialDate: string;
  endDate: string;
  origin: string;
  destination: string;
  passengerList: Array<Passenger>;
  type: string;
  tripType: string;
};

type TravelInsuranceValue = {
  type: string;
  miles: string;
  money: string;
  acumulateMiles: string;
  defaultMiles: string;
  milesClub: string;
  defaultAcumulateMiles: string;
  acumulateMilesClub: string;
  baseMiles: string;
  baseMoney: string;
};

type Installment = {
  installment: string;
  amount: string;
};

type PaymentData = {
  installments: string;
  cardHolderName?: string | null;
  cardSummary?: string | null;
  expiryDate?: string;
  cardBin?: string | null;
  cardBrand?: string | null;
  amount: string;
  installmentList?: Array<Installment>;
  nsu?: string;
  cardType: string;
  pspReference?: string;
  authCode?: string;
  transactionId?: string;
  token?: string;
  cardIdentifier?: string;
  gateway: string;
  qrCode?: string;
  qrCodeData?: string;
  pspReferenceQrCode?: string;
  merchantAccountCode?: string;
  merchantReference?: string;
};

type TotalTax = {
  code: string;
  description: string;
  money: string;
  refundable: string;
};

type TotalByCard = {
  index: string | null;
  amount: string;
  cardBrand?: string | null;
  cardHolderName?: string | null;
  cardSummary?: string | null;
  expiryDate: string | null;
  cardBin?: string | null;
  cardType?: string | null;
  interest: string;
  installments: string;
};

export type Order = {
  orderId: string;
  date: string;
  status: OrderStatusRaw;
  subStatus: string;
  channel: string | null;
  partnerAlias: string | null;
  promotionalChannel: string | null;
  itemList: Array<ItemRaw>;
  totals: {
    total: Total;
    installmentList: Array<Installment>;
    totalPassengers: string;
    totalByTypeList: Array<Total>;
    totalByPassengerTypeList: Array<TotalByPassenger>;
    totalByCardList: Array<TotalByCard>;
    totalTaxList: Array<TotalTax>;
  };
};

export type OrderListRaw = {
  orderList: Order[];
  totalPages: string;
  pageNumber: string;
};

export type ProductServiceOrderTypes =
  | "reservation"
  | "no_miles_booking"
  | "boarding"
  | "convenience"
  | "cancellation"
  | "cancel_flight"
  | "purchase"
  | "revalidation"
  | "transfer"
  | "extension"
  | "extend"
  | "travel_insurance"
  | "uber_credit"
  | "uber_pass"
  | "localiza"
  | "car"
  | "travel_insurance_cancel"
  | "uber_credit_cancel"
  | "localiza_cancel"
  | "flight"
  | "seat"
  | "baggage"
  | "cancelBooking_baggage"
  | "membership"
  | "milesback";

export type MilesBack = {
  type: "BOOKING" | "REGULARIZATION" | string;
  milesBackQuantity?: number;
};

type OrderDetailsValueTypes =
  | "FLIGHT"
  | "BOARDING"
  | "BAGGAGE"
  | "NO_MILES_BOOKING"
  | "CLUB"
  | "FLIGHT_CANCEL"
  | "TRAVEL_INSURANCE_CANCEL";

export type ProductServiceOrderBase = {
  productType: string;
  memberPlanValue?: number;
  status: OrderStatus;
  milesBack?: MilesBack;
};

type DetailedValue = {
  type: OrderDetailsValueTypes;
  value: {
    miles: number;
    money: number;
  };
};

export type ProductServiceOrderData = ProductServiceOrderBase & {
  date: Date;
  orderId: number;
  orderDetails?: {
    //rever se o order details é detalhado mesmo
    detailedValue?: DetailedValue[];
    detailedStatus: { key: StatusKey; status: DetailedStatus }[];
  };
};

type StatusKey =
  | "RECEIVED"
  | "PROCESSED"
  | "CANCELLED"
  | "APPROVED"
  | "CONCLUDED";

type DetailedStatus =
  | "CHECKED"
  | "WAITING"
  | "UNCHECKED"
  | "CANCELLED"
  | "WARNING";

export type StatusListBase =
  | "PROCESSED"
  | "IN_PROGRESS"
  | "PENDING_PAYMENT"
  | "PENDING_APPROVAL";

export type StatusListRaw = StatusListBase | "CANCELLED";

type ProductTypeMembershipMap = {
  productType: string;
};

export type MembershipTypes = "UPGRADE" | "DOWNGRADE" | "MEMBERSHIP" | string;

export type MembershipMap = {
  UPGRADE: ProductTypeMembershipMap;
  DOWNGRADE: ProductTypeMembershipMap;
  MEMBERSHIP: ProductTypeMembershipMap;
  __CLUB_SMILES_DEFAULT_KEY__: ProductTypeMembershipMap;
};

export type MemberShipOrder = ProductTypeMembershipMap & {
  memberPlanValue: number;
};

export type GetParamsRequestRaw = {
  cacheBuster: string;
  beginDate: Date;
  endDate: Date;
  statusList: StatusListRaw[];
};
