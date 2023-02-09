import { Component } from "react";
import GetAllCourses from "../apis/GetAllCourses";
import Card from "../components/Card";


class  HomePage extends Component {
    state={
        Data:[]
    }
    componentDidMount(){
        GetAllCourses().then(res=>{
                this.setState({Data:res.data});
                console.log(res);
            }
        );
    }
  render(){
    return (
        <div className="container">
            <div className="row">
                {this.state.Data.map(i=>{
                    return <div className="col-md-4 col-sm-6 col-xs-12 card">
                               <Card photo={i.photo} totalHouers={i.totalHouers} price={i.price} name={i.name} fullDesc={i.Desc} id={i.id} />
                    </div>
                })}

            </div>
        </div>
          )
  }
}

export default HomePage;
