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
         <div class="row-fluid">
            <div class="col-8 offset-2">
               Name: <br/>
               Publication: <br/>
               Industries Covered: <br/>
               Biography: <br/>
               Twitter: <br/>
            </div>
         </div>
      );
   }
   
   renderEmbargo() {
      return (
         <div>
            <ul class="nav nav-tabs justify-content-center" id="embargoesTabs" role="tablist">
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
               <tr>
                  <th scope="col">Date Accepted</th>
                  <th scope="col">Company</th>
                  <th scope="col">Title</th>
                  <th scope="col">Publish Date</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Mar 18, 2019</td>
                  <td>My Company</td>
                  <td>My Title</td>
                  <td>Mar 28, 2019</td>
               </tr>
               <tr>
                  <td>Mar 18, 2019</td>
                  <td>My Company</td>
                  <td>My Title</td>
                  <td>Mar 28, 2019</td>
               </tr>
               <tr>
                  <td>Mar 18, 2019</td>
                  <td>My Company</td>
                  <td>My Title</td>
                  <td>Mar 28, 2019</td>
               </tr>
            </tbody>
         </table>
      );
   }
   
   renderSavedEmbargoes() {
      return (
         <table class="table table-hover">
            <thead>
              <tr>
                  <th scope="col">Date Accepted</th>
                  <th scope="col">Company</th>
                  <th scope="col">Title</th>
                  <th scope="col">Publish Date</th>
              </tr>
            </thead>

            <tbody>
               <tr data-toggle="collapse" data-target="#savedEmbargoesRow1" class="clickable">
                  <td>Mar 18, 2019</td>
                  <td>My Company</td>
                  <td>My Title</td>
                  <td>Mar 28, 2019</td>
               </tr>
               <tr>
                  <td colspan="4" class="p-0">
                     <div id="savedEmbargoesRow1" class="collapse">
                        <h3>Overview</h3>
                        Overview for the first row, this row is an explanation of the first saved embargo, you should read it if you want to know more about the first embargo
                     </div>
                  </td>
               </tr>
               <tr data-toggle="collapse" data-target="#savedEmbargoesRow2" class="clickable">
                  <td>Mar 18, 2019</td>
                  <td>My Company</td>
                  <td>My Title</td>
                  <td>Mar 28, 2019</td>
               </tr>
               <tr>
                  <td colspan="4" class="p-0">
                     <div id="savedEmbargoesRow2" class="collapse">
                        <h3>Overview</h3>
                        Overview for the second row, this row is an explanation of the second saved embargo, you should read it if you want to know more about the second embargo
                     </div>
                  </td>
               </tr>
               <tr data-toggle="collapse" data-target="#savedEmbargoesRow3" class="clickable">
                  <td>Mar 18, 2019</td>
                  <td>My Company</td>
                  <td>My Title</td>
                  <td>Mar 28, 2019</td>
               </tr>
               <tr>
                  <td colspan="4" class="p-0">
                     <div id="savedEmbargoesRow3" class="collapse">
                        <h3>Overview</h3>
                        Overview for the third row, this row is an explanation of the third saved embargo, you should read it if you want to know more about the third embargo
                     </div>
                  </td>
               </tr>
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