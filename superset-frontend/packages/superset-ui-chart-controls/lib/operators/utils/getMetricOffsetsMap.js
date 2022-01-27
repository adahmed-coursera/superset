/* eslint-disable camelcase */
/**
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */
import { getMetricLabel, ensureIsArray } from '@superset-ui/core';
import { TIME_COMPARISON_SEPARATOR } from './constants';
export const getMetricOffsetsMap = (formData, queryObject) => {
    /*
      return metric offset-label and metric-label hashmap, for instance:
      {
        "SUM(value)__1 year ago": "SUM(value)",
        "SUM(value)__2 year ago": "SUM(value)"
      }
    */
    const queryMetrics = ensureIsArray(queryObject.metrics);
    const timeOffsets = ensureIsArray(formData.time_compare);
    const metricLabels = queryMetrics.map(getMetricLabel);
    const metricOffsetMap = new Map();
    metricLabels.forEach((metric) => {
        timeOffsets.forEach((offset) => {
            metricOffsetMap.set([metric, offset].join(TIME_COMPARISON_SEPARATOR), metric);
        });
    });
    return metricOffsetMap;
};
//# sourceMappingURL=getMetricOffsetsMap.js.map