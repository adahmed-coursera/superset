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

import getTextDimension from './getTextDimension';


function decreaseSizeUntil(
startSize,
computeDimension,
condition)
{
  let size = startSize;
  let dimension = computeDimension(size);
  while (!condition(dimension)) {
    size -= 1;
    dimension = computeDimension(size);
  }

  return size;
}

export default function computeMaxFontSize(
input)




{
  const { idealFontSize, maxWidth, maxHeight, style, ...rest } = input;

  let size;
  if (idealFontSize !== undefined && idealFontSize !== null) {
    size = idealFontSize;
  } else if (maxHeight === undefined || maxHeight === null) {
    throw new Error(
    'You must specify at least one of maxHeight or idealFontSize');

  } else {
    size = Math.floor(maxHeight);
  }

  function computeDimension(fontSize) {
    return getTextDimension({
      ...rest,
      style: { ...style, fontSize: `${fontSize}px` } });

  }

  if (maxWidth !== undefined && maxWidth !== null) {
    size = decreaseSizeUntil(
    size,
    computeDimension,
    (dim) => dim.width <= maxWidth);

  }

  if (maxHeight !== undefined && maxHeight !== null) {
    size = decreaseSizeUntil(
    size,
    computeDimension,
    (dim) => dim.height <= maxHeight);

  }

  return size;
};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(decreaseSizeUntil, "decreaseSizeUntil", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/dimension/computeMaxFontSize.ts");reactHotLoader.register(computeMaxFontSize, "computeMaxFontSize", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/dimension/computeMaxFontSize.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();