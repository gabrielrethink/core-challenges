// PEGAR DATA E MANDAR PARA O SERVICE
import { ORDERS } from '../data/mockOrders';

const productListMachine = () => {
  const library = {
    feeType: {
      condition: ["fee", "type"],
      types: {
        RESERVATION: "Reserva de bilhetes",
        NO_MILES_BOOKING: "Viaje Fácil",
        BOARDING: "Voo",
        CONVENIENCE: "Taxas de conveniência",
        CANCELLATION: "Cancelamento de Voo",
      },
    },
    milesOperation: {
      condition: ["miles", "operation"],
      types: {
        PURCHASE: "Compra de milhas",
        REVALIDATION: "Reativação de milhas",
        TRANSFER: "Transferência de milhas",
        EXTENSION: "Produto Extensão de Milhas",
        EXTEND: "Produto Extensão de Milhas",
      },
    },
    productType: {
      condition: ["product", "type"],
      types: {
        TRAVEL_INSURANCE: "Seguro Viagem",
        UBER_CREDIT: "Compra de créditos Uber",
        UBER_PASS: "Assinatura Uber Pass",
        LOCALIZA: "Localiza/Hertz",
      },
    },
    cancelProductType: {
      condition: ["cancelProduct", "type"],
      type: {
        TRAVEL_INSURANCE: "Cancelamento de seguro viagem",
        UBER_CREDIT: "Cancelamento Voucher Uber",
        UBER_PASS: "Cancelamento Assinatura Voucher Uber",
        LOCALIZA: "Cancelamento de Localiza/Hertz",
      },
    },
    booking: {
      notNull: true,
      type: {
        "Bilhetes": ["booking", "flight"],
        "Assento": ["booking", "seat"],
        "Bagagem": ["booking", "baggage"],
        "Cancelamento de bagagem": ["cancelBooking", "baggage"],
        "Clube Smiles": ["membership"],
      }
    },
  };
  const data = ORDERS;
  return data;
};

export default { productListMachine };
