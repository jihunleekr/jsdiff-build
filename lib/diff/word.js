/*istanbul ignore start*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffWords = diffWords;
exports.diffWordsWithSpace = diffWordsWithSpace;
exports.wordDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(require("./base"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_params = require("../util/params")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var spaceChars = " \f\t\x0B\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF";
var charsCannotBecomeWord = '';
charsCannotBecomeWord += '\n\r';
charsCannotBecomeWord += "\0-/:-@[-`{-~"; // Basic Latin

charsCannotBecomeWord += "\xA0-\xBF\xD7\xF7"; // Latin-1 Supplement

charsCannotBecomeWord += "\u02B9-\u02DD\u02E5-\u02FF"; // Spacing Modifier Letters

charsCannotBecomeWord += "\u0300-\u036F"; // Combining Diacritical Marks

charsCannotBecomeWord += "\u1000-\u1FAFF"; // Mahjong Tiles - Symbols and Pictographs Extended-A

charsCannotBecomeWord += "\u2000-\u2BFF"; // General Punctuation - Miscellaneous Symbols and Arrows

charsCannotBecomeWord += "\u3000-\u303F"; // CJK Symbols and Punctuation

var spaceRegExp = new RegExp(
/*istanbul ignore start*/
"[".concat(
/*istanbul ignore end*/
spaceChars, "]"));
var cannotBecomeWordRegExp = new RegExp(
/*istanbul ignore start*/
"[".concat(
/*istanbul ignore end*/
charsCannotBecomeWord, "]"));
var reWhitespace = /\S/;
var wordDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.wordDiff = wordDiff;

/*istanbul ignore end*/
wordDiff.equals = function (left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }

  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};

wordDiff.tokenize = function (value) {
  var tokens = [];
  var prevCharType = '';

  for (var i = 0; i < value.length; i++) {
    var _char = value[i];

    if (spaceRegExp.test(_char)) {
      if (prevCharType === 'space') {
        tokens[tokens.length - 1] += ' ';
      } else {
        tokens.push(' ');
      }

      prevCharType = 'space';
    } else if (cannotBecomeWordRegExp.test(_char)) {
      tokens.push(_char);
      prevCharType = '';
    } else {
      if (prevCharType === 'word') {
        tokens[tokens.length - 1] += _char;
      } else {
        tokens.push(_char);
      }

      prevCharType = 'word';
    }
  }

  return tokens;
};

function diffWords(oldStr, newStr, options) {
  options =
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _params
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  generateOptions)
  /*istanbul ignore end*/
  (options, {
    ignoreWhitespace: true
  });
  return wordDiff.diff(oldStr, newStr, options);
}

function diffWordsWithSpace(oldStr, newStr, options) {
  return wordDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3dvcmQuanMiXSwibmFtZXMiOlsic3BhY2VDaGFycyIsImNoYXJzQ2Fubm90QmVjb21lV29yZCIsInNwYWNlUmVnRXhwIiwiUmVnRXhwIiwiY2Fubm90QmVjb21lV29yZFJlZ0V4cCIsInJlV2hpdGVzcGFjZSIsIndvcmREaWZmIiwiRGlmZiIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsIm9wdGlvbnMiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJpZ25vcmVXaGl0ZXNwYWNlIiwidGVzdCIsInRva2VuaXplIiwidmFsdWUiLCJ0b2tlbnMiLCJwcmV2Q2hhclR5cGUiLCJpIiwibGVuZ3RoIiwiY2hhciIsInB1c2giLCJkaWZmV29yZHMiLCJvbGRTdHIiLCJuZXdTdHIiLCJnZW5lcmF0ZU9wdGlvbnMiLCJkaWZmIiwiZGlmZldvcmRzV2l0aFNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsc0VBQW5CO0FBQ0EsSUFBSUMscUJBQXFCLEdBQUcsRUFBNUI7QUFDQUEscUJBQXFCLElBQUksTUFBekI7QUFDQUEscUJBQXFCLElBQ25CLGVBREYsQyxDQUMwRDs7QUFDeERBLHFCQUFxQixJQUFJLG1CQUF6QixDLENBQXNEOztBQUN0REEscUJBQXFCLElBQUksNEJBQXpCLEMsQ0FBdUQ7O0FBQ3ZEQSxxQkFBcUIsSUFBSSxlQUF6QixDLENBQTBDOztBQUMxQ0EscUJBQXFCLElBQUksZ0JBQXpCLEMsQ0FBMkM7O0FBQzNDQSxxQkFBcUIsSUFBSSxlQUF6QixDLENBQTBDOztBQUMxQ0EscUJBQXFCLElBQUksZUFBekIsQyxDQUEwQzs7QUFDNUMsSUFBTUMsV0FBVyxHQUFHLElBQUlDLE1BQUo7QUFBQTtBQUFBO0FBQUE7QUFBZUgsVUFBZixPQUFwQjtBQUNBLElBQU1JLHNCQUFzQixHQUFHLElB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b3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Z2VuZXJhdGVPcHRpb25zfSBmcm9tICcuLi91dGlsL3BhcmFtcyc7XG5cbmNvbnN0IHNwYWNlQ2hhcnMgPSAnIFxcZlxcdFxcdlxcdTAwYTBcXHUxNjgwXFx1MjAwMC1cXHUyMDBhXFx1MjAyOFxcdTIwMjlcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXHVmZWZmJztcbmxldCBjaGFyc0Nhbm5vdEJlY29tZVdvcmQgPSAnJztcbmNoYXJzQ2Fubm90QmVjb21lV29yZCArPSAnXFxuXFxyJztcbmNoYXJzQ2Fubm90QmVjb21lV29yZCArPVxuICAnXFx1MDAwMC1cXHUwMDJGXFx1MDAzQS1cXHUwMDQwXFx1MDA1Qi1cXHUwMDYwXFx1MDA3Qi1cXHUwMDdFJzsgLy8gQmFzaWMgTGF0aW5cbiAgY2hhcnNDYW5ub3RCZWNvbWVXb3JkICs9ICdcXHUwMEEwLVxcdTAwQkZcXHUwMEQ3XFx1MDBGNyc7IC8vIExhdGluLTEgU3VwcGxlbWVudFxuICBjaGFyc0Nhbm5vdEJlY29tZVdvcmQgKz0gJ1xcdTAyQjktXFx1MDJERFxcdTAyRTUtXFx1MDJGRic7IC8vIFNwYWNpbmcgTW9kaWZpZXIgTGV0dGVyc1xuICBjaGFyc0Nhbm5vdEJlY29tZVdvcmQgKz0gJ1xcdTAzMDAtXFx1MDM2Ric7IC8vIENvbWJpbmluZyBEaWFjcml0aWNhbCBNYXJrc1xuICBjaGFyc0Nhbm5vdEJlY29tZVdvcmQgKz0gJ1xcdTEwMDAtXFx1MUZBRkYnOyAvLyBNYWhqb25nIFRpbGVzIC0gU3ltYm9scyBhbmQgUGljdG9ncmFwaHMgRXh0ZW5kZWQtQVxuICBjaGFyc0Nhbm5vdEJlY29tZVdvcmQgKz0gJ1xcdTIwMDAtXFx1MkJGRic7IC8vIEdlbmVyYWwgUHVuY3R1YXRpb24gLSBNaXNjZWxsYW5lb3VzIFN5bWJvbHMgYW5kIEFycm93c1xuICBjaGFyc0Nhbm5vdEJlY29tZVdvcmQgKz0gJ1xcdTMwMDAtXFx1MzAzRic7IC8vIENKSyBTeW1ib2xzIGFuZCBQdW5jdHVhdGlvblxuY29uc3Qgc3BhY2VSZWdFeHAgPSBuZXcgUmVnRXhwKGBbJHtzcGFjZUNoYXJzfV1gKTtcbmNvbnN0IGNhbm5vdEJlY29tZVdvcmRSZWdFeHAgPSBuZXcgUmVnRXhwKGBbJHtjaGFyc0Nhbm5vdEJlY29tZVdvcmR9XWApO1xuXG5jb25zdCByZVdoaXRlc3BhY2UgPSAvXFxTLztcblxuZXhwb3J0IGNvbnN0IHdvcmREaWZmID0gbmV3IERpZmYoKTtcbndvcmREaWZmLmVxdWFscyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSkge1xuICAgIGxlZnQgPSBsZWZ0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmlnaHQgPSByaWdodC50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KGxlZnQpICYmICFyZVdoaXRlc3BhY2UudGVzdChyaWdodCkpO1xufTtcbndvcmREaWZmLnRva2VuaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgY29uc3QgdG9rZW5zID0gW107XG4gIGxldCBwcmV2Q2hhclR5cGUgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoYXIgPSB2YWx1ZVtpXTtcbiAgICBpZiAoc3BhY2VSZWdFeHAudGVzdChjaGFyKSkge1xuICAgICAgaWYocHJldkNoYXJUeXBlID09PSAnc3BhY2UnKSB7XG4gICAgICAgIHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0gKz0gJyAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW5zLnB1c2goJyAnKTtcbiAgICAgIH1cbiAgICAgIHByZXZDaGFyVHlwZSA9ICdzcGFjZSc7XG4gICAgfSBlbHNlIGlmIChjYW5ub3RCZWNvbWVXb3JkUmVnRXhwLnRlc3QoY2hhcikpIHtcbiAgICAgIHRva2Vucy5wdXNoKGNoYXIpO1xuICAgICAgcHJldkNoYXJUeXBlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHByZXZDaGFyVHlwZSA9PT0gJ3dvcmQnKSB7XG4gICAgICAgIHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0gKz0gY2hhcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRva2Vucy5wdXNoKGNoYXIpO1xuICAgICAgfVxuICAgICAgcHJldkNoYXJUeXBlID0gJ3dvcmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9rZW5zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICBvcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3Jkc1dpdGhTcGFjZShvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG59XG4iXX0=