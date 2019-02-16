'use strict';

class App extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <div class="container">
            <SignInHeader/>
            <SignInBody/>
         </div>
      );
   }
}

function SignInHeader() {
   return (
      <div class="row align-items-center">
         <div class="col text-center">
            <h1>Writers Insider</h1>
         </div>
      </div>
   );
}

class SignInBody extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <form action="index.html" class="px-4 py-3">
            <div class="row">
               <div class="col-1"/>
               <SignInBox type="Writers"/>
               <div class="col-2"/>
               <SignInBox type="Companies"/>
               <div class="col-1"/>
            </div>
         </form>
      );
   }
}

class SignInBox extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <div class="col-4">
            <div class="card">
               <div class="card-header text-center">
                  <h3>{this.props.type}</h3>
               </div>
               <div class="card-body">
                  <LogIn type={this.props.type}/>
               </div>
            </div>
         </div>
      );
   }
}

class LogIn extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <div class="px-4 pt-3">
            <div class="row">
               <div class="input-group mb-3">
                  <div class="input-group-prepend">
                     <span class="input-group-text" id={this.props.type + "login"}>Username</span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby={this.props.type + "login"}/>
               </div>
            </div>
            <div class="row">
               <div class="input-group mb-3">
                  <div class="input-group-prepend">
                     <span class="input-group-text" id={this.props.type + "password"}>Password</span>
                  </div>
                  <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby={this.props.type + "password"}/>
               </div>
            </div>
            <div class="row pt-3" align="center">
               <div class="col-12">
               <button type="submit" class="btn btn-primary">Sign in</button>
               </div>
            </div>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));