(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;};

































function isCompatibleDomainOrRange(
array)
{
  return (
    typeof array !== 'undefined' &&
    array.length > 0 && (
    typeof array[0] === 'string' || typeof array[0] === 'number'));

}

/**
 * Convert encodeable scale object into @data-ui's scale config
 * @param scale
 */
export default function convertScaleToDataUIScale(
scale)
{
  const { type, domain, range } = scale;

  let outputType;

  if (type === 'linear' || type === 'time' || type === 'band') {
    outputType = type;
  } else if (type === 'utc') {
    outputType = 'timeUtc';
  } else {
    throw new Error(`Unsupported scale type: ${type}`);
  }

  const output = { type: outputType };
  if (isCompatibleDomainOrRange(domain)) {
    output.domain = domain;
  }
  if (isCompatibleDomainOrRange(range)) {
    output.range = range;
  }
  if ('nice' in scale && typeof scale.nice === 'boolean') {
    output.nice = scale.nice;
  }
  if ('paddingInner' in scale && typeof scale.paddingInner !== 'undefined') {
    output.paddingInner = scale.paddingInner;
  }
  if ('paddingOuter' in scale && typeof scale.paddingOuter !== 'undefined') {
    output.paddingOuter = scale.paddingOuter;
  }

  return output;
};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(isCompatibleDomainOrRange, "isCompatibleDomainOrRange", "/Users/evan/GitHub/superset/superset-frontend/plugins/preset-chart-xy/src/utils/convertScaleToDataUIScaleShape.ts");reactHotLoader.register(convertScaleToDataUIScale, "convertScaleToDataUIScale", "/Users/evan/GitHub/superset/superset-frontend/plugins/preset-chart-xy/src/utils/convertScaleToDataUIScaleShape.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();