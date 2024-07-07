export const AbiAgentOne = [
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
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "runId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "RunCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "agentRuns",
    "outputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "twitterLogin",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "errorMessage",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "iteration",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isFinished",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "runId",
        "type": "uint256"
      }
    ],
    "name": "disableAgentRun",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "runId",
        "type": "uint256"
      }
    ],
    "name": "getAgentRun",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "twitterLogin",
            "type": "string"
          },
          {
            "internalType": "string[]",
            "name": "codeInterpreted",
            "type": "string[]"
          },
          {
            "internalType": "string[]",
            "name": "responses",
            "type": "string[]"
          },
          {
            "internalType": "string",
            "name": "errorMessage",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "iteration",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isFinished",
            "type": "bool"
          }
        ],
        "internalType": "struct Agent.AgentRun",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAgentRunCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "login",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getTweet",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "userId",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tweetId",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "timestamp",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "text",
            "type": "string"
          }
        ],
        "internalType": "struct Agent.Tweet",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "userId",
        "type": "string"
      }
    ],
    "name": "getUser",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "login",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "isProcessing",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "userId",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "tweetId",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "timestamp",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "text",
                "type": "string"
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
    "inputs": [
      {
        "internalType": "string",
        "name": "login",
        "type": "string"
      }
    ],
    "name": "getUserByLogin",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "login",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "isProcessing",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "userId",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "tweetId",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "timestamp",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "text",
                "type": "string"
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "runId",
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
    "inputs": [
      {
        "internalType": "string",
        "name": "twitterLogin",
        "type": "string"
      }
    ],
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
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "usersById",
    "outputs": [
      {
        "internalType": "string",
        "name": "id",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "login",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isProcessing",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "usersByLogin",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
