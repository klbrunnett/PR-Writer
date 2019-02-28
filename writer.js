'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
   _inherits(App, _React$Component);

   function App(props) {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
   }

   _createClass(App, [{
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            { "class": "container" },
            React.createElement(WriterHeader, null),
            React.createElement(WriterTabs, null)
         );
      }
   }]);

   return App;
}(React.Component);

function WriterHeader() {
   return React.createElement(
      "div",
      { "class": "row align-items-center" },
      React.createElement(
         "div",
         { "class": "col text-center" },
         React.createElement(
            "h1",
            null,
            "Writer"
         )
      )
   );
}

var WriterTabs = function (_React$Component2) {
   _inherits(WriterTabs, _React$Component2);

   function WriterTabs(props) {
      _classCallCheck(this, WriterTabs);

      return _possibleConstructorReturn(this, (WriterTabs.__proto__ || Object.getPrototypeOf(WriterTabs)).call(this, props));
   }

   _createClass(WriterTabs, [{
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            null,
            React.createElement(
               "ul",
               { "class": "nav nav-tabs justify-content-center", id: "myTab", role: "tablist" },
               React.createElement(
                  "li",
                  { "class": "nav-item" },
                  React.createElement(
                     "a",
                     { "class": "nav-link active", id: "writer-profile-tab", "data-toggle": "tab", href: "#writer-profile", role: "tab", "aria-controls": "writer-profile", "aria-selected": "true" },
                     "Writer Profile"
                  )
               ),
               React.createElement(
                  "li",
                  { "class": "nav-item" },
                  React.createElement(
                     "a",
                     { "class": "nav-link", id: "embargoes-tab", "data-toggle": "tab", href: "#embargoes", role: "tab", "aria-controls": "embargoes", "aria-selected": "false" },
                     "Embargoes"
                  )
               ),
               React.createElement(
                  "li",
                  { "class": "nav-item" },
                  React.createElement(
                     "a",
                     { "class": "nav-link", id: "published-articles-tab", "data-toggle": "tab", href: "#published-articles", role: "tab", "aria-controls": "published-articles", "aria-selected": "false" },
                     "Published Articles"
                  )
               ),
               React.createElement(
                  "li",
                  { "class": "nav-item" },
                  React.createElement(
                     "a",
                     { "class": "nav-link", id: "analytics-tab", "data-toggle": "tab", href: "#analytics", role: "tab", "aria-controls": "analytics", "aria-selected": "false" },
                     "Analytics"
                  )
               )
            ),
            React.createElement(
               "div",
               { "class": "tab-content", id: "myTabContent" },
               React.createElement(
                  "div",
                  { "class": "tab-pane fade show active", id: "writer-profile", role: "tabpanel", "aria-labelledby": "writer-profile-tab" },
                  "Writer Profile Content"
               ),
               React.createElement(
                  "div",
                  { "class": "tab-pane fade", id: "embargoes", role: "tabpanel", "aria-labelledby": "embargoes-tab" },
                  "Embargoes Content"
               ),
               React.createElement(
                  "div",
                  { "class": "tab-pane fade", id: "published-articles", role: "tabpanel", "aria-labelledby": "published-articles-tab" },
                  "Published Articles Content"
               ),
               React.createElement(
                  "div",
                  { "class": "tab-pane fade", id: "analytics", role: "tabpanel", "aria-labelledby": "analytics-tab" },
                  "Analytics Content"
               )
            )
         );
      }
   }]);

   return WriterTabs;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));