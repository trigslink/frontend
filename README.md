# 🐙 Trigslink Frontend

This is the frontend for **Trigslink**, a decentralized network for Model Context Protocol instances (MCPs). It enables both providers and consumers to interact with AI-powered services using only an onchain wallet.

## 🚀 Features

-  Wallet-native access*
- Provider <-> Consumer interactions
- Provider dashboards for earnings and MCP management
- Trigsmind chat interface for AI-MCP queries
- Lightweight static deployment — fully HTML/CSS/JS

## 📦 How to Run locally

1. Clone it
2. On (preferrably) VsCode, install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
3. Click 'go live' (bottom right corner of VsCode).


## 📁 Deployment

For hosting on services like Vercel, Netlify, or IPFS:
- Deploy the `frontend/` folder as a static site.
- Use `index.html` as the entry point.

## 🛠 Tech Stack

- HTML / CSS / JavaScript (Vanilla)
- WalletConnect / Web3Modal (via script)
- Chainlink + Avalanche (via backend)