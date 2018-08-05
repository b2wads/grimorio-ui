'use strict';

var _lodash = _interopRequireDefault(require("lodash"));

var _vinyl = _interopRequireDefault(require("vinyl"));

var _gulp = _interopRequireDefault(require("gulp"));

var _mergeStream = _interopRequireDefault(require("merge-stream"));

var _sprity = _interopRequireDefault(require("sprity"));

var _gulpSvgSprite = _interopRequireDefault(require("gulp-svg-sprite"));

var _through = _interopRequireDefault(require("through2"));

var _underscore = require("underscore.string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/** Names of directories containing icons. */
var ICON_CATEGORIES = ['action', 'alert', 'av', 'communication', 'content', 'device', 'editor', 'file', 'hardware', 'image', 'maps', 'navigation', 'notification', 'places', 'social', 'toggle'];
/** Standard PNG colors. */

var PNG_COLORS = ['black', 'white'];
/**
 * Generates PNG sprites and their corresponding CSS files for each category of
 * icon, and places them in `sprites/css-sprite`.
 *
 * TODO(shyndman): Add support for double density sprites.
 */

_gulp.default.task('png-sprites', function () {
  return (0, _lodash.default)(getCategoryColorPairs()).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        category = _ref2[0],
        color = _ref2[1];

    return _sprity.default.src({
      src: "./".concat(category, "/1x_web/*_").concat(color, "_24dp.png"),
      style: "sprite-".concat(category, "-").concat(color, ".css"),
      name: "sprite-".concat(category, "-").concat(color),
      engine: 'sprity-gm',
      orientation: 'left-right'
    });
  }).thru(_mergeStream.default).value().pipe(_gulp.default.dest('./sprites/css-sprite/'));
});
/**
 * Generates CSS and Symbol-based SVG sprites for each category, and places
 * them in `sprites/svg-sprite`.
 */


_gulp.default.task('svg-sprites', function () {
  return (0, _lodash.default)(ICON_CATEGORIES).map(function (category) {
    return _gulp.default.src("./".concat(category, "/svg/production/*_24px.svg")).pipe((0, _gulpSvgSprite.default)(getSvgSpriteConfig(category)));
  }).thru(_mergeStream.default).value().pipe(_gulp.default.dest('./sprites/svg-sprite'));
});
/**
 * Generates a file to allow the consumption of the icon font by Iconjar
 * (http://geticonjar.com/).
 */


_gulp.default.task('iconjar', function () {
  return _gulp.default.src('./iconfont/codepoints').pipe(generateIjmap('MaterialIcons-Regular.ijmap')).pipe(_gulp.default.dest('./iconfont/'));
});
/** Runs all tasks. */


_gulp.default.task('default', ['png-sprites', 'svg-sprites', 'iconjar']);
/**
 * Returns a stream that transforms between our icon font's codepoint file
 * and an Iconjar ijmap.
 */


function generateIjmap(ijmapPath) {
  return _through.default.obj(function (codepointsFile, encoding, callback) {
    var ijmap = {
      icons: codepointsToIjmap(codepointsFile.contents.toString())
    };
    callback(null, new _vinyl.default({
      path: ijmapPath,
      contents: new Buffer(JSON.stringify(ijmap), 'utf8')
    }));

    function codepointsToIjmap(codepoints) {
      return (0, _lodash.default)(codepoints).split('\n') // split into lines
      .reject(_lodash.default.isEmpty) // remove empty lines
      .reduce(function (codepointMap, line) {
        // build up the codepoint map
        var _line$split = line.split(' '),
            _line$split2 = _slicedToArray(_line$split, 2),
            name = _line$split2[0],
            codepoint = _line$split2[1];

        codepointMap[codepoint] = {
          name: (0, _underscore.titleize)((0, _underscore.humanize)(name))
        };
        return codepointMap;
      }, {});
    }
  });
}
/**
 * Returns the SVG sprite configuration for the specified category.
 */


function getSvgSpriteConfig(category) {
  return {
    shape: {
      dimension: {
        maxWidth: 24,
        maxHeight: 24
      }
    },
    mode: {
      css: {
        bust: false,
        dest: './',
        sprite: "./svg-sprite-".concat(category, ".svg"),
        example: {
          dest: "./svg-sprite-".concat(category, ".html")
        },
        render: {
          css: {
            dest: "./svg-sprite-".concat(category, ".css")
          }
        }
      },
      symbol: {
        bust: false,
        dest: './',
        sprite: "./svg-sprite-".concat(category, "-symbol.svg"),
        example: {
          dest: "./svg-sprite-".concat(category, "-symbol.html")
        }
      }
    }
  };
}
/**
 * Returns the catesian product of categories and colors.
 */


function getCategoryColorPairs() {
  return (0, _lodash.default)(ICON_CATEGORIES).map(function (category) {
    return _lodash.default.zip(_lodash.default.times(PNG_COLORS.length, function () {
      return category;
    }), PNG_COLORS);
  }).flatten() // flattens 1 level
  .value();
}