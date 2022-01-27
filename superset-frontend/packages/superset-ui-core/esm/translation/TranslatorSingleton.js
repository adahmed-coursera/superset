(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /*
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

/* eslint no-console: 0 */

import Translator from './Translator';


let singleton;
let isConfigured = false;

function configure(config) {
  singleton = new Translator(config);
  isConfigured = true;

  return singleton;
}

function getInstance() {
  if (!isConfigured) {
    console.warn('You should call configure(...) before calling other methods');
  }

  if (typeof singleton === 'undefined') {
    singleton = new Translator();
  }

  return singleton;
}

function resetTranslation() {
  if (isConfigured) {
    isConfigured = false;
    singleton = undefined;
  }
}

function addTranslation(key, translations) {
  return getInstance().addTranslation(key, translations);
}

function addTranslations(translations) {
  return getInstance().addTranslations(translations);
}

function addLocaleData(data) {
  return getInstance().addLocaleData(data);
}

function t(input, ...args) {
  return getInstance().translate(input, ...args);
}

function tn(key, ...args) {
  return getInstance().translateWithNumber(key, ...args);
}

export {
configure,
addTranslation,
addTranslations,
addLocaleData,
t,
tn,
resetTranslation };;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(singleton, "singleton", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/TranslatorSingleton.ts");reactHotLoader.register(isConfigured, "isConfigured", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/TranslatorSingleton.ts");reactHotLoader.register(configure, "configure", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/TranslatorSingleton.ts");reactHotLoader.register(getInstance, "getInstance", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/TranslatorSingleton.ts");reactHotLoader.register(resetTranslation, "resetTranslation", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/TranslatorSingleton.ts");reactHotLoader.register(addTranslation, "addTranslation", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/TranslatorSingleton.ts");reactHotLoader.register(addTranslations, "addTranslations", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/TranslatorSingleton.ts");reactHotLoader.register(addLocaleData, "addLocaleData", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/TranslatorSingleton.ts");reactHotLoader.register(t, "t", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/TranslatorSingleton.ts");reactHotLoader.register(tn, "tn", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/translation/TranslatorSingleton.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();