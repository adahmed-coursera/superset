(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /* eslint-disable react/no-array-index-key */
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
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { GeoJsonLayer } from 'deck.gl';
// TODO import geojsonExtent from 'geojson-extent';

import { DeckGLContainerStyledWrapper } from '../../DeckGLContainer';
import { hexToRGB } from '../../utils/colors';
import sandboxedEval from '../../utils/sandbox';
import { commonLayerProps } from '../common';
import TooltipRow from '../../TooltipRow';import { jsx as ___EmotionJSX } from "@emotion/react";

const propertyMap = {
  fillColor: 'fillColor',
  color: 'fillColor',
  fill: 'fillColor',
  'fill-color': 'fillColor',
  strokeColor: 'strokeColor',
  'stroke-color': 'strokeColor',
  'stroke-width': 'strokeWidth' };


const alterProps = (props, propOverrides) => {
  const newProps = {};
  Object.keys(props).forEach((k) => {
    if (k in propertyMap) {
      newProps[propertyMap[k]] = props[k];
    } else {
      newProps[k] = props[k];
    }
  });
  if (typeof props.fillColor === 'string') {
    newProps.fillColor = hexToRGB(props.fillColor);
  }
  if (typeof props.strokeColor === 'string') {
    newProps.strokeColor = hexToRGB(props.strokeColor);
  }

  return {
    ...newProps,
    ...propOverrides };

};
let features;
const recurseGeoJson = (node, propOverrides, extraProps) => {
  if (node && node.features) {
    node.features.forEach((obj) => {
      recurseGeoJson(obj, propOverrides, node.extraProps || extraProps);
    });
  }
  if (node && node.geometry) {
    const newNode = {
      ...node,
      properties: alterProps(node.properties, propOverrides) };

    if (!newNode.extraProps) {
      newNode.extraProps = extraProps;
    }
    features.push(newNode);
  }
};

function setTooltipContent(o) {
  return (
    o.object.extraProps &&
    ___EmotionJSX("div", { className: "deckgl-tooltip" },
    Object.keys(o.object.extraProps).map((prop, index) =>
    ___EmotionJSX(TooltipRow, {
      key: `prop-${index}`,
      label: `${prop}: `,
      value: `${o.object.extraProps[prop]}` }))));





}

export function getLayer(formData, payload, onAddFilter, setTooltip) {
  const fd = formData;
  const fc = fd.fill_color_picker;
  const sc = fd.stroke_color_picker;
  const fillColor = [fc.r, fc.g, fc.b, 255 * fc.a];
  const strokeColor = [sc.r, sc.g, sc.b, 255 * sc.a];
  const propOverrides = {};
  if (fillColor[3] > 0) {
    propOverrides.fillColor = fillColor;
  }
  if (strokeColor[3] > 0) {
    propOverrides.strokeColor = strokeColor;
  }

  features = [];
  recurseGeoJson(payload.data, propOverrides);

  let jsFnMutator;
  if (fd.js_data_mutator) {
    // Applying user defined data mutator if defined
    jsFnMutator = sandboxedEval(fd.js_data_mutator);
    features = jsFnMutator(features);
  }

  return new GeoJsonLayer({
    id: `geojson-layer-${fd.slice_id}`,
    filled: fd.filled,
    data: features,
    stroked: fd.stroked,
    extruded: fd.extruded,
    pointRadiusScale: fd.point_radius_scale,
    ...commonLayerProps(fd, setTooltip, setTooltipContent) });

}

const propTypes = {
  formData: PropTypes.object.isRequired,
  payload: PropTypes.object.isRequired,
  setControlValue: PropTypes.func.isRequired,
  viewport: PropTypes.object.isRequired,
  onAddFilter: PropTypes.func };

const defaultProps = {
  onAddFilter() {} };


class DeckGLGeoJson extends React.Component {constructor(...args) {super(...args);this.
    containerRef = /*#__PURE__*/React.createRef();this.

    setTooltip = (tooltip) => {
      const { current } = this.containerRef;
      if (current) {
        current.setTooltip(tooltip);
      }
    };}

  render() {
    const { formData, payload, setControlValue, onAddFilter, viewport } =
    this.props;

    // TODO get this to work
    // if (formData.autozoom) {
    //   viewport = common.fitViewport(viewport, geojsonExtent(payload.data.features));
    // }

    const layer = getLayer(formData, payload, onAddFilter, this.setTooltip);

    return (
      ___EmotionJSX(DeckGLContainerStyledWrapper, {
        ref: this.containerRef,
        mapboxApiAccessToken: payload.data.mapboxApiKey,
        viewport: viewport,
        layers: [layer],
        mapStyle: formData.mapbox_style,
        setControlValue: setControlValue }));


  } // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {// @ts-ignore
    this[key] = eval(code);}}
DeckGLGeoJson.propTypes = propTypes;
DeckGLGeoJson.defaultProps = defaultProps;const _default =

DeckGLGeoJson;export default _default;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(propertyMap, "propertyMap", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Geojson/Geojson.jsx");reactHotLoader.register(alterProps, "alterProps", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Geojson/Geojson.jsx");reactHotLoader.register(features, "features", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Geojson/Geojson.jsx");reactHotLoader.register(recurseGeoJson, "recurseGeoJson", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Geojson/Geojson.jsx");reactHotLoader.register(setTooltipContent, "setTooltipContent", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Geojson/Geojson.jsx");reactHotLoader.register(getLayer, "getLayer", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Geojson/Geojson.jsx");reactHotLoader.register(propTypes, "propTypes", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Geojson/Geojson.jsx");reactHotLoader.register(defaultProps, "defaultProps", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Geojson/Geojson.jsx");reactHotLoader.register(DeckGLGeoJson, "DeckGLGeoJson", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Geojson/Geojson.jsx");reactHotLoader.register(_default, "default", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Geojson/Geojson.jsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();