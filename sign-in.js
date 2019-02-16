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
            React.createElement(SignInHeader, null),
            React.createElement(SignInBody, null)
         );
      }
   }]);

   return App;
}(React.Component);

function SignInHeader() {
   return React.createElement(
      "div",
      { "class": "row align-items-center" },
      React.createElement(
         "div",
         { "class": "col text-center" },
         React.createElement(
            "h1",
            null,
            "Writers Insider"
         )
      )
   );
}

var SignInBody = function (_React$Component2) {
   _inherits(SignInBody, _React$Component2);

   function SignInBody(props) {
      _classCallCheck(this, SignInBody);

      return _possibleConstructorReturn(this, (SignInBody.__proto__ || Object.getPrototypeOf(SignInBody)).call(this, props));
   }

   _createClass(SignInBody, [{
      key: "render",
      value: function render() {
         return React.createElement(
            "form",
            { action: "index.html", "class": "px-4 py-3" },
            React.createElement(
               "div",
               { "class": "row" },
               React.createElement("div", { "class": "col-1" }),
               React.createElement(SignInBox, { type: "Writers" }),
               React.createElement("div", { "class": "col-2" }),
               React.createElement(SignInBox, { type: "Companies" }),
               React.createElement("div", { "class": "col-1" })
            )
         );
      }
   }]);

   return SignInBody;
}(React.Component);

var SignInBox = function (_React$Component3) {
   _inherits(SignInBox, _React$Component3);

   function SignInBox(props) {
      _classCallCheck(this, SignInBox);

      return _possibleConstructorReturn(this, (SignInBox.__proto__ || Object.getPrototypeOf(SignInBox)).call(this, props));
   }

   _createClass(SignInBox, [{
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            { "class": "col-4" },
            React.createElement(
               "div",
               { "class": "card" },
               React.createElement(
                  "div",
                  { "class": "card-header text-center" },
                  React.createElement(
                     "h3",
                     null,
                     this.props.type
                  )
               ),
               React.createElement(
                  "div",
                  { "class": "card-body" },
                  React.createElement(LogIn, { type: this.props.type })
               )
            )
         );
      }
   }]);

   return SignInBox;
}(React.Component);

var LogIn = function (_React$Component4) {
   _inherits(LogIn, _React$Component4);

   function LogIn(props) {
      _classCallCheck(this, LogIn);

      return _possibleConstructorReturn(this, (LogIn.__proto__ || Object.getPrototypeOf(LogIn)).call(this, props));
   }

   _createClass(LogIn, [{
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            { "class": "px-4 pt-3" },
            React.createElement(
               "div",
               { "class": "row" },
               React.createElement(
                  "div",
                  { "class": "input-group mb-3" },
                  React.createElement(
                     "div",
                     { "class": "input-group-prepend" },
                     React.createElement(
                        "span",
                        { "class": "input-group-text", id: this.props.type + "login" },
                        "Username"
                     )
                  ),
                  React.createElement("input", { type: "text", "class": "form-control", placeholder: "Username", "aria-label": "Username", "aria-describedby": this.props.type + "login" })
               )
            ),
            React.createElement(
               "div",
               { "class": "row" },
               React.createElement(
                  "div",
                  { "class": "input-group mb-3" },
                  React.createElement(
                     "div",
                     { "class": "input-group-prepend" },
                     React.createElement(
                        "span",
                        { "class": "input-group-text", id: this.props.type + "password" },
                        "Password"
                     )
                  ),
                  React.createElement("input", { type: "password", "class": "form-control", placeholder: "Password", "aria-label": "Password", "aria-describedby": this.props.type + "password" })
               )
            ),
            React.createElement(
               "div",
               { "class": "row pt-3", align: "center" },
               React.createElement(
                  "div",
                  { "class": "col-12" },
                  React.createElement(
                     "button",
                     { type: "submit", "class": "btn btn-primary" },
                     "Sign in"
                  )
               )
            )
         );
      }
   }]);

   return LogIn;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));