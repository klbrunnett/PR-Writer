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
         <div class="row-fluid pt-3">
            <div class="col-8 offset-2">
               <ul class="list-group">
                  <li class="list-group-item bg-light"><div class="row"><div class="col-3">Name:</div><div class="col-9">Kyle Brunnett</div></div></li>
                  <li class="list-group-item bg-light"><div class="row"><div class="col-3">Publication:</div><div class="col-9">New York Times</div></div></li>
                  <li class="list-group-item bg-light"><div class="row"><div class="col-3">Industries Covered:</div><div class="col-9">Data Technology</div></div></li>
                  <li class="list-group-item bg-light"><div class="row"><div class="col-3">Biography:</div><div class="col-9">Computer Engineering Major living in San Luis Obispo, CA</div></div></li>
                  <li class="list-group-item bg-light"><div class="row"><div class="col-3">Twitter:</div><div class="col-9">N/A</div></div></li>
               </ul>
            </div>
         </div>
      );
   }
   
   renderEmbargo() {
      return (
         <div>
            <ul class="nav nav-tabs justify-content-center pt-3" id="embargoesTabs" role="tablist">
               <WriterTab id="acceptedEmbargoes" title="Accepted" initialActive="true"/>
               <WriterTab id="savedEmbargoes" title="Saved"/>
            </ul>
            <div class="tab-content" id="embargoesTabsContent">
               <WriterTabContent id="acceptedEmbargoes" content={this.renderAcceptedEmbargoes()} initialActive="true"/>
               <WriterTabContent id="savedEmbargoes" content={this.renderSavedEmbargoes()}/>
            </div>
         </div>
      );
   }
   
   renderAcceptedEmbargoes() {
      return (
         <table class="table table-striped">
            <thead>
               <AcceptedEmbargoHeader />
            </thead>
            <tbody>
               <AcceptedEmbargoRow acceptedDate="Mar 18, 2019" company="Company 1" title="Title 1" publishDate="Mar 28, 2019" />
               <AcceptedEmbargoRow acceptedDate="Mar 21, 2019" company="Company 2" title="Title 2" publishDate="April 2, 2019" />
               <AcceptedEmbargoRow acceptedDate="Mar 22, 2019" company="Company 3" title="Title 3" publishDate="June 6, 2019" />
            </tbody>
         </table>
      );
   }
   
   renderSavedEmbargoes() {
      return (
         <table class="table table-hover">
            <SavedEmbargoHeader />
            <tbody>
               <SavedEmbargoRow id="1" acceptedDate="Mar 18, 2019" company="Company 1" title="Title 1" publishDate="Mar 28, 2019" />
               <SavedEmbargoRowDetail id="1" overview="Overview for the first row, this row is an explanation of the first saved embargo, you should read it if you want to know more about the first embargo" />
               <SavedEmbargoRow id="2" acceptedDate="Mar 18, 2019" company="Company 2" title="Title 2" publishDate="Mar 28, 2019" />
               <SavedEmbargoRowDetail id="2" overview="Overview for the second row, this row is an explanation of the second saved embargo, you should read it if you want to know more about the second embargo" />
               <SavedEmbargoRow id="3" acceptedDate="Mar 18, 2019" company="Company 3" title="Title 3" publishDate="Mar 28, 2019" />
               <SavedEmbargoRowDetail id="3" overview="Overview for the third row, this row is an explanation of the third saved embargo, you should read it if you want to know more about the third embargo" />
            </tbody>
         </table>
      );
   }
   
   renderPublishedArticles() {
      return (
         <div>
            Company, Title of the Press Release
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
            <ul class="nav nav-tabs justify-content-center" id="writerTabs" role="tablist">
               <WriterTab id="writer-profile" title="Writer Profile" initialActive="true"/>
               <WriterTab id="embargoes" title="Embargoes"/>
               <WriterTab id="published-articles" title="Published Articles"/>
               <WriterTab id="analytics" title="Analytics"/>
            </ul>
            <div class="tab-content" id="writerTabsContent">
               <WriterTabContent id="writer-profile" content={this.renderWriterProfile()} initialActive="true"/>
               <WriterTabContent id="embargoes" content={this.renderEmbargo()}/>
               <WriterTabContent id="published-articles" content={this.renderPublishedArticles()}/>
               <WriterTabContent id="analytics" content={this.renderAnalytics()}/>
            </div>
         </div>
      );
   }
}

class AcceptedEmbargoHeader extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <tr>
            <th class="border-top-0" scope="col">Date Accepted</th>
            <th class="border-top-0" scope="col">Company</th>
            <th class="border-top-0" scope="col">Title</th>
            <th class="border-top-0" scope="col">Publish Date</th>
         </tr>
      );
   }
}

class SavedEmbargoHeader extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <thead>
            <tr>
               <th class="border-top-0" scope="col">Date Saved</th>
               <th class="border-top-0" scope="col">Company</th>
               <th class="border-top-0" scope="col">Title</th>
               <th class="border-top-0" scope="col">Publish Date</th>
            </tr>
         </thead>
      );
   }
}

class AcceptedEmbargoRow extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <tr>
            <td>{this.props.acceptedDate}</td>
            <td>{this.props.company}</td>
            <td>{this.props.title}</td>
            <td>{this.props.publishDate}</td>
         </tr>
      );
   }
}

class SavedEmbargoRow extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <tr data-toggle="collapse" data-target={"#savedEmbargoesRow-" + this.props.id} class="clickable">
            <td>{this.props.acceptedDate}</td>
            <td>{this.props.company}</td>
            <td>{this.props.title}</td>
            <td>{this.props.publishDate}</td>
         </tr>
      );
   }
}

class SavedEmbargoRowDetail extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <tr>
            <td colspan="4" class="p-0 border-top-0">
               <div id={"savedEmbargoesRow-" + this.props.id} class="collapse px-3 py-1">
                  <h3>Overview</h3>
                  {this.props.overview}
               </div>
            </td>
         </tr>
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