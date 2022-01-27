import { css as _css } from "@emotion/react";import _pt from "prop-types";(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
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
import React, { useMemo, useState } from 'react';
import {

useTheme,
t } from

'@superset-ui/core';
import ControlHeader from '../../../components/ControlHeader';


import ColumnConfigItem from './ColumnConfigItem';





import { DEFAULT_CONFIG_FORM_LAYOUT } from './constants';
import { COLUMN_NAME_ALIASES } from '../../../constants';import { jsx as ___EmotionJSX } from "@emotion/react";









/**
 * Max number of columns to show by default.
 */
const MAX_NUM_COLS = 10;

/**
 * Add per-column config to queried results.
 */
export default function ColumnConfigControl({
  queryResponse,
  appliedColumnNames = [],
  value,
  onChange,
  configFormLayout = DEFAULT_CONFIG_FORM_LAYOUT,
  emitFilter,
  ...props })
{
  if (emitFilter) {
    Object.values(configFormLayout).forEach((array_of_array) => {
      if (!array_of_array.some((arr) => arr.includes('emitTarget'))) {
        array_of_array.push(['emitTarget']);
      }
    });
  } else {
    Object.values(configFormLayout).forEach((array_of_array) => {
      const index = array_of_array.findIndex((arr) => arr.includes('emitTarget'));
      if (index > -1) {
        array_of_array.splice(index, 1);
      }
    });
  }

  const { colnames: _colnames, coltypes: _coltypes } = queryResponse || {};
  let colnames = [];
  let coltypes = [];
  if (appliedColumnNames.length === 0) {
    colnames = _colnames || [];
    coltypes = _coltypes || [];
  } else {
    const appliedCol = new Set(appliedColumnNames);
    _colnames == null ? void 0 : _colnames.forEach((col, idx) => {
      if (appliedCol.has(col)) {
        colnames.push(col);
        coltypes.push(_coltypes == null ? void 0 : _coltypes[idx]);
      }
    });
  }
  const theme = useTheme();
  const columnConfigs = useMemo(() => {var _colnames2;
    const configs = {};
    (_colnames2 = colnames) == null ? void 0 : _colnames2.forEach((col, idx) => {var _coltypes2;
      configs[col] = {
        name: COLUMN_NAME_ALIASES[col] || col,
        type: (_coltypes2 = coltypes) == null ? void 0 : _coltypes2[idx],
        config: (value == null ? void 0 : value[col]) || {} };

    });
    return configs;
  }, [value, colnames, coltypes]);
  const [showAllColumns, setShowAllColumns] = useState(false);

  const getColumnInfo = (col) => columnConfigs[col] || {};
  const setColumnConfig = (col, config) => {
    if (onChange) {
      // Only keep configs for known columns
      const validConfigs =
      colnames && value ?
      Object.fromEntries(
      Object.entries(value).filter(([key]) => colnames.includes(key))) :

      { ...value };
      onChange({
        ...validConfigs,
        [col]: config });

    }
  };

  if (!colnames || colnames.length === 0) return null;

  const needShowMoreButton = colnames.length > MAX_NUM_COLS + 2;
  const cols =
  needShowMoreButton && !showAllColumns ?
  colnames.slice(0, MAX_NUM_COLS) :
  colnames;

  return (
    ___EmotionJSX(React.Fragment, null,
    ___EmotionJSX(ControlHeader, props),
    ___EmotionJSX("div", {
      css: /*#__PURE__*/_css({
        border: `1px solid ${theme.colors.grayscale.light2}`,
        borderRadius: theme.gridUnit }, process.env.NODE_ENV === "production" ? "" : ";label:ColumnConfigControl;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQtY29udHJvbHMvY29tcG9uZW50cy9Db2x1bW5Db25maWdDb250cm9sL0NvbHVtbkNvbmZpZ0NvbnRyb2wudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJUSIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkLWNvbnRyb2xzL2NvbXBvbmVudHMvQ29sdW1uQ29uZmlnQ29udHJvbC9Db2x1bW5Db25maWdDb250cm9sLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIENoYXJ0RGF0YVJlc3BvbnNlUmVzdWx0LFxuICB1c2VUaGVtZSxcbiAgdCxcbiAgR2VuZXJpY0RhdGFUeXBlLFxufSBmcm9tICdAc3VwZXJzZXQtdWkvY29yZSc7XG5pbXBvcnQgQ29udHJvbEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0NvbnRyb2xIZWFkZXInO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgQ29sdW1uQ29uZmlnSXRlbSBmcm9tICcuL0NvbHVtbkNvbmZpZ0l0ZW0nO1xuaW1wb3J0IHtcbiAgQ29sdW1uQ29uZmlnSW5mbyxcbiAgQ29sdW1uQ29uZmlnLFxuICBDb2x1bW5Db25maWdGb3JtTGF5b3V0LFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IERFRkFVTFRfQ09ORklHX0ZPUk1fTEFZT1VUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ09MVU1OX05BTUVfQUxJQVNFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCB0eXBlIENvbHVtbkNvbmZpZ0NvbnRyb2xQcm9wczxUIGV4dGVuZHMgQ29sdW1uQ29uZmlnPiA9XG4gIENvbnRyb2xDb21wb25lbnRQcm9wczxSZWNvcmQ8c3RyaW5nLCBUPj4gJiB7XG4gICAgcXVlcnlSZXNwb25zZT86IENoYXJ0RGF0YVJlc3BvbnNlUmVzdWx0O1xuICAgIGNvbmZpZ0Zvcm1MYXlvdXQ/OiBDb2x1bW5Db25maWdGb3JtTGF5b3V0O1xuICAgIGFwcGxpZWRDb2x1bW5OYW1lcz86IHN0cmluZ1tdO1xuICAgIGVtaXRGaWx0ZXI6IGJvb2xlYW47XG4gIH07XG5cbi8qKlxuICogTWF4IG51bWJlciBvZiBjb2x1bW5zIHRvIHNob3cgYnkgZGVmYXVsdC5cbiAqL1xuY29uc3QgTUFYX05VTV9DT0xTID0gMTA7XG5cbi8qKlxuICogQWRkIHBlci1jb2x1bW4gY29uZmlnIHRvIHF1ZXJpZWQgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sdW1uQ29uZmlnQ29udHJvbDxUIGV4dGVuZHMgQ29sdW1uQ29uZmlnPih7XG4gIHF1ZXJ5UmVzcG9uc2UsXG4gIGFwcGxpZWRDb2x1bW5OYW1lcyA9IFtdLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGNvbmZpZ0Zvcm1MYXlvdXQgPSBERUZBVUxUX0NPTkZJR19GT1JNX0xBWU9VVCxcbiAgZW1pdEZpbHRlcixcbiAgLi4ucHJvcHNcbn06IENvbHVtbkNvbmZpZ0NvbnRyb2xQcm9wczxUPikge1xuICBpZiAoZW1pdEZpbHRlcikge1xuICAgIE9iamVjdC52YWx1ZXMoY29uZmlnRm9ybUxheW91dCkuZm9yRWFjaChhcnJheV9vZl9hcnJheSA9PiB7XG4gICAgICBpZiAoIWFycmF5X29mX2FycmF5LnNvbWUoYXJyID0+IGFyci5pbmNsdWRlcygnZW1pdFRhcmdldCcpKSkge1xuICAgICAgICBhcnJheV9vZl9hcnJheS5wdXNoKFsnZW1pdFRhcmdldCddKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3QudmFsdWVzKGNvbmZpZ0Zvcm1MYXlvdXQpLmZvckVhY2goYXJyYXlfb2ZfYXJyYXkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBhcnJheV9vZl9hcnJheS5maW5kSW5kZXgoYXJyID0+IGFyci5pbmNsdWRlcygnZW1pdFRhcmdldCcpKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGFycmF5X29mX2FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB7IGNvbG5hbWVzOiBfY29sbmFtZXMsIGNvbHR5cGVzOiBfY29sdHlwZXMgfSA9IHF1ZXJ5UmVzcG9uc2UgfHwge307XG4gIGxldCBjb2xuYW1lczogc3RyaW5nW10gPSBbXTtcbiAgbGV0IGNvbHR5cGVzOiBHZW5lcmljRGF0YVR5cGVbXSA9IFtdO1xuICBpZiAoYXBwbGllZENvbHVtbk5hbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbG5hbWVzID0gX2NvbG5hbWVzIHx8IFtdO1xuICAgIGNvbHR5cGVzID0gX2NvbHR5cGVzIHx8IFtdO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGFwcGxpZWRDb2wgPSBuZXcgU2V0KGFwcGxpZWRDb2x1bW5OYW1lcyk7XG4gICAgX2NvbG5hbWVzPy5mb3JFYWNoKChjb2wsIGlkeCkgPT4ge1xuICAgICAgaWYgKGFwcGxpZWRDb2wuaGFzKGNvbCkpIHtcbiAgICAgICAgY29sbmFtZXMucHVzaChjb2wpO1xuICAgICAgICBjb2x0eXBlcy5wdXNoKF9jb2x0eXBlcz8uW2lkeF0gYXMgR2VuZXJpY0RhdGFUeXBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNvbHVtbkNvbmZpZ3MgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb25maWdzOiBSZWNvcmQ8c3RyaW5nLCBDb2x1bW5Db25maWdJbmZvPiA9IHt9O1xuICAgIGNvbG5hbWVzPy5mb3JFYWNoKChjb2wsIGlkeCkgPT4ge1xuICAgICAgY29uZmlnc1tjb2xdID0ge1xuICAgICAgICBuYW1lOiBDT0xVTU5fTkFNRV9BTElBU0VTW2NvbF0gfHwgY29sLFxuICAgICAgICB0eXBlOiBjb2x0eXBlcz8uW2lkeF0sXG4gICAgICAgIGNvbmZpZzogdmFsdWU/Lltjb2xdIHx8IHt9LFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29uZmlncztcbiAgfSwgW3ZhbHVlLCBjb2xuYW1lcywgY29sdHlwZXNdKTtcbiAgY29uc3QgW3Nob3dBbGxDb2x1bW5zLCBzZXRTaG93QWxsQ29sdW1uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0Q29sdW1uSW5mbyA9IChjb2w6IHN0cmluZykgPT4gY29sdW1uQ29uZmlnc1tjb2xdIHx8IHt9O1xuICBjb25zdCBzZXRDb2x1bW5Db25maWcgPSAoY29sOiBzdHJpbmcsIGNvbmZpZzogVCkgPT4ge1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgLy8gT25seSBrZWVwIGNvbmZpZ3MgZm9yIGtub3duIGNvbHVtbnNcbiAgICAgIGNvbnN0IHZhbGlkQ29uZmlnczogUmVjb3JkPHN0cmluZywgVD4gPVxuICAgICAgICBjb2xuYW1lcyAmJiB2YWx1ZVxuICAgICAgICAgID8gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZmlsdGVyKChba2V5XSkgPT4gY29sbmFtZXMuaW5jbHVkZXMoa2V5KSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiB7IC4uLnZhbHVlIH07XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLnZhbGlkQ29uZmlncyxcbiAgICAgICAgW2NvbF06IGNvbmZpZyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAoIWNvbG5hbWVzIHx8IGNvbG5hbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgbmVlZFNob3dNb3JlQnV0dG9uID0gY29sbmFtZXMubGVuZ3RoID4gTUFYX05VTV9DT0xTICsgMjtcbiAgY29uc3QgY29scyA9XG4gICAgbmVlZFNob3dNb3JlQnV0dG9uICYmICFzaG93QWxsQ29sdW1uc1xuICAgICAgPyBjb2xuYW1lcy5zbGljZSgwLCBNQVhfTlVNX0NPTFMpXG4gICAgICA6IGNvbG5hbWVzO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250cm9sSGVhZGVyIHsuLi5wcm9wc30gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyYXlzY2FsZS5saWdodDJ9YCxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmdyaWRVbml0LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y29scy5tYXAoY29sID0+IChcbiAgICAgICAgICA8Q29sdW1uQ29uZmlnSXRlbVxuICAgICAgICAgICAga2V5PXtjb2x9XG4gICAgICAgICAgICBjb2x1bW49e2dldENvbHVtbkluZm8oY29sKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb25maWcgPT4gc2V0Q29sdW1uQ29uZmlnKGNvbCwgY29uZmlnIGFzIFQpfVxuICAgICAgICAgICAgY29uZmlnRm9ybUxheW91dD17Y29uZmlnRm9ybUxheW91dH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAge25lZWRTaG93TW9yZUJ1dHRvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuZ3JpZFVuaXQgKiAyLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnNpemVzLnhzLFxuICAgICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQubGFiZWwsXG4gICAgICAgICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheXNjYWxlLmxpZ2h0NCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWxsQ29sdW1ucyghc2hvd0FsbENvbHVtbnMpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzaG93QWxsQ29sdW1ucyA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS11cFwiIC8+ICZuYnNwOyB7dCgnU2hvdyBsZXNzIGNvbHVtbnMnKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPiAmbmJzcDtcbiAgICAgICAgICAgICAgICB7dCgnU2hvdyBhbGwgY29sdW1ucycpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */") },


    cols.map((col) =>
    ___EmotionJSX(ColumnConfigItem, {
      key: col,
      column: getColumnInfo(col),
      onChange: (config) => setColumnConfig(col, config),
      configFormLayout: configFormLayout })),


    needShowMoreButton &&
    ___EmotionJSX("div", {
      role: "button",
      tabIndex: -1,
      css: /*#__PURE__*/_css({
        padding: theme.gridUnit * 2,
        textAlign: 'center',
        cursor: 'pointer',
        textTransform: 'uppercase',
        fontSize: theme.typography.sizes.xs,
        color: theme.colors.text.label,
        ':hover': {
          backgroundColor: theme.colors.grayscale.light4 } }, process.env.NODE_ENV === "production" ? "" : ";label:ColumnConfigControl;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQtY29udHJvbHMvY29tcG9uZW50cy9Db2x1bW5Db25maWdDb250cm9sL0NvbHVtbkNvbmZpZ0NvbnRyb2wudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdKWSIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkLWNvbnRyb2xzL2NvbXBvbmVudHMvQ29sdW1uQ29uZmlnQ29udHJvbC9Db2x1bW5Db25maWdDb250cm9sLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIENoYXJ0RGF0YVJlc3BvbnNlUmVzdWx0LFxuICB1c2VUaGVtZSxcbiAgdCxcbiAgR2VuZXJpY0RhdGFUeXBlLFxufSBmcm9tICdAc3VwZXJzZXQtdWkvY29yZSc7XG5pbXBvcnQgQ29udHJvbEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0NvbnRyb2xIZWFkZXInO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgQ29sdW1uQ29uZmlnSXRlbSBmcm9tICcuL0NvbHVtbkNvbmZpZ0l0ZW0nO1xuaW1wb3J0IHtcbiAgQ29sdW1uQ29uZmlnSW5mbyxcbiAgQ29sdW1uQ29uZmlnLFxuICBDb2x1bW5Db25maWdGb3JtTGF5b3V0LFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IERFRkFVTFRfQ09ORklHX0ZPUk1fTEFZT1VUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ09MVU1OX05BTUVfQUxJQVNFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCB0eXBlIENvbHVtbkNvbmZpZ0NvbnRyb2xQcm9wczxUIGV4dGVuZHMgQ29sdW1uQ29uZmlnPiA9XG4gIENvbnRyb2xDb21wb25lbnRQcm9wczxSZWNvcmQ8c3RyaW5nLCBUPj4gJiB7XG4gICAgcXVlcnlSZXNwb25zZT86IENoYXJ0RGF0YVJlc3BvbnNlUmVzdWx0O1xuICAgIGNvbmZpZ0Zvcm1MYXlvdXQ/OiBDb2x1bW5Db25maWdGb3JtTGF5b3V0O1xuICAgIGFwcGxpZWRDb2x1bW5OYW1lcz86IHN0cmluZ1tdO1xuICAgIGVtaXRGaWx0ZXI6IGJvb2xlYW47XG4gIH07XG5cbi8qKlxuICogTWF4IG51bWJlciBvZiBjb2x1bW5zIHRvIHNob3cgYnkgZGVmYXVsdC5cbiAqL1xuY29uc3QgTUFYX05VTV9DT0xTID0gMTA7XG5cbi8qKlxuICogQWRkIHBlci1jb2x1bW4gY29uZmlnIHRvIHF1ZXJpZWQgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sdW1uQ29uZmlnQ29udHJvbDxUIGV4dGVuZHMgQ29sdW1uQ29uZmlnPih7XG4gIHF1ZXJ5UmVzcG9uc2UsXG4gIGFwcGxpZWRDb2x1bW5OYW1lcyA9IFtdLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGNvbmZpZ0Zvcm1MYXlvdXQgPSBERUZBVUxUX0NPTkZJR19GT1JNX0xBWU9VVCxcbiAgZW1pdEZpbHRlcixcbiAgLi4ucHJvcHNcbn06IENvbHVtbkNvbmZpZ0NvbnRyb2xQcm9wczxUPikge1xuICBpZiAoZW1pdEZpbHRlcikge1xuICAgIE9iamVjdC52YWx1ZXMoY29uZmlnRm9ybUxheW91dCkuZm9yRWFjaChhcnJheV9vZl9hcnJheSA9PiB7XG4gICAgICBpZiAoIWFycmF5X29mX2FycmF5LnNvbWUoYXJyID0+IGFyci5pbmNsdWRlcygnZW1pdFRhcmdldCcpKSkge1xuICAgICAgICBhcnJheV9vZl9hcnJheS5wdXNoKFsnZW1pdFRhcmdldCddKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3QudmFsdWVzKGNvbmZpZ0Zvcm1MYXlvdXQpLmZvckVhY2goYXJyYXlfb2ZfYXJyYXkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBhcnJheV9vZl9hcnJheS5maW5kSW5kZXgoYXJyID0+IGFyci5pbmNsdWRlcygnZW1pdFRhcmdldCcpKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGFycmF5X29mX2FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB7IGNvbG5hbWVzOiBfY29sbmFtZXMsIGNvbHR5cGVzOiBfY29sdHlwZXMgfSA9IHF1ZXJ5UmVzcG9uc2UgfHwge307XG4gIGxldCBjb2xuYW1lczogc3RyaW5nW10gPSBbXTtcbiAgbGV0IGNvbHR5cGVzOiBHZW5lcmljRGF0YVR5cGVbXSA9IFtdO1xuICBpZiAoYXBwbGllZENvbHVtbk5hbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbG5hbWVzID0gX2NvbG5hbWVzIHx8IFtdO1xuICAgIGNvbHR5cGVzID0gX2NvbHR5cGVzIHx8IFtdO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGFwcGxpZWRDb2wgPSBuZXcgU2V0KGFwcGxpZWRDb2x1bW5OYW1lcyk7XG4gICAgX2NvbG5hbWVzPy5mb3JFYWNoKChjb2wsIGlkeCkgPT4ge1xuICAgICAgaWYgKGFwcGxpZWRDb2wuaGFzKGNvbCkpIHtcbiAgICAgICAgY29sbmFtZXMucHVzaChjb2wpO1xuICAgICAgICBjb2x0eXBlcy5wdXNoKF9jb2x0eXBlcz8uW2lkeF0gYXMgR2VuZXJpY0RhdGFUeXBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNvbHVtbkNvbmZpZ3MgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb25maWdzOiBSZWNvcmQ8c3RyaW5nLCBDb2x1bW5Db25maWdJbmZvPiA9IHt9O1xuICAgIGNvbG5hbWVzPy5mb3JFYWNoKChjb2wsIGlkeCkgPT4ge1xuICAgICAgY29uZmlnc1tjb2xdID0ge1xuICAgICAgICBuYW1lOiBDT0xVTU5fTkFNRV9BTElBU0VTW2NvbF0gfHwgY29sLFxuICAgICAgICB0eXBlOiBjb2x0eXBlcz8uW2lkeF0sXG4gICAgICAgIGNvbmZpZzogdmFsdWU/Lltjb2xdIHx8IHt9LFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29uZmlncztcbiAgfSwgW3ZhbHVlLCBjb2xuYW1lcywgY29sdHlwZXNdKTtcbiAgY29uc3QgW3Nob3dBbGxDb2x1bW5zLCBzZXRTaG93QWxsQ29sdW1uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0Q29sdW1uSW5mbyA9IChjb2w6IHN0cmluZykgPT4gY29sdW1uQ29uZmlnc1tjb2xdIHx8IHt9O1xuICBjb25zdCBzZXRDb2x1bW5Db25maWcgPSAoY29sOiBzdHJpbmcsIGNvbmZpZzogVCkgPT4ge1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgLy8gT25seSBrZWVwIGNvbmZpZ3MgZm9yIGtub3duIGNvbHVtbnNcbiAgICAgIGNvbnN0IHZhbGlkQ29uZmlnczogUmVjb3JkPHN0cmluZywgVD4gPVxuICAgICAgICBjb2xuYW1lcyAmJiB2YWx1ZVxuICAgICAgICAgID8gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZmlsdGVyKChba2V5XSkgPT4gY29sbmFtZXMuaW5jbHVkZXMoa2V5KSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiB7IC4uLnZhbHVlIH07XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLnZhbGlkQ29uZmlncyxcbiAgICAgICAgW2NvbF06IGNvbmZpZyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAoIWNvbG5hbWVzIHx8IGNvbG5hbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgbmVlZFNob3dNb3JlQnV0dG9uID0gY29sbmFtZXMubGVuZ3RoID4gTUFYX05VTV9DT0xTICsgMjtcbiAgY29uc3QgY29scyA9XG4gICAgbmVlZFNob3dNb3JlQnV0dG9uICYmICFzaG93QWxsQ29sdW1uc1xuICAgICAgPyBjb2xuYW1lcy5zbGljZSgwLCBNQVhfTlVNX0NPTFMpXG4gICAgICA6IGNvbG5hbWVzO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250cm9sSGVhZGVyIHsuLi5wcm9wc30gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyYXlzY2FsZS5saWdodDJ9YCxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmdyaWRVbml0LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y29scy5tYXAoY29sID0+IChcbiAgICAgICAgICA8Q29sdW1uQ29uZmlnSXRlbVxuICAgICAgICAgICAga2V5PXtjb2x9XG4gICAgICAgICAgICBjb2x1bW49e2dldENvbHVtbkluZm8oY29sKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb25maWcgPT4gc2V0Q29sdW1uQ29uZmlnKGNvbCwgY29uZmlnIGFzIFQpfVxuICAgICAgICAgICAgY29uZmlnRm9ybUxheW91dD17Y29uZmlnRm9ybUxheW91dH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAge25lZWRTaG93TW9yZUJ1dHRvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuZ3JpZFVuaXQgKiAyLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnNpemVzLnhzLFxuICAgICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQubGFiZWwsXG4gICAgICAgICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheXNjYWxlLmxpZ2h0NCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWxsQ29sdW1ucyghc2hvd0FsbENvbHVtbnMpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzaG93QWxsQ29sdW1ucyA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS11cFwiIC8+ICZuYnNwOyB7dCgnU2hvdyBsZXNzIGNvbHVtbnMnKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPiAmbmJzcDtcbiAgICAgICAgICAgICAgICB7dCgnU2hvdyBhbGwgY29sdW1ucycpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */"),


      onClick: () => setShowAllColumns(!showAllColumns) },

    showAllColumns ?
    ___EmotionJSX(React.Fragment, null,
    ___EmotionJSX("i", { className: "fa fa-angle-up" }), " \xA0 ", t('Show less columns')) :


    ___EmotionJSX(React.Fragment, null,
    ___EmotionJSX("i", { className: "fa fa-angle-down" }), " \xA0",
    t('Show all columns'))))));







}__signature__(ColumnConfigControl, "useTheme{theme}\nuseMemo{columnConfigs}\nuseState{[showAllColumns, setShowAllColumns](false)}", () => [useTheme]);ColumnConfigControl.propTypes = { appliedColumnNames: _pt.arrayOf(_pt.string), emitFilter: _pt.bool.isRequired };;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(MAX_NUM_COLS, "MAX_NUM_COLS", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-chart-controls/src/shared-controls/components/ColumnConfigControl/ColumnConfigControl.tsx");reactHotLoader.register(ColumnConfigControl, "ColumnConfigControl", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-chart-controls/src/shared-controls/components/ColumnConfigControl/ColumnConfigControl.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();