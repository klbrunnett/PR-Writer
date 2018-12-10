'use strict';

function App() {
   const industryOptions = [ "Agriculture", "Automotive", "Cybersecurity", "Data Technology", "Healthcare", "Financial" ];
   const categoryOptions = [ "Products", "Executive Thought", "Leadership", "Research / Studies", "Applications", "Trends" ];
   const subcategoryOptions = [ "Data Clouds", "Data Storage", "Data Analytics", "Data Marketing", "Data Hybrids" ];
   
	return (
      <div class="container">
         <div>
            <SearchHeader/>
            <div class="row align-items-center">
               <Selection inputName="Industry" options={industryOptions}/>
               <Selection inputName="Category" options={categoryOptions}/>
               <Selection inputName="Subcategory" options={subcategoryOptions}/>
            </div>
         </div>
      </div>
   );
}

function SearchHeader() {
   return (
      <div class="row align-items-center">
         <div class="col text-center">
            <h1>Search for News</h1>
         </div>
      </div>
   );
}

function Selection(props) {
   const forSelectID = "input" + props.inputName + "Select";
   return (
      <div class="col">
         <div class="input-group">
            <div class="input-group-prepend">
               <label class="input-group-text" for={forSelectID}>{props.inputName}</label>
            </div>
            <Dropdown selectID={props.inputName} options={props.options}/>
         </div>
      </div>
   );
}

class Dropdown extends React.Component {
   constructor(props) {
      super(props);
      this.state = { options: null };
      this.handleChange = this.handleChange.bind(this);
   }
   
   render() {
      // var populates = this.props.populates;
      const options = this.props.options.map((value) => <DropdownOption key={value} value={value}/>);
      
      return (
         <select class="custom-select" id={this.props.selectID} defaultValue="" onChange={this.handleChange}>
            <option value="">Choose...</option>
            {options}
         </select>
      );
   }
   
   handleChange() {
	   console.log("changes");
   }
   
   // componentDidMount() {
	   // this.state = 
   // }
   
   // componentWillUnmount() {
	   
   // }
}

function DropdownOption(props) {
	return <option value={props.value}>{props.value}</option>;
}

ReactDOM.render(<App />, document.getElementById('root'));