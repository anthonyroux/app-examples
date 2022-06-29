import * as React from "react";
import ReactDOM from "react-dom";
import * as deepl from 'deepl-node';
import { sourceLanguages, targetLanguages, translate } from "../../lib/helper";

const Read = () => {
  const { board } = window.miro;

  const [sourceLanguage, setSourceLanguage] = React.useState<deepl.SourceLanguageCode>('es');
  const [targetLanguage, setTargetLanguage] = React.useState<deepl.TargetLanguageCode>('fr');


  const handleSourceLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSourceLanguage(e.target.value as deepl.SourceLanguageCode);
  };

  const handleTargetLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetLanguage(e.target.value as deepl.TargetLanguageCode);
  };

  const handleTranslate = async () => {
    translate(targetLanguage, sourceLanguage)
  }

  const handleTranslateAndCreate = async () => {
    return null;
  }

  return (
    <div className="grid" style={{ height: "auto", width: "100%" }}>
      <div className="cs1 ce12">
        <h4 className="h4">Select source language.</h4>
        <select className="select" value={sourceLanguage} onChange={handleSourceLanguageChange}>
          {sourceLanguages.map((language: deepl.Language) => {
            return (
              <option value={language.name} key={language.code}>
                {language.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="cs1 ce12">
        <h4 className="h4">Select target language.</h4>
        <select className="select" value={targetLanguage} onChange={handleTargetLanguageChange}>
          {targetLanguages.map((language: deepl.Language) => {
            return (
              <option value={language.name} key={language.code}>
                {language.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="cs1 ce12">
        <textarea
          className="textarea"
          placeholder="Type to translate"
          spellCheck="true"
          id="text_to_translate"></textarea>
      </div>
      <div className="cs2 ce12">
        <button
          className="button button-primary"
          onClick={handleTranslate}
        >
          Translate
        </button>
        <button
          className="button button-primary"
          onClick={handleTranslateAndCreate}
        >
          Translate & create
        </button>
      </div>
    </div>
  );
}

// // Render App
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
export default Read;
