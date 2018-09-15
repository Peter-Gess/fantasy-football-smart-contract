const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts;
let fantasy;
let voter;
let number;

beforeEach(async () => {

    accounts = await web3.eth.getAccounts();

    fantasy = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: '1000000' });
 
    voter = accounts[1];

    number = 12;

});

describe('Fantasy', () => {

    it('deploys a contract', () => {
        assert.ok(fantasy.options.address);
      });

    it('rights given to account', async () => {

      await fantasy.methods.giveRightToVote(voter).send({ 
            from: accounts[0], 
            to: accounts[1] });

        const getRights = await fantasy.methods.getRightsToVote().call({ 
            from : accounts[0] });

        assert.equal(accounts[1], getRights[0]);
        assert.equal(1, getRights.length);
      });  

    it('vote cast', async () => {

        await fantasy.methods.vote(number).send({ 
            from: accounts[1], 
            gas: '3000000',
            value: web3.utils.toWei('0.10', 'ether'),
        });

        const votes = await fantasy.methods.getVotes().call({ from: accounts[0] });

        assert.equal(1, votes.length);
        assert.equal(number, votes);
      });  

    it('commissioner gave rights', () => {

        const commissioner = fantasy.methods.rightsGiven({ from: accounts[fantasy.options.address[0]]});

        assert(commissioner);
    });

    it('requires a minimum amount ether to vote', async () => {

        try {
         await fantasy.methods.vote().send({ 
            from: accounts[1],
            value: 200
            });
          assert(false);
        } catch (err) {
          assert(err);
        }
    });
});
