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
import { isEqual } from 'lodash';
import { DeckGLContainerStyledWrapper, } from './DeckGLContainer';
import CategoricalDeckGLContainer from './CategoricalDeckGLContainer';
import fitViewport from './utils/fitViewport';
export function createDeckGLComponent(getLayer, getPoints) {
    // Higher order component
    class Component extends React.PureComponent {
        containerRef = React.createRef();
        constructor(props) {
            super(props);
            const { width, height, formData } = props;
            let { viewport } = props;
            if (formData.autozoom) {
                viewport = fitViewport(viewport, {
                    width,
                    height,
                    points: getPoints(props.payload.data.features),
                });
            }
            this.state = {
                viewport,
                layer: this.computeLayer(props),
            };
            this.onViewportChange = this.onViewportChange.bind(this);
        }
        UNSAFE_componentWillReceiveProps(nextProps) {
            // Only recompute the layer if anything BUT the viewport has changed
            const nextFdNoVP = { ...nextProps.formData, viewport: null };
            const currFdNoVP = { ...this.props.formData, viewport: null };
            if (!isEqual(nextFdNoVP, currFdNoVP) ||
                nextProps.payload !== this.props.payload) {
                this.setState({ layer: this.computeLayer(nextProps) });
            }
        }
        onViewportChange(viewport) {
            this.setState({ viewport });
        }
        computeLayer(props) {
            const { formData, payload, onAddFilter } = props;
            return getLayer(formData, payload, onAddFilter, this.setTooltip);
        }
        setTooltip = (tooltip) => {
            const { current } = this.containerRef;
            if (current) {
                current?.setTooltip(tooltip);
            }
        };
        render() {
            const { formData, payload, setControlValue, height, width } = this.props;
            const { layer, viewport } = this.state;
            return (<DeckGLContainerStyledWrapper ref={this.containerRef} mapboxApiAccessToken={payload.data.mapboxApiKey} viewport={viewport} layers={[layer]} mapStyle={formData.mapbox_style} setControlValue={setControlValue} width={width} height={height} onViewportChange={this.onViewportChange}/>);
        }
    }
    return Component;
}
export function createCategoricalDeckGLComponent(getLayer, getPoints) {
    return function Component(props) {
        const { datasource, formData, height, payload, setControlValue, viewport, width, } = props;
        return (<CategoricalDeckGLContainer datasource={datasource} formData={formData} mapboxApiKey={payload.data.mapboxApiKey} setControlValue={setControlValue} viewport={viewport} getLayer={getLayer} payload={payload} getPoints={getPoints} width={width} height={height}/>);
    };
}
//# sourceMappingURL=factory.jsx.map