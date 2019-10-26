import React, { Component } from 'react'
import axios from 'axios'

export default class home extends Component {
  componentWillMount() {
    const that = this;
    // let data = this.props.location.query
    // console.log(data);
    axios.post('/api/jvtc/find_score/api/v1/scores', {
      loginCode: 173055890,
      token: '52f9e525-460e-48a1-a82f-2879c666ab34@@@1572101361334'
    })
      .then(async function (response) {
        console.log(response.data.data);
        await that.setState({ data: response.data.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    console.log(this.state);
    return (
      <div className="box">
        11
        {/* {data.map((item, index) => {
          return (
            <li key={item.id}>
              {item.name}--{item.age}
            </li>
          )
        })} */}
      </div>
    )
  }
}
