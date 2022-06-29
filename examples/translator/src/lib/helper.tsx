import { Item } from "@mirohq/websdk-types";
import * as deepl from 'deepl-node';
const { board } = window.miro;

//TODO: move to an env variable
const authKey = "xxxx";
const translator = new deepl.Translator(authKey);

export const targetLanguages = await translator.getTargetLanguages();
export const sourceLanguages = await translator.getSourceLanguages();

export function getContentFromItem(item: Item) {
  switch (item.type) {
    case 'card': {
      return item.title;
      break;
    }
    case 'shape': { return item.content; break; }
    case 'sticky_note': { return item.content; break }
    case 'text': { return item.content; break; }
    case 'app_card': { return item.title; break; }
    default: { return "null"; break; }
  }
}

export async function translate(targetLanguage: deepl.TargetLanguageCode, sourceLanguage: deepl.SourceLanguageCode) {
  const input = document.getElementById('text_to_translate') as HTMLInputElement;
  const selectedItems = await board.getSelection();
  const textsToTranslate: string[] = [];
  selectedItems.forEach(item => {
    textsToTranslate.push(getContentFromItem(item))
  });
  if (input != null) {
    // (async () => {
    // const targetLang: deepl.TargetLanguageCode = targetLanguage;
    // const sourceLang: deepl.SourceLanguageCode = sourceLanguage;
    const results = await translator.translateText(
      textsToTranslate,
      sourceLanguage,
      targetLanguage
    );
    results.map((result: deepl.TextResult) => {
      console.log(result.text);
    });
    // })
    // ();
  }
}
