'use strict';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.onIndustryChange = this.onIndustryChange.bind(this);
      this.onCategoryChange = this.onCategoryChange.bind(this);
      this.onSubcategoryChange = this.onSubcategoryChange.bind(this);
      this.onSearchClick = this.onSearchClick.bind(this);
      this.state = { industry: "", category: "", subcategory: "", isCategoryDisabled: "disabled", isSubcategoryDisabled: "disabled", isSearchDisabled: "disabled" };
   }
   
   // TODO: make this and other state functions take raw value instead of event
   onIndustryChange(event) {
      var isCategoryDisabled = "";
      if (!event.target.value) {
         isCategoryDisabled = "disabled";
      }
      
      this.setState({industry: event.target.value, isCategoryDisabled: isCategoryDisabled});
   }
   
   onCategoryChange(event) {
      var isSubcategoryDisabled = "";
      if (!event.target.value) {
         isSubcategoryDisabled = "disabled";
      }
      this.setState({category: event.target.value, isSubcategoryDisabled: isSubcategoryDisabled});
   }
   
   onSubcategoryChange(event) {
      var isSearchDisabled = "";
      if (!event.target.value) {
         isSearchDisabled = "disabled";
      }
      this.setState({subcategory: event.target.value, isSearchDisabled: isSearchDisabled});
   }
   
   onSearchClick(event) {
      event.preventDefault();
      // TODO: query the Dynamo Table for results
      this.setState((state, props) => ({results: [
         "Result 1 for industry: " + state.industry + ", category: " + state.category + ", subcategory: " + state.subcategory,
         "Result 2 for industry: " + state.industry + ", category: " + state.category + ", subcategory: " + state.subcategory,
         "Result 3 for industry: " + state.industry + ", category: " + state.category + ", subcategory: " + state.subcategory,
      ]}));
   }
   
   render() {
      return (
         <div class="container">
            <SearchHeader/>
            <Form 
               industry={this.state.industry} category={this.state.category} subcategory={this.state.subcategory} 
               onIndustryChange={this.onIndustryChange} onCategoryChange={this.onCategoryChange} onSubcategoryChange={this.onSubcategoryChange}
               onSearchClick={this.onSearchClick} isCategoryDisabled={this.state.isCategoryDisabled} isSubcategoryDisabled={this.state.isSubcategoryDisabled}
               isSearchDisabled={this.state.isSearchDisabled}/>
            <ResultsList results={this.state.results}/>
         </div>
      );      
   }
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

class Form extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      const industryOptions = [ "Agriculture", "Automotive", "Cybersecurity", "Data Technology", "Healthcare", "Financial" ];
      const categoryOptions = { 
         "": [],
         "Agriculture": [ "Agriculture.Products", "Agriculture.Executive Thought", "Agriculture.Leadership", "Agriculture.Research / Studies", "Agriculture.Applications", "Agriculture.Trends" ], 
         "Automotive": [ "Automotive.Products", "Automotive.Executive Thought", "Automotive.Leadership", "Automotive.Research / Studies", "Automotive.Applications", "Automotive.Trends" ], 
         "Cybersecurity": [ "Cybersecurity.Products", "Cybersecurity.Executive Thought", "Cybersecurity.Leadership", "Cybersecurity.Research / Studies", "Cybersecurity.Applications", "Cybersecurity.Trends" ], 
         "Data Technology": [ "Data Technology.Products", "Data Technology.Executive Thought", "Data Technology.Leadership", "Data Technology.Research / Studies", "Data Technology.Applications", "Data Technology.Trends" ], 
         "Healthcare": [ "Healthcare.Products", "Healthcare.Executive Thought", "Healthcare.Leadership", "Healthcare.Research / Studies", "Healthcare.Applications", "Healthcare.Trends" ], 
         "Financial": [ "Financial.Products", "Financial.Executive Thought", "Financial.Leadership", "Financial.Research / Studies", "Financial.Applications", "Financial.Trends" ]
      };      
      const subcategoryOptions = {
         "": [],
         "Agriculture.Products": [ "Agriculture.Products.Data Clouds", "Agriculture.Products.Data Storage", "Agriculture.Products.Data Analytics", "Agriculture.Products.Data Marketing", "Agriculture.Products.Data Hybrids" ],
         "Agriculture.Executive Thought": [ "Agriculture.Executive Thought.Data Clouds", "Agriculture.Executive Thought.Data Storage", "Agriculture.Executive Thought.Data Analytics", "Agriculture.Executive Thought.Data Marketing", "Agriculture.Executive Thought.Data Hybrids" ],
			"Agriculture.Leadership": [ "Agriculture.Leadership.Data Clouds", "Agriculture.Leadership.Data Storage", "Agriculture.Leadership.Data Analytics", "Agriculture.Leadership.Data Marketing", "Agriculture.Leadership.Data Hybrids" ],
			"Agriculture.Research / Studies": [ "Agriculture.Research / Studies.Data Clouds", "Agriculture.Research / Studies.Data Storage", "Agriculture.Research / Studies.Data Analytics", "Agriculture.Research / Studies.Data Marketing", "Agriculture.Research / Studies.Data Hybrids" ],
			"Agriculture.Applications": [ "Agriculture.Applications.Data Clouds", "Agriculture.Applications.Data Storage", "Agriculture.Applications.Data Analytics", "Agriculture.Applications.Data Marketing", "Agriculture.Applications.Data Hybrids" ],
			"Agriculture.Trends": [ "Agriculture.Trends.Data Clouds", "Agriculture.Trends.Data Storage", "Agriculture.Trends.Data Analytics", "Agriculture.Trends.Data Marketing", "Agriculture.Trends.Data Hybrids" ],
         "Automotive.Products": [ "Automotive.Products.Data Clouds", "Automotive.Products.Data Storage", "Automotive.Products.Data Analytics", "Automotive.Products.Data Marketing", "Automotive.Products.Data Hybrids" ],
			"Automotive.Executive Thought": [ "Automotive.Executive Thought.Data Clouds", "Automotive.Executive Thought.Data Storage", "Automotive.Executive Thought.Data Analytics", "Automotive.Executive Thought.Data Marketing", "Automotive.Executive Thought.Data Hybrids" ],
			"Automotive.Leadership": [ "Automotive.Leadership.Data Clouds", "Automotive.Leadership.Data Storage", "Automotive.Leadership.Data Analytics", "Automotive.Leadership.Data Marketing", "Automotive.Leadership.Data Hybrids" ],
			"Automotive.Research / Studies": [ "Automotive.Research / Studies.Data Clouds", "Automotive.Research / Studies.Data Storage", "Automotive.Research / Studies.Data Analytics", "Automotive.Research / Studies.Data Marketing", "Automotive.Research / Studies.Data Hybrids" ],
			"Automotive.Applications": [ "Automotive.Applications.Data Clouds", "Automotive.Applications.Data Storage", "Automotive.Applications.Data Analytics", "Automotive.Applications.Data Marketing", "Automotive.Applications.Data Hybrids" ],
			"Automotive.Trends": [ "Automotive.Trends.Data Clouds", "Automotive.Trends.Data Storage", "Automotive.Trends.Data Analytics", "Automotive.Trends.Data Marketing", "Automotive.Trends.Data Hybrids" ],
         "Cybersecurity.Products": [ "Cybersecurity.Products.Data Clouds", "Cybersecurity.Products.Data Storage", "Cybersecurity.Products.Data Analytics", "Cybersecurity.Products.Data Marketing", "Cybersecurity.Products.Data Hybrids" ],
			"Cybersecurity.Executive Thought": [ "Cybersecurity.Executive Thought.Data Clouds", "Cybersecurity.Executive Thought.Data Storage", "Cybersecurity.Executive Thought.Data Analytics", "Cybersecurity.Executive Thought.Data Marketing", "Cybersecurity.Executive Thought.Data Hybrids" ],
			"Cybersecurity.Leadership": [ "Cybersecurity.Leadership.Data Clouds", "Cybersecurity.Leadership.Data Storage", "Cybersecurity.Leadership.Data Analytics", "Cybersecurity.Leadership.Data Marketing", "Cybersecurity.Leadership.Data Hybrids" ],
			"Cybersecurity.Research / Studies": [ "Cybersecurity.Research / Studies.Data Clouds", "Cybersecurity.Research / Studies.Data Storage", "Cybersecurity.Research / Studies.Data Analytics", "Cybersecurity.Research / Studies.Data Marketing", "Cybersecurity.Research / Studies.Data Hybrids" ],
			"Cybersecurity.Applications": [ "Cybersecurity.Applications.Data Clouds", "Cybersecurity.Applications.Data Storage", "Cybersecurity.Applications.Data Analytics", "Cybersecurity.Applications.Data Marketing", "Cybersecurity.Applications.Data Hybrids" ],
			"Cybersecurity.Trends": [ "Cybersecurity.Trends.Data Clouds", "Cybersecurity.Trends.Data Storage", "Cybersecurity.Trends.Data Analytics", "Cybersecurity.Trends.Data Marketing", "Cybersecurity.Trends.Data Hybrids" ],
         "Data Technology.Products": [ "Data Technology.Products.Data Clouds", "Data Technology.Products.Data Storage", "Data Technology.Products.Data Analytics", "Data Technology.Products.Data Marketing", "Data Technology.Products.Data Hybrids" ],
			"Data Technology.Executive Thought": [ "Data Technology.Executive Thought.Data Clouds", "Data Technology.Executive Thought.Data Storage", "Data Technology.Executive Thought.Data Analytics", "Data Technology.Executive Thought.Data Marketing", "Data Technology.Executive Thought.Data Hybrids" ],
			"Data Technology.Leadership": [ "Data Technology.Leadership.Data Clouds", "Data Technology.Leadership.Data Storage", "Data Technology.Leadership.Data Analytics", "Data Technology.Leadership.Data Marketing", "Data Technology.Leadership.Data Hybrids" ],
			"Data Technology.Research / Studies": [ "Data Technology.Research / Studies.Data Clouds", "Data Technology.Research / Studies.Data Storage", "Data Technology.Research / Studies.Data Analytics", "Data Technology.Research / Studies.Data Marketing", "Data Technology.Research / Studies.Data Hybrids" ],
			"Data Technology.Applications": [ "Data Technology.Applications.Data Clouds", "Data Technology.Applications.Data Storage", "Data Technology.Applications.Data Analytics", "Data Technology.Applications.Data Marketing", "Data Technology.Applications.Data Hybrids" ],
			"Data Technology.Trends": [ "Data Technology.Trends.Data Clouds", "Data Technology.Trends.Data Storage", "Data Technology.Trends.Data Analytics", "Data Technology.Trends.Data Marketing", "Data Technology.Trends.Data Hybrids" ],
         "Healthcare.Products": [ "Healthcare.Products.Data Clouds", "Healthcare.Products.Data Storage", "Healthcare.Products.Data Analytics", "Healthcare.Products.Data Marketing", "Healthcare.Products.Data Hybrids" ],
			"Healthcare.Executive Thought": [ "Healthcare.Executive Thought.Data Clouds", "Healthcare.Executive Thought.Data Storage", "Healthcare.Executive Thought.Data Analytics", "Healthcare.Executive Thought.Data Marketing", "Healthcare.Executive Thought.Data Hybrids" ],
			"Healthcare.Leadership": [ "Healthcare.Leadership.Data Clouds", "Healthcare.Leadership.Data Storage", "Healthcare.Leadership.Data Analytics", "Healthcare.Leadership.Data Marketing", "Healthcare.Leadership.Data Hybrids" ],
			"Healthcare.Research / Studies": [ "Healthcare.Research / Studies.Data Clouds", "Healthcare.Research / Studies.Data Storage", "Healthcare.Research / Studies.Data Analytics", "Healthcare.Research / Studies.Data Marketing", "Healthcare.Research / Studies.Data Hybrids" ],
			"Healthcare.Applications": [ "Healthcare.Applications.Data Clouds", "Healthcare.Applications.Data Storage", "Healthcare.Applications.Data Analytics", "Healthcare.Applications.Data Marketing", "Healthcare.Applications.Data Hybrids" ],
			"Healthcare.Trends": [ "Healthcare.Trends.Data Clouds", "Healthcare.Trends.Data Storage", "Healthcare.Trends.Data Analytics", "Healthcare.Trends.Data Marketing", "Healthcare.Trends.Data Hybrids" ],
         "Financial.Products": [ "Financial.Products.Data Clouds", "Financial.Products.Data Storage", "Financial.Products.Data Analytics", "Financial.Products.Data Marketing", "Financial.Products.Data Hybrids" ],
			"Financial.Executive Thought": [ "Financial.Executive Thought.Data Clouds", "Financial.Executive Thought.Data Storage", "Financial.Executive Thought.Data Analytics", "Financial.Executive Thought.Data Marketing", "Financial.Executive Thought.Data Hybrids" ],
			"Financial.Leadership": [ "Financial.Leadership.Data Clouds", "Financial.Leadership.Data Storage", "Financial.Leadership.Data Analytics", "Financial.Leadership.Data Marketing", "Financial.Leadership.Data Hybrids" ],
			"Financial.Research / Studies": [ "Financial.Research / Studies.Data Clouds", "Financial.Research / Studies.Data Storage", "Financial.Research / Studies.Data Analytics", "Financial.Research / Studies.Data Marketing", "Financial.Research / Studies.Data Hybrids" ],
			"Financial.Applications": [ "Financial.Applications.Data Clouds", "Financial.Applications.Data Storage", "Financial.Applications.Data Analytics", "Financial.Applications.Data Marketing", "Financial.Applications.Data Hybrids" ],
			"Financial.Trends": [ "Financial.Trends.Data Clouds", "Financial.Trends.Data Storage", "Financial.Trends.Data Analytics", "Financial.Trends.Data Marketing", "Financial.Trends.Data Hybrids" ]
      }
   
      // TODO: look into making the buttons a button group: https://getbootstrap.com/docs/4.1/components/button-group/
      return (
         <form class="px-4 py-3">
            <div class="form-group">
               <div class="row align-items-center">
                  <Selection inputName="Industry" options={industryOptions} value={this.props.industry} onChange={this.props.onIndustryChange}/>
                  <Selection inputName="Category" options={categoryOptions[this.props.industry]} value={this.props.category} onChange={this.props.onCategoryChange} disabled={this.props.isCategoryDisabled}/>
                  <Selection inputName="Subcategory" options={subcategoryOptions[this.props.category]} value={this.props.subcategory} onChange={this.props.onSubcategoryChange} disabled={this.props.isSubcategoryDisabled}/>
               </div>
               <div class="row align-items-center justify-content-center my-2">
                  <Search onSearchClick={this.props.onSearchClick} disabled={this.props.isSearchDisabled}/>
               </div>
            </div>
         </form>
      );
   }
}

function Selection(props) {
   const forSelectID = "input" + props.inputName + "Select";
   return (
      <div class="col">
         <div class="input-group">
            <div class="input-group-prepend">
               <label class="input-group-text" for={forSelectID}>{props.inputName}</label>
            </div>
            <Dropdown selectID={props.inputName} options={props.options} value={props.value} onChange={props.onChange} disabled={props.disabled}/>
         </div>
      </div>
   );
}

class Dropdown extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      const options = this.props.options.map((value) => <DropdownOption key={value} value={value}/>);
      
      return (
         <select class="custom-select" name={this.props.selectID} id={this.props.selectID} value={this.props.value} onChange={this.props.onChange} disabled={this.props.disabled}>
            <option value="">Choose...</option>
            {options}
         </select>
      );
   }
}

function DropdownOption(props) {
	return <option value={props.value}>{props.value}</option>;
}

function Search(props) {
   return (
      <div class="col text-center">
         <button type="submit" class="btn btn-primary" onClick={props.onSearchClick} disabled={props.disabled}>Search</button>
      </div>
   );
}

class ResultsList extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      if (this.props.results) {
         const results = this.props.results.map((result) => <Result key={result} result={result}/>);  
         return (
            <div>
               <div class="row align-items-center">
                  <div class="col-2">
                     Company
                  </div>
                  <div class="col-8">
                     Title
                  </div>
                  <div class="col-2">
                     Date
                  </div>
               </div>
               {results}
            </div>
         );
      }
      return <div/>;
   }
}

class Result extends React.Component {
   constructor(props) {
      super(props);
   }

   // TODO: look into making a result a card: https://getbootstrap.com/docs/4.1/components/card/
   render() {
      return (
         <div class="row border-primary">
            <div class="col-2 border border-primary">MyCompany</div>
            <div class="col-8 border border-primary">{this.props.result}</div>
            <div class="col-2 border border-primary">MyDate</div>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));