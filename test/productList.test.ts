import { describe } from '@jest/globals';
import request from 'supertest';

import { ORDERS_FINAL_RESPONSE } from '../src/data/mockOrders';
import app from '../src/server';

describe("Product List", () => {
  test("Expect test to be exatly equals to mock", async () => {
    const response = await request(app).get("/api/productList");
    const sortItems = (items: any) => {
      return items.sort(function (a: any, b: any) {
        if (a.items[0].orderId > b.items[0].orderId) {
          return 1;
        }
        if (a.items[0].orderId < b.items[0].orderId) {
          return -1;
        }
        return 0;
      });
    };

    const sortedResponse = sortItems(response.body);
    const sortedMock = sortItems(ORDERS_FINAL_RESPONSE);
    expect(sortedResponse).toBe(sortedMock);
  });
});
