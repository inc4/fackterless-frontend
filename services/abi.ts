export const Abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "initialOracleAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOracleAddress",
        "type": "address"
      }
    ],
    "name": "OracleAddressUpdated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "lastResponse",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "response",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "errorMessage",
        "type": "string"
      }
    ],
    "name": "onOracleFunctionResponse",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oracleAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "runAgent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOracleAddress",
        "type": "address"
      }
    ],
    "name": "setOracleAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "userId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isCorrect",
        "type": "bool"
      }
    ],
    "name": "temp_addTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "userId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "login",
        "type": "string"
      }
    ],
    "name": "temp_addUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "userId",
        "type": "uint256"
      }
    ],
    "name": "temp_getUserTweets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "userId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tweetId",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isCorrect",
            "type": "bool"
          }
        ],
        "internalType": "struct Agent.Tweet[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "userId",
        "type": "uint256"
      }
    ],
    "name": "user",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "userId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "login",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "userId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "tweetId",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "isCorrect",
                "type": "bool"
              }
            ],
            "internalType": "struct Agent.Tweet[]",
            "name": "tweets",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Agent.User",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "userIds",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "userId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "login",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
