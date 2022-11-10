// const getLastCondition = (item: any, conditions: string[]) => {
//   let fullProprieties;
//   conditions.forEach((condition: string) => {
//     fullProprieties = item[condition];
//   });
//   return fullProprieties;
// };

const teste = {
  person: { name: { firstName: { lixo: "Gabriel" } } },
};
const conditions = ["person", "name", "firstName", "lixo"];

const getLastItem = (itemList, conditions) => {
  // let lastItem = itemList;
  conditions.forEach((c) => {
    itemList = itemList[c];
  });
  console.log({ itemList });
};

getLastItem(teste, conditions);
