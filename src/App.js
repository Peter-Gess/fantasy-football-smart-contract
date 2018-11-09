import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import fantasy from './fantasy';
import styles from './styles';

class App extends Component {
  state = {
    commissioner: '',
    members: [],
    getVotes: '',
    data: '',
    message: '',
    messageTwo: ''
  };

  async componentDidMount() {
    const commissioner = await fantasy.methods.commissioner().call();
    const members = await fantasy.methods.getMembers().call();
    const getVotes = await fantasy.methods.getVotes().call();

    this.setState({ commissioner, members, getVotes });
    this.setState({ number: this.value })
  };

onSubmit = async (event) => {
  event.preventDefault();

  const accounts = await web3.eth.getAccounts();
  console.log(accounts)
  const data = await this.state.data

  this.setState({ message: 'waiting on vote to be secured on the blockchain'})

  await fantasy.methods.vote(data).send({
    from: accounts[0],
    gas: '3000000',
    value: web3.utils.toWei('0.10', 'ether'),
    data: this.state.data
  });

  this.setState({ message: 'your vote has been cast '});
};

onClick = async () => {

  const accounts = await web3.eth.getAccounts();
  const members = await this.state.members
  this.setState({ message: 'Reading the blockchain to see who has voted' });

  await fantasy.methods.getMembers().call({
    from: accounts[0]
  });

  this.setState({ message: members })

};

onCheck = async () => {
  const accounts = await web3.eth.getAccounts();
  const getVotes = this.state.getVotes;
  
  this.setState({ messageTwo: 'Getting the votes from the blockchain' });

  await fantasy.methods.getVotes().call({
    from: accounts[0]
  });

  this.setState({ messageTwo: getVotes });

};

  render() {

    return (
      <div style={styles.BackGround}>
        <h2 style={styles.Title}>How many teams should we have in our league?</h2>
          <p style={styles.SubTitle}>The commissioner managing this smart contract is {this.state.commissioner}.  
            There are currently {this.state.members.length} votes
          </p>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4 style={styles.Header}>Cast your vote on the blockchain and be heard!</h4>
            <div>
             <label style={styles.Header}>Max Teams:</label>
             <input style={styles.Input}
              data={this.state.data}
              onChange={event => this.setState({ data: event.target.value })}/>   
             <button style={styles.Button}>VOTE</button>
            </div>
        </form>

        <hr />

          <h4 style={styles.Header}>Who has voted?</h4>
            <button style={styles.Button} onClick={this.onClick}>See Members</button>

          <h1 style={styles.Header}>{this.state.message}</h1>

        <hr />

          <h4 style={styles.Header}>What are the votes?</h4>
            <button style={styles.Button} onClick={this.onCheck}>See Votes</button>

          <h1 style={styles.Header}>{this.state.messageTwo}</h1>

        </div>
    );
  };
};

export default App;