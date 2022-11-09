import { describe } from "@jest/globals";
import request from "supertest";

import { ORDERS_FINAL_RESPONSE } from "../src/data/mockOrders";
import app from "../src/listen";
import Machine, { assembleStatus } from "../src/ProductList/machine";
import { typeItemList } from "../src/utils/productDictionary";

describe("Product List", () => {
  // test("Expect test to be exatly equals to mock", async () => {
  //   jest
  //     .spyOn(Machine, "productListMachine")
  //     .mockReturnValue(JSON.stringify(ORDERS_FINAL_RESPONSE));

  //   const response = await request(app).get("/api/productList");

  //   expect(response.body).toBe(JSON.stringify(ORDERS_FINAL_RESPONSE));
  // });

  test("Expect the test to be exactly the same as the expected status", async () => {
    const order = {
      orderId: "13534511",
      date: "2022-09-27T13:56:11.574",
      status: "PROCESSED",
      subStatus: "PENDING_APPROVAL",
      channel: "APP",
      partnerAlias: null,
      promotionalChannel: null,
      itemList: [
        {
          id: "4531706",
          status: "PENDING_APPROVAL",
          subStatus: "PENDING_APPROVAL",
          transactionList: [
            {
              id: "1-1OEGTJ99",
              productName: "Resgate créditos UBER",
              description: "Resgate créditos UBER",
            },
          ],
          product: {
            type: "UBER_CREDIT",
            subType: "REDEMPTION",
            creditValue: "50.0",
            sendApprovalDate: "2022-09-27T13:57:07.981-03:00",
            money: "0.0",
            miles: "3300",
          },
        },
      ],
      totals: {
        total: {
          money: "0.0",
          miles: "3300",
          interest: "0.0",
          paidMoney: "0",
        },
        installmentList: [],
        totalPassengers: "0",
        totalByTypeList: [
          {
            type: "PRODUCT",
            miles: "3300",
            money: "0",
            interest: "0",
            paidMoney: "0",
          },
        ],
        totalByPassengerTypeList: [],
        totalByCardList: [],
        totalTaxList: [],
      },
    };

    const itemList = {
      id: "4531706",
      status: "PENDING_APPROVAL",
      subStatus: "PENDING_APPROVAL",
      transactionList: [
        {
          id: "1-1OEGTJ99",
          productName: "Resgate créditos UBER",
          description: "Resgate créditos UBER",
        },
      ],
      product: {
        type: "UBER_CREDIT",
        subType: "REDEMPTION",
        creditValue: "50.0",
        sendApprovalDate: "2022-09-27T13:57:07.981-03:00",
        money: "0.0",
        miles: "3300",
      },
    };

    const status = assembleStatus(order, itemList);
    expect(status).toStrictEqual("CONCLUDED");
  });
});
