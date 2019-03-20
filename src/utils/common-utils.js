import { HTML_TAGS, JSON_SPACING } from "../constants";

function escape(str) {
  return str
    .trim()
    .replace(/[^\s\w-]/g, "")
    .replace(/^(-?\d+)+/, "")
    .replace(/\s+/g, "-");
}

function isHtmlTag(str) {
  return HTML_TAGS.includes(str);
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

const createJavascriptStringFromObj = object => {
  let str = JSON.stringify(object, null, JSON_SPACING);
  str = str
    .replace(/"(.+)":/g, "$1:")
    .replace(/"theme.(.*)"/g, "theme.$1")
    .replace(/"/g, "'");
  return str;
};

const createStyledComponentsRules = object => {
  return (
    "\n" +
    Object.entries(object)
      .map(
        ([key, value]) =>
          `  ${camelCaseToSnakeCase(key)}: ${mapValue(
            camelCaseToSnakeCase(key),
            value
          )}`
      )
      .join(";\n") +
    "\n"
  );
};

const mapValue = (key, value) => {
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

const camelCaseToSnakeCase = s =>
  s
    .replace(/\.?([A-Z])/g, function(x, y) {
      return "-" + y.toLowerCase();
    })
    .replace(/^-/, "");

export {
  isHtmlTag,
  round,
  selectorize,
  createJavascriptStringFromObj,
  createStyledComponentsRules
};
