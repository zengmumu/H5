  class HelloWord extends React.Component {
  		constructor(){
  			this.state={count:15};
  		}
        render() {
        
          return <p>abc<span>{this.state.count}</span></p>;
        }
      }

ReactDOM.render(
          <HelloWord />,
          document.getElementById('container')
        );
