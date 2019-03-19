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
      key: "renderWriterProfile",
      value: function renderWriterProfile() {
         return React.createElement(
            "div",
            { "class": "row-fluid" },
            React.createElement(
               "div",
               { "class": "col-8 offset-2" },
               "Name: ",
               React.createElement("br", null),
               "Publication: ",
               React.createElement("br", null),
               "Industries Covered: ",
               React.createElement("br", null),
               "Biography: ",
               React.createElement("br", null),
               "Twitter: ",
               React.createElement("br", null)
            )
         );
      }
   }, {
      key: "renderEmbargo",
      value: function renderEmbargo() {
         return React.createElement(
            "div",
            null,
            React.createElement(
               "ul",
               { "class": "nav nav-tabs justify-content-center", id: "embargoesTabs", role: "tablist" },
               React.createElement(WriterTab, { id: "acceptedEmbargoes", title: "Accepted", initialActive: "true" }),
               React.createElement(WriterTab, { id: "savedEmbargoes", title: "Saved" })
            ),
            React.createElement(
               "div",
               { "class": "tab-content", id: "embargoesTabsContent" },
               React.createElement(WriterTabContent, { id: "acceptedEmbargoes", content: this.renderAcceptedEmbargoes(), initialActive: "true" }),
               React.createElement(WriterTabContent, { id: "savedEmbargoes", content: this.renderSavedEmbargoes() })
            )
         );
      }
   }, {
      key: "renderAcceptedEmbargoes",
      value: function renderAcceptedEmbargoes() {
         return React.createElement(
            "table",
            { "class": "table table-striped" },
            React.createElement(
               "thead",
               null,
               React.createElement(
                  "tr",
                  null,
                  React.createElement(
                     "th",
                     { scope: "col" },
                     "Date Accepted"
                  ),
                  React.createElement(
                     "th",
                     { scope: "col" },
                     "Company"
                  ),
                  React.createElement(
                     "th",
                     { scope: "col" },
                     "Title"
                  ),
                  React.createElement(
                     "th",
                     { scope: "col" },
                     "Publish Date"
                  )
               )
            ),
            React.createElement(
               "tbody",
               null,
               React.createElement(
                  "tr",
                  null,
                  React.createElement(
                     "td",
                     null,
                     "Mar 18, 2019"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Company"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Title"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "Mar 28, 2019"
                  )
               ),
               React.createElement(
                  "tr",
                  null,
                  React.createElement(
                     "td",
                     null,
                     "Mar 18, 2019"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Company"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Title"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "Mar 28, 2019"
                  )
               ),
               React.createElement(
                  "tr",
                  null,
                  React.createElement(
                     "td",
                     null,
                     "Mar 18, 2019"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Company"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Title"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "Mar 28, 2019"
                  )
               )
            )
         );
      }
   }, {
      key: "renderSavedEmbargoes",
      value: function renderSavedEmbargoes() {
         return React.createElement(
            "table",
            { "class": "table table-hover" },
            React.createElement(
               "thead",
               null,
               React.createElement(
                  "tr",
                  null,
                  React.createElement(
                     "th",
                     { scope: "col" },
                     "Date Accepted"
                  ),
                  React.createElement(
                     "th",
                     { scope: "col" },
                     "Company"
                  ),
                  React.createElement(
                     "th",
                     { scope: "col" },
                     "Title"
                  ),
                  React.createElement(
                     "th",
                     { scope: "col" },
                     "Publish Date"
                  )
               )
            ),
            React.createElement(
               "tbody",
               null,
               React.createElement(
                  "tr",
                  { "data-toggle": "collapse", "data-target": "#savedEmbargoesRow1", "class": "clickable" },
                  React.createElement(
                     "td",
                     null,
                     "Mar 18, 2019"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Company"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Title"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "Mar 28, 2019"
                  )
               ),
               React.createElement(
                  "tr",
                  null,
                  React.createElement(
                     "td",
                     { colspan: "4", "class": "p-0" },
                     React.createElement(
                        "div",
                        { id: "savedEmbargoesRow1", "class": "collapse" },
                        React.createElement(
                           "h3",
                           null,
                           "Overview"
                        ),
                        "Overview for the first row, this row is an explanation of the first saved embargo, you should read it if you want to know more about the first embargo"
                     )
                  )
               ),
               React.createElement(
                  "tr",
                  { "data-toggle": "collapse", "data-target": "#savedEmbargoesRow2", "class": "clickable" },
                  React.createElement(
                     "td",
                     null,
                     "Mar 18, 2019"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Company"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Title"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "Mar 28, 2019"
                  )
               ),
               React.createElement(
                  "tr",
                  null,
                  React.createElement(
                     "td",
                     { colspan: "4", "class": "p-0" },
                     React.createElement(
                        "div",
                        { id: "savedEmbargoesRow2", "class": "collapse" },
                        React.createElement(
                           "h3",
                           null,
                           "Overview"
                        ),
                        "Overview for the second row, this row is an explanation of the second saved embargo, you should read it if you want to know more about the second embargo"
                     )
                  )
               ),
               React.createElement(
                  "tr",
                  { "data-toggle": "collapse", "data-target": "#savedEmbargoesRow3", "class": "clickable" },
                  React.createElement(
                     "td",
                     null,
                     "Mar 18, 2019"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Company"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "My Title"
                  ),
                  React.createElement(
                     "td",
                     null,
                     "Mar 28, 2019"
                  )
               ),
               React.createElement(
                  "tr",
                  null,
                  React.createElement(
                     "td",
                     { colspan: "4", "class": "p-0" },
                     React.createElement(
                        "div",
                        { id: "savedEmbargoesRow3", "class": "collapse" },
                        React.createElement(
                           "h3",
                           null,
                           "Overview"
                        ),
                        "Overview for the third row, this row is an explanation of the third saved embargo, you should read it if you want to know more about the third embargo"
                     )
                  )
               )
            )
         );
      }
   }, {
      key: "renderPublishedArticles",
      value: function renderPublishedArticles() {
         return React.createElement(
            "div",
            null,
            "Company, Title of the Press Release"
         );
      }
   }, {
      key: "renderAnalytics",
      value: function renderAnalytics() {
         return React.createElement(
            "div",
            null,
            "Analytics Content"
         );
      }
   }, {
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            null,
            React.createElement(
               "ul",
               { "class": "nav nav-tabs justify-content-center", id: "writerTabs", role: "tablist" },
               React.createElement(WriterTab, { id: "writer-profile", title: "Writer Profile", initialActive: "true" }),
               React.createElement(WriterTab, { id: "embargoes", title: "Embargoes" }),
               React.createElement(WriterTab, { id: "published-articles", title: "Published Articles" }),
               React.createElement(WriterTab, { id: "analytics", title: "Analytics" })
            ),
            React.createElement(
               "div",
               { "class": "tab-content", id: "writerTabsContent" },
               React.createElement(WriterTabContent, { id: "writer-profile", content: this.renderWriterProfile(), initialActive: "true" }),
               React.createElement(WriterTabContent, { id: "embargoes", content: this.renderEmbargo() }),
               React.createElement(WriterTabContent, { id: "published-articles", content: this.renderPublishedArticles() }),
               React.createElement(WriterTabContent, { id: "analytics", content: this.renderAnalytics() })
            )
         );
      }
   }]);

   return WriterTabs;
}(React.Component);

var WriterTab = function (_React$Component3) {
   _inherits(WriterTab, _React$Component3);

   function WriterTab(props) {
      _classCallCheck(this, WriterTab);

      return _possibleConstructorReturn(this, (WriterTab.__proto__ || Object.getPrototypeOf(WriterTab)).call(this, props));
   }

   _createClass(WriterTab, [{
      key: "render",
      value: function render() {
         var active = "";
         if (this.props.initialActive == "true") {
            active = " active";
         }
         return React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
               "a",
               { "class": "nav-link" + active, id: this.props.id + "-tab", "data-toggle": "tab", href: "#" + this.props.id, role: "tab", "aria-controls": this.props.id, "aria-selected": "true" },
               this.props.title
            )
         );
      }
   }]);

   return WriterTab;
}(React.Component);

var WriterTabContent = function (_React$Component4) {
   _inherits(WriterTabContent, _React$Component4);

   function WriterTabContent(props) {
      _classCallCheck(this, WriterTabContent);

      return _possibleConstructorReturn(this, (WriterTabContent.__proto__ || Object.getPrototypeOf(WriterTabContent)).call(this, props));
   }

   _createClass(WriterTabContent, [{
      key: "render",
      value: function render() {
         var active = "";
         if (this.props.initialActive) {
            active = " show active";
         }
         return React.createElement(
            "div",
            { "class": "tab-pane fade" + active, id: this.props.id, role: "tabpanel", "aria-labelledby": this.props.id + "-tab" },
            this.props.content
         );
      }
   }]);

   return WriterTabContent;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));