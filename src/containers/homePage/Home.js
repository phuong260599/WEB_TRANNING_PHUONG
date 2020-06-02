import React,{Component} from 'react';
import Show from "./show/Show"
import Info from "./info/Info"

class HomePage extends Component {
  render(){
  return (
    <div style={{marginTop: '60px'}}>
        <Show/>
        <Info/>
      </div>
  );
}
}
export default HomePage;
