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
   
   render() {
      return (
         <div>
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
               <li class="nav-item">
                  <a class="nav-link active" id="writer-profile-tab" data-toggle="tab" href="#writer-profile" role="tab" aria-controls="writer-profile" aria-selected="true">Writer Profile</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" id="embargoes-tab" data-toggle="tab" href="#embargoes" role="tab" aria-controls="embargoes" aria-selected="false">Embargoes</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" id="published-articles-tab" data-toggle="tab" href="#published-articles" role="tab" aria-controls="published-articles" aria-selected="false">Published Articles</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" id="analytics-tab" data-toggle="tab" href="#analytics" role="tab" aria-controls="analytics" aria-selected="false">Analytics</a>
               </li>
            </ul>
            <div class="tab-content" id="myTabContent">
               <div class="tab-pane fade show active" id="writer-profile" role="tabpanel" aria-labelledby="writer-profile-tab">Writer Profile Content</div>
               <div class="tab-pane fade" id="embargoes" role="tabpanel" aria-labelledby="embargoes-tab">Embargoes Content</div>
               <div class="tab-pane fade" id="published-articles" role="tabpanel" aria-labelledby="published-articles-tab">Published Articles Content</div>
               <div class="tab-pane fade" id="analytics" role="tabpanel" aria-labelledby="analytics-tab">Analytics Content</div>
            </div>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));