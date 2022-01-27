export function getLabelFontSize(width) {
    if (width > 550) {
        return 0.8;
    }
    if (width > 400 && width <= 550) {
        return 0.55;
    }
    return 0.45;
}
export const isOverlapping = (rect1, rect2) => {
    const { x: x1, y: y1, width: width1, height: height1 } = rect1;
    const { x: x2, y: y2, width: width2, height: height2 } = rect2;
    return !(x1 > x2 + width2 ||
        x1 + width1 < x2 ||
        y1 > y2 + height2 ||
        y1 + height1 < y2);
};
export const getRectangle = (element, offset = 0) => {
    const { x, y, width, height } = element.getBoundingClientRect();
    return {
        x,
        y: y + offset,
        width,
        height: height - offset * 2,
    };
};
export const getOverlappingElements = (elements) => {
    const overlappingElements = [];
    elements.forEach((e1, index1) => {
        const rect1 = getRectangle(e1, 1);
        elements.forEach((e2, index2) => {
            if (index2 <= index1)
                return;
            const rect2 = getRectangle(e2, 1);
            if (isOverlapping(rect1, rect2)) {
                overlappingElements.push(elements[index2]);
                overlappingElements.push(elements[index1]);
            }
        });
    });
    return overlappingElements;
};
//# sourceMappingURL=utils.js.map