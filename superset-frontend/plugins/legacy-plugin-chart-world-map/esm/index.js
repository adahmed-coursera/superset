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
import { t, ChartMetadata, ChartPlugin } from '@superset-ui/core';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';
import example1 from './images/WorldMap1.jpg';
import example2 from './images/WorldMap2.jpg';
import controlPanel from './controlPanel';

const metadata = new ChartMetadata({
  category: t('Map'),
  credits: ['http://datamaps.github.io/'],
  description: t(
  'A map of the world, that can indicate values in different countries.'),

  exampleGallery: [{ url: example1 }, { url: example2 }],
  name: t('World Map'),
  tags: [
  t('2D'),
  t('Aesthetic'),
  t('Comparison'),
  t('Intensity'),
  t('Legacy'),
  t('Multi-Dimensions'),
  t('Multi-Layers'),
  t('Multi-Variables'),
  t('Scatter'),
  t('Popular')],

  thumbnail,
  useLegacyApi: true });


export default class WorldMapChartPlugin extends ChartPlugin {
  constructor() {
    super({
      loadChart: () => import('./ReactWorldMap'),
      metadata,
      transformProps,
      controlPanel });

  } // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {// @ts-ignore
    this[key] = eval(code);}};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(metadata, "metadata", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-plugin-chart-world-map/src/index.js");reactHotLoader.register(WorldMapChartPlugin, "WorldMapChartPlugin", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-plugin-chart-world-map/src/index.js");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();