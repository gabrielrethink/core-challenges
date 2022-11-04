export type LibraryType = {
  condition: string[];
  productType: { [key: string]: string };
  nextCondition?: { key: string; value: string }[];
};

export type RerturnObjectItem = {
  orderId: number;
  date: string;
  productType?: string;
  status?: string;
};

export type ReturnObjectType = {
  items: RerturnObjectItem[];
  value: {
    miles: number;
    money: number;
  };
};
