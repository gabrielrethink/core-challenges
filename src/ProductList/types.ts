export type LibraryType = {
  condition: string[];
  productType: { [key: string]: string };
  nextCondition?: { key: string; value: string }[];
};

export type ReturnObjectType = {
  items: {
    orderId: number;
    date: Date;
    productType: string;
    status?: string;
  }[];
  value: {
    miles: number;
    money: number;
  };
};
