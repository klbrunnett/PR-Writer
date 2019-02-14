'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
   _inherits(App, _React$Component);

   function App(props) {
      _classCallCheck(this, App);

      var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

      _this.onIndustryChange = _this.onIndustryChange.bind(_this);
      _this.onCategoryChange = _this.onCategoryChange.bind(_this);
      _this.onSubcategoryChange = _this.onSubcategoryChange.bind(_this);
      _this.onSearchClick = _this.onSearchClick.bind(_this);
      _this.state = { industry: "", category: "", subcategory: "", isCategoryDisabled: "disabled", isSubcategoryDisabled: "disabled", isSearchDisabled: "disabled" };
      return _this;
   }

   // TODO: make this and other state functions take raw value instead of event


   _createClass(App, [{
      key: "onIndustryChange",
      value: function onIndustryChange(event) {
         var isCategoryDisabled = "";
         if (!event.target.value) {
            isCategoryDisabled = "disabled";
         }

         this.setState({ industry: event.target.value, isCategoryDisabled: isCategoryDisabled });
      }
   }, {
      key: "onCategoryChange",
      value: function onCategoryChange(event) {
         var isSubcategoryDisabled = "";
         if (!event.target.value) {
            isSubcategoryDisabled = "disabled";
         }
         this.setState({ category: event.target.value, isSubcategoryDisabled: isSubcategoryDisabled });
      }
   }, {
      key: "onSubcategoryChange",
      value: function onSubcategoryChange(event) {
         var isSearchDisabled = "";
         if (!event.target.value) {
            isSearchDisabled = "disabled";
         }
         this.setState({ subcategory: event.target.value, isSearchDisabled: isSearchDisabled });
      }
   }, {
      key: "onSearchClick",
      value: function onSearchClick(event) {
         event.preventDefault();
         // TODO: query the Dynamo Table for results
         this.setState(function (state, props) {
            return { results: [{
                  "id": "1",
                  "company": "Company 1",
                  "title": "Result 1 for " + state.subcategory,
                  "date": "02/13/2019",
                  "detail": "Details for story from Company 1."
               }, {
                  "id": "2",
                  "company": "Company 2",
                  "title": "Result 2 for " + state.subcategory,
                  "date": "02/13/2019",
                  "detail": "Details for story from Company 2."
               }, {
                  "id": "3",
                  "company": "Company 3",
                  "title": "Result 3 for " + state.subcategory,
                  "date": "02/13/2019",
                  "detail": "Details for story from Company 3."
               }] };
         });
      }
   }, {
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            { "class": "container" },
            React.createElement(SearchHeader, null),
            React.createElement(Form, {
               industry: this.state.industry, category: this.state.category, subcategory: this.state.subcategory,
               onIndustryChange: this.onIndustryChange, onCategoryChange: this.onCategoryChange, onSubcategoryChange: this.onSubcategoryChange,
               onSearchClick: this.onSearchClick, isCategoryDisabled: this.state.isCategoryDisabled, isSubcategoryDisabled: this.state.isSubcategoryDisabled,
               isSearchDisabled: this.state.isSearchDisabled }),
            React.createElement(ResultsList, { results: this.state.results })
         );
      }
   }]);

   return App;
}(React.Component);

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

var Form = function (_React$Component2) {
   _inherits(Form, _React$Component2);

   function Form(props) {
      _classCallCheck(this, Form);

      return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
   }

   _createClass(Form, [{
      key: "render",
      value: function render() {
         var industryOptions = ["Agriculture", "Automotive", "Cybersecurity", "Data Technology", "Healthcare", "Financial"];
         var categoryOptions = {
            "": [],
            "Agriculture": ["Agriculture.Products", "Agriculture.Executive Thought", "Agriculture.Leadership", "Agriculture.Research / Studies", "Agriculture.Applications", "Agriculture.Trends"],
            "Automotive": ["Automotive.Products", "Automotive.Executive Thought", "Automotive.Leadership", "Automotive.Research / Studies", "Automotive.Applications", "Automotive.Trends"],
            "Cybersecurity": ["Cybersecurity.Products", "Cybersecurity.Executive Thought", "Cybersecurity.Leadership", "Cybersecurity.Research / Studies", "Cybersecurity.Applications", "Cybersecurity.Trends"],
            "Data Technology": ["Data Technology.Products", "Data Technology.Executive Thought", "Data Technology.Leadership", "Data Technology.Research / Studies", "Data Technology.Applications", "Data Technology.Trends"],
            "Healthcare": ["Healthcare.Products", "Healthcare.Executive Thought", "Healthcare.Leadership", "Healthcare.Research / Studies", "Healthcare.Applications", "Healthcare.Trends"],
            "Financial": ["Financial.Products", "Financial.Executive Thought", "Financial.Leadership", "Financial.Research / Studies", "Financial.Applications", "Financial.Trends"]
         };
         var subcategoryOptions = {
            "": [],
            "Agriculture.Products": ["Agriculture.Products.Data Clouds", "Agriculture.Products.Data Storage", "Agriculture.Products.Data Analytics", "Agriculture.Products.Data Marketing", "Agriculture.Products.Data Hybrids"],
            "Agriculture.Executive Thought": ["Agriculture.Executive Thought.Data Clouds", "Agriculture.Executive Thought.Data Storage", "Agriculture.Executive Thought.Data Analytics", "Agriculture.Executive Thought.Data Marketing", "Agriculture.Executive Thought.Data Hybrids"],
            "Agriculture.Leadership": ["Agriculture.Leadership.Data Clouds", "Agriculture.Leadership.Data Storage", "Agriculture.Leadership.Data Analytics", "Agriculture.Leadership.Data Marketing", "Agriculture.Leadership.Data Hybrids"],
            "Agriculture.Research / Studies": ["Agriculture.Research / Studies.Data Clouds", "Agriculture.Research / Studies.Data Storage", "Agriculture.Research / Studies.Data Analytics", "Agriculture.Research / Studies.Data Marketing", "Agriculture.Research / Studies.Data Hybrids"],
            "Agriculture.Applications": ["Agriculture.Applications.Data Clouds", "Agriculture.Applications.Data Storage", "Agriculture.Applications.Data Analytics", "Agriculture.Applications.Data Marketing", "Agriculture.Applications.Data Hybrids"],
            "Agriculture.Trends": ["Agriculture.Trends.Data Clouds", "Agriculture.Trends.Data Storage", "Agriculture.Trends.Data Analytics", "Agriculture.Trends.Data Marketing", "Agriculture.Trends.Data Hybrids"],
            "Automotive.Products": ["Automotive.Products.Data Clouds", "Automotive.Products.Data Storage", "Automotive.Products.Data Analytics", "Automotive.Products.Data Marketing", "Automotive.Products.Data Hybrids"],
            "Automotive.Executive Thought": ["Automotive.Executive Thought.Data Clouds", "Automotive.Executive Thought.Data Storage", "Automotive.Executive Thought.Data Analytics", "Automotive.Executive Thought.Data Marketing", "Automotive.Executive Thought.Data Hybrids"],
            "Automotive.Leadership": ["Automotive.Leadership.Data Clouds", "Automotive.Leadership.Data Storage", "Automotive.Leadership.Data Analytics", "Automotive.Leadership.Data Marketing", "Automotive.Leadership.Data Hybrids"],
            "Automotive.Research / Studies": ["Automotive.Research / Studies.Data Clouds", "Automotive.Research / Studies.Data Storage", "Automotive.Research / Studies.Data Analytics", "Automotive.Research / Studies.Data Marketing", "Automotive.Research / Studies.Data Hybrids"],
            "Automotive.Applications": ["Automotive.Applications.Data Clouds", "Automotive.Applications.Data Storage", "Automotive.Applications.Data Analytics", "Automotive.Applications.Data Marketing", "Automotive.Applications.Data Hybrids"],
            "Automotive.Trends": ["Automotive.Trends.Data Clouds", "Automotive.Trends.Data Storage", "Automotive.Trends.Data Analytics", "Automotive.Trends.Data Marketing", "Automotive.Trends.Data Hybrids"],
            "Cybersecurity.Products": ["Cybersecurity.Products.Data Clouds", "Cybersecurity.Products.Data Storage", "Cybersecurity.Products.Data Analytics", "Cybersecurity.Products.Data Marketing", "Cybersecurity.Products.Data Hybrids"],
            "Cybersecurity.Executive Thought": ["Cybersecurity.Executive Thought.Data Clouds", "Cybersecurity.Executive Thought.Data Storage", "Cybersecurity.Executive Thought.Data Analytics", "Cybersecurity.Executive Thought.Data Marketing", "Cybersecurity.Executive Thought.Data Hybrids"],
            "Cybersecurity.Leadership": ["Cybersecurity.Leadership.Data Clouds", "Cybersecurity.Leadership.Data Storage", "Cybersecurity.Leadership.Data Analytics", "Cybersecurity.Leadership.Data Marketing", "Cybersecurity.Leadership.Data Hybrids"],
            "Cybersecurity.Research / Studies": ["Cybersecurity.Research / Studies.Data Clouds", "Cybersecurity.Research / Studies.Data Storage", "Cybersecurity.Research / Studies.Data Analytics", "Cybersecurity.Research / Studies.Data Marketing", "Cybersecurity.Research / Studies.Data Hybrids"],
            "Cybersecurity.Applications": ["Cybersecurity.Applications.Data Clouds", "Cybersecurity.Applications.Data Storage", "Cybersecurity.Applications.Data Analytics", "Cybersecurity.Applications.Data Marketing", "Cybersecurity.Applications.Data Hybrids"],
            "Cybersecurity.Trends": ["Cybersecurity.Trends.Data Clouds", "Cybersecurity.Trends.Data Storage", "Cybersecurity.Trends.Data Analytics", "Cybersecurity.Trends.Data Marketing", "Cybersecurity.Trends.Data Hybrids"],
            "Data Technology.Products": ["Data Technology.Products.Data Clouds", "Data Technology.Products.Data Storage", "Data Technology.Products.Data Analytics", "Data Technology.Products.Data Marketing", "Data Technology.Products.Data Hybrids"],
            "Data Technology.Executive Thought": ["Data Technology.Executive Thought.Data Clouds", "Data Technology.Executive Thought.Data Storage", "Data Technology.Executive Thought.Data Analytics", "Data Technology.Executive Thought.Data Marketing", "Data Technology.Executive Thought.Data Hybrids"],
            "Data Technology.Leadership": ["Data Technology.Leadership.Data Clouds", "Data Technology.Leadership.Data Storage", "Data Technology.Leadership.Data Analytics", "Data Technology.Leadership.Data Marketing", "Data Technology.Leadership.Data Hybrids"],
            "Data Technology.Research / Studies": ["Data Technology.Research / Studies.Data Clouds", "Data Technology.Research / Studies.Data Storage", "Data Technology.Research / Studies.Data Analytics", "Data Technology.Research / Studies.Data Marketing", "Data Technology.Research / Studies.Data Hybrids"],
            "Data Technology.Applications": ["Data Technology.Applications.Data Clouds", "Data Technology.Applications.Data Storage", "Data Technology.Applications.Data Analytics", "Data Technology.Applications.Data Marketing", "Data Technology.Applications.Data Hybrids"],
            "Data Technology.Trends": ["Data Technology.Trends.Data Clouds", "Data Technology.Trends.Data Storage", "Data Technology.Trends.Data Analytics", "Data Technology.Trends.Data Marketing", "Data Technology.Trends.Data Hybrids"],
            "Healthcare.Products": ["Healthcare.Products.Data Clouds", "Healthcare.Products.Data Storage", "Healthcare.Products.Data Analytics", "Healthcare.Products.Data Marketing", "Healthcare.Products.Data Hybrids"],
            "Healthcare.Executive Thought": ["Healthcare.Executive Thought.Data Clouds", "Healthcare.Executive Thought.Data Storage", "Healthcare.Executive Thought.Data Analytics", "Healthcare.Executive Thought.Data Marketing", "Healthcare.Executive Thought.Data Hybrids"],
            "Healthcare.Leadership": ["Healthcare.Leadership.Data Clouds", "Healthcare.Leadership.Data Storage", "Healthcare.Leadership.Data Analytics", "Healthcare.Leadership.Data Marketing", "Healthcare.Leadership.Data Hybrids"],
            "Healthcare.Research / Studies": ["Healthcare.Research / Studies.Data Clouds", "Healthcare.Research / Studies.Data Storage", "Healthcare.Research / Studies.Data Analytics", "Healthcare.Research / Studies.Data Marketing", "Healthcare.Research / Studies.Data Hybrids"],
            "Healthcare.Applications": ["Healthcare.Applications.Data Clouds", "Healthcare.Applications.Data Storage", "Healthcare.Applications.Data Analytics", "Healthcare.Applications.Data Marketing", "Healthcare.Applications.Data Hybrids"],
            "Healthcare.Trends": ["Healthcare.Trends.Data Clouds", "Healthcare.Trends.Data Storage", "Healthcare.Trends.Data Analytics", "Healthcare.Trends.Data Marketing", "Healthcare.Trends.Data Hybrids"],
            "Financial.Products": ["Financial.Products.Data Clouds", "Financial.Products.Data Storage", "Financial.Products.Data Analytics", "Financial.Products.Data Marketing", "Financial.Products.Data Hybrids"],
            "Financial.Executive Thought": ["Financial.Executive Thought.Data Clouds", "Financial.Executive Thought.Data Storage", "Financial.Executive Thought.Data Analytics", "Financial.Executive Thought.Data Marketing", "Financial.Executive Thought.Data Hybrids"],
            "Financial.Leadership": ["Financial.Leadership.Data Clouds", "Financial.Leadership.Data Storage", "Financial.Leadership.Data Analytics", "Financial.Leadership.Data Marketing", "Financial.Leadership.Data Hybrids"],
            "Financial.Research / Studies": ["Financial.Research / Studies.Data Clouds", "Financial.Research / Studies.Data Storage", "Financial.Research / Studies.Data Analytics", "Financial.Research / Studies.Data Marketing", "Financial.Research / Studies.Data Hybrids"],
            "Financial.Applications": ["Financial.Applications.Data Clouds", "Financial.Applications.Data Storage", "Financial.Applications.Data Analytics", "Financial.Applications.Data Marketing", "Financial.Applications.Data Hybrids"],
            "Financial.Trends": ["Financial.Trends.Data Clouds", "Financial.Trends.Data Storage", "Financial.Trends.Data Analytics", "Financial.Trends.Data Marketing", "Financial.Trends.Data Hybrids"]

            // TODO: look into making the buttons a button group: https://getbootstrap.com/docs/4.1/components/button-group/
         };return React.createElement(
            "form",
            { "class": "px-4 py-3" },
            React.createElement(
               "div",
               { "class": "form-group" },
               React.createElement(
                  "div",
                  { "class": "row align-items-center" },
                  React.createElement(Selection, { inputName: "Industry", options: industryOptions, value: this.props.industry, onChange: this.props.onIndustryChange }),
                  React.createElement(Selection, { inputName: "Category", options: categoryOptions[this.props.industry], value: this.props.category, onChange: this.props.onCategoryChange, disabled: this.props.isCategoryDisabled }),
                  React.createElement(Selection, { inputName: "Subcategory", options: subcategoryOptions[this.props.category], value: this.props.subcategory, onChange: this.props.onSubcategoryChange, disabled: this.props.isSubcategoryDisabled })
               ),
               React.createElement(
                  "div",
                  { "class": "row align-items-center justify-content-center my-2" },
                  React.createElement(Search, { onSearchClick: this.props.onSearchClick, disabled: this.props.isSearchDisabled })
               )
            )
         );
      }
   }]);

   return Form;
}(React.Component);

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
         React.createElement(Dropdown, { selectID: props.inputName, options: props.options, value: props.value, onChange: props.onChange, disabled: props.disabled })
      )
   );
}

var Dropdown = function (_React$Component3) {
   _inherits(Dropdown, _React$Component3);

   function Dropdown(props) {
      _classCallCheck(this, Dropdown);

      return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
   }

   _createClass(Dropdown, [{
      key: "render",
      value: function render() {
         var options = this.props.options.map(function (value) {
            return React.createElement(DropdownOption, { key: value, value: value });
         });

         return React.createElement(
            "select",
            { "class": "custom-select", name: this.props.selectID, id: this.props.selectID, value: this.props.value, onChange: this.props.onChange, disabled: this.props.disabled },
            React.createElement(
               "option",
               { value: "" },
               "Choose..."
            ),
            options
         );
      }
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

function Search(props) {
   return React.createElement(
      "div",
      { "class": "col text-center" },
      React.createElement(
         "button",
         { type: "submit", "class": "btn btn-primary", onClick: props.onSearchClick, disabled: props.disabled },
         "Search"
      )
   );
}

var ResultsList = function (_React$Component4) {
   _inherits(ResultsList, _React$Component4);

   function ResultsList(props) {
      _classCallCheck(this, ResultsList);

      return _possibleConstructorReturn(this, (ResultsList.__proto__ || Object.getPrototypeOf(ResultsList)).call(this, props));
   }

   _createClass(ResultsList, [{
      key: "render",
      value: function render() {
         if (this.props.results) {
            var results = this.props.results.map(function (result) {
               return React.createElement(Result, { key: result.id, id: result.id, company: result.company, title: result.title, date: result.date, detail: result.detail });
            });
            return React.createElement(
               "div",
               { "class": "accordion", id: "resultsAccordion" },
               results
            );
         }
         return React.createElement("div", null);
      }
   }]);

   return ResultsList;
}(React.Component);

var Result = function (_React$Component5) {
   _inherits(Result, _React$Component5);

   function Result(props) {
      _classCallCheck(this, Result);

      return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));
   }

   _createClass(Result, [{
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            { "class": "card" },
            React.createElement(
               "div",
               { "class": "card-header", id: "header-" + this.props.id },
               React.createElement(
                  "button",
                  { "class": "btn btn-link collapsed", type: "button", "data-toggle": "collapse", "data-target": "#collapse-" + this.props.id, "aria-expanded": "false", "aria-controls": "collapse-" + this.props.id },
                  React.createElement(
                     "div",
                     { "class": "row-fluid" },
                     React.createElement(
                        "div",
                        { "class": "col-2" },
                        React.createElement(
                           "h3",
                           null,
                           this.props.company
                        )
                     ),
                     React.createElement(
                        "div",
                        { "class": "col-8" },
                        this.props.title
                     ),
                     React.createElement(
                        "div",
                        { "class": "col-2" },
                        this.props.date
                     )
                  )
               )
            ),
            React.createElement(
               "div",
               { id: "collapse-" + this.props.id, "class": "collapse", "aria-labelledby": "header-" + this.props.id, "data-parent": "#resultsAccordion" },
               React.createElement(
                  "div",
                  { "class": "card-body" },
                  this.props.detail,
                  React.createElement("br", null),
                  React.createElement(
                     "button",
                     { type: "submit", "class": "btn btn-primary" },
                     "Accept Embargo"
                  )
               )
            )
         );
      }
   }]);

   return Result;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));