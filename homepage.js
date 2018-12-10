'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function App() {
   var industryOptions = ["Agriculture", "Automotive", "Cybersecurity", "Data Technology", "Healthcare", "Financial"];
   var categoryOptions = ["Products", "Executive Thought", "Leadership", "Research / Studies", "Applications", "Trends"];
   var subcategoryOptions = ["Data Clouds", "Data Storage", "Data Analytics", "Data Marketing", "Data Hybrids"];

   return React.createElement(
      "div",
      { "class": "container" },
      React.createElement(
         "div",
         null,
         React.createElement(SearchHeader, null),
         React.createElement(
            "div",
            { "class": "row align-items-center" },
            React.createElement(Selection, { inputName: "Industry", options: industryOptions }),
            React.createElement(Selection, { inputName: "Category", options: categoryOptions }),
            React.createElement(Selection, { inputName: "Subcategory", options: subcategoryOptions })
         )
      )
   );
}

function SearchHeader() {
   return React.createElement(
      "div",
      { "class": "row align-items-center" },
      React.createElement(
         "div",
         { "class": "col text-center" },
         React.createElement(
            "h1",
            null,
            "Search for News"
         )
      )
   );
}

function Selection(props) {
   var forSelectID = "input" + props.inputName + "Select";
   return React.createElement(
      "div",
      { "class": "col" },
      React.createElement(
         "div",
         { "class": "input-group" },
         React.createElement(
            "div",
            { "class": "input-group-prepend" },
            React.createElement(
               "label",
               { "class": "input-group-text", "for": forSelectID },
               props.inputName
            )
         ),
         React.createElement(Dropdown, { selectID: props.inputName, options: props.options })
      )
   );
}

var Dropdown = function (_React$Component) {
   _inherits(Dropdown, _React$Component);

   function Dropdown(props) {
      _classCallCheck(this, Dropdown);

      var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

      _this.state = { options: null };
      _this.handleChange = _this.handleChange.bind(_this);
      return _this;
   }

   _createClass(Dropdown, [{
      key: "render",
      value: function render() {
         // var populates = this.props.populates;
         var options = this.props.options.map(function (value) {
            return React.createElement(DropdownOption, { key: value, value: value });
         });

         return React.createElement(
            "select",
            { "class": "custom-select", id: this.props.selectID, defaultValue: "", onChange: this.handleChange },
            React.createElement(
               "option",
               { value: "" },
               "Choose..."
            ),
            options
         );
      }
   }, {
      key: "handleChange",
      value: function handleChange() {
         console.log("changes");
      }

      // componentDidMount() {
      // this.state = 
      // }

      // componentWillUnmount() {

      // }

   }]);

   return Dropdown;
}(React.Component);

function DropdownOption(props) {
   return React.createElement(
      "option",
      { value: props.value },
      props.value
   );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));