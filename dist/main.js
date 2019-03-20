(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extension"] = factory();
	else
		root["extension"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MAX_BRIGHTNESS = exports.MAX_BRIGHTNESS = 255;
var HUE_MAX_DEGREE = exports.HUE_MAX_DEGREE = 360;
var MAX_PERCENTAGE = exports.MAX_PERCENTAGE = 100;
var HEX_BASE = exports.HEX_BASE = 16;
var JSON_SPACING = exports.JSON_SPACING = 2;
var NUMERICAL_FONT_BOLD = exports.NUMERICAL_FONT_BOLD = 700;
var NUMERICAL_FONT_NORMAL = exports.NUMERICAL_FONT_NORMAL = 400;
var NUMERICAL_DECIMAL_PRECISION = exports.NUMERICAL_DECIMAL_PRECISION = 1;
var REACT_RULES_WITH_COLOR = exports.REACT_RULES_WITH_COLOR = ["backgroundColor", "borderColor", "color", "shadowColor", "textDecorationColor", "textShadowColor"];
var HTML_TAGS = exports.HTML_TAGS = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
var OPTION_NAMES = exports.OPTION_NAMES = {
  COLOR_FORMAT: "colorFormat",
  FONT_SCALE: "fontScale",
  COLOR_OVERRIDE: "colorOverride",
  TEXT_BASE_COMPONENT: "textBaseComponent",
  COLOR_THEME_PREFIX: "colorThemePrefix",
  FONT_THEME_PREFIX: "fontThemePrefix",
  TYPOGRAPHY_COMPONENTS_PATH: "~/components/common/Text",
  BLUR_COMPONENT_PATH: "blurComponentPath"
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorUtils = __webpack_require__(4);

Object.keys(_colorUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colorUtils[key];
    }
  });
});

var _commonUtils = __webpack_require__(5);

Object.keys(_commonUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _commonUtils[key];
    }
  });
});

var _layerUtils = __webpack_require__(6);

Object.keys(_layerUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _layerUtils[key];
    }
  });
});

var _nameUtils = __webpack_require__(7);

Object.keys(_nameUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nameUtils[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTextComponentsFromProject = exports.generateTextComponentFromTextStyle = undefined;

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(1);

var generateTextComponentsFromProject = function generateTextComponentsFromProject(options, project, textStyles) {
  var components = "";
  var fonts = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = textStyles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var textStyle = _step.value;

      var fontFaceName = (0, _utils.generateName)(textStyle.fontFace);
      if (!fonts[fontFaceName]) {
        fonts[fontFaceName] = textStyle.fontFace;
      }
      components += `${generateTextComponentFromTextStyle(project, options, textStyle)}\n\n`;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var fontsObjStr = (0, _utils.createStyledComponentsRules)(fonts);
  return `// Fonts (Put this in your theme)\n\nconst Fonts = ${fontsObjStr}\n\n// Text components\n\n${components}`;
};

var generateTextComponentFromTextStyle = exports.generateTextComponentFromTextStyle = function generateTextComponentFromTextStyle(project, options, textStyle) {
  var styleObj = {
    fontFamily: `theme.${options.fontThemePrefix || "font"}.${(0, _utils.generateName)(textStyle.fontFace)}`,
    fontSize: `${textStyle.fontSize && (0, _utils.round)(textStyle.fontSize, _constants.NUMERICAL_DECIMAL_PRECISION)}${options.fontScale ? " * (props.fontScale || 1)" : ""}`,
    letterSpacing: textStyle.letterSpacing && (0, _utils.round)(textStyle.letterSpacing, _constants.NUMERICAL_DECIMAL_PRECISION),
    textAlign: textStyle.textAlign
  };
  if (textStyle.color) {
    var colorValue = (0, _utils.themeColor)(options, project, textStyle.color);
    styleObj.color = `${options.colorOverride ? "props.color || " : ""}${colorValue}`;
  }
  if (textStyle.lineHeight) {
    styleObj.lineHeight = `${textStyle.lineHeight && (0, _utils.round)(textStyle.lineHeight, _constants.NUMERICAL_DECIMAL_PRECISION)}${options.fontScale ? " * (props.fontScale || 1)" : ""}`;
  }

  var textStylesStr = (0, _utils.createStyledComponentsRules)(styleObj).replace(/font-size: '(.*)'/g, "font-size: $1").replace(/line-height: '(.*)'/g, "line-height: $1").replace(/color: 'props(.*)'/g, "color: props$1");
  var componentName = (0, _utils.uppercaseFirst)((0, _utils.generateName)(textStyle.name));
  var baseComponent = options.textBaseComponent ? `styled(${options.textBaseComponent})` : "styled.Text";

  return `export const ${componentName} = ${baseComponent}\`${textStylesStr}\``;
};

exports.generateTextComponentsFromProject = generateTextComponentsFromProject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textStyle = __webpack_require__(2);

var _color = __webpack_require__(8);

var _layer2 = __webpack_require__(9);

var _constants = __webpack_require__(0);

var styleguideColors = function styleguideColors(context, colors) {
  var options = {
    colorFormat: context.getOption(_constants.OPTION_NAMES.COLOR_FORMAT)
  };

  var code = (0, _color.generateColorObjectFromProject)(options, context.project, colors);

  return {
    code,
    language: 'javascript'
  };
};

var styleguideTextStyles = function styleguideTextStyles(context, textStyles) {
  var options = {
    colorFormat: context.getOption(_constants.OPTION_NAMES.COLOR_FORMAT),
    fontScale: context.getOption(_constants.OPTION_NAMES.FONT_SCALE),
    colorOverride: context.getOption(_constants.OPTION_NAMES.COLOR_OVERRIDE),
    textBaseComponent: context.getOption(_constants.OPTION_NAMES.TEXT_BASE_COMPONENT),
    colorThemePrefix: context.getOption(_constants.OPTION_NAMES.COLOR_THEME_PREFIX),
    fontThemePrefix: context.getOption(_constants.OPTION_NAMES.FONT_THEME_PREFIX)
  };

  var code = (0, _textStyle.generateTextComponentsFromProject)(options, context.project, textStyles);

  return {
    code,
    language: 'javascript'
  };
};

var layer = function layer(context, _layer) {
  var options = {
    colorFormat: context.getOption(_constants.OPTION_NAMES.COLOR_FORMAT),
    textBaseComponent: context.getOption(_constants.OPTION_NAMES.TEXT_BASE_COMPONENT),
    colorThemePrefix: context.getOption(_constants.OPTION_NAMES.COLOR_THEME_PREFIX),
    fontThemePrefix: context.getOption(_constants.OPTION_NAMES.FONT_THEME_PREFIX),
    typographyComponentsPath: context.getOption(_constants.OPTION_NAMES.TYPOGRAPHY_COMPONENTS_PATH),
    blurComponentPath: context.getOption(_constants.OPTION_NAMES.BLUR_COMPONENT_PATH)
  };
  var code = (0, _layer2.generateLayerComponent)(options, context.project, _layer);
  return { code, language: 'javascript' };
};

var comment = function comment(context, text) {
  return `// ${text}`;
};

var exportStyleguideColors = function exportStyleguideColors(context, colors) {
  var codeObject = styleguideColors(context, colors);
  var code = codeObject.code;

  return {
    code,
    filename: 'index.js',
    language: 'javascript'
  };
};

var exportStyleguideTextStyles = function exportStyleguideTextStyles(context, textStyles) {
  var codeObject = styleguideTextStyles(context, textStyles);
  var code = codeObject.code;

  return {
    code,
    filename: 'index.js',
    language: 'javascript'
  };
};

exports.default = {
  layer,
  styleguideColors,
  styleguideTextStyles,
  comment,
  exportStyleguideColors,
  exportStyleguideTextStyles
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeColor = exports.getColorStringByFormat = exports.toDefaultString = exports.getColorMapByFormat = exports.blendColors = undefined;

var _constants = __webpack_require__(0);

var alphaFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: false,
  maximumFractionDigits: 2
});

function toHex(num) {
  return (num < _constants.HEX_BASE ? "0" : "") + num.toString(_constants.HEX_BASE);
}

function blendColors(colors) {
  return colors.reduce(function (blendedColor, color) {
    return blendedColor.blend(color);
  });
}

function getColorStringByFormat(color, colorFormat) {
  if (!("r" in color && "g" in color && "b" in color && "a" in color)) {
    return;
  }

  switch (colorFormat) {
    case "hex":
      return toHexString(color);

    case "rgb":
      return toRGBAString(color);

    case "hsl":
      return toHSLAString(color);

    case "default":
    default:
      return toDefaultString(color);
  }
}

function getColorMapByFormat(colors, colorFormat) {
  return colors.reduce(function (colorMap, color) {
    var colorString = getColorStringByFormat(color, colorFormat);
    colorMap[colorString] = color.name;
    return colorMap;
  }, {});
}

function toHexString(color, prefix) {
  var hexCode = color.hexBase();

  if (color.a < 1) {
    var hexA = toHex(color.a * _constants.MAX_BRIGHTNESS);

    hexCode = prefix ? hexA + hexCode : hexCode + hexA;
  }

  return `#${hexCode}`;
}

function toRGBAString(color) {
  var rgb = `${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}`;

  var rgbStr = color.a < 1 ? `rgba(${rgb}, ${alphaFormatter.format(color.a)})` : `rgb(${rgb})`;

  return rgbStr;
}

function toHSLAString(color) {
  var hslColor = color.toHSL();
  var hsl = `${Math.round(hslColor.h * _constants.HUE_MAX_DEGREE)}, ` + `${Math.round(hslColor.s * _constants.MAX_PERCENTAGE)}%, ` + `${Math.round(hslColor.l * _constants.MAX_PERCENTAGE)}%`;

  var hslStr = color.a < 1 ? `hsla(${hsl}, ${alphaFormatter.format(color.a)})` : `hsl(${hsl})`;

  return hslStr;
}

function toDefaultString(color) {
  return color.a < 1 ? toRGBAString(color) : toHexString(color);
}

var themeColor = function themeColor(options, project, color) {
  var themeColor = project.findColorEqual(color) || getColorStringByFormat(color, options.colorFormat);
  var strValue = themeColor.name ? `\${p => p.theme.${options.colorThemePrefix || "colors"}.${themeColor.name}}` : themeColor;
  return strValue;
};

exports.blendColors = blendColors;
exports.getColorMapByFormat = getColorMapByFormat;
exports.toDefaultString = toDefaultString;
exports.getColorStringByFormat = getColorStringByFormat;
exports.themeColor = themeColor;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyledComponentsRules = exports.createJavascriptStringFromObj = exports.selectorize = exports.round = exports.isHtmlTag = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _constants = __webpack_require__(0);

function escape(str) {
  return str.trim().replace(/[^\s\w-]/g, "").replace(/^(-?\d+)+/, "").replace(/\s+/g, "-");
}

function isHtmlTag(str) {
  return _constants.HTML_TAGS.includes(str);
}

function round(number, precision) {
  var formattedNumber = Number(number).toLocaleString("en-US", {
    useGrouping: false,
    maximumFractionDigits: precision
  });

  return Number(formattedNumber);
}

function selectorize(str) {
  if (!str) {
    return "";
  }

  var selectorizedStr = str.trim();

  if (isHtmlTag(str)) {
    return selectorizedStr.toLowerCase();
  }

  if (/^[#.]/.test(selectorizedStr)) {
    var name = escape(selectorizedStr.substr(1));

    if (name) {
      return selectorizedStr[0] + name;
    }
  }

  selectorizedStr = escape(selectorizedStr);

  return selectorizedStr && `.${selectorizedStr}`;
}

var createJavascriptStringFromObj = function createJavascriptStringFromObj(object) {
  var str = JSON.stringify(object, null, _constants.JSON_SPACING);
  str = str.replace(/"(.+)":/g, "$1:").replace(/"theme.(.*)"/g, "theme.$1").replace(/"/g, "'");
  return str;
};

var createStyledComponentsRules = function createStyledComponentsRules(object) {
  return "\n" + Object.entries(object).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return `  ${camelCaseToSnakeCase(key)}: ${mapValue(camelCaseToSnakeCase(key), value)}`;
  }).join(";\n") + "\n";
};

var mapValue = function mapValue(key, value) {
  switch (key) {
    case "height":
    case "width":
    case "border-radius":
    case "border-top-radius":
    case "border-left-radius":
    case "border-bottom-radius":
    case "border-right-radius":
    case "border-width":
    case "border-top-width":
    case "border-left-width":
    case "border-bottom-width":
    case "border-right-width":
    case "margin":
    case "margin-top":
    case "margin-left":
    case "margin-bottom":
    case "margin-right":
    case "padding":
    case "padding-top":
    case "padding-left":
    case "padding-bottom":
    case "padding-right":
    case "top":
    case "left":
    case "bottom":
    case "right":
      return value + "px";
    default:
      return value;
  }
};

var camelCaseToSnakeCase = function camelCaseToSnakeCase(s) {
  return s.replace(/\.?([A-Z])/g, function (x, y) {
    return "-" + y.toLowerCase();
  }).replace(/^-/, "");
};

exports.isHtmlTag = isHtmlTag;
exports.round = round;
exports.selectorize = selectorize;
exports.createJavascriptStringFromObj = createJavascriptStringFromObj;
exports.createStyledComponentsRules = createStyledComponentsRules;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function layerHasGradient(layer) {
  return layer.fills.some(function (f) {
    return f.type === 'gradient';
  });
}

function layerHasBlendMode(layer) {
  return layer.fills.some(function (f) {
    return f.blendMode && f.blendMode !== 'normal';
  });
}

exports.layerHasGradient = layerHasGradient;
exports.layerHasBlendMode = layerHasBlendMode;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lowercaseFirst = lowercaseFirst;
exports.uppercaseFirst = uppercaseFirst;
exports.generateName = generateName;
function lowercaseFirst(s) {
  return s.charAt(0).toLowerCase() + s.substring(1);
}

function uppercaseFirst(s) {
  return s.charAt(0).toUpperCase() + s.substring(1);
}

function joinTokens(components) {
  var name = components.map(uppercaseFirst).join('');
  return lowercaseFirst(name);
}

function tokensForString(str) {
  var tokenizer = /\d+|[a-z]+|[A-Z]+(?![a-z])|[A-Z][a-z]+/g;

  var matchResult = str.match(tokenizer);
  if (!matchResult) {
    return ['invalid', 'name'];
  }

  return matchResult.map(function (token) {
    return token.toLowerCase();
  });
}

function generateName(name) {
  return joinTokens(tokensForString(name));
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateColorObjectFromProject = undefined;

var _utils = __webpack_require__(1);

var generateColorObjectFromProject = function generateColorObjectFromProject(options, project, colors) {
  var colorsObject = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = colors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var color = _step.value;

      if (color.name) {
        colorsObject[color.name] = (0, _utils.getColorStringByFormat)(color, options.colorFormat);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var colorsStylesStr = (0, _utils.createJavascriptStringFromObj)(colorsObject);
  return `const base = ${colorsStylesStr}`;
};

exports.generateColorObjectFromProject = generateColorObjectFromProject;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateLayerComponent = undefined;

var _constants = __webpack_require__(0);

var _textStyle = __webpack_require__(2);

var _utils = __webpack_require__(1);

var generateLayerComponent = function generateLayerComponent(options, project, layer) {
  var containerStyle = {};
  containerStyle.height = layer.rect.height;
  containerStyle.width = layer.rect.width;

  if (layer.fills.length && layer.fills[0].color) {
    var blendedColor = (0, _utils.blendColors)(layer.fills.map(function (fill) {
      return fill.color;
    }));
    containerStyle.backgroundColor = (0, _utils.themeColor)(options, project, blendedColor);
  }
  if (layer.shadows.length) {
    Object.assign(containerStyle, generateShadowStyleObject(options, project, layer.shadows[layer.shadows.length - 1], layer.type));
  }
  if (layer.borders.length) {
    Object.assign(containerStyle, generateBorderStyleObject(options, project, layer.borders[layer.borders.length - 1], layer.type));
  }
  if (layer.borderRadius > 0) {
    containerStyle.borderRadius = layer.borderRadius;
  }
  if (layer.opacity < 1) {
    containerStyle.opacity = layer.opacity;
  }
  if (layer.rotation) {
    containerStyle.transform = `rotate(${layer.rotation}deg)`;
  }

  if (layer.type === "text") {
    return generateLayerComponentWithText(options, project, layer, containerStyle);
  }
  if (layer.blur) {
    return generateLayerComponentWithBlur(options, project, layer, containerStyle);
  }
  var containerStyleStr = (0, _utils.createStyledComponentsRules)(containerStyle);
  var componentName = (0, _utils.uppercaseFirst)((0, _utils.generateName)(layer.name));
  var code = `const ${componentName} = styled.View\`${containerStyleStr}\``;
  return code;
};

var generateLayerComponentWithText = function generateLayerComponentWithText(options, project, layer, containerStyle) {
  var code = "";
  var textComponentNames = [];
  if (layer.textStyles.length > 0) {
    var textComponentsToImport = "";
    var createdTextComponents = "";
    for (var i = 0; i < layer.textStyles.length; i++) {
      var range = layer.textStyles[i].range;
      if (range.end === 0 || range.start === layer.content.length || range.start === range.end) {
        continue;
      }
      var textStyle = layer.textStyles[i].textStyle;
      var projectTextStyle = project.findTextStyleEqual(textStyle);
      var componentName = "";
      if (projectTextStyle) {
        componentName = (0, _utils.uppercaseFirst)((0, _utils.generateName)(projectTextStyle.name));
        // Prevents double text components import
        if (i > 0 && componentName === textComponentNames[i - 1]) {
          continue;
        }
        textComponentsToImport += `${componentName}, `;
      } else {
        textStyle.name = componentName = `StyledText${i}`;
        createdTextComponents += `${(0, _textStyle.generateTextComponentFromTextStyle)(project, options, textStyle)}\n\n`;
      }
      textComponentNames.push(componentName);
    }
    console.log("textComponentsToImport", "[BETA]", textComponentsToImport);
    if (textComponentsToImport.length > 0) {
      code += `import { ${textComponentsToImport.substring(0, textComponentsToImport.length - 2)} } from "~/components/common/Text"\n\n`;
    }
    if (createdTextComponents.length > 0) {
      if (options.textBaseComponent) {
        code += `import { ${options.textBaseComponent} } from "~/components/common/Text"\n\n`;
      }
      code += createdTextComponents;
    }
  }
  if (textComponentNames.length > 1) {
    var textChilds = "";
    for (var _i = 0; _i < textComponentNames.length; _i++) {
      textChilds += `<${textComponentNames[_i]}>{text${_i}}</${textComponentNames[_i]}>`;
    }
    var containerStyleStr = (0, _utils.createJavascriptStringFromObj)(containerStyle);
    code += `const StyledContainer = glamorous.view((props, theme) => (${containerStyleStr}))\n\n`;
    code += `export const Component = props => {
    const { ${layer.textStyles.map(function (_, i) {
      return (i > 0 ? " " : "") + "text" + i;
    })} } = props
    return <StyledContainer {...props}>
      ${textChilds}
    </StyledContainer>
  }`;
  } else {
    var _containerStyleStr = (0, _utils.createJavascriptStringFromObj)(containerStyle);
    code += `export const Component = glamorous(${textComponentNames[0]})((props, theme) => (${_containerStyleStr}))`;
  }

  return code;
};

var generateLayerComponentWithBlur = function generateLayerComponentWithBlur(options, project, layer, containerStyle) {
  var code = "";
  if (options.blurComponentPath) {
    code = `import { BlurView } from '${options.blurComponentPath}'\n\n`;
  } else {
    code = "import { BlurView as RNBlurView } from 'react-native-blur'\n\n";
    var containerStyleStr = (0, _utils.createJavascriptStringFromObj)(containerStyle);
    code += `const StyledContainer = glamorous.view((props, theme) => (${containerStyleStr}))\n\n`;
    code += `const BlurView = glamorous(RNBlurView)({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  })\n\n`;
  }
  code += `export const Component = props => {
  const { children } = props
  return <StyledContainer {...props}>
    <BlurView blurType="dark" /> // "xlight", "light" or "dark"
    {children}
  </StyledContainer>
}`;
  return code;
};

var generateShadowStyleObject = function generateShadowStyleObject(options, project, shadow, layerType) {
  if (layerType === "text") {
    var _shadowColor = (0, _utils.themeColor)(options, project, shadow.color);
    return {
      textShadowColor: _shadowColor,
      textShadowOffset: `${(0, _utils.round)(shadow.offsetX / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION)}px ${(0, _utils.round)(shadow.offsetY / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION)}px`,
      textShadowRadius: (0, _utils.round)(shadow.blurRadius / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION)
    };
  }

  if (project.type === "android") {
    return {};
  }

  // "iOS" doesn't have shadow spread
  var shadowColor = (0, _utils.themeColor)(options, project, shadow.color);

  return {
    shadowColor: shadowColor,
    shadowOffset: `${(0, _utils.round)(shadow.offsetX / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION)}px ${(0, _utils.round)(shadow.offsetY / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION)}px`,
    shadowRadius: (0, _utils.round)(shadow.blurRadius / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION),
    shadowOpacity: 1.0
  };
};

var generateBorderStyleObject = function generateBorderStyleObject(options, project, border, layerType) {
  if (layerType === "text" || border.fill && border.fill.type === "gradient") {
    return {};
  }

  var borderColor = (0, _utils.themeColor)(options, project, border.fill.color);
  return {
    borderStyle: "solid",
    borderWidth: (0, _utils.round)(border.thickness / project.densityDivisor, 1),
    borderColor
  };
};

exports.generateLayerComponent = generateLayerComponent;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNmU2ZmE0NTZhM2RlZGZiMmRlZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC1zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbG9yLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2xheWVyLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9uYW1lLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiTUFYX0JSSUdIVE5FU1MiLCJIVUVfTUFYX0RFR1JFRSIsIk1BWF9QRVJDRU5UQUdFIiwiSEVYX0JBU0UiLCJKU09OX1NQQUNJTkciLCJOVU1FUklDQUxfRk9OVF9CT0xEIiwiTlVNRVJJQ0FMX0ZPTlRfTk9STUFMIiwiTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OIiwiUkVBQ1RfUlVMRVNfV0lUSF9DT0xPUiIsIkhUTUxfVEFHUyIsIk9QVElPTl9OQU1FUyIsIkNPTE9SX0ZPUk1BVCIsIkZPTlRfU0NBTEUiLCJDT0xPUl9PVkVSUklERSIsIlRFWFRfQkFTRV9DT01QT05FTlQiLCJDT0xPUl9USEVNRV9QUkVGSVgiLCJGT05UX1RIRU1FX1BSRUZJWCIsIlRZUE9HUkFQSFlfQ09NUE9ORU5UU19QQVRIIiwiQkxVUl9DT01QT05FTlRfUEFUSCIsImdlbmVyYXRlVGV4dENvbXBvbmVudHNGcm9tUHJvamVjdCIsIm9wdGlvbnMiLCJwcm9qZWN0IiwidGV4dFN0eWxlcyIsImNvbXBvbmVudHMiLCJmb250cyIsInRleHRTdHlsZSIsImZvbnRGYWNlTmFtZSIsImZvbnRGYWNlIiwiZ2VuZXJhdGVUZXh0Q29tcG9uZW50RnJvbVRleHRTdHlsZSIsImZvbnRzT2JqU3RyIiwic3R5bGVPYmoiLCJmb250RmFtaWx5IiwiZm9udFRoZW1lUHJlZml4IiwiZm9udFNpemUiLCJmb250U2NhbGUiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJjb2xvclZhbHVlIiwiY29sb3JPdmVycmlkZSIsImxpbmVIZWlnaHQiLCJ0ZXh0U3R5bGVzU3RyIiwicmVwbGFjZSIsImNvbXBvbmVudE5hbWUiLCJuYW1lIiwiYmFzZUNvbXBvbmVudCIsInRleHRCYXNlQ29tcG9uZW50Iiwic3R5bGVndWlkZUNvbG9ycyIsImNvbnRleHQiLCJjb2xvcnMiLCJjb2xvckZvcm1hdCIsImdldE9wdGlvbiIsImNvZGUiLCJsYW5ndWFnZSIsInN0eWxlZ3VpZGVUZXh0U3R5bGVzIiwiY29sb3JUaGVtZVByZWZpeCIsImxheWVyIiwidHlwb2dyYXBoeUNvbXBvbmVudHNQYXRoIiwiYmx1ckNvbXBvbmVudFBhdGgiLCJjb21tZW50IiwidGV4dCIsImV4cG9ydFN0eWxlZ3VpZGVDb2xvcnMiLCJjb2RlT2JqZWN0IiwiZmlsZW5hbWUiLCJleHBvcnRTdHlsZWd1aWRlVGV4dFN0eWxlcyIsImFscGhhRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInVzZUdyb3VwaW5nIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwidG9IZXgiLCJudW0iLCJ0b1N0cmluZyIsImJsZW5kQ29sb3JzIiwicmVkdWNlIiwiYmxlbmRlZENvbG9yIiwiYmxlbmQiLCJnZXRDb2xvclN0cmluZ0J5Rm9ybWF0IiwidG9IZXhTdHJpbmciLCJ0b1JHQkFTdHJpbmciLCJ0b0hTTEFTdHJpbmciLCJ0b0RlZmF1bHRTdHJpbmciLCJnZXRDb2xvck1hcEJ5Rm9ybWF0IiwiY29sb3JNYXAiLCJjb2xvclN0cmluZyIsInByZWZpeCIsImhleENvZGUiLCJoZXhCYXNlIiwiYSIsImhleEEiLCJyZ2IiLCJNYXRoIiwicm91bmQiLCJyIiwiZyIsImIiLCJyZ2JTdHIiLCJmb3JtYXQiLCJoc2xDb2xvciIsInRvSFNMIiwiaHNsIiwiaCIsInMiLCJsIiwiaHNsU3RyIiwidGhlbWVDb2xvciIsImZpbmRDb2xvckVxdWFsIiwic3RyVmFsdWUiLCJlc2NhcGUiLCJzdHIiLCJ0cmltIiwiaXNIdG1sVGFnIiwiaW5jbHVkZXMiLCJudW1iZXIiLCJwcmVjaXNpb24iLCJmb3JtYXR0ZWROdW1iZXIiLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInNlbGVjdG9yaXplIiwic2VsZWN0b3JpemVkU3RyIiwidG9Mb3dlckNhc2UiLCJ0ZXN0Iiwic3Vic3RyIiwiY3JlYXRlSmF2YXNjcmlwdFN0cmluZ0Zyb21PYmoiLCJKU09OIiwic3RyaW5naWZ5Iiwib2JqZWN0IiwiY3JlYXRlU3R5bGVkQ29tcG9uZW50c1J1bGVzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsInZhbHVlIiwiY2FtZWxDYXNlVG9TbmFrZUNhc2UiLCJtYXBWYWx1ZSIsImpvaW4iLCJ4IiwieSIsImxheWVySGFzR3JhZGllbnQiLCJmaWxscyIsInNvbWUiLCJmIiwidHlwZSIsImxheWVySGFzQmxlbmRNb2RlIiwiYmxlbmRNb2RlIiwibG93ZXJjYXNlRmlyc3QiLCJ1cHBlcmNhc2VGaXJzdCIsImdlbmVyYXRlTmFtZSIsImNoYXJBdCIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiam9pblRva2VucyIsInRva2Vuc0ZvclN0cmluZyIsInRva2VuaXplciIsIm1hdGNoUmVzdWx0IiwibWF0Y2giLCJ0b2tlbiIsImdlbmVyYXRlQ29sb3JPYmplY3RGcm9tUHJvamVjdCIsImNvbG9yc09iamVjdCIsImNvbG9yc1N0eWxlc1N0ciIsImdlbmVyYXRlTGF5ZXJDb21wb25lbnQiLCJjb250YWluZXJTdHlsZSIsImhlaWdodCIsInJlY3QiLCJ3aWR0aCIsImxlbmd0aCIsImZpbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaGFkb3dzIiwiYXNzaWduIiwiZ2VuZXJhdGVTaGFkb3dTdHlsZU9iamVjdCIsImJvcmRlcnMiLCJnZW5lcmF0ZUJvcmRlclN0eWxlT2JqZWN0IiwiYm9yZGVyUmFkaXVzIiwib3BhY2l0eSIsInJvdGF0aW9uIiwidHJhbnNmb3JtIiwiZ2VuZXJhdGVMYXllckNvbXBvbmVudFdpdGhUZXh0IiwiYmx1ciIsImdlbmVyYXRlTGF5ZXJDb21wb25lbnRXaXRoQmx1ciIsImNvbnRhaW5lclN0eWxlU3RyIiwidGV4dENvbXBvbmVudE5hbWVzIiwidGV4dENvbXBvbmVudHNUb0ltcG9ydCIsImNyZWF0ZWRUZXh0Q29tcG9uZW50cyIsImkiLCJyYW5nZSIsImVuZCIsInN0YXJ0IiwiY29udGVudCIsInByb2plY3RUZXh0U3R5bGUiLCJmaW5kVGV4dFN0eWxlRXF1YWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInRleHRDaGlsZHMiLCJfIiwic2hhZG93IiwibGF5ZXJUeXBlIiwic2hhZG93Q29sb3IiLCJ0ZXh0U2hhZG93Q29sb3IiLCJ0ZXh0U2hhZG93T2Zmc2V0Iiwib2Zmc2V0WCIsImRlbnNpdHlEaXZpc29yIiwib2Zmc2V0WSIsInRleHRTaGFkb3dSYWRpdXMiLCJibHVyUmFkaXVzIiwic2hhZG93T2Zmc2V0Iiwic2hhZG93UmFkaXVzIiwic2hhZG93T3BhY2l0eSIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsInRoaWNrbmVzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdETyxJQUFNQSwwQ0FBaUIsR0FBdkI7QUFDQSxJQUFNQywwQ0FBaUIsR0FBdkI7QUFDQSxJQUFNQywwQ0FBaUIsR0FBdkI7QUFDQSxJQUFNQyw4QkFBVyxFQUFqQjtBQUNBLElBQU1DLHNDQUFlLENBQXJCO0FBQ0EsSUFBTUMsb0RBQXNCLEdBQTVCO0FBQ0EsSUFBTUMsd0RBQXdCLEdBQTlCO0FBQ0EsSUFBTUMsb0VBQThCLENBQXBDO0FBQ0EsSUFBTUMsMERBQXlCLENBQ3BDLGlCQURvQyxFQUVwQyxhQUZvQyxFQUdwQyxPQUhvQyxFQUlwQyxhQUpvQyxFQUtwQyxxQkFMb0MsRUFNcEMsaUJBTm9DLENBQS9CO0FBUUEsSUFBTUMsZ0NBQVksQ0FDdkIsR0FEdUIsRUFFdkIsTUFGdUIsRUFHdkIsU0FIdUIsRUFJdkIsTUFKdUIsRUFLdkIsU0FMdUIsRUFNdkIsT0FOdUIsRUFPdkIsT0FQdUIsRUFRdkIsR0FSdUIsRUFTdkIsTUFUdUIsRUFVdkIsS0FWdUIsRUFXdkIsS0FYdUIsRUFZdkIsWUFadUIsRUFhdkIsTUFidUIsRUFjdkIsSUFkdUIsRUFldkIsUUFmdUIsRUFnQnZCLFFBaEJ1QixFQWlCdkIsU0FqQnVCLEVBa0J2QixNQWxCdUIsRUFtQnZCLE1BbkJ1QixFQW9CdkIsS0FwQnVCLEVBcUJ2QixVQXJCdUIsRUFzQnZCLE1BdEJ1QixFQXVCdkIsVUF2QnVCLEVBd0J2QixJQXhCdUIsRUF5QnZCLEtBekJ1QixFQTBCdkIsU0ExQnVCLEVBMkJ2QixLQTNCdUIsRUE0QnZCLFFBNUJ1QixFQTZCdkIsS0E3QnVCLEVBOEJ2QixJQTlCdUIsRUErQnZCLElBL0J1QixFQWdDdkIsSUFoQ3VCLEVBaUN2QixPQWpDdUIsRUFrQ3ZCLFVBbEN1QixFQW1DdkIsWUFuQ3VCLEVBb0N2QixRQXBDdUIsRUFxQ3ZCLFFBckN1QixFQXNDdkIsTUF0Q3VCLEVBdUN2QixJQXZDdUIsRUF3Q3ZCLElBeEN1QixFQXlDdkIsSUF6Q3VCLEVBMEN2QixJQTFDdUIsRUEyQ3ZCLElBM0N1QixFQTRDdkIsSUE1Q3VCLEVBNkN2QixNQTdDdUIsRUE4Q3ZCLFFBOUN1QixFQStDdkIsUUEvQ3VCLEVBZ0R2QixJQWhEdUIsRUFpRHZCLE1BakR1QixFQWtEdkIsR0FsRHVCLEVBbUR2QixRQW5EdUIsRUFvRHZCLEtBcER1QixFQXFEdkIsT0FyRHVCLEVBc0R2QixLQXREdUIsRUF1RHZCLEtBdkR1QixFQXdEdkIsUUF4RHVCLEVBeUR2QixPQXpEdUIsRUEwRHZCLFFBMUR1QixFQTJEdkIsSUEzRHVCLEVBNER2QixNQTVEdUIsRUE2RHZCLE1BN0R1QixFQThEdkIsS0E5RHVCLEVBK0R2QixNQS9EdUIsRUFnRXZCLE1BaEV1QixFQWlFdkIsTUFqRXVCLEVBa0V2QixVQWxFdUIsRUFtRXZCLE1BbkV1QixFQW9FdkIsT0FwRXVCLEVBcUV2QixLQXJFdUIsRUFzRXZCLFVBdEV1QixFQXVFdkIsUUF2RXVCLEVBd0V2QixJQXhFdUIsRUF5RXZCLFVBekV1QixFQTBFdkIsUUExRXVCLEVBMkV2QixRQTNFdUIsRUE0RXZCLEdBNUV1QixFQTZFdkIsT0E3RXVCLEVBOEV2QixTQTlFdUIsRUErRXZCLEtBL0V1QixFQWdGdkIsVUFoRnVCLEVBaUZ2QixHQWpGdUIsRUFrRnZCLElBbEZ1QixFQW1GdkIsSUFuRnVCLEVBb0Z2QixNQXBGdUIsRUFxRnZCLEdBckZ1QixFQXNGdkIsTUF0RnVCLEVBdUZ2QixRQXZGdUIsRUF3RnZCLFNBeEZ1QixFQXlGdkIsUUF6RnVCLEVBMEZ2QixNQTFGdUIsRUEyRnZCLE9BM0Z1QixFQTRGdkIsUUE1RnVCLEVBNkZ2QixRQTdGdUIsRUE4RnZCLE1BOUZ1QixFQStGdkIsUUEvRnVCLEVBZ0d2QixPQWhHdUIsRUFpR3ZCLEtBakd1QixFQWtHdkIsU0FsR3VCLEVBbUd2QixLQW5HdUIsRUFvR3ZCLEtBcEd1QixFQXFHdkIsT0FyR3VCLEVBc0d2QixPQXRHdUIsRUF1R3ZCLElBdkd1QixFQXdHdkIsVUF4R3VCLEVBeUd2QixVQXpHdUIsRUEwR3ZCLE9BMUd1QixFQTJHdkIsSUEzR3VCLEVBNEd2QixPQTVHdUIsRUE2R3ZCLE1BN0d1QixFQThHdkIsT0E5R3VCLEVBK0d2QixJQS9HdUIsRUFnSHZCLE9BaEh1QixFQWlIdkIsR0FqSHVCLEVBa0h2QixJQWxIdUIsRUFtSHZCLEtBbkh1QixFQW9IdkIsT0FwSHVCLEVBcUh2QixLQXJIdUIsQ0FBbEI7QUF1SEEsSUFBTUMsc0NBQWU7QUFDMUJDLGdCQUFjLGFBRFk7QUFFMUJDLGNBQVksV0FGYztBQUcxQkMsa0JBQWdCLGVBSFU7QUFJMUJDLHVCQUFxQixtQkFKSztBQUsxQkMsc0JBQW9CLGtCQUxNO0FBTTFCQyxxQkFBbUIsaUJBTk87QUFPMUJDLDhCQUE0QiwwQkFQRjtBQVExQkMsdUJBQXFCO0FBUkssQ0FBckIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDdklQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOztBQVFBLElBQU1DLG9DQUFvQyxTQUFwQ0EsaUNBQW9DLENBQUNDLE9BQUQsRUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBa0M7QUFDMUUsTUFBSUMsYUFBYSxFQUFqQjtBQUNBLE1BQUlDLFFBQVEsRUFBWjtBQUYwRTtBQUFBO0FBQUE7O0FBQUE7QUFHMUUseUJBQXNCRixVQUF0Qiw4SEFBa0M7QUFBQSxVQUF6QkcsU0FBeUI7O0FBQ2hDLFVBQU1DLGVBQWUseUJBQWFELFVBQVVFLFFBQXZCLENBQXJCO0FBQ0EsVUFBSSxDQUFDSCxNQUFNRSxZQUFOLENBQUwsRUFBMEI7QUFDeEJGLGNBQU1FLFlBQU4sSUFBc0JELFVBQVVFLFFBQWhDO0FBQ0Q7QUFDREosb0JBQWUsR0FBRUssbUNBQ2ZQLE9BRGUsRUFFZkQsT0FGZSxFQUdmSyxTQUhlLENBSWYsTUFKRjtBQUtEO0FBYnlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZTFFLE1BQU1JLGNBQWMsd0NBQTRCTCxLQUE1QixDQUFwQjtBQUNBLFNBQVEsc0RBQXFESyxXQUFZLDZCQUE0Qk4sVUFBVyxFQUFoSDtBQUNELENBakJEOztBQW1CTyxJQUFNSyxrRkFBcUMsU0FBckNBLGtDQUFxQyxDQUNoRFAsT0FEZ0QsRUFFaERELE9BRmdELEVBR2hESyxTQUhnRCxFQUk3QztBQUNILE1BQU1LLFdBQVc7QUFDZkMsZ0JBQWEsU0FBUVgsUUFBUVksZUFBUixJQUEyQixNQUFPLElBQUcseUJBQ3hEUCxVQUFVRSxRQUQ4QyxDQUV4RCxFQUhhO0FBSWZNLGNBQVcsR0FBRVIsVUFBVVEsUUFBVixJQUNYLGtCQUFNUixVQUFVUSxRQUFoQixFQUEwQjFCLHNDQUExQixDQUF1RCxHQUN2RGEsUUFBUWMsU0FBUixHQUFvQiwyQkFBcEIsR0FBa0QsRUFDbkQsRUFQYztBQVFmQyxtQkFDRVYsVUFBVVUsYUFBVixJQUNBLGtCQUFNVixVQUFVVSxhQUFoQixFQUErQjVCLHNDQUEvQixDQVZhO0FBV2Y2QixlQUFXWCxVQUFVVztBQVhOLEdBQWpCO0FBYUEsTUFBSVgsVUFBVVksS0FBZCxFQUFxQjtBQUNuQixRQUFNQyxhQUFhLHVCQUFXbEIsT0FBWCxFQUFvQkMsT0FBcEIsRUFBNkJJLFVBQVVZLEtBQXZDLENBQW5CO0FBQ0FQLGFBQVNPLEtBQVQsR0FBa0IsR0FDaEJqQixRQUFRbUIsYUFBUixHQUF3QixpQkFBeEIsR0FBNEMsRUFDN0MsR0FBRUQsVUFBVyxFQUZkO0FBR0Q7QUFDRCxNQUFJYixVQUFVZSxVQUFkLEVBQTBCO0FBQ3hCVixhQUFTVSxVQUFULEdBQXVCLEdBQUVmLFVBQVVlLFVBQVYsSUFDdkIsa0JBQU1mLFVBQVVlLFVBQWhCLEVBQTRCakMsc0NBQTVCLENBQXlELEdBQ3pEYSxRQUFRYyxTQUFSLEdBQW9CLDJCQUFwQixHQUFrRCxFQUNuRCxFQUhEO0FBSUQ7O0FBRUQsTUFBTU8sZ0JBQWdCLHdDQUE0QlgsUUFBNUIsRUFDbkJZLE9BRG1CLENBQ1gsb0JBRFcsRUFDVyxlQURYLEVBRW5CQSxPQUZtQixDQUVYLHNCQUZXLEVBRWEsaUJBRmIsRUFHbkJBLE9BSG1CLENBR1gscUJBSFcsRUFHWSxnQkFIWixDQUF0QjtBQUlBLE1BQU1DLGdCQUFnQiwyQkFBZSx5QkFBYWxCLFVBQVVtQixJQUF2QixDQUFmLENBQXRCO0FBQ0EsTUFBTUMsZ0JBQWdCekIsUUFBUTBCLGlCQUFSLEdBQ2pCLFVBQVMxQixRQUFRMEIsaUJBQWtCLEdBRGxCLEdBRWxCLGFBRko7O0FBSUEsU0FBUSxnQkFBZUgsYUFBYyxNQUFLRSxhQUFjLEtBQUlKLGFBQWMsSUFBMUU7QUFDRCxDQXpDTTs7UUEyQ0V0QixpQyxHQUFBQSxpQzs7Ozs7Ozs7Ozs7OztBQ3ZFVDs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQSxJQUFNNEIsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzVDLE1BQU03QixVQUFVO0FBQ2Q4QixpQkFBYUYsUUFBUUcsU0FBUixDQUFrQnpDLHdCQUFhQyxZQUEvQjtBQURDLEdBQWhCOztBQUlBLE1BQU15QyxPQUFPLDJDQUErQmhDLE9BQS9CLEVBQXdDNEIsUUFBUTNCLE9BQWhELEVBQXlENEIsTUFBekQsQ0FBYjs7QUFFQSxTQUFPO0FBQ0xHLFFBREs7QUFFTEMsY0FBVTtBQUZMLEdBQVA7QUFJRCxDQVhEOztBQWFBLElBQU1DLHVCQUF1QixTQUF2QkEsb0JBQXVCLENBQUNOLE9BQUQsRUFBVTFCLFVBQVYsRUFBeUI7QUFDcEQsTUFBTUYsVUFBVTtBQUNkOEIsaUJBQWFGLFFBQVFHLFNBQVIsQ0FBa0J6Qyx3QkFBYUMsWUFBL0IsQ0FEQztBQUVkdUIsZUFBV2MsUUFBUUcsU0FBUixDQUFrQnpDLHdCQUFhRSxVQUEvQixDQUZHO0FBR2QyQixtQkFBZVMsUUFBUUcsU0FBUixDQUFrQnpDLHdCQUFhRyxjQUEvQixDQUhEO0FBSWRpQyx1QkFBbUJFLFFBQVFHLFNBQVIsQ0FBa0J6Qyx3QkFBYUksbUJBQS9CLENBSkw7QUFLZHlDLHNCQUFrQlAsUUFBUUcsU0FBUixDQUFrQnpDLHdCQUFhSyxrQkFBL0IsQ0FMSjtBQU1kaUIscUJBQWlCZ0IsUUFBUUcsU0FBUixDQUFrQnpDLHdCQUFhTSxpQkFBL0I7QUFOSCxHQUFoQjs7QUFTQSxNQUFNb0MsT0FBTyxrREFDWGhDLE9BRFcsRUFFWDRCLFFBQVEzQixPQUZHLEVBR1hDLFVBSFcsQ0FBYjs7QUFNQSxTQUFPO0FBQ0w4QixRQURLO0FBRUxDLGNBQVU7QUFGTCxHQUFQO0FBSUQsQ0FwQkQ7O0FBc0JBLElBQU1HLFFBQVEsZUFBQ1IsT0FBRCxFQUFVUSxNQUFWLEVBQW9CO0FBQ2hDLE1BQU1wQyxVQUFVO0FBQ2Q4QixpQkFBYUYsUUFBUUcsU0FBUixDQUFrQnpDLHdCQUFhQyxZQUEvQixDQURDO0FBRWRtQyx1QkFBbUJFLFFBQVFHLFNBQVIsQ0FBa0J6Qyx3QkFBYUksbUJBQS9CLENBRkw7QUFHZHlDLHNCQUFrQlAsUUFBUUcsU0FBUixDQUFrQnpDLHdCQUFhSyxrQkFBL0IsQ0FISjtBQUlkaUIscUJBQWlCZ0IsUUFBUUcsU0FBUixDQUFrQnpDLHdCQUFhTSxpQkFBL0IsQ0FKSDtBQUtkeUMsOEJBQTBCVCxRQUFRRyxTQUFSLENBQ3hCekMsd0JBQWFPLDBCQURXLENBTFo7QUFRZHlDLHVCQUFtQlYsUUFBUUcsU0FBUixDQUFrQnpDLHdCQUFhUSxtQkFBL0I7QUFSTCxHQUFoQjtBQVVBLE1BQU1rQyxPQUFPLG9DQUF1QmhDLE9BQXZCLEVBQWdDNEIsUUFBUTNCLE9BQXhDLEVBQWlEbUMsTUFBakQsQ0FBYjtBQUNBLFNBQU8sRUFBRUosSUFBRixFQUFRQyxVQUFVLFlBQWxCLEVBQVA7QUFDRCxDQWJEOztBQWVBLElBQU1NLFVBQVUsU0FBVkEsT0FBVSxDQUFDWCxPQUFELEVBQVVZLElBQVYsRUFBbUI7QUFDakMsU0FBUSxNQUFLQSxJQUFLLEVBQWxCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyx5QkFBeUIsU0FBekJBLHNCQUF5QixDQUFDYixPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDbEQsTUFBTWEsYUFBYWYsaUJBQWlCQyxPQUFqQixFQUEwQkMsTUFBMUIsQ0FBbkI7QUFDQSxNQUFNRyxPQUFPVSxXQUFXVixJQUF4Qjs7QUFFQSxTQUFPO0FBQ0xBLFFBREs7QUFFTFcsY0FBVSxVQUZMO0FBR0xWLGNBQVU7QUFITCxHQUFQO0FBS0QsQ0FURDs7QUFXQSxJQUFNVyw2QkFBNkIsU0FBN0JBLDBCQUE2QixDQUFDaEIsT0FBRCxFQUFVMUIsVUFBVixFQUF5QjtBQUMxRCxNQUFNd0MsYUFBYVIscUJBQXFCTixPQUFyQixFQUE4QjFCLFVBQTlCLENBQW5CO0FBQ0EsTUFBTThCLE9BQU9VLFdBQVdWLElBQXhCOztBQUVBLFNBQU87QUFDTEEsUUFESztBQUVMVyxjQUFVLFVBRkw7QUFHTFYsY0FBVTtBQUhMLEdBQVA7QUFLRCxDQVREOztrQkFXZTtBQUNiRyxPQURhO0FBRWJULGtCQUZhO0FBR2JPLHNCQUhhO0FBSWJLLFNBSmE7QUFLYkUsd0JBTGE7QUFNYkc7QUFOYSxDOzs7Ozs7Ozs7Ozs7OztBQ2xGZjs7QUFPQSxJQUFJQyxpQkFBaUIsSUFBSUMsS0FBS0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNsREMsZUFBYSxLQURxQztBQUVsREMseUJBQXVCO0FBRjJCLENBQS9CLENBQXJCOztBQUtBLFNBQVNDLEtBQVQsQ0FBZUMsR0FBZixFQUFvQjtBQUNsQixTQUFPLENBQUNBLE1BQU1wRSxtQkFBTixHQUFpQixHQUFqQixHQUF1QixFQUF4QixJQUE4Qm9FLElBQUlDLFFBQUosQ0FBYXJFLG1CQUFiLENBQXJDO0FBQ0Q7O0FBRUQsU0FBU3NFLFdBQVQsQ0FBcUJ4QixNQUFyQixFQUE2QjtBQUMzQixTQUFPQSxPQUFPeUIsTUFBUCxDQUFjLFVBQUNDLFlBQUQsRUFBZXRDLEtBQWY7QUFBQSxXQUF5QnNDLGFBQWFDLEtBQWIsQ0FBbUJ2QyxLQUFuQixDQUF6QjtBQUFBLEdBQWQsQ0FBUDtBQUNEOztBQUVELFNBQVN3QyxzQkFBVCxDQUFnQ3hDLEtBQWhDLEVBQXVDYSxXQUF2QyxFQUFvRDtBQUNsRCxNQUFJLEVBQUUsT0FBT2IsS0FBUCxJQUFnQixPQUFPQSxLQUF2QixJQUFnQyxPQUFPQSxLQUF2QyxJQUFnRCxPQUFPQSxLQUF6RCxDQUFKLEVBQXFFO0FBQ25FO0FBQ0Q7O0FBRUQsVUFBUWEsV0FBUjtBQUNFLFNBQUssS0FBTDtBQUNFLGFBQU80QixZQUFZekMsS0FBWixDQUFQOztBQUVGLFNBQUssS0FBTDtBQUNFLGFBQU8wQyxhQUFhMUMsS0FBYixDQUFQOztBQUVGLFNBQUssS0FBTDtBQUNFLGFBQU8yQyxhQUFhM0MsS0FBYixDQUFQOztBQUVGLFNBQUssU0FBTDtBQUNBO0FBQ0UsYUFBTzRDLGdCQUFnQjVDLEtBQWhCLENBQVA7QUFaSjtBQWNEOztBQUVELFNBQVM2QyxtQkFBVCxDQUE2QmpDLE1BQTdCLEVBQXFDQyxXQUFyQyxFQUFrRDtBQUNoRCxTQUFPRCxPQUFPeUIsTUFBUCxDQUFjLFVBQUNTLFFBQUQsRUFBVzlDLEtBQVgsRUFBcUI7QUFDeEMsUUFBSStDLGNBQWNQLHVCQUF1QnhDLEtBQXZCLEVBQThCYSxXQUE5QixDQUFsQjtBQUNBaUMsYUFBU0MsV0FBVCxJQUF3Qi9DLE1BQU1PLElBQTlCO0FBQ0EsV0FBT3VDLFFBQVA7QUFDRCxHQUpNLEVBSUosRUFKSSxDQUFQO0FBS0Q7O0FBRUQsU0FBU0wsV0FBVCxDQUFxQnpDLEtBQXJCLEVBQTRCZ0QsTUFBNUIsRUFBb0M7QUFDbEMsTUFBSUMsVUFBVWpELE1BQU1rRCxPQUFOLEVBQWQ7O0FBRUEsTUFBSWxELE1BQU1tRCxDQUFOLEdBQVUsQ0FBZCxFQUFpQjtBQUNmLFFBQUlDLE9BQU9uQixNQUFNakMsTUFBTW1ELENBQU4sR0FBVXhGLHlCQUFoQixDQUFYOztBQUVBc0YsY0FBVUQsU0FBU0ksT0FBT0gsT0FBaEIsR0FBMEJBLFVBQVVHLElBQTlDO0FBQ0Q7O0FBRUQsU0FBUSxJQUFHSCxPQUFRLEVBQW5CO0FBQ0Q7O0FBRUQsU0FBU1AsWUFBVCxDQUFzQjFDLEtBQXRCLEVBQTZCO0FBQzNCLE1BQUlxRCxNQUFPLEdBQUVDLEtBQUtDLEtBQUwsQ0FBV3ZELE1BQU13RCxDQUFqQixDQUFvQixLQUFJRixLQUFLQyxLQUFMLENBQVd2RCxNQUFNeUQsQ0FBakIsQ0FBb0IsS0FBSUgsS0FBS0MsS0FBTCxDQUMzRHZELE1BQU0wRCxDQURxRCxDQUUzRCxFQUZGOztBQUlBLE1BQUlDLFNBQ0YzRCxNQUFNbUQsQ0FBTixHQUFVLENBQVYsR0FDSyxRQUFPRSxHQUFJLEtBQUl6QixlQUFlZ0MsTUFBZixDQUFzQjVELE1BQU1tRCxDQUE1QixDQUErQixHQURuRCxHQUVLLE9BQU1FLEdBQUksR0FIakI7O0FBS0EsU0FBT00sTUFBUDtBQUNEOztBQUVELFNBQVNoQixZQUFULENBQXNCM0MsS0FBdEIsRUFBNkI7QUFDM0IsTUFBSTZELFdBQVc3RCxNQUFNOEQsS0FBTixFQUFmO0FBQ0EsTUFBSUMsTUFDRCxHQUFFVCxLQUFLQyxLQUFMLENBQVdNLFNBQVNHLENBQVQsR0FBYXBHLHlCQUF4QixDQUF3QyxJQUEzQyxHQUNDLEdBQUUwRixLQUFLQyxLQUFMLENBQVdNLFNBQVNJLENBQVQsR0FBYXBHLHlCQUF4QixDQUF3QyxLQUQzQyxHQUVDLEdBQUV5RixLQUFLQyxLQUFMLENBQVdNLFNBQVNLLENBQVQsR0FBYXJHLHlCQUF4QixDQUF3QyxHQUg3Qzs7QUFLQSxNQUFJc0csU0FDRm5FLE1BQU1tRCxDQUFOLEdBQVUsQ0FBVixHQUNLLFFBQU9ZLEdBQUksS0FBSW5DLGVBQWVnQyxNQUFmLENBQXNCNUQsTUFBTW1ELENBQTVCLENBQStCLEdBRG5ELEdBRUssT0FBTVksR0FBSSxHQUhqQjs7QUFLQSxTQUFPSSxNQUFQO0FBQ0Q7O0FBRUQsU0FBU3ZCLGVBQVQsQ0FBeUI1QyxLQUF6QixFQUFnQztBQUM5QixTQUFPQSxNQUFNbUQsQ0FBTixHQUFVLENBQVYsR0FBY1QsYUFBYTFDLEtBQWIsQ0FBZCxHQUFvQ3lDLFlBQVl6QyxLQUFaLENBQTNDO0FBQ0Q7O0FBRUQsSUFBTW9FLGFBQWEsb0JBQUNyRixPQUFELEVBQVVDLE9BQVYsRUFBbUJnQixLQUFuQixFQUE2QjtBQUM5QyxNQUFNb0UsYUFDSnBGLFFBQVFxRixjQUFSLENBQXVCckUsS0FBdkIsS0FDQXdDLHVCQUF1QnhDLEtBQXZCLEVBQThCakIsUUFBUThCLFdBQXRDLENBRkY7QUFHQSxNQUFNeUQsV0FBV0YsV0FBVzdELElBQVgsR0FDWixtQkFBa0J4QixRQUFRbUMsZ0JBQVIsSUFBNEIsUUFBUyxJQUN0RGtELFdBQVc3RCxJQUNaLEdBSFksR0FJYjZELFVBSko7QUFLQSxTQUFPRSxRQUFQO0FBQ0QsQ0FWRDs7UUFhRWxDLFcsR0FBQUEsVztRQUNBUyxtQixHQUFBQSxtQjtRQUNBRCxlLEdBQUFBLGU7UUFDQUosc0IsR0FBQUEsc0I7UUFDQTRCLFUsR0FBQUEsVTs7Ozs7Ozs7Ozs7Ozs7OztBQzlHRjs7QUFFQSxTQUFTRyxNQUFULENBQWdCQyxHQUFoQixFQUFxQjtBQUNuQixTQUFPQSxJQUNKQyxJQURJLEdBRUpwRSxPQUZJLENBRUksV0FGSixFQUVpQixFQUZqQixFQUdKQSxPQUhJLENBR0ksV0FISixFQUdpQixFQUhqQixFQUlKQSxPQUpJLENBSUksTUFKSixFQUlZLEdBSlosQ0FBUDtBQUtEOztBQUVELFNBQVNxRSxTQUFULENBQW1CRixHQUFuQixFQUF3QjtBQUN0QixTQUFPcEcscUJBQVV1RyxRQUFWLENBQW1CSCxHQUFuQixDQUFQO0FBQ0Q7O0FBRUQsU0FBU2pCLEtBQVQsQ0FBZXFCLE1BQWYsRUFBdUJDLFNBQXZCLEVBQWtDO0FBQ2hDLE1BQUlDLGtCQUFrQkMsT0FBT0gsTUFBUCxFQUFlSSxjQUFmLENBQThCLE9BQTlCLEVBQXVDO0FBQzNEakQsaUJBQWEsS0FEOEM7QUFFM0RDLDJCQUF1QjZDO0FBRm9DLEdBQXZDLENBQXRCOztBQUtBLFNBQU9FLE9BQU9ELGVBQVAsQ0FBUDtBQUNEOztBQUVELFNBQVNHLFdBQVQsQ0FBcUJULEdBQXJCLEVBQTBCO0FBQ3hCLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ1IsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBSVUsa0JBQWtCVixJQUFJQyxJQUFKLEVBQXRCOztBQUVBLE1BQUlDLFVBQVVGLEdBQVYsQ0FBSixFQUFvQjtBQUNsQixXQUFPVSxnQkFBZ0JDLFdBQWhCLEVBQVA7QUFDRDs7QUFFRCxNQUFJLFFBQVFDLElBQVIsQ0FBYUYsZUFBYixDQUFKLEVBQW1DO0FBQ2pDLFFBQUkzRSxPQUFPZ0UsT0FBT1csZ0JBQWdCRyxNQUFoQixDQUF1QixDQUF2QixDQUFQLENBQVg7O0FBRUEsUUFBSTlFLElBQUosRUFBVTtBQUNSLGFBQU8yRSxnQkFBZ0IsQ0FBaEIsSUFBcUIzRSxJQUE1QjtBQUNEO0FBQ0Y7O0FBRUQyRSxvQkFBa0JYLE9BQU9XLGVBQVAsQ0FBbEI7O0FBRUEsU0FBT0EsbUJBQW9CLElBQUdBLGVBQWdCLEVBQTlDO0FBQ0Q7O0FBRUQsSUFBTUksZ0NBQWdDLFNBQWhDQSw2QkFBZ0MsU0FBVTtBQUM5QyxNQUFJZCxNQUFNZSxLQUFLQyxTQUFMLENBQWVDLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIxSCx1QkFBN0IsQ0FBVjtBQUNBeUcsUUFBTUEsSUFDSG5FLE9BREcsQ0FDSyxVQURMLEVBQ2lCLEtBRGpCLEVBRUhBLE9BRkcsQ0FFSyxlQUZMLEVBRXNCLFVBRnRCLEVBR0hBLE9BSEcsQ0FHSyxJQUhMLEVBR1csR0FIWCxDQUFOO0FBSUEsU0FBT21FLEdBQVA7QUFDRCxDQVBEOztBQVNBLElBQU1rQiw4QkFBOEIsU0FBOUJBLDJCQUE4QixTQUFVO0FBQzVDLFNBQ0UsT0FDQUMsT0FBT0MsT0FBUCxDQUFlSCxNQUFmLEVBQ0dJLEdBREgsQ0FFSTtBQUFBO0FBQUEsUUFBRUMsR0FBRjtBQUFBLFFBQU9DLEtBQVA7O0FBQUEsV0FDRyxLQUFJQyxxQkFBcUJGLEdBQXJCLENBQTBCLEtBQUlHLFNBQ2pDRCxxQkFBcUJGLEdBQXJCLENBRGlDLEVBRWpDQyxLQUZpQyxDQUdqQyxFQUpKO0FBQUEsR0FGSixFQVFHRyxJQVJILENBUVEsS0FSUixDQURBLEdBVUEsSUFYRjtBQWFELENBZEQ7O0FBZ0JBLElBQU1ELFdBQVcsU0FBWEEsUUFBVyxDQUFDSCxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDL0IsVUFBUUQsR0FBUjtBQUNFLFNBQUssUUFBTDtBQUNBLFNBQUssT0FBTDtBQUNBLFNBQUssZUFBTDtBQUNBLFNBQUssbUJBQUw7QUFDQSxTQUFLLG9CQUFMO0FBQ0EsU0FBSyxzQkFBTDtBQUNBLFNBQUsscUJBQUw7QUFDQSxTQUFLLGNBQUw7QUFDQSxTQUFLLGtCQUFMO0FBQ0EsU0FBSyxtQkFBTDtBQUNBLFNBQUsscUJBQUw7QUFDQSxTQUFLLG9CQUFMO0FBQ0EsU0FBSyxRQUFMO0FBQ0EsU0FBSyxZQUFMO0FBQ0EsU0FBSyxhQUFMO0FBQ0EsU0FBSyxlQUFMO0FBQ0EsU0FBSyxjQUFMO0FBQ0EsU0FBSyxTQUFMO0FBQ0EsU0FBSyxhQUFMO0FBQ0EsU0FBSyxjQUFMO0FBQ0EsU0FBSyxnQkFBTDtBQUNBLFNBQUssZUFBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssT0FBTDtBQUNFLGFBQU9DLFFBQVEsSUFBZjtBQUNGO0FBQ0UsYUFBT0EsS0FBUDtBQTdCSjtBQStCRCxDQWhDRDs7QUFrQ0EsSUFBTUMsdUJBQXVCLFNBQXZCQSxvQkFBdUI7QUFBQSxTQUMzQi9CLEVBQ0c1RCxPQURILENBQ1csYUFEWCxFQUMwQixVQUFTOEYsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFDckMsV0FBTyxNQUFNQSxFQUFFakIsV0FBRixFQUFiO0FBQ0QsR0FISCxFQUlHOUUsT0FKSCxDQUlXLElBSlgsRUFJaUIsRUFKakIsQ0FEMkI7QUFBQSxDQUE3Qjs7UUFRRXFFLFMsR0FBQUEsUztRQUNBbkIsSyxHQUFBQSxLO1FBQ0EwQixXLEdBQUFBLFc7UUFDQUssNkIsR0FBQUEsNkI7UUFDQUksMkIsR0FBQUEsMkI7Ozs7Ozs7Ozs7OztBQ3RIRixTQUFTVyxnQkFBVCxDQUEwQmxGLEtBQTFCLEVBQWlDO0FBQy9CLFNBQU9BLE1BQU1tRixLQUFOLENBQVlDLElBQVosQ0FBaUI7QUFBQSxXQUFLQyxFQUFFQyxJQUFGLEtBQVcsVUFBaEI7QUFBQSxHQUFqQixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0MsaUJBQVQsQ0FBMkJ2RixLQUEzQixFQUFrQztBQUNoQyxTQUFPQSxNQUFNbUYsS0FBTixDQUFZQyxJQUFaLENBQWlCO0FBQUEsV0FBS0MsRUFBRUcsU0FBRixJQUFlSCxFQUFFRyxTQUFGLEtBQWdCLFFBQXBDO0FBQUEsR0FBakIsQ0FBUDtBQUNEOztRQUVRTixnQixHQUFBQSxnQjtRQUFrQkssaUIsR0FBQUEsaUI7Ozs7Ozs7Ozs7OztRQ1JYRSxjLEdBQUFBLGM7UUFJQUMsYyxHQUFBQSxjO1FBc0JBQyxZLEdBQUFBLFk7QUExQlQsU0FBU0YsY0FBVCxDQUF3QjNDLENBQXhCLEVBQTJCO0FBQ2hDLFNBQU9BLEVBQUU4QyxNQUFGLENBQVMsQ0FBVCxFQUFZNUIsV0FBWixLQUE0QmxCLEVBQUUrQyxTQUFGLENBQVksQ0FBWixDQUFuQztBQUNEOztBQUVNLFNBQVNILGNBQVQsQ0FBd0I1QyxDQUF4QixFQUEyQjtBQUNoQyxTQUFPQSxFQUFFOEMsTUFBRixDQUFTLENBQVQsRUFBWUUsV0FBWixLQUE0QmhELEVBQUUrQyxTQUFGLENBQVksQ0FBWixDQUFuQztBQUNEOztBQUVELFNBQVNFLFVBQVQsQ0FBb0JoSSxVQUFwQixFQUFnQztBQUM5QixNQUFJcUIsT0FBT3JCLFdBQVcyRyxHQUFYLENBQWVnQixjQUFmLEVBQStCWCxJQUEvQixDQUFvQyxFQUFwQyxDQUFYO0FBQ0EsU0FBT1UsZUFBZXJHLElBQWYsQ0FBUDtBQUNEOztBQUVELFNBQVM0RyxlQUFULENBQXlCM0MsR0FBekIsRUFBOEI7QUFDNUIsTUFBSTRDLFlBQVkseUNBQWhCOztBQUVBLE1BQUlDLGNBQWM3QyxJQUFJOEMsS0FBSixDQUFVRixTQUFWLENBQWxCO0FBQ0EsTUFBSSxDQUFDQyxXQUFMLEVBQWtCO0FBQ2hCLFdBQU8sQ0FBQyxTQUFELEVBQVksTUFBWixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsWUFBWXhCLEdBQVosQ0FBZ0IsVUFBUzBCLEtBQVQsRUFBZ0I7QUFDckMsV0FBT0EsTUFBTXBDLFdBQU4sRUFBUDtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVNLFNBQVMyQixZQUFULENBQXNCdkcsSUFBdEIsRUFBNEI7QUFDakMsU0FBTzJHLFdBQVdDLGdCQUFnQjVHLElBQWhCLENBQVgsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7O0FDNUJEOztBQUVBLElBQU1pSCxpQ0FBaUMsU0FBakNBLDhCQUFpQyxDQUFDekksT0FBRCxFQUFVQyxPQUFWLEVBQW1CNEIsTUFBbkIsRUFBOEI7QUFDbkUsTUFBTTZHLGVBQWUsRUFBckI7QUFEbUU7QUFBQTtBQUFBOztBQUFBO0FBRW5FLHlCQUFrQjdHLE1BQWxCLDhIQUEwQjtBQUFBLFVBQWpCWixLQUFpQjs7QUFDeEIsVUFBSUEsTUFBTU8sSUFBVixFQUFnQjtBQUNka0gscUJBQWF6SCxNQUFNTyxJQUFuQixJQUEyQixtQ0FDekJQLEtBRHlCLEVBRXpCakIsUUFBUThCLFdBRmlCLENBQTNCO0FBSUQ7QUFDRjtBQVRrRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVuRSxNQUFNNkcsa0JBQWtCLDBDQUE4QkQsWUFBOUIsQ0FBeEI7QUFDQSxTQUFRLGdCQUFlQyxlQUFnQixFQUF2QztBQUNELENBWkQ7O1FBY1NGLDhCLEdBQUFBLDhCOzs7Ozs7Ozs7Ozs7OztBQ2hCVDs7QUFDQTs7QUFDQTs7QUFVQSxJQUFNRyx5QkFBeUIsU0FBekJBLHNCQUF5QixDQUFDNUksT0FBRCxFQUFVQyxPQUFWLEVBQW1CbUMsS0FBbkIsRUFBNkI7QUFDMUQsTUFBSXlHLGlCQUFpQixFQUFyQjtBQUNBQSxpQkFBZUMsTUFBZixHQUF3QjFHLE1BQU0yRyxJQUFOLENBQVdELE1BQW5DO0FBQ0FELGlCQUFlRyxLQUFmLEdBQXVCNUcsTUFBTTJHLElBQU4sQ0FBV0MsS0FBbEM7O0FBRUEsTUFBSTVHLE1BQU1tRixLQUFOLENBQVkwQixNQUFaLElBQXNCN0csTUFBTW1GLEtBQU4sQ0FBWSxDQUFaLEVBQWV0RyxLQUF6QyxFQUFnRDtBQUM5QyxRQUFNc0MsZUFBZSx3QkFBWW5CLE1BQU1tRixLQUFOLENBQVlULEdBQVosQ0FBZ0I7QUFBQSxhQUFRb0MsS0FBS2pJLEtBQWI7QUFBQSxLQUFoQixDQUFaLENBQXJCO0FBQ0E0SCxtQkFBZU0sZUFBZixHQUFpQyx1QkFBV25KLE9BQVgsRUFBb0JDLE9BQXBCLEVBQTZCc0QsWUFBN0IsQ0FBakM7QUFDRDtBQUNELE1BQUluQixNQUFNZ0gsT0FBTixDQUFjSCxNQUFsQixFQUEwQjtBQUN4QnJDLFdBQU95QyxNQUFQLENBQ0VSLGNBREYsRUFFRVMsMEJBQ0V0SixPQURGLEVBRUVDLE9BRkYsRUFHRW1DLE1BQU1nSCxPQUFOLENBQWNoSCxNQUFNZ0gsT0FBTixDQUFjSCxNQUFkLEdBQXVCLENBQXJDLENBSEYsRUFJRTdHLE1BQU1zRixJQUpSLENBRkY7QUFTRDtBQUNELE1BQUl0RixNQUFNbUgsT0FBTixDQUFjTixNQUFsQixFQUEwQjtBQUN4QnJDLFdBQU95QyxNQUFQLENBQ0VSLGNBREYsRUFFRVcsMEJBQ0V4SixPQURGLEVBRUVDLE9BRkYsRUFHRW1DLE1BQU1tSCxPQUFOLENBQWNuSCxNQUFNbUgsT0FBTixDQUFjTixNQUFkLEdBQXVCLENBQXJDLENBSEYsRUFJRTdHLE1BQU1zRixJQUpSLENBRkY7QUFTRDtBQUNELE1BQUl0RixNQUFNcUgsWUFBTixHQUFxQixDQUF6QixFQUE0QjtBQUMxQlosbUJBQWVZLFlBQWYsR0FBOEJySCxNQUFNcUgsWUFBcEM7QUFDRDtBQUNELE1BQUlySCxNQUFNc0gsT0FBTixHQUFnQixDQUFwQixFQUF1QjtBQUNyQmIsbUJBQWVhLE9BQWYsR0FBeUJ0SCxNQUFNc0gsT0FBL0I7QUFDRDtBQUNELE1BQUl0SCxNQUFNdUgsUUFBVixFQUFvQjtBQUNsQmQsbUJBQWVlLFNBQWYsR0FBNEIsVUFBU3hILE1BQU11SCxRQUFTLE1BQXBEO0FBQ0Q7O0FBRUQsTUFBSXZILE1BQU1zRixJQUFOLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsV0FBT21DLCtCQUNMN0osT0FESyxFQUVMQyxPQUZLLEVBR0xtQyxLQUhLLEVBSUx5RyxjQUpLLENBQVA7QUFNRDtBQUNELE1BQUl6RyxNQUFNMEgsSUFBVixFQUFnQjtBQUNkLFdBQU9DLCtCQUNML0osT0FESyxFQUVMQyxPQUZLLEVBR0xtQyxLQUhLLEVBSUx5RyxjQUpLLENBQVA7QUFNRDtBQUNELE1BQU1tQixvQkFBb0Isd0NBQTRCbkIsY0FBNUIsQ0FBMUI7QUFDQSxNQUFNdEgsZ0JBQWdCLDJCQUFlLHlCQUFhYSxNQUFNWixJQUFuQixDQUFmLENBQXRCO0FBQ0EsTUFBSVEsT0FBUSxTQUFRVCxhQUFjLG1CQUFrQnlJLGlCQUFrQixJQUF0RTtBQUNBLFNBQU9oSSxJQUFQO0FBQ0QsQ0E3REQ7O0FBK0RBLElBQU02SCxpQ0FBaUMsU0FBakNBLDhCQUFpQyxDQUNyQzdKLE9BRHFDLEVBRXJDQyxPQUZxQyxFQUdyQ21DLEtBSHFDLEVBSXJDeUcsY0FKcUMsRUFLbEM7QUFDSCxNQUFJN0csT0FBTyxFQUFYO0FBQ0EsTUFBSWlJLHFCQUFxQixFQUF6QjtBQUNBLE1BQUk3SCxNQUFNbEMsVUFBTixDQUFpQitJLE1BQWpCLEdBQTBCLENBQTlCLEVBQWlDO0FBQy9CLFFBQUlpQix5QkFBeUIsRUFBN0I7QUFDQSxRQUFJQyx3QkFBd0IsRUFBNUI7QUFDQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSWhJLE1BQU1sQyxVQUFOLENBQWlCK0ksTUFBckMsRUFBNkNtQixHQUE3QyxFQUFrRDtBQUNoRCxVQUFNQyxRQUFRakksTUFBTWxDLFVBQU4sQ0FBaUJrSyxDQUFqQixFQUFvQkMsS0FBbEM7QUFDQSxVQUNFQSxNQUFNQyxHQUFOLEtBQWMsQ0FBZCxJQUNBRCxNQUFNRSxLQUFOLEtBQWdCbkksTUFBTW9JLE9BQU4sQ0FBY3ZCLE1BRDlCLElBRUFvQixNQUFNRSxLQUFOLEtBQWdCRixNQUFNQyxHQUh4QixFQUlFO0FBQ0E7QUFDRDtBQUNELFVBQU1qSyxZQUFZK0IsTUFBTWxDLFVBQU4sQ0FBaUJrSyxDQUFqQixFQUFvQi9KLFNBQXRDO0FBQ0EsVUFBSW9LLG1CQUFtQnhLLFFBQVF5SyxrQkFBUixDQUEyQnJLLFNBQTNCLENBQXZCO0FBQ0EsVUFBSWtCLGdCQUFnQixFQUFwQjtBQUNBLFVBQUlrSixnQkFBSixFQUFzQjtBQUNwQmxKLHdCQUFnQiwyQkFBZSx5QkFBYWtKLGlCQUFpQmpKLElBQTlCLENBQWYsQ0FBaEI7QUFDQTtBQUNBLFlBQUk0SSxJQUFJLENBQUosSUFBUzdJLGtCQUFrQjBJLG1CQUFtQkcsSUFBSSxDQUF2QixDQUEvQixFQUEwRDtBQUN4RDtBQUNEO0FBQ0RGLGtDQUEyQixHQUFFM0ksYUFBYyxJQUEzQztBQUNELE9BUEQsTUFPTztBQUNMbEIsa0JBQVVtQixJQUFWLEdBQWlCRCxnQkFBaUIsYUFBWTZJLENBQUUsRUFBaEQ7QUFDQUQsaUNBQTBCLEdBQUUsbURBQzFCbEssT0FEMEIsRUFFMUJELE9BRjBCLEVBRzFCSyxTQUgwQixDQUkxQixNQUpGO0FBS0Q7QUFDRDRKLHlCQUFtQlUsSUFBbkIsQ0FBd0JwSixhQUF4QjtBQUNEO0FBQ0RxSixZQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0MsUUFBdEMsRUFBZ0RYLHNCQUFoRDtBQUNBLFFBQUlBLHVCQUF1QmpCLE1BQXZCLEdBQWdDLENBQXBDLEVBQXVDO0FBQ3JDakgsY0FBUyxZQUFXa0ksdUJBQXVCakMsU0FBdkIsQ0FDbEIsQ0FEa0IsRUFFbEJpQyx1QkFBdUJqQixNQUF2QixHQUFnQyxDQUZkLENBR2xCLHdDQUhGO0FBSUQ7QUFDRCxRQUFJa0Isc0JBQXNCbEIsTUFBdEIsR0FBK0IsQ0FBbkMsRUFBc0M7QUFDcEMsVUFBSWpKLFFBQVEwQixpQkFBWixFQUErQjtBQUM3Qk0sZ0JBQVMsWUFDUGhDLFFBQVEwQixpQkFDVCx3Q0FGRDtBQUdEO0FBQ0RNLGNBQVFtSSxxQkFBUjtBQUNEO0FBQ0Y7QUFDRCxNQUFJRixtQkFBbUJoQixNQUFuQixHQUE0QixDQUFoQyxFQUFtQztBQUNqQyxRQUFJNkIsYUFBYSxFQUFqQjtBQUNBLFNBQUssSUFBSVYsS0FBSSxDQUFiLEVBQWdCQSxLQUFJSCxtQkFBbUJoQixNQUF2QyxFQUErQ21CLElBQS9DLEVBQW9EO0FBQ2xEVSxvQkFBZSxJQUFHYixtQkFBbUJHLEVBQW5CLENBQXNCLFNBQVFBLEVBQUUsTUFDaERILG1CQUFtQkcsRUFBbkIsQ0FDRCxHQUZEO0FBR0Q7QUFDRCxRQUFNSixvQkFBb0IsMENBQThCbkIsY0FBOUIsQ0FBMUI7QUFDQTdHLFlBQVMsNkRBQTREZ0ksaUJBQWtCLFFBQXZGO0FBQ0FoSSxZQUFTO2NBQ0NJLE1BQU1sQyxVQUFOLENBQWlCNEcsR0FBakIsQ0FDUixVQUFDaUUsQ0FBRCxFQUFJWCxDQUFKO0FBQUEsYUFBVSxDQUFDQSxJQUFJLENBQUosR0FBUSxHQUFSLEdBQWMsRUFBZixJQUFxQixNQUFyQixHQUE4QkEsQ0FBeEM7QUFBQSxLQURRLENBRVI7O1FBRUVVLFVBQVc7O0lBTGY7QUFRRCxHQWpCRCxNQWlCTztBQUNMLFFBQU1kLHFCQUFvQiwwQ0FBOEJuQixjQUE5QixDQUExQjtBQUNBN0csWUFBUyxzQ0FDUGlJLG1CQUFtQixDQUFuQixDQUNELHdCQUF1QkQsa0JBQWtCLElBRjFDO0FBR0Q7O0FBRUQsU0FBT2hJLElBQVA7QUFDRCxDQWpGRDs7QUFtRkEsSUFBTStILGlDQUFpQyxTQUFqQ0EsOEJBQWlDLENBQ3JDL0osT0FEcUMsRUFFckNDLE9BRnFDLEVBR3JDbUMsS0FIcUMsRUFJckN5RyxjQUpxQyxFQUtsQztBQUNILE1BQUk3RyxPQUFPLEVBQVg7QUFDQSxNQUFJaEMsUUFBUXNDLGlCQUFaLEVBQStCO0FBQzdCTixXQUFRLDZCQUE0QmhDLFFBQVFzQyxpQkFBa0IsT0FBOUQ7QUFDRCxHQUZELE1BRU87QUFDTE4sV0FBTyxnRUFBUDtBQUNBLFFBQU1nSSxvQkFBb0IsMENBQThCbkIsY0FBOUIsQ0FBMUI7QUFDQTdHLFlBQVMsNkRBQTREZ0ksaUJBQWtCLFFBQXZGO0FBQ0FoSSxZQUFTOzs7Ozs7U0FBVDtBQU9EO0FBQ0RBLFVBQVM7Ozs7OztFQUFUO0FBT0EsU0FBT0EsSUFBUDtBQUNELENBN0JEOztBQStCQSxJQUFNc0gsNEJBQTRCLFNBQTVCQSx5QkFBNEIsQ0FBQ3RKLE9BQUQsRUFBVUMsT0FBVixFQUFtQitLLE1BQW5CLEVBQTJCQyxTQUEzQixFQUF5QztBQUN6RSxNQUFJQSxjQUFjLE1BQWxCLEVBQTBCO0FBQ3hCLFFBQU1DLGVBQWMsdUJBQVdsTCxPQUFYLEVBQW9CQyxPQUFwQixFQUE2QitLLE9BQU8vSixLQUFwQyxDQUFwQjtBQUNBLFdBQU87QUFDTGtLLHVCQUFpQkQsWUFEWjtBQUVMRSx3QkFBbUIsR0FBRSxrQkFDbkJKLE9BQU9LLE9BQVAsR0FBaUJwTCxRQUFRcUwsY0FETixFQUVuQm5NLHNDQUZtQixDQUduQixNQUFLLGtCQUNMNkwsT0FBT08sT0FBUCxHQUFpQnRMLFFBQVFxTCxjQURwQixFQUVMbk0sc0NBRkssQ0FHTCxJQVJHO0FBU0xxTSx3QkFBa0Isa0JBQ2hCUixPQUFPUyxVQUFQLEdBQW9CeEwsUUFBUXFMLGNBRFosRUFFaEJuTSxzQ0FGZ0I7QUFUYixLQUFQO0FBY0Q7O0FBRUQsTUFBSWMsUUFBUXlILElBQVIsS0FBaUIsU0FBckIsRUFBZ0M7QUFDOUIsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFNd0QsY0FBYyx1QkFBV2xMLE9BQVgsRUFBb0JDLE9BQXBCLEVBQTZCK0ssT0FBTy9KLEtBQXBDLENBQXBCOztBQUVBLFNBQU87QUFDTGlLLGlCQUFhQSxXQURSO0FBRUxRLGtCQUFlLEdBQUUsa0JBQ2ZWLE9BQU9LLE9BQVAsR0FBaUJwTCxRQUFRcUwsY0FEVixFQUVmbk0sc0NBRmUsQ0FHZixNQUFLLGtCQUNMNkwsT0FBT08sT0FBUCxHQUFpQnRMLFFBQVFxTCxjQURwQixFQUVMbk0sc0NBRkssQ0FHTCxJQVJHO0FBU0x3TSxrQkFBYyxrQkFDWlgsT0FBT1MsVUFBUCxHQUFvQnhMLFFBQVFxTCxjQURoQixFQUVabk0sc0NBRlksQ0FUVDtBQWFMeU0sbUJBQWU7QUFiVixHQUFQO0FBZUQsQ0F6Q0Q7O0FBMkNBLElBQU1wQyw0QkFBNEIsU0FBNUJBLHlCQUE0QixDQUFDeEosT0FBRCxFQUFVQyxPQUFWLEVBQW1CNEwsTUFBbkIsRUFBMkJaLFNBQTNCLEVBQXlDO0FBQ3pFLE1BQ0VBLGNBQWMsTUFBZCxJQUNDWSxPQUFPM0MsSUFBUCxJQUFlMkMsT0FBTzNDLElBQVAsQ0FBWXhCLElBQVosS0FBcUIsVUFGdkMsRUFHRTtBQUNBLFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQU1vRSxjQUFjLHVCQUFXOUwsT0FBWCxFQUFvQkMsT0FBcEIsRUFBNkI0TCxPQUFPM0MsSUFBUCxDQUFZakksS0FBekMsQ0FBcEI7QUFDQSxTQUFPO0FBQ0w4SyxpQkFBYSxPQURSO0FBRUxDLGlCQUFhLGtCQUFNSCxPQUFPSSxTQUFQLEdBQW1CaE0sUUFBUXFMLGNBQWpDLEVBQWlELENBQWpELENBRlI7QUFHTFE7QUFISyxHQUFQO0FBS0QsQ0FkRDs7UUFnQlNsRCxzQixHQUFBQSxzQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZXh0ZW5zaW9uXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImV4dGVuc2lvblwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2ZTZmYTQ1NmEzZGVkZmIyZGVkIiwiZXhwb3J0IGNvbnN0IE1BWF9CUklHSFRORVNTID0gMjU1O1xuZXhwb3J0IGNvbnN0IEhVRV9NQVhfREVHUkVFID0gMzYwO1xuZXhwb3J0IGNvbnN0IE1BWF9QRVJDRU5UQUdFID0gMTAwO1xuZXhwb3J0IGNvbnN0IEhFWF9CQVNFID0gMTY7XG5leHBvcnQgY29uc3QgSlNPTl9TUEFDSU5HID0gMjtcbmV4cG9ydCBjb25zdCBOVU1FUklDQUxfRk9OVF9CT0xEID0gNzAwO1xuZXhwb3J0IGNvbnN0IE5VTUVSSUNBTF9GT05UX05PUk1BTCA9IDQwMDtcbmV4cG9ydCBjb25zdCBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT04gPSAxO1xuZXhwb3J0IGNvbnN0IFJFQUNUX1JVTEVTX1dJVEhfQ09MT1IgPSBbXG4gIFwiYmFja2dyb3VuZENvbG9yXCIsXG4gIFwiYm9yZGVyQ29sb3JcIixcbiAgXCJjb2xvclwiLFxuICBcInNoYWRvd0NvbG9yXCIsXG4gIFwidGV4dERlY29yYXRpb25Db2xvclwiLFxuICBcInRleHRTaGFkb3dDb2xvclwiXG5dO1xuZXhwb3J0IGNvbnN0IEhUTUxfVEFHUyA9IFtcbiAgXCJhXCIsXG4gIFwiYWJiclwiLFxuICBcImFkZHJlc3NcIixcbiAgXCJhcmVhXCIsXG4gIFwiYXJ0aWNsZVwiLFxuICBcImFzaWRlXCIsXG4gIFwiYXVkaW9cIixcbiAgXCJiXCIsXG4gIFwiYmFzZVwiLFxuICBcImJkaVwiLFxuICBcImJkb1wiLFxuICBcImJsb2NrcXVvdGVcIixcbiAgXCJib2R5XCIsXG4gIFwiYnJcIixcbiAgXCJidXR0b25cIixcbiAgXCJjYW52YXNcIixcbiAgXCJjYXB0aW9uXCIsXG4gIFwiY2l0ZVwiLFxuICBcImNvZGVcIixcbiAgXCJjb2xcIixcbiAgXCJjb2xncm91cFwiLFxuICBcImRhdGFcIixcbiAgXCJkYXRhbGlzdFwiLFxuICBcImRkXCIsXG4gIFwiZGVsXCIsXG4gIFwiZGV0YWlsc1wiLFxuICBcImRmblwiLFxuICBcImRpYWxvZ1wiLFxuICBcImRpdlwiLFxuICBcImRsXCIsXG4gIFwiZHRcIixcbiAgXCJlbVwiLFxuICBcImVtYmVkXCIsXG4gIFwiZmllbGRzZXRcIixcbiAgXCJmaWdjYXB0aW9uXCIsXG4gIFwiZmlndXJlXCIsXG4gIFwiZm9vdGVyXCIsXG4gIFwiZm9ybVwiLFxuICBcImgxXCIsXG4gIFwiaDJcIixcbiAgXCJoM1wiLFxuICBcImg0XCIsXG4gIFwiaDVcIixcbiAgXCJoNlwiLFxuICBcImhlYWRcIixcbiAgXCJoZWFkZXJcIixcbiAgXCJoZ3JvdXBcIixcbiAgXCJoclwiLFxuICBcImh0bWxcIixcbiAgXCJpXCIsXG4gIFwiaWZyYW1lXCIsXG4gIFwiaW1nXCIsXG4gIFwiaW5wdXRcIixcbiAgXCJpbnNcIixcbiAgXCJrYmRcIixcbiAgXCJrZXlnZW5cIixcbiAgXCJsYWJlbFwiLFxuICBcImxlZ2VuZFwiLFxuICBcImxpXCIsXG4gIFwibGlua1wiLFxuICBcIm1haW5cIixcbiAgXCJtYXBcIixcbiAgXCJtYXJrXCIsXG4gIFwibWF0aFwiLFxuICBcIm1lbnVcIixcbiAgXCJtZW51aXRlbVwiLFxuICBcIm1ldGFcIixcbiAgXCJtZXRlclwiLFxuICBcIm5hdlwiLFxuICBcIm5vc2NyaXB0XCIsXG4gIFwib2JqZWN0XCIsXG4gIFwib2xcIixcbiAgXCJvcHRncm91cFwiLFxuICBcIm9wdGlvblwiLFxuICBcIm91dHB1dFwiLFxuICBcInBcIixcbiAgXCJwYXJhbVwiLFxuICBcInBpY3R1cmVcIixcbiAgXCJwcmVcIixcbiAgXCJwcm9ncmVzc1wiLFxuICBcInFcIixcbiAgXCJycFwiLFxuICBcInJ0XCIsXG4gIFwicnVieVwiLFxuICBcInNcIixcbiAgXCJzYW1wXCIsXG4gIFwic2NyaXB0XCIsXG4gIFwic2VjdGlvblwiLFxuICBcInNlbGVjdFwiLFxuICBcInNsb3RcIixcbiAgXCJzbWFsbFwiLFxuICBcInNvdXJjZVwiLFxuICBcInNvdXJjZVwiLFxuICBcInNwYW5cIixcbiAgXCJzdHJvbmdcIixcbiAgXCJzdHlsZVwiLFxuICBcInN1YlwiLFxuICBcInN1bW1hcnlcIixcbiAgXCJzdXBcIixcbiAgXCJzdmdcIixcbiAgXCJ0YWJsZVwiLFxuICBcInRib2R5XCIsXG4gIFwidGRcIixcbiAgXCJ0ZW1wbGF0ZVwiLFxuICBcInRleHRhcmVhXCIsXG4gIFwidGZvb3RcIixcbiAgXCJ0aFwiLFxuICBcInRoZWFkXCIsXG4gIFwidGltZVwiLFxuICBcInRpdGxlXCIsXG4gIFwidHJcIixcbiAgXCJ0cmFja1wiLFxuICBcInVcIixcbiAgXCJ1bFwiLFxuICBcInZhclwiLFxuICBcInZpZGVvXCIsXG4gIFwid2JyXCJcbl07XG5leHBvcnQgY29uc3QgT1BUSU9OX05BTUVTID0ge1xuICBDT0xPUl9GT1JNQVQ6IFwiY29sb3JGb3JtYXRcIixcbiAgRk9OVF9TQ0FMRTogXCJmb250U2NhbGVcIixcbiAgQ09MT1JfT1ZFUlJJREU6IFwiY29sb3JPdmVycmlkZVwiLFxuICBURVhUX0JBU0VfQ09NUE9ORU5UOiBcInRleHRCYXNlQ29tcG9uZW50XCIsXG4gIENPTE9SX1RIRU1FX1BSRUZJWDogXCJjb2xvclRoZW1lUHJlZml4XCIsXG4gIEZPTlRfVEhFTUVfUFJFRklYOiBcImZvbnRUaGVtZVByZWZpeFwiLFxuICBUWVBPR1JBUEhZX0NPTVBPTkVOVFNfUEFUSDogXCJ+L2NvbXBvbmVudHMvY29tbW9uL1RleHRcIixcbiAgQkxVUl9DT01QT05FTlRfUEFUSDogXCJibHVyQ29tcG9uZW50UGF0aFwiXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0YW50cy5qcyIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdXRpbHMnXG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbi11dGlscydcbmV4cG9ydCAqIGZyb20gJy4vbGF5ZXItdXRpbHMnXG5leHBvcnQgKiBmcm9tICcuL25hbWUtdXRpbHMnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCJpbXBvcnQgeyBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICBnZW5lcmF0ZU5hbWUsXG4gIHVwcGVyY2FzZUZpcnN0LFxuICByb3VuZCxcbiAgdGhlbWVDb2xvcixcbiAgY3JlYXRlU3R5bGVkQ29tcG9uZW50c1J1bGVzXG59IGZyb20gXCIuLi91dGlsc1wiO1xuXG5jb25zdCBnZW5lcmF0ZVRleHRDb21wb25lbnRzRnJvbVByb2plY3QgPSAob3B0aW9ucywgcHJvamVjdCwgdGV4dFN0eWxlcykgPT4ge1xuICBsZXQgY29tcG9uZW50cyA9IFwiXCI7XG4gIGxldCBmb250cyA9IHt9O1xuICBmb3IgKGxldCB0ZXh0U3R5bGUgb2YgdGV4dFN0eWxlcykge1xuICAgIGNvbnN0IGZvbnRGYWNlTmFtZSA9IGdlbmVyYXRlTmFtZSh0ZXh0U3R5bGUuZm9udEZhY2UpO1xuICAgIGlmICghZm9udHNbZm9udEZhY2VOYW1lXSkge1xuICAgICAgZm9udHNbZm9udEZhY2VOYW1lXSA9IHRleHRTdHlsZS5mb250RmFjZTtcbiAgICB9XG4gICAgY29tcG9uZW50cyArPSBgJHtnZW5lcmF0ZVRleHRDb21wb25lbnRGcm9tVGV4dFN0eWxlKFxuICAgICAgcHJvamVjdCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICB0ZXh0U3R5bGVcbiAgICApfVxcblxcbmA7XG4gIH1cblxuICBjb25zdCBmb250c09ialN0ciA9IGNyZWF0ZVN0eWxlZENvbXBvbmVudHNSdWxlcyhmb250cyk7XG4gIHJldHVybiBgLy8gRm9udHMgKFB1dCB0aGlzIGluIHlvdXIgdGhlbWUpXFxuXFxuY29uc3QgRm9udHMgPSAke2ZvbnRzT2JqU3RyfVxcblxcbi8vIFRleHQgY29tcG9uZW50c1xcblxcbiR7Y29tcG9uZW50c31gO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVGV4dENvbXBvbmVudEZyb21UZXh0U3R5bGUgPSAoXG4gIHByb2plY3QsXG4gIG9wdGlvbnMsXG4gIHRleHRTdHlsZVxuKSA9PiB7XG4gIGNvbnN0IHN0eWxlT2JqID0ge1xuICAgIGZvbnRGYW1pbHk6IGB0aGVtZS4ke29wdGlvbnMuZm9udFRoZW1lUHJlZml4IHx8IFwiZm9udFwifS4ke2dlbmVyYXRlTmFtZShcbiAgICAgIHRleHRTdHlsZS5mb250RmFjZVxuICAgICl9YCxcbiAgICBmb250U2l6ZTogYCR7dGV4dFN0eWxlLmZvbnRTaXplICYmXG4gICAgICByb3VuZCh0ZXh0U3R5bGUuZm9udFNpemUsIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTil9JHtcbiAgICAgIG9wdGlvbnMuZm9udFNjYWxlID8gXCIgKiAocHJvcHMuZm9udFNjYWxlIHx8IDEpXCIgOiBcIlwiXG4gICAgfWAsXG4gICAgbGV0dGVyU3BhY2luZzpcbiAgICAgIHRleHRTdHlsZS5sZXR0ZXJTcGFjaW5nICYmXG4gICAgICByb3VuZCh0ZXh0U3R5bGUubGV0dGVyU3BhY2luZywgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OKSxcbiAgICB0ZXh0QWxpZ246IHRleHRTdHlsZS50ZXh0QWxpZ25cbiAgfTtcbiAgaWYgKHRleHRTdHlsZS5jb2xvcikge1xuICAgIGNvbnN0IGNvbG9yVmFsdWUgPSB0aGVtZUNvbG9yKG9wdGlvbnMsIHByb2plY3QsIHRleHRTdHlsZS5jb2xvcik7XG4gICAgc3R5bGVPYmouY29sb3IgPSBgJHtcbiAgICAgIG9wdGlvbnMuY29sb3JPdmVycmlkZSA/IFwicHJvcHMuY29sb3IgfHwgXCIgOiBcIlwiXG4gICAgfSR7Y29sb3JWYWx1ZX1gO1xuICB9XG4gIGlmICh0ZXh0U3R5bGUubGluZUhlaWdodCkge1xuICAgIHN0eWxlT2JqLmxpbmVIZWlnaHQgPSBgJHt0ZXh0U3R5bGUubGluZUhlaWdodCAmJlxuICAgICAgcm91bmQodGV4dFN0eWxlLmxpbmVIZWlnaHQsIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTil9JHtcbiAgICAgIG9wdGlvbnMuZm9udFNjYWxlID8gXCIgKiAocHJvcHMuZm9udFNjYWxlIHx8IDEpXCIgOiBcIlwiXG4gICAgfWA7XG4gIH1cblxuICBjb25zdCB0ZXh0U3R5bGVzU3RyID0gY3JlYXRlU3R5bGVkQ29tcG9uZW50c1J1bGVzKHN0eWxlT2JqKVxuICAgIC5yZXBsYWNlKC9mb250LXNpemU6ICcoLiopJy9nLCBcImZvbnQtc2l6ZTogJDFcIilcbiAgICAucmVwbGFjZSgvbGluZS1oZWlnaHQ6ICcoLiopJy9nLCBcImxpbmUtaGVpZ2h0OiAkMVwiKVxuICAgIC5yZXBsYWNlKC9jb2xvcjogJ3Byb3BzKC4qKScvZywgXCJjb2xvcjogcHJvcHMkMVwiKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHVwcGVyY2FzZUZpcnN0KGdlbmVyYXRlTmFtZSh0ZXh0U3R5bGUubmFtZSkpO1xuICBjb25zdCBiYXNlQ29tcG9uZW50ID0gb3B0aW9ucy50ZXh0QmFzZUNvbXBvbmVudFxuICAgID8gYHN0eWxlZCgke29wdGlvbnMudGV4dEJhc2VDb21wb25lbnR9KWBcbiAgICA6IFwic3R5bGVkLlRleHRcIjtcblxuICByZXR1cm4gYGV4cG9ydCBjb25zdCAke2NvbXBvbmVudE5hbWV9ID0gJHtiYXNlQ29tcG9uZW50fVxcYCR7dGV4dFN0eWxlc1N0cn1cXGBgO1xufTtcblxuZXhwb3J0IHsgZ2VuZXJhdGVUZXh0Q29tcG9uZW50c0Zyb21Qcm9qZWN0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC1zdHlsZS9pbmRleC5qcyIsImltcG9ydCB7IGdlbmVyYXRlVGV4dENvbXBvbmVudHNGcm9tUHJvamVjdCB9IGZyb20gJy4vdGV4dC1zdHlsZSdcbmltcG9ydCB7IGdlbmVyYXRlQ29sb3JPYmplY3RGcm9tUHJvamVjdCB9IGZyb20gJy4vY29sb3InXG5pbXBvcnQgeyBnZW5lcmF0ZUxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcidcblxuaW1wb3J0IHsgT1BUSU9OX05BTUVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNvbnN0IHN0eWxlZ3VpZGVDb2xvcnMgPSAoY29udGV4dCwgY29sb3JzKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgY29sb3JGb3JtYXQ6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5DT0xPUl9GT1JNQVQpXG4gIH1cblxuICBjb25zdCBjb2RlID0gZ2VuZXJhdGVDb2xvck9iamVjdEZyb21Qcm9qZWN0KG9wdGlvbnMsIGNvbnRleHQucHJvamVjdCwgY29sb3JzKVxuXG4gIHJldHVybiB7XG4gICAgY29kZSxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVndWlkZVRleHRTdHlsZXMgPSAoY29udGV4dCwgdGV4dFN0eWxlcykgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGNvbG9yRm9ybWF0OiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuQ09MT1JfRk9STUFUKSxcbiAgICBmb250U2NhbGU6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5GT05UX1NDQUxFKSxcbiAgICBjb2xvck92ZXJyaWRlOiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuQ09MT1JfT1ZFUlJJREUpLFxuICAgIHRleHRCYXNlQ29tcG9uZW50OiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuVEVYVF9CQVNFX0NPTVBPTkVOVCksXG4gICAgY29sb3JUaGVtZVByZWZpeDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLkNPTE9SX1RIRU1FX1BSRUZJWCksXG4gICAgZm9udFRoZW1lUHJlZml4OiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuRk9OVF9USEVNRV9QUkVGSVgpXG4gIH1cblxuICBjb25zdCBjb2RlID0gZ2VuZXJhdGVUZXh0Q29tcG9uZW50c0Zyb21Qcm9qZWN0KFxuICAgIG9wdGlvbnMsXG4gICAgY29udGV4dC5wcm9qZWN0LFxuICAgIHRleHRTdHlsZXNcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgY29kZSxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuY29uc3QgbGF5ZXIgPSAoY29udGV4dCwgbGF5ZXIpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBjb2xvckZvcm1hdDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLkNPTE9SX0ZPUk1BVCksXG4gICAgdGV4dEJhc2VDb21wb25lbnQ6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5URVhUX0JBU0VfQ09NUE9ORU5UKSxcbiAgICBjb2xvclRoZW1lUHJlZml4OiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuQ09MT1JfVEhFTUVfUFJFRklYKSxcbiAgICBmb250VGhlbWVQcmVmaXg6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5GT05UX1RIRU1FX1BSRUZJWCksXG4gICAgdHlwb2dyYXBoeUNvbXBvbmVudHNQYXRoOiBjb250ZXh0LmdldE9wdGlvbihcbiAgICAgIE9QVElPTl9OQU1FUy5UWVBPR1JBUEhZX0NPTVBPTkVOVFNfUEFUSFxuICAgICksXG4gICAgYmx1ckNvbXBvbmVudFBhdGg6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5CTFVSX0NPTVBPTkVOVF9QQVRIKVxuICB9XG4gIGNvbnN0IGNvZGUgPSBnZW5lcmF0ZUxheWVyQ29tcG9uZW50KG9wdGlvbnMsIGNvbnRleHQucHJvamVjdCwgbGF5ZXIpXG4gIHJldHVybiB7IGNvZGUsIGxhbmd1YWdlOiAnamF2YXNjcmlwdCcgfVxufVxuXG5jb25zdCBjb21tZW50ID0gKGNvbnRleHQsIHRleHQpID0+IHtcbiAgcmV0dXJuIGAvLyAke3RleHR9YFxufVxuXG5jb25zdCBleHBvcnRTdHlsZWd1aWRlQ29sb3JzID0gKGNvbnRleHQsIGNvbG9ycykgPT4ge1xuICBjb25zdCBjb2RlT2JqZWN0ID0gc3R5bGVndWlkZUNvbG9ycyhjb250ZXh0LCBjb2xvcnMpXG4gIGNvbnN0IGNvZGUgPSBjb2RlT2JqZWN0LmNvZGVcblxuICByZXR1cm4ge1xuICAgIGNvZGUsXG4gICAgZmlsZW5hbWU6ICdpbmRleC5qcycsXG4gICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0J1xuICB9XG59XG5cbmNvbnN0IGV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzID0gKGNvbnRleHQsIHRleHRTdHlsZXMpID0+IHtcbiAgY29uc3QgY29kZU9iamVjdCA9IHN0eWxlZ3VpZGVUZXh0U3R5bGVzKGNvbnRleHQsIHRleHRTdHlsZXMpXG4gIGNvbnN0IGNvZGUgPSBjb2RlT2JqZWN0LmNvZGVcblxuICByZXR1cm4ge1xuICAgIGNvZGUsXG4gICAgZmlsZW5hbWU6ICdpbmRleC5qcycsXG4gICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGF5ZXIsXG4gIHN0eWxlZ3VpZGVDb2xvcnMsXG4gIHN0eWxlZ3VpZGVUZXh0U3R5bGVzLFxuICBjb21tZW50LFxuICBleHBvcnRTdHlsZWd1aWRlQ29sb3JzLFxuICBleHBvcnRTdHlsZWd1aWRlVGV4dFN0eWxlc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHtcbiAgTUFYX0JSSUdIVE5FU1MsXG4gIEhFWF9CQVNFLFxuICBIVUVfTUFYX0RFR1JFRSxcbiAgTUFYX1BFUkNFTlRBR0Vcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG52YXIgYWxwaGFGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XG4gIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG59KTtcblxuZnVuY3Rpb24gdG9IZXgobnVtKSB7XG4gIHJldHVybiAobnVtIDwgSEVYX0JBU0UgPyBcIjBcIiA6IFwiXCIpICsgbnVtLnRvU3RyaW5nKEhFWF9CQVNFKTtcbn1cblxuZnVuY3Rpb24gYmxlbmRDb2xvcnMoY29sb3JzKSB7XG4gIHJldHVybiBjb2xvcnMucmVkdWNlKChibGVuZGVkQ29sb3IsIGNvbG9yKSA9PiBibGVuZGVkQ29sb3IuYmxlbmQoY29sb3IpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3JTdHJpbmdCeUZvcm1hdChjb2xvciwgY29sb3JGb3JtYXQpIHtcbiAgaWYgKCEoXCJyXCIgaW4gY29sb3IgJiYgXCJnXCIgaW4gY29sb3IgJiYgXCJiXCIgaW4gY29sb3IgJiYgXCJhXCIgaW4gY29sb3IpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3dpdGNoIChjb2xvckZvcm1hdCkge1xuICAgIGNhc2UgXCJoZXhcIjpcbiAgICAgIHJldHVybiB0b0hleFN0cmluZyhjb2xvcik7XG5cbiAgICBjYXNlIFwicmdiXCI6XG4gICAgICByZXR1cm4gdG9SR0JBU3RyaW5nKGNvbG9yKTtcblxuICAgIGNhc2UgXCJoc2xcIjpcbiAgICAgIHJldHVybiB0b0hTTEFTdHJpbmcoY29sb3IpO1xuXG4gICAgY2FzZSBcImRlZmF1bHRcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRvRGVmYXVsdFN0cmluZyhjb2xvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3JNYXBCeUZvcm1hdChjb2xvcnMsIGNvbG9yRm9ybWF0KSB7XG4gIHJldHVybiBjb2xvcnMucmVkdWNlKChjb2xvck1hcCwgY29sb3IpID0+IHtcbiAgICB2YXIgY29sb3JTdHJpbmcgPSBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KGNvbG9yLCBjb2xvckZvcm1hdCk7XG4gICAgY29sb3JNYXBbY29sb3JTdHJpbmddID0gY29sb3IubmFtZTtcbiAgICByZXR1cm4gY29sb3JNYXA7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gdG9IZXhTdHJpbmcoY29sb3IsIHByZWZpeCkge1xuICB2YXIgaGV4Q29kZSA9IGNvbG9yLmhleEJhc2UoKTtcblxuICBpZiAoY29sb3IuYSA8IDEpIHtcbiAgICB2YXIgaGV4QSA9IHRvSGV4KGNvbG9yLmEgKiBNQVhfQlJJR0hUTkVTUyk7XG5cbiAgICBoZXhDb2RlID0gcHJlZml4ID8gaGV4QSArIGhleENvZGUgOiBoZXhDb2RlICsgaGV4QTtcbiAgfVxuXG4gIHJldHVybiBgIyR7aGV4Q29kZX1gO1xufVxuXG5mdW5jdGlvbiB0b1JHQkFTdHJpbmcoY29sb3IpIHtcbiAgdmFyIHJnYiA9IGAke01hdGgucm91bmQoY29sb3Iucil9LCAke01hdGgucm91bmQoY29sb3IuZyl9LCAke01hdGgucm91bmQoXG4gICAgY29sb3IuYlxuICApfWA7XG5cbiAgdmFyIHJnYlN0ciA9XG4gICAgY29sb3IuYSA8IDFcbiAgICAgID8gYHJnYmEoJHtyZ2J9LCAke2FscGhhRm9ybWF0dGVyLmZvcm1hdChjb2xvci5hKX0pYFxuICAgICAgOiBgcmdiKCR7cmdifSlgO1xuXG4gIHJldHVybiByZ2JTdHI7XG59XG5cbmZ1bmN0aW9uIHRvSFNMQVN0cmluZyhjb2xvcikge1xuICB2YXIgaHNsQ29sb3IgPSBjb2xvci50b0hTTCgpO1xuICB2YXIgaHNsID1cbiAgICBgJHtNYXRoLnJvdW5kKGhzbENvbG9yLmggKiBIVUVfTUFYX0RFR1JFRSl9LCBgICtcbiAgICBgJHtNYXRoLnJvdW5kKGhzbENvbG9yLnMgKiBNQVhfUEVSQ0VOVEFHRSl9JSwgYCArXG4gICAgYCR7TWF0aC5yb3VuZChoc2xDb2xvci5sICogTUFYX1BFUkNFTlRBR0UpfSVgO1xuXG4gIHZhciBoc2xTdHIgPVxuICAgIGNvbG9yLmEgPCAxXG4gICAgICA/IGBoc2xhKCR7aHNsfSwgJHthbHBoYUZvcm1hdHRlci5mb3JtYXQoY29sb3IuYSl9KWBcbiAgICAgIDogYGhzbCgke2hzbH0pYDtcblxuICByZXR1cm4gaHNsU3RyO1xufVxuXG5mdW5jdGlvbiB0b0RlZmF1bHRTdHJpbmcoY29sb3IpIHtcbiAgcmV0dXJuIGNvbG9yLmEgPCAxID8gdG9SR0JBU3RyaW5nKGNvbG9yKSA6IHRvSGV4U3RyaW5nKGNvbG9yKTtcbn1cblxuY29uc3QgdGhlbWVDb2xvciA9IChvcHRpb25zLCBwcm9qZWN0LCBjb2xvcikgPT4ge1xuICBjb25zdCB0aGVtZUNvbG9yID1cbiAgICBwcm9qZWN0LmZpbmRDb2xvckVxdWFsKGNvbG9yKSB8fFxuICAgIGdldENvbG9yU3RyaW5nQnlGb3JtYXQoY29sb3IsIG9wdGlvbnMuY29sb3JGb3JtYXQpO1xuICBjb25zdCBzdHJWYWx1ZSA9IHRoZW1lQ29sb3IubmFtZVxuICAgID8gYFxcJHtwID0+IHAudGhlbWUuJHtvcHRpb25zLmNvbG9yVGhlbWVQcmVmaXggfHwgXCJjb2xvcnNcIn0uJHtcbiAgICAgICAgdGhlbWVDb2xvci5uYW1lXG4gICAgICB9fWBcbiAgICA6IHRoZW1lQ29sb3I7XG4gIHJldHVybiBzdHJWYWx1ZTtcbn07XG5cbmV4cG9ydCB7XG4gIGJsZW5kQ29sb3JzLFxuICBnZXRDb2xvck1hcEJ5Rm9ybWF0LFxuICB0b0RlZmF1bHRTdHJpbmcsXG4gIGdldENvbG9yU3RyaW5nQnlGb3JtYXQsXG4gIHRoZW1lQ29sb3Jcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY29sb3ItdXRpbHMuanMiLCJpbXBvcnQgeyBIVE1MX1RBR1MsIEpTT05fU1BBQ0lORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gZXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyXG4gICAgLnRyaW0oKVxuICAgIC5yZXBsYWNlKC9bXlxcc1xcdy1dL2csIFwiXCIpXG4gICAgLnJlcGxhY2UoL14oLT9cXGQrKSsvLCBcIlwiKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTtcbn1cblxuZnVuY3Rpb24gaXNIdG1sVGFnKHN0cikge1xuICByZXR1cm4gSFRNTF9UQUdTLmluY2x1ZGVzKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJvdW5kKG51bWJlciwgcHJlY2lzaW9uKSB7XG4gIHZhciBmb3JtYXR0ZWROdW1iZXIgPSBOdW1iZXIobnVtYmVyKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb25cbiAgfSk7XG5cbiAgcmV0dXJuIE51bWJlcihmb3JtYXR0ZWROdW1iZXIpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rvcml6ZShzdHIpIHtcbiAgaWYgKCFzdHIpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHZhciBzZWxlY3Rvcml6ZWRTdHIgPSBzdHIudHJpbSgpO1xuXG4gIGlmIChpc0h0bWxUYWcoc3RyKSkge1xuICAgIHJldHVybiBzZWxlY3Rvcml6ZWRTdHIudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlmICgvXlsjLl0vLnRlc3Qoc2VsZWN0b3JpemVkU3RyKSkge1xuICAgIHZhciBuYW1lID0gZXNjYXBlKHNlbGVjdG9yaXplZFN0ci5zdWJzdHIoMSkpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcml6ZWRTdHJbMF0gKyBuYW1lO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdG9yaXplZFN0ciA9IGVzY2FwZShzZWxlY3Rvcml6ZWRTdHIpO1xuXG4gIHJldHVybiBzZWxlY3Rvcml6ZWRTdHIgJiYgYC4ke3NlbGVjdG9yaXplZFN0cn1gO1xufVxuXG5jb25zdCBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaiA9IG9iamVjdCA9PiB7XG4gIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmplY3QsIG51bGwsIEpTT05fU1BBQ0lORyk7XG4gIHN0ciA9IHN0clxuICAgIC5yZXBsYWNlKC9cIiguKylcIjovZywgXCIkMTpcIilcbiAgICAucmVwbGFjZSgvXCJ0aGVtZS4oLiopXCIvZywgXCJ0aGVtZS4kMVwiKVxuICAgIC5yZXBsYWNlKC9cIi9nLCBcIidcIik7XG4gIHJldHVybiBzdHI7XG59O1xuXG5jb25zdCBjcmVhdGVTdHlsZWRDb21wb25lbnRzUnVsZXMgPSBvYmplY3QgPT4ge1xuICByZXR1cm4gKFxuICAgIFwiXFxuXCIgK1xuICAgIE9iamVjdC5lbnRyaWVzKG9iamVjdClcbiAgICAgIC5tYXAoXG4gICAgICAgIChba2V5LCB2YWx1ZV0pID0+XG4gICAgICAgICAgYCAgJHtjYW1lbENhc2VUb1NuYWtlQ2FzZShrZXkpfTogJHttYXBWYWx1ZShcbiAgICAgICAgICAgIGNhbWVsQ2FzZVRvU25ha2VDYXNlKGtleSksXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICl9YFxuICAgICAgKVxuICAgICAgLmpvaW4oXCI7XFxuXCIpICtcbiAgICBcIlxcblwiXG4gICk7XG59O1xuXG5jb25zdCBtYXBWYWx1ZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBcImhlaWdodFwiOlxuICAgIGNhc2UgXCJ3aWR0aFwiOlxuICAgIGNhc2UgXCJib3JkZXItcmFkaXVzXCI6XG4gICAgY2FzZSBcImJvcmRlci10b3AtcmFkaXVzXCI6XG4gICAgY2FzZSBcImJvcmRlci1sZWZ0LXJhZGl1c1wiOlxuICAgIGNhc2UgXCJib3JkZXItYm90dG9tLXJhZGl1c1wiOlxuICAgIGNhc2UgXCJib3JkZXItcmlnaHQtcmFkaXVzXCI6XG4gICAgY2FzZSBcImJvcmRlci13aWR0aFwiOlxuICAgIGNhc2UgXCJib3JkZXItdG9wLXdpZHRoXCI6XG4gICAgY2FzZSBcImJvcmRlci1sZWZ0LXdpZHRoXCI6XG4gICAgY2FzZSBcImJvcmRlci1ib3R0b20td2lkdGhcIjpcbiAgICBjYXNlIFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCI6XG4gICAgY2FzZSBcIm1hcmdpblwiOlxuICAgIGNhc2UgXCJtYXJnaW4tdG9wXCI6XG4gICAgY2FzZSBcIm1hcmdpbi1sZWZ0XCI6XG4gICAgY2FzZSBcIm1hcmdpbi1ib3R0b21cIjpcbiAgICBjYXNlIFwibWFyZ2luLXJpZ2h0XCI6XG4gICAgY2FzZSBcInBhZGRpbmdcIjpcbiAgICBjYXNlIFwicGFkZGluZy10b3BcIjpcbiAgICBjYXNlIFwicGFkZGluZy1sZWZ0XCI6XG4gICAgY2FzZSBcInBhZGRpbmctYm90dG9tXCI6XG4gICAgY2FzZSBcInBhZGRpbmctcmlnaHRcIjpcbiAgICBjYXNlIFwidG9wXCI6XG4gICAgY2FzZSBcImxlZnRcIjpcbiAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICByZXR1cm4gdmFsdWUgKyBcInB4XCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuY29uc3QgY2FtZWxDYXNlVG9TbmFrZUNhc2UgPSBzID0+XG4gIHNcbiAgICAucmVwbGFjZSgvXFwuPyhbQS1aXSkvZywgZnVuY3Rpb24oeCwgeSkge1xuICAgICAgcmV0dXJuIFwiLVwiICsgeS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pXG4gICAgLnJlcGxhY2UoL14tLywgXCJcIik7XG5cbmV4cG9ydCB7XG4gIGlzSHRtbFRhZyxcbiAgcm91bmQsXG4gIHNlbGVjdG9yaXplLFxuICBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaixcbiAgY3JlYXRlU3R5bGVkQ29tcG9uZW50c1J1bGVzXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2NvbW1vbi11dGlscy5qcyIsImZ1bmN0aW9uIGxheWVySGFzR3JhZGllbnQobGF5ZXIpIHtcbiAgcmV0dXJuIGxheWVyLmZpbGxzLnNvbWUoZiA9PiBmLnR5cGUgPT09ICdncmFkaWVudCcpXG59XG5cbmZ1bmN0aW9uIGxheWVySGFzQmxlbmRNb2RlKGxheWVyKSB7XG4gIHJldHVybiBsYXllci5maWxscy5zb21lKGYgPT4gZi5ibGVuZE1vZGUgJiYgZi5ibGVuZE1vZGUgIT09ICdub3JtYWwnKVxufVxuXG5leHBvcnQgeyBsYXllckhhc0dyYWRpZW50LCBsYXllckhhc0JsZW5kTW9kZSB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvbGF5ZXItdXRpbHMuanMiLCJleHBvcnQgZnVuY3Rpb24gbG93ZXJjYXNlRmlyc3Qocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cHBlcmNhc2VGaXJzdChzKSB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSlcbn1cblxuZnVuY3Rpb24gam9pblRva2Vucyhjb21wb25lbnRzKSB7XG4gIHZhciBuYW1lID0gY29tcG9uZW50cy5tYXAodXBwZXJjYXNlRmlyc3QpLmpvaW4oJycpXG4gIHJldHVybiBsb3dlcmNhc2VGaXJzdChuYW1lKVxufVxuXG5mdW5jdGlvbiB0b2tlbnNGb3JTdHJpbmcoc3RyKSB7XG4gIHZhciB0b2tlbml6ZXIgPSAvXFxkK3xbYS16XSt8W0EtWl0rKD8hW2Etel0pfFtBLVpdW2Etel0rL2dcblxuICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHIubWF0Y2godG9rZW5pemVyKVxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIFsnaW52YWxpZCcsICduYW1lJ11cbiAgfVxuXG4gIHJldHVybiBtYXRjaFJlc3VsdC5tYXAoZnVuY3Rpb24odG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4udG9Mb3dlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIGpvaW5Ub2tlbnModG9rZW5zRm9yU3RyaW5nKG5hbWUpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL25hbWUtdXRpbHMuanMiLCJpbXBvcnQgeyBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0LCBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaiB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBnZW5lcmF0ZUNvbG9yT2JqZWN0RnJvbVByb2plY3QgPSAob3B0aW9ucywgcHJvamVjdCwgY29sb3JzKSA9PiB7XG4gIGNvbnN0IGNvbG9yc09iamVjdCA9IHt9XG4gIGZvciAobGV0IGNvbG9yIG9mIGNvbG9ycykge1xuICAgIGlmIChjb2xvci5uYW1lKSB7XG4gICAgICBjb2xvcnNPYmplY3RbY29sb3IubmFtZV0gPSBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KFxuICAgICAgICBjb2xvcixcbiAgICAgICAgb3B0aW9ucy5jb2xvckZvcm1hdFxuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBjb2xvcnNTdHlsZXNTdHIgPSBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaihjb2xvcnNPYmplY3QpXG4gIHJldHVybiBgY29uc3QgYmFzZSA9ICR7Y29sb3JzU3R5bGVzU3RyfWBcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVDb2xvck9iamVjdEZyb21Qcm9qZWN0IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb2xvci9pbmRleC5qcyIsImltcG9ydCB7IE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlVGV4dENvbXBvbmVudEZyb21UZXh0U3R5bGUgfSBmcm9tIFwiLi4vdGV4dC1zdHlsZVwiO1xuaW1wb3J0IHtcbiAgcm91bmQsXG4gIGJsZW5kQ29sb3JzLFxuICB0aGVtZUNvbG9yLFxuICBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaixcbiAgY3JlYXRlU3R5bGVkQ29tcG9uZW50c1J1bGVzLFxuICB1cHBlcmNhc2VGaXJzdCxcbiAgZ2VuZXJhdGVOYW1lXG59IGZyb20gXCIuLi91dGlsc1wiO1xuXG5jb25zdCBnZW5lcmF0ZUxheWVyQ29tcG9uZW50ID0gKG9wdGlvbnMsIHByb2plY3QsIGxheWVyKSA9PiB7XG4gIGxldCBjb250YWluZXJTdHlsZSA9IHt9O1xuICBjb250YWluZXJTdHlsZS5oZWlnaHQgPSBsYXllci5yZWN0LmhlaWdodDtcbiAgY29udGFpbmVyU3R5bGUud2lkdGggPSBsYXllci5yZWN0LndpZHRoO1xuXG4gIGlmIChsYXllci5maWxscy5sZW5ndGggJiYgbGF5ZXIuZmlsbHNbMF0uY29sb3IpIHtcbiAgICBjb25zdCBibGVuZGVkQ29sb3IgPSBibGVuZENvbG9ycyhsYXllci5maWxscy5tYXAoZmlsbCA9PiBmaWxsLmNvbG9yKSk7XG4gICAgY29udGFpbmVyU3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhlbWVDb2xvcihvcHRpb25zLCBwcm9qZWN0LCBibGVuZGVkQ29sb3IpO1xuICB9XG4gIGlmIChsYXllci5zaGFkb3dzLmxlbmd0aCkge1xuICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICBjb250YWluZXJTdHlsZSxcbiAgICAgIGdlbmVyYXRlU2hhZG93U3R5bGVPYmplY3QoXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGxheWVyLnNoYWRvd3NbbGF5ZXIuc2hhZG93cy5sZW5ndGggLSAxXSxcbiAgICAgICAgbGF5ZXIudHlwZVxuICAgICAgKVxuICAgICk7XG4gIH1cbiAgaWYgKGxheWVyLmJvcmRlcnMubGVuZ3RoKSB7XG4gICAgT2JqZWN0LmFzc2lnbihcbiAgICAgIGNvbnRhaW5lclN0eWxlLFxuICAgICAgZ2VuZXJhdGVCb3JkZXJTdHlsZU9iamVjdChcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgbGF5ZXIuYm9yZGVyc1tsYXllci5ib3JkZXJzLmxlbmd0aCAtIDFdLFxuICAgICAgICBsYXllci50eXBlXG4gICAgICApXG4gICAgKTtcbiAgfVxuICBpZiAobGF5ZXIuYm9yZGVyUmFkaXVzID4gMCkge1xuICAgIGNvbnRhaW5lclN0eWxlLmJvcmRlclJhZGl1cyA9IGxheWVyLmJvcmRlclJhZGl1cztcbiAgfVxuICBpZiAobGF5ZXIub3BhY2l0eSA8IDEpIHtcbiAgICBjb250YWluZXJTdHlsZS5vcGFjaXR5ID0gbGF5ZXIub3BhY2l0eTtcbiAgfVxuICBpZiAobGF5ZXIucm90YXRpb24pIHtcbiAgICBjb250YWluZXJTdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bGF5ZXIucm90YXRpb259ZGVnKWA7XG4gIH1cblxuICBpZiAobGF5ZXIudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVMYXllckNvbXBvbmVudFdpdGhUZXh0KFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHByb2plY3QsXG4gICAgICBsYXllcixcbiAgICAgIGNvbnRhaW5lclN0eWxlXG4gICAgKTtcbiAgfVxuICBpZiAobGF5ZXIuYmx1cikge1xuICAgIHJldHVybiBnZW5lcmF0ZUxheWVyQ29tcG9uZW50V2l0aEJsdXIoXG4gICAgICBvcHRpb25zLFxuICAgICAgcHJvamVjdCxcbiAgICAgIGxheWVyLFxuICAgICAgY29udGFpbmVyU3R5bGVcbiAgICApO1xuICB9XG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlU3RyID0gY3JlYXRlU3R5bGVkQ29tcG9uZW50c1J1bGVzKGNvbnRhaW5lclN0eWxlKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHVwcGVyY2FzZUZpcnN0KGdlbmVyYXRlTmFtZShsYXllci5uYW1lKSk7XG4gIGxldCBjb2RlID0gYGNvbnN0ICR7Y29tcG9uZW50TmFtZX0gPSBzdHlsZWQuVmlld1xcYCR7Y29udGFpbmVyU3R5bGVTdHJ9XFxgYDtcbiAgcmV0dXJuIGNvZGU7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUxheWVyQ29tcG9uZW50V2l0aFRleHQgPSAoXG4gIG9wdGlvbnMsXG4gIHByb2plY3QsXG4gIGxheWVyLFxuICBjb250YWluZXJTdHlsZVxuKSA9PiB7XG4gIGxldCBjb2RlID0gXCJcIjtcbiAgbGV0IHRleHRDb21wb25lbnROYW1lcyA9IFtdO1xuICBpZiAobGF5ZXIudGV4dFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHRleHRDb21wb25lbnRzVG9JbXBvcnQgPSBcIlwiO1xuICAgIGxldCBjcmVhdGVkVGV4dENvbXBvbmVudHMgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXIudGV4dFN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcmFuZ2UgPSBsYXllci50ZXh0U3R5bGVzW2ldLnJhbmdlO1xuICAgICAgaWYgKFxuICAgICAgICByYW5nZS5lbmQgPT09IDAgfHxcbiAgICAgICAgcmFuZ2Uuc3RhcnQgPT09IGxheWVyLmNvbnRlbnQubGVuZ3RoIHx8XG4gICAgICAgIHJhbmdlLnN0YXJ0ID09PSByYW5nZS5lbmRcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHRTdHlsZSA9IGxheWVyLnRleHRTdHlsZXNbaV0udGV4dFN0eWxlO1xuICAgICAgbGV0IHByb2plY3RUZXh0U3R5bGUgPSBwcm9qZWN0LmZpbmRUZXh0U3R5bGVFcXVhbCh0ZXh0U3R5bGUpO1xuICAgICAgbGV0IGNvbXBvbmVudE5hbWUgPSBcIlwiO1xuICAgICAgaWYgKHByb2plY3RUZXh0U3R5bGUpIHtcbiAgICAgICAgY29tcG9uZW50TmFtZSA9IHVwcGVyY2FzZUZpcnN0KGdlbmVyYXRlTmFtZShwcm9qZWN0VGV4dFN0eWxlLm5hbWUpKTtcbiAgICAgICAgLy8gUHJldmVudHMgZG91YmxlIHRleHQgY29tcG9uZW50cyBpbXBvcnRcbiAgICAgICAgaWYgKGkgPiAwICYmIGNvbXBvbmVudE5hbWUgPT09IHRleHRDb21wb25lbnROYW1lc1tpIC0gMV0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0Q29tcG9uZW50c1RvSW1wb3J0ICs9IGAke2NvbXBvbmVudE5hbWV9LCBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dFN0eWxlLm5hbWUgPSBjb21wb25lbnROYW1lID0gYFN0eWxlZFRleHQke2l9YDtcbiAgICAgICAgY3JlYXRlZFRleHRDb21wb25lbnRzICs9IGAke2dlbmVyYXRlVGV4dENvbXBvbmVudEZyb21UZXh0U3R5bGUoXG4gICAgICAgICAgcHJvamVjdCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHRleHRTdHlsZVxuICAgICAgICApfVxcblxcbmA7XG4gICAgICB9XG4gICAgICB0ZXh0Q29tcG9uZW50TmFtZXMucHVzaChjb21wb25lbnROYW1lKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJ0ZXh0Q29tcG9uZW50c1RvSW1wb3J0XCIsIFwiW0JFVEFdXCIsIHRleHRDb21wb25lbnRzVG9JbXBvcnQpO1xuICAgIGlmICh0ZXh0Q29tcG9uZW50c1RvSW1wb3J0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvZGUgKz0gYGltcG9ydCB7ICR7dGV4dENvbXBvbmVudHNUb0ltcG9ydC5zdWJzdHJpbmcoXG4gICAgICAgIDAsXG4gICAgICAgIHRleHRDb21wb25lbnRzVG9JbXBvcnQubGVuZ3RoIC0gMlxuICAgICAgKX0gfSBmcm9tIFwifi9jb21wb25lbnRzL2NvbW1vbi9UZXh0XCJcXG5cXG5gO1xuICAgIH1cbiAgICBpZiAoY3JlYXRlZFRleHRDb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChvcHRpb25zLnRleHRCYXNlQ29tcG9uZW50KSB7XG4gICAgICAgIGNvZGUgKz0gYGltcG9ydCB7ICR7XG4gICAgICAgICAgb3B0aW9ucy50ZXh0QmFzZUNvbXBvbmVudFxuICAgICAgICB9IH0gZnJvbSBcIn4vY29tcG9uZW50cy9jb21tb24vVGV4dFwiXFxuXFxuYDtcbiAgICAgIH1cbiAgICAgIGNvZGUgKz0gY3JlYXRlZFRleHRDb21wb25lbnRzO1xuICAgIH1cbiAgfVxuICBpZiAodGV4dENvbXBvbmVudE5hbWVzLmxlbmd0aCA+IDEpIHtcbiAgICBsZXQgdGV4dENoaWxkcyA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Q29tcG9uZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRleHRDaGlsZHMgKz0gYDwke3RleHRDb21wb25lbnROYW1lc1tpXX0+e3RleHQke2l9fTwvJHtcbiAgICAgICAgdGV4dENvbXBvbmVudE5hbWVzW2ldXG4gICAgICB9PmA7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlU3RyID0gY3JlYXRlSmF2YXNjcmlwdFN0cmluZ0Zyb21PYmooY29udGFpbmVyU3R5bGUpO1xuICAgIGNvZGUgKz0gYGNvbnN0IFN0eWxlZENvbnRhaW5lciA9IGdsYW1vcm91cy52aWV3KChwcm9wcywgdGhlbWUpID0+ICgke2NvbnRhaW5lclN0eWxlU3RyfSkpXFxuXFxuYDtcbiAgICBjb2RlICs9IGBleHBvcnQgY29uc3QgQ29tcG9uZW50ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgJHtsYXllci50ZXh0U3R5bGVzLm1hcChcbiAgICAgIChfLCBpKSA9PiAoaSA+IDAgPyBcIiBcIiA6IFwiXCIpICsgXCJ0ZXh0XCIgKyBpXG4gICAgKX0gfSA9IHByb3BzXG4gICAgcmV0dXJuIDxTdHlsZWRDb250YWluZXIgey4uLnByb3BzfT5cbiAgICAgICR7dGV4dENoaWxkc31cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgfWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY29udGFpbmVyU3R5bGVTdHIgPSBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaihjb250YWluZXJTdHlsZSk7XG4gICAgY29kZSArPSBgZXhwb3J0IGNvbnN0IENvbXBvbmVudCA9IGdsYW1vcm91cygke1xuICAgICAgdGV4dENvbXBvbmVudE5hbWVzWzBdXG4gICAgfSkoKHByb3BzLCB0aGVtZSkgPT4gKCR7Y29udGFpbmVyU3R5bGVTdHJ9KSlgO1xuICB9XG5cbiAgcmV0dXJuIGNvZGU7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUxheWVyQ29tcG9uZW50V2l0aEJsdXIgPSAoXG4gIG9wdGlvbnMsXG4gIHByb2plY3QsXG4gIGxheWVyLFxuICBjb250YWluZXJTdHlsZVxuKSA9PiB7XG4gIGxldCBjb2RlID0gXCJcIjtcbiAgaWYgKG9wdGlvbnMuYmx1ckNvbXBvbmVudFBhdGgpIHtcbiAgICBjb2RlID0gYGltcG9ydCB7IEJsdXJWaWV3IH0gZnJvbSAnJHtvcHRpb25zLmJsdXJDb21wb25lbnRQYXRofSdcXG5cXG5gO1xuICB9IGVsc2Uge1xuICAgIGNvZGUgPSBcImltcG9ydCB7IEJsdXJWaWV3IGFzIFJOQmx1clZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUtYmx1cidcXG5cXG5cIjtcbiAgICBjb25zdCBjb250YWluZXJTdHlsZVN0ciA9IGNyZWF0ZUphdmFzY3JpcHRTdHJpbmdGcm9tT2JqKGNvbnRhaW5lclN0eWxlKTtcbiAgICBjb2RlICs9IGBjb25zdCBTdHlsZWRDb250YWluZXIgPSBnbGFtb3JvdXMudmlldygocHJvcHMsIHRoZW1lKSA9PiAoJHtjb250YWluZXJTdHlsZVN0cn0pKVxcblxcbmA7XG4gICAgY29kZSArPSBgY29uc3QgQmx1clZpZXcgPSBnbGFtb3JvdXMoUk5CbHVyVmlldykoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9KVxcblxcbmA7XG4gIH1cbiAgY29kZSArPSBgZXhwb3J0IGNvbnN0IENvbXBvbmVudCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgcmV0dXJuIDxTdHlsZWRDb250YWluZXIgey4uLnByb3BzfT5cbiAgICA8Qmx1clZpZXcgYmx1clR5cGU9XCJkYXJrXCIgLz4gLy8gXCJ4bGlnaHRcIiwgXCJsaWdodFwiIG9yIFwiZGFya1wiXG4gICAge2NoaWxkcmVufVxuICA8L1N0eWxlZENvbnRhaW5lcj5cbn1gO1xuICByZXR1cm4gY29kZTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlU2hhZG93U3R5bGVPYmplY3QgPSAob3B0aW9ucywgcHJvamVjdCwgc2hhZG93LCBsYXllclR5cGUpID0+IHtcbiAgaWYgKGxheWVyVHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICBjb25zdCBzaGFkb3dDb2xvciA9IHRoZW1lQ29sb3Iob3B0aW9ucywgcHJvamVjdCwgc2hhZG93LmNvbG9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dFNoYWRvd0NvbG9yOiBzaGFkb3dDb2xvcixcbiAgICAgIHRleHRTaGFkb3dPZmZzZXQ6IGAke3JvdW5kKFxuICAgICAgICBzaGFkb3cub2Zmc2V0WCAvIHByb2plY3QuZGVuc2l0eURpdmlzb3IsXG4gICAgICAgIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTlxuICAgICAgKX1weCAke3JvdW5kKFxuICAgICAgICBzaGFkb3cub2Zmc2V0WSAvIHByb2plY3QuZGVuc2l0eURpdmlzb3IsXG4gICAgICAgIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTlxuICAgICAgKX1weGAsXG4gICAgICB0ZXh0U2hhZG93UmFkaXVzOiByb3VuZChcbiAgICAgICAgc2hhZG93LmJsdXJSYWRpdXMgLyBwcm9qZWN0LmRlbnNpdHlEaXZpc29yLFxuICAgICAgICBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT05cbiAgICAgIClcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2plY3QudHlwZSA9PT0gXCJhbmRyb2lkXCIpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvLyBcImlPU1wiIGRvZXNuJ3QgaGF2ZSBzaGFkb3cgc3ByZWFkXG4gIGNvbnN0IHNoYWRvd0NvbG9yID0gdGhlbWVDb2xvcihvcHRpb25zLCBwcm9qZWN0LCBzaGFkb3cuY29sb3IpO1xuXG4gIHJldHVybiB7XG4gICAgc2hhZG93Q29sb3I6IHNoYWRvd0NvbG9yLFxuICAgIHNoYWRvd09mZnNldDogYCR7cm91bmQoXG4gICAgICBzaGFkb3cub2Zmc2V0WCAvIHByb2plY3QuZGVuc2l0eURpdmlzb3IsXG4gICAgICBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT05cbiAgICApfXB4ICR7cm91bmQoXG4gICAgICBzaGFkb3cub2Zmc2V0WSAvIHByb2plY3QuZGVuc2l0eURpdmlzb3IsXG4gICAgICBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT05cbiAgICApfXB4YCxcbiAgICBzaGFkb3dSYWRpdXM6IHJvdW5kKFxuICAgICAgc2hhZG93LmJsdXJSYWRpdXMgLyBwcm9qZWN0LmRlbnNpdHlEaXZpc29yLFxuICAgICAgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OXG4gICAgKSxcbiAgICBzaGFkb3dPcGFjaXR5OiAxLjBcbiAgfTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlQm9yZGVyU3R5bGVPYmplY3QgPSAob3B0aW9ucywgcHJvamVjdCwgYm9yZGVyLCBsYXllclR5cGUpID0+IHtcbiAgaWYgKFxuICAgIGxheWVyVHlwZSA9PT0gXCJ0ZXh0XCIgfHxcbiAgICAoYm9yZGVyLmZpbGwgJiYgYm9yZGVyLmZpbGwudHlwZSA9PT0gXCJncmFkaWVudFwiKVxuICApIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBjb25zdCBib3JkZXJDb2xvciA9IHRoZW1lQ29sb3Iob3B0aW9ucywgcHJvamVjdCwgYm9yZGVyLmZpbGwuY29sb3IpO1xuICByZXR1cm4ge1xuICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgYm9yZGVyV2lkdGg6IHJvdW5kKGJvcmRlci50aGlja25lc3MgLyBwcm9qZWN0LmRlbnNpdHlEaXZpc29yLCAxKSxcbiAgICBib3JkZXJDb2xvclxuICB9O1xufTtcblxuZXhwb3J0IHsgZ2VuZXJhdGVMYXllckNvbXBvbmVudCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheWVyL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==