'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var SearchHeader = function (_React$Component) {
   _inherits(SearchHeader, _React$Component);

   function SearchHeader(props) {
      _classCallCheck(this, SearchHeader);

      return _possibleConstructorReturn(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).call(this, props));
   }

   _createClass(SearchHeader, [{
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            { "class": "col text-center" },
            React.createElement(
               "h1",
               null,
               "Search for News"
            )
         );
      }
   }]);

   return SearchHeader;
}(React.Component);

var Dropdown = function (_React$Component2) {
   _inherits(Dropdown, _React$Component2);

   function Dropdown(props) {
      _classCallCheck(this, Dropdown);

      return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
   }

   _createClass(Dropdown, [{
      key: "populateDropdown",
      value: function populateDropdown(contents) {
         var dropdownContents = React.createElement(
            "div",
            { "class": "input-group" },
            React.createElement(
               "div",
               { "class": "input-group-prepend" },
               React.createElement(
                  "label",
                  { "class": "input-group-text", "for": "inputIndustrySelect" },
                  "Industry"
               )
            ),
            React.createElement(
               "select",
               { "class": "custom-select", id: "inputIndustrySelect", defaultValue: "" },
               React.createElement(
                  "option",
                  { value: "" },
                  "Choose..."
               ),
               "); var contentLength = contents.length; dropdownContents += ",
               React.createElement(
                  "option",
                  { value: "0" },
                  "Automotive"
               ),
               "; dropdownContents += ("
            )
         );
         return dropdownContents;
      }
   }]);

   return Dropdown;
}(React.Component);

var InputIndustryDropdown = function (_Dropdown) {
   _inherits(InputIndustryDropdown, _Dropdown);

   function InputIndustryDropdown(props) {
      _classCallCheck(this, InputIndustryDropdown);

      return _possibleConstructorReturn(this, (InputIndustryDropdown.__proto__ || Object.getPrototypeOf(InputIndustryDropdown)).call(this, props));
   }

   _createClass(InputIndustryDropdown, [{
      key: "render",
      value: function render() {
         var inputIndustryContents = ["Agriculture", "Automotive", "Cybersecurity", "Data Technology", "Healthcare", "Financial"];
         return _get(InputIndustryDropdown.prototype.__proto__ || Object.getPrototypeOf(InputIndustryDropdown.prototype), "populateDropdown", this).call(this, inputIndustryContents);
      }
   }]);

   return InputIndustryDropdown;
}(Dropdown);

var LikeButton = function (_React$Component3) {
   _inherits(LikeButton, _React$Component3);

   function LikeButton(props) {
      _classCallCheck(this, LikeButton);

      var _this4 = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

      _this4.state = { liked: false };
      return _this4;
   }

   _createClass(LikeButton, [{
      key: "render",
      value: function render() {
         var _this5 = this;

         if (this.state.liked) {
            return 'You liked this.';
         }

         return e('button', { onClick: function onClick() {
               return _this5.setState({ liked: true });
            } }, 'Like');
      }
   }]);

   return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#search-header');
ReactDOM.render(e(SearchHeader), domContainer);

var domContainer1 = document.querySelector('#input-industry');
ReactDOM.render(e(InputIndustryDropdown), domContainer1);