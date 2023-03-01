import spellsxge from "./Spells/spells-xge.json";
import spellstce from "./Spells/spells-tce.json";
import spellsscc from "./Spells/spells-scc.json";
import spellsphb from "./Spells/spells-phb.json";
import spellsllk from "./Spells/spells-llk.json";
import spellsidrotf from "./Spells/spells-idrotf.json";
import spellsggr from "./Spells/spells-ggr.json";
import spellsftd from "./Spells/spells-ftd.json";
import spellsegw from "./Spells/spells-egw.json";
import spellsaitfr from "./Spells/spells-aitfr-avt.json";
import spellsai from "./Spells/spells-ai.json";
import spellsaag from "./Spells/spells-aag.json";

interface MutationInput{
  bookName: string,
  spellName: string,
  data: any
}

interface Response{
  message: string,
  success: boolean,
  data?: any
}

const booksList = [
  { book: spellsxge, name: "SpellsXGE" },
  { book: spellstce, name: "SpellsTCE" },
  { book: spellsscc, name: "SpellsSCC" },
  { book: spellsphb, name: "SpellsPHB" },
  { book: spellsllk, name: "SpellsLLK" },
  { book: spellsidrotf, name: "SpellsIDROTF" },
  { book: spellsggr, name: "SpellsGGR" },
  { book: spellsftd, name: "SpellsFTD" },
  { book: spellsegw, name: "SpellsEGW" },
  { book: spellsaitfr, name: "SpellsAITFR" },
  { book: spellsai, name: "SpellsAI" },
  { book: spellsaag, name: "SpellsAAG" },
];

// function EditSpell(inputData: MutationInput): Response{
//   let book: any = booksList.find(item => item.name == inputData.bookName)?.book
//   if(book == undefined)
//     return{
//       message: "Book not found",
//       success: false
//     };
//   let index = book.spell.findIndex((spelli: any) => spelli.name == inputData.spellName);
//   if(index < 0)
//     return{
//       message: "Spell not found",
//       success: false
//     };
//   let spellKeys = Object.keys(book.spell[index]);
//   Object.keys(inputData.data).forEach(key => {
//     if(spellKeys.find(spellKey => spellKey == key) != undefined){
//       book!.spell[index][key] = inputData.data[key];
//     }
//   });
//   return {
//     message: "Mutation successful",
//     success: true,
//     data: book.spell[index]
//   };
// }

export const resolvers = {
  Query: {
    SpellsXGE: () => spellsxge,
    SpellsTCE: () => spellstce,
    SpellsSCC: () => spellsscc,
    SpellsPHB: () => spellsphb,
    SpellsLLK: () => spellsllk,
    SpellsIDROTF: () => spellsidrotf,
    SpellsGGR: () => spellsggr,
    SpellsFTD: () => spellsftd,
    SpellsEGW: () => spellsegw,
    SpellsAITFR: () => spellsaitfr,
    SpellsAI: () => spellsai,
    SpellsAAG: () => spellsaag,
    GetTables: () => [
      "SpellsXGE",
      "SpellsTCE",
      "SpellsSCC",
      "SpellsPHB",
      "SpellsLLK",
      "SpellsIDROTF",
      "SpellsGGR",
      "SpellsFTD",
      "SpellsEGW",
      "SpellsAITFR",
      "SpellsAI",
      "SpellsAAG",
    ],
    QueryAll: () => [
      spellsxge,
      spellstce,
      spellsscc,
      spellsphb,
      spellsllk,
      spellsidrotf,
      spellsggr,
      spellsftd,
      spellsegw,
      spellsaitfr,
      spellsai,
      spellsaag,
    ],
  },
  Mutation: {
    editSpell(_: any, input: MutationInput): Response {
      // return EditSpell(input.data);
      let book: any = booksList.find((item) => item.name == input.data.bookName)?.book;
      if (book == undefined)
        return {
          message: "Book not found",
          success: false,
        };
      let index = book.spell.findIndex((spelli: any) => spelli.name == input.data.spellName);
      if (index < 0)
        return {
          message: "Spell not found",
          success: false,
        };
      let spellKeys = Object.keys(book.spell[index]);
      Object.keys(input.data.data).forEach((key) => {
        if (spellKeys.find((spellKey) => spellKey == key) != undefined) {
          book!.spell[index][key] = input.data.data[key];
        }
      });
      return {
        message: "Mutation successful",
        success: true,
        data: book.spell[index],
      };
    },
  },
};
