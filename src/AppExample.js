// import React from "react";
// import UserCard from "./components/UserCard";
// // import Greeting from "./components/Greeting";

// // const userArray = ['John', 'Alex', 'Jake', 'Jane', 'Johs'];

// class App extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             users: ['Blacke', 'Alex', 'Raine', 'Jane', 'Kosh'],
//             isSort: true
//         }
//     }

//     userMap = () => this.state.users.map((name) => <Greeting userName = {name}/>)


//     changeSort = () => {
//         const {users, isSort} = this.state;
//         const newArray = [...users];
//         newArray.sort((a, b) => (a > b && isSort) ? 1 : -1)

//         this.setState({
//             users: newArray,
//             isSort: !isSort
//         })
//     }

//     render () {
//         return (
//             <section>
//                 <button onClick={this.changeSort}>Sort</button>
//                 {this.userMap()}
//             </section>
//         )
//     }
// }

// export default App