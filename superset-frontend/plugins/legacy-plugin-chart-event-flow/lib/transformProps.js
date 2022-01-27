import { cleanEvents, TS, EVENT_NAME, ENTITY_ID } from '@data-ui/event-flow';
export default function transformProps(chartProps) {
    const { formData, queriesData, width, height } = chartProps;
    const { allColumnsX, entity, minLeafNodeEventCount } = formData;
    const { data } = queriesData[0];
    const hasData = data && data.length > 0;
    if (hasData) {
        const userKey = entity;
        const eventNameKey = allColumnsX;
        // map from the Superset form fields to <EventFlow />'s expected data keys
        const accessorFunctions = {
            [ENTITY_ID]: (datum) => String(datum[userKey]),
            [EVENT_NAME]: (datum) => datum[eventNameKey],
            [TS]: (datum) => 
            // eslint-disable-next-line no-underscore-dangle
            datum.__timestamp || datum.__timestamp === 0
                ? // eslint-disable-next-line no-underscore-dangle
                    new Date(datum.__timestamp)
                : null,
        };
        const cleanData = cleanEvents(data, accessorFunctions);
        return {
            data: cleanData,
            height,
            initialMinEventCount: minLeafNodeEventCount,
            width,
        };
    }
    return { data: null, height, width };
}
//# sourceMappingURL=transformProps.js.map