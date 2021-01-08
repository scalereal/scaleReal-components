var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import * as Styled from './Text.styled';
export var textSizes = ['XS', 'S', 'M', 'L', 'XL'];
export var textAlignments = ['left', 'right', 'center', 'justify', 'justify-all', 'start', 'end', 'match-parent', 'inherit', 'initial', 'unset'];
export var textWeights = ['light', 'regular', 'medium', 'strong', 'extraStrong'];
var Text = React.memo(React.forwardRef(function (_a, ref) {
    var children = _a.children, textSize = _a.textSize, textWeight = _a.textWeight, textAlign = _a.textAlign, restProps = __rest(_a, ["children", "textSize", "textWeight", "textAlign"]);
    return (React.createElement(Styled.Text, __assign({ textSize: textSize, textWeight: textWeight, textAlign: textAlign, ref: ref }, restProps), children));
}));
Text.defaultProps = {
    lineThrough: false,
    uppercase: false,
    textSize: 'S'
};
Text.displayName = 'Text';
Text.Style = Styled.Text;
export default Text;
