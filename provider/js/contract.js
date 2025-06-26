export async function registerMcp(event, ethers) {
  event.preventDefault();

  const CONTRACT_ADDRESS = '0xCdB3c3F5ab746DD54fDFF19257e18CAB7209b873'; 
  const ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_priceFeed",
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
        "name": "provider",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountPaid",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "providerNonce",
        "type": "uint256"
      }
    ],
    "name": "McpProviderRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "provider",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "providerNonce",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "priceUsd",
        "type": "uint256"
      }
    ],
    "name": "McpProviderUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nonce",
        "type": "uint256"
      }
    ],
    "name": "exists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "provider",
        "type": "address"
      }
    ],
    "name": "getAllMcpsByAddress",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "providerNonce",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "providerAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountPaid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "serviceName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "usdPriceForConsumerMonth",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "serviceDescription",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "url",
            "type": "string"
          }
        ],
        "internalType": "struct McpProvider.License[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLatestAvaxUsdPrice",
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
    "inputs": [],
    "name": "getLicenseFeeInAvax",
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
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      }
    ],
    "name": "getServiceDetails",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "providerNonce",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "providerAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "serviceName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "usdPriceForConsumerMonth",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "serviceDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "url",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "globalProviderNonce",
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "licenses",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "providerNonce",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "providerAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountPaid",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "serviceName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "usdPriceForConsumerMonth",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "serviceDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "url",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "providerLicenses",
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
        "name": "_serviceName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_usdPriceForConsumerMonth",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_serviceDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_url",
        "type": "string"
      }
    ],
    "name": "registerMcp",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nonce",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_serviceName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_usdPriceForConsumerMonth",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_serviceDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_url",
        "type": "string"
      }
    ],
    "name": "updateMcp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "usdLicenseFee",
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
        "internalType": "address payable",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "withdrawAvax",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  // 🧠 Extract inputs
  const serviceName = document.getElementById('service-name').value.trim();
  const priceUsd    = document.getElementById('subscription').value.trim();
  const description = document.getElementById('description').value.trim();
  const url         = document.getElementById('url').value.trim();
  const logoInput   = document.getElementById('logo-upload');
  const logoFile    = logoInput?.files[0];

  if (!logoFile) {
    alert('Please upload a logo before submitting.');
    return;
  }

  try {
    const requiredAvax = await contract.getLicenseFeeInAvax();
    const priceInUnits = ethers.parseUnits(priceUsd, 18);

    const tx = await contract.registerMcp(
      serviceName,
      priceInUnits,
      description,
      url,
      { value: requiredAvax }
    );

    console.log('📤 Tx sent:', tx.hash);
    await tx.wait(); // optional: wait for inclusion

    // 📨 Prepare multipart/form-data
    const formData = new FormData();
    formData.append('tx_hash', tx.hash);
    formData.append('logo', logoFile);

    // 📡 Send to backend
    const response = await fetch('http://localhost:8000/register_mcp', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('✅ Backend response:', result);
    alert('MCP registered successfully!');

    event.target.reset();
  } catch (err) {
    console.error('❌ Registration failed:', err);
    alert(`❌ Error: ${err.message}`);
  }
}

