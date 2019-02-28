'use strict';

class App extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <div class="container">
            <WriterHeader/>
            <WriterTabs/>
         </div>
      );
   }
}

function WriterHeader() {
   return (
      <div class="row align-items-center">
         <div class="col text-center">
            <h1>Writer</h1>
         </div>
      </div>
   );
}

class WriterTabs extends React.Component {
   constructor(props) {
      super(props);
   }
   
   renderWriterProfile() {
      return (
         <div>
            Writer Profile Content
         </div>
      );
   }
   
   renderEmbargo() {
      return (
         <div>
            Embargo Content
         </div>
      );
   }
   
   renderPublishedArticles() {
      return (
         <div>
            Published Articles Content
         </div>
      );
   }
   
   renderAnalytics() {
      return (
         <div>
            Analytics Content
         </div>
      );
   }
   
   render() {
      return (
         <div>
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
               <WriterTab id="writer-profile" title="Writer Profile" initialActive="true"/>
               <WriterTab id="embargoes" title="Embargoes"/>
               <WriterTab id="published-articles" title="Published Articles"/>
               <WriterTab id="analytics" title="Analytics"/>
            </ul>
            <div class="tab-content" id="myTabContent">
               <WriterTabContent id="writer-profile" content={this.renderWriterProfile()} initialActive="true"/>
               <WriterTabContent id="embargoes" content={this.renderEmbargo()}/>
               <WriterTabContent id="published-articles" content={this.renderPublishedArticles()}/>
               <WriterTabContent id="analytics" content={this.renderAnalytics()}/>
            </div>
         </div>
      );
   }
}

class WriterTab extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      var active = "";
      if (this.props.initialActive == "true") {
         active = " active";
      }
      return (
         <li class="nav-item">
            <a class={"nav-link" + active} id={this.props.id + "-tab"} data-toggle="tab" href={"#" + this.props.id} role="tab" aria-controls={this.props.id} aria-selected="true">{this.props.title}</a>
         </li>
      );
   }
}

class WriterTabContent extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      var active = "";
      if (this.props.initialActive) {
         active = " show active";
      }
      return (
         <div class={"tab-pane fade" + active} id={this.props.id} role="tabpanel" aria-labelledby={this.props.id + "-tab"}>{this.props.content}</div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));