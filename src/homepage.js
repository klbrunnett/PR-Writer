'use strict';

const e = React.createElement;

class SearchHeader extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return   <div class="col text-center">
                  <h1>Search for News</h1>
               </div>;
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