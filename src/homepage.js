'use strict';

const e = React.createElement;

class SearchHeader extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <div class="col text-center">
            <h1>Search for News</h1>
         </div>
      );
   }
}

class Dropdown extends React.Component {
   constructor(props) {
      super(props);
   }
   
   populateDropdown(contents) {
      var dropdownContents =  (
         <div class="input-group">
            <div class="input-group-prepend">
               <label class="input-group-text" for="inputIndustrySelect">Industry</label>
            </div>
            <select class="custom-select" id="inputIndustrySelect" defaultValue="">
               <option value="">Choose...</option>
      );
      
      var contentLength = contents.length;
      for (var i = 0; i < contentLength; i++) {
         dropdownContents += <option value={i}>{contents[i]}</option>;
      }
      
      dropdownContents += (
            </select>
         </div>
      );
      return dropdownContents;
   }
}

class InputIndustryDropdown extends Dropdown {
   constructor(props) {
      super(props);
   }
   
   render() {
      var inputIndustryContents = [ "Agriculture", "Automotive", "Cybersecurity", "Data Technology", "Healthcare", "Financial" ];
      return super.populateDropdown(inputIndustryContents);
   }
}

class LikeButton extends React.Component {
   constructor(props) {
      super(props);
      this.state = { liked: false };
   }

   render() {
      if (this.state.liked) {
         return 'You liked this.';
      }

      return e(
         'button',
         { onClick: () => this.setState({ liked: true }) },
         'Like'
      );
   }
}

const domContainer = document.querySelector('#search-header');
ReactDOM.render(e(SearchHeader), domContainer);

const domContainer1 = document.querySelector('#input-industry');
ReactDOM.render(e(InputIndustryDropdown), domContainer1);