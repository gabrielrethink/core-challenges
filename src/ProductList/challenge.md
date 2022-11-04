# Core Challenge

## Product List

**Identificando os tipos de Produtos e seus respectivos Status**

Utilizando o arquivo **mockOrders** dentro da pasta de **Orders**, siga as regras de negócio para retornar um array final de acordo com o exemplo abaixo :

**Exemplo de Resposta Final**

```ts
[
  {
    items: [
      {
        productType: "PURCHASE",
        status: "PENDING",
        date: new Date("2022-09-29T10:47:34.367"),
        orderId: 13535153,
      },
    ],
    value: {
      miles: 0,
      money: 30.01,
    },
  },
  {
    items: [
      {
        productType: "CANCEL_FLIGHT",
        status: "CONCLUDED",
        date: new Date("2022-09-27T14:54:20.665"),
        orderId: 13534552,
      },
      {
        productType: "CANCEL_FLIGHT",
        status: "CONCLUDED",
        date: new Date("2022-09-27T14:54:20.665"),
        orderId: 13534552,
      },
      {
        productType: "CANCEL_FLIGHT",
        status: "CONCLUDED",
        date: new Date("2022-09-27T14:54:20.665"),
        orderId: 13534552,
      },
    ],
    value: {
      miles: 0,
      money: 400,
    },
  },
];
```

## Regras de Negócio

**Tipos de Produto**

Descrição:

**CANCELLATION = orderList[].itemList[].fee.type === CANCEL_FLIGHT**

CANCELLATION === valor existente no == orderList[].itemList[].fee.type \
orderList[].itemList[].fee.type === Caminho para encontrar o valor \
CANCEL_FLIGHT === Valor do prodcut type

1. CONDIÇÃO VALUE OF == fee.type

   - RESERVATION = orderList[].itemList[].fee.type === RESERVATION
   - NO_MILES_BOOKING = orderList[].itemList[].fee.type === NO_MILES_BOOKING
   - BOARDING = orderList[].itemList[].fee.type === BOARDING
   - CONVENIENCE = orderList[].itemList[].fee.type === CONVENIENCE_TAX
   - CANCELLATION = orderList[].itemList[].fee.type === CANCEL_FLIGHT

2. CONDIÇÃO VALUE OF == miles.operatio

   - PURCHASE= orderList[].itemList[].miles.operation === PURCHASE
   - REVALIDATION= orderList[].itemList[].miles.operation === MILES_REVALIDATION
   - TRANSFER= orderList[].itemList[].miles.operation === MILES_TRANSFER
   - EXTENSION= orderList[].itemList[].miles.operation === MILES_EXTENSION
   - EXTEND= orderList[].itemList[].miles.operation === MILES_EXTENSION

3. CONDIÇÃO VALUE OF == product.type

   - TRAVEL_INSURANCE = orderList[].itemList[].product.type === TRAVEL_INSURANCE_BUY
   - UBER_CREDIT = orderList[].itemList[].product.type === UBER_CREDIT_BUY
   - UBER_PASS = orderList[].itemList[].product.type === UBER_PASS_BUY
   - LOCALIZA = orderList[].itemList[].product.type === LOCALIZA_BUY
   - CAR = orderList[].itemList[].product.type === LOCALIZA_BUY

4. CONDIÇÃO VALUE OF == cancelProduct.type

   - TRAVEL_INSURANCE = orderList[].itemList[].cancelProduct.type === TRAVEL_INSURANCE_CANCEL
   - UBER_CREDIT = orderList[].itemList[].cancelProduct.type === UBER_CREDIT_CANCEL
   - UBER_PASS = orderList[].itemList[].cancelProduct.type === UBER_PASS_CANCEL
   - LOCALIZA = orderList[].itemList[].cancelProduct.type === LOCALIZA_CANCEL
   - CAR = orderList[].itemList[].cancelProduct.type === LOCALIZA_CANCEL

5. CONDIÇÃO VALUE OF == milesBack.type

   - BOOKING = orderList[].itemList[].milesBack.type === MILES_BACK_BOOKING
   - REGULARIZATION = orderList[].itemList[].milesBack.type === MILES_BACK_REGULARIZATION
   - \_\_MILES_BACK_DEFAULT_KEY\_\_ = orderList[].itemList[].milesBack.type === MILES_BACK

6. CONDIÇÃO VALUE OF == cancelFee.type

   - BOARDING === orderList[].itemList[].cancelFee.type === CANCEL_FLIGHT

7. CONDIÇÃO VALUE OF == cancelFee.type

   - UPGRADE= orderList[].itemList[].membership.club.type = UPGRADE_CLUB_SMILES
   - DOWNGRADE= orderList[].itemList[].membership.club.type = DOWNGRADE_CLUB_SMILES
   - MEMBERSHIP= orderList[].itemList[].membership.club.type = CLUB_SMILES
   - \_\_CLUB_SMILES_DEFAULT_KEY\_\_= orderList[].itemList[].membership.club.type = CLUB_SMILES

8. CONDIÇÃO == booking !== NULL

   - flight !== NULL === orderList[].itemList[].booking.flight === FLIGHT_BUY,
   - seat !== NULL === orderList[].itemList[].booking.seat === SEAT_BUY,
   - baggage !== NULL === orderList[].itemList[].booking.baggage === BAGGAGE_BUY,

9. CONDIÇÃO == cancelBooking !== NULL

   - flight !== NULL === orderList[].itemList[].cancelBooking.flight === CANCEL_FLIGHT
   - baggage !== NULL === orderList[].itemList[].cancelBooking.baggage === BAGGAGE_CANCEL

### Regras do Status

1. Aprovado
   **Somente quando o porduto é do tipo compra, trasnferência, reativação, extensão de milhas e foi pago via PIX**

   - orderList[].itemList[].miles &&
   - orderList[].itemList[].paymentData.gateway == PIX &&
   - orderList[].status === PROCESSED &&
   - orderList[].subStatus === PROCESSED

2. Cancelado
   **Somente quando o porduto é do tipo compra, trasnferência, reativação, extensão de milhas e foi pago via PIX**

   - orderList[].itemList[].miles &&
   - orderList[].itemList[].paymentData.gateway == PIX &&
   - orderList[].status === CANCELLED

3. Pendente
   **Somente quando o porduto é do tipo compra, trasnferência, reativação, extensão de milhas e foi pago via PIX**

   - orderList[].itemList[].miles &&
   - orderList[].itemList[].paymentData.gateway == PIX &&
   - orderList[].status != PROCESSED &&
   - orderList[].status != CANCELLED

4. Pedido Cancelado = CANCELLED

   - orderList.status === CANCELLED

5. Pagamento pendente = PENDING

   - orderList[].status === PENDING_PAYMENT

6. Concluído = CONCLUDED

   - orderList[].status === PROCESSED

7. Pagamento Aprovado = PENDING_APPROVAL

   - orderList[].status === PENDING_APPROVAL

8. recebido
   - Qualquer status diferente dos anteriores

### Regras de Miles e Money

Miles e Money devem ser enviados em number e estão dentro de orderList[].totals.total
