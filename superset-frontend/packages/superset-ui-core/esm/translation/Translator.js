(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import UntypedJed from 'jed';
import logging from '../utils/logging';









const DEFAULT_LANGUAGE_PACK = {
  domain: 'superset',
  locale_data: {
    superset: {
      '': {
        domain: 'superset',
        lang: 'en',
        plural_forms: 'nplurals=2; plural=(n != 1)' } } } };





export default class Translator {




  constructor(config = {}) {this.i18n = void 0;this.locale = void 0;
    const { languagePack = DEFAULT_LANGUAGE_PACK } = config;
    this.i18n = new UntypedJed(languagePack);
    this.locale = this.i18n.options.locale_data.superset[''].lang;
  }

  /**
   * Add additional translations on the fly, used by plugins.
   */
  addTranslation(key, texts) {
    const translations = this.i18n.options.locale_data.superset;
    if (key in translations) {
      logging.warn(`Duplicate translation key "${key}", will override.`);
    }
    translations[key] = texts;
  }

  /**
   * Add a series of translations.
   */
  addTranslations(translations) {
    if (translations && !Array.isArray(translations)) {
      Object.entries(translations).forEach(([key, vals]) =>
      this.addTranslation(key, vals));

    } else {
      logging.warn('Invalid translations');
    }
  }

  addLocaleData(data) {
    // always fallback to English
    const translations = (data == null ? void 0 : data[this.locale]) || (data == null ? void 0 : data.en);
    if (translations) {
      this.addTranslations(translations);
    } else {
      logging.warn('Invalid locale data');
    }
  }

  translate(input, ...args) {
    return this.i18n.translate(input).fetch(...args);
  }

  translateWithNumber(key, ...args) {
    const [plural, num, ...rest] = args;
    if (typeof plural === 'number') {
      return this.i18n.
      translate(key).
      ifPlural(plural, key).
      fetch(plural, num, ...args);
    }
    return this.i18n.
    translate(key).
    ifPlural(num, plural).
    fetch(...rest);
  } // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {// @ts-ignore
    this[key] = eval(code);}};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(DEFAULT_LANGUAGE_PACK, "DEFAULT_LANGUAGE_PACK", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/Translator.ts");reactHotLoader.register(Translator, "Translator", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/Translator.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();