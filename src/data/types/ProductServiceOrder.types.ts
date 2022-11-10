import { ProductServiceOrderData, StatusListBase } from './ProductServiceOrder.internals.types';

export type OrderStatusRaw =
  | "PROCESSED"
  | "CANCELLED"
  | "CANCELLED_BY_ERROR"
  | "CANCELLED_BY_FRAUD"
  | "CANCELLED_FROM_USER"
  | "NEW"
  | "PENDING_PAYMENT"
  | "PENDING_APPROVAL"
  | "IN_PROGRESS";

export type OrderStatus =
  | "PENDING"
  | "APPROVED"
  | "CONCLUDED"
  | "CANCELLED"
  | "RECEIVED";

type StatusList = StatusListBase | "CANCELLED";

export type GetParamsRequest = {
  cacheBuster?: string;
  beginDate: Date;
  endDate: Date;
  statusList?: StatusList[];
};

export type OrderFinalResponse = {
  items: ProductServiceOrderData[];
  value: {
    miles: number;
    money: number;
  };
};

export interface IProductServiceOrderServiceResponse {
  data?: OrderFinalResponse;
}
