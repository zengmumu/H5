  class HelloWord extends React.Component {
  		constructor(){
  			this.state={count:15};
  		}
  		update(){
  			this.setState({count:++this.state.count})
  		}
        render() {
        
          return <p>abc<span>{this.state.count}</span></p>;
        }
      }

var count=React.render(
          <HelloWord />,
          document.getElementById('container')
        );
