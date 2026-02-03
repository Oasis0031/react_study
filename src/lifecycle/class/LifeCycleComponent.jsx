// import React, { Component } from "react";

// class LifeCycleComponent extends Component {
//   state = {
//     number: 0,
//     color: null,
//   };

//   handleNumberOnClick = () => {
//     this.setState({
//       number: this.state.number + 1,
//     });
//   };

//   colorRef = null;

//   constructor(props){
//     super(props)
//     console.log(props)
//   }

//   //V.D의 메서드
//   static getDerivedStateFromProps(nextProps, prevState){
//     console.log("getDerivedStateFromProps",nextProps,prevState)
//     if(nextProps.color !== prevState.color){
//       return { color: nextProps.color}
//     }
//     return null;
//   }

//   componentDidMount(){
//     console.log("componentDidMount")
//   }

//   shouldComponentUpdate(nextProps, nextState){
//     console.log("shouldComponentUpdate", nextProps, nextState)
//     return nextState.number % 5 !== 0
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState){
//     if(prevProps.color !== this.props.color){
//       return this.colorRef.style.backgroundColor;
//     }
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot){
//     if(prevState){
//       console.log(`업데이트 직전 state: ${prevState}`)
//     }

//     if(prevProps){
//       console.log(`업데이트 직전 색상: ${snapshot}`)
//     }
//   }


//   render() {
//     return (
//       <div>
//         <div
//           style={{
//             width: "100px",
//             height: "100px",
//             backgroundColor: this.state.color,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             color: "#000000",
//           }}
//         >
//           <h1>{this.state.number}</h1>
//         </div>
//         <button onClick={this.handleNumberOnClick}>더하기 버튼</button>
//       </div>
//     );
//   }
// }

// export default LifeCycleComponent;
