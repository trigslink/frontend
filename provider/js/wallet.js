export function shortenAddress(addr) {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

export async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask is not installed");
    return;
  }

  try {
    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    });

    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    localStorage.setItem("connectedWallet", account);
    document.dispatchEvent(
      new CustomEvent("walletConnected", { detail: account })
    );

    const lbl = document.getElementById("walletAddressDisplay");
    if (lbl) lbl.textContent = `Connected: ${shortenAddress(account)}`;

    console.log("✅ Connected to", account);
    return account;
  } catch (err) {
    console.error("❌ Wallet connection failed", err);
  }
}

export function restoreWallet() {
  const saved = localStorage.getItem("connectedWallet");
  if (saved) {
    document.dispatchEvent(
      new CustomEvent("walletConnected", { detail: saved })
    );
    updateUI(saved);
  }

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", ([addr]) => {
      if (addr) {
        localStorage.setItem("connectedWallet", addr);
        document.dispatchEvent(
          new CustomEvent("walletConnected", { detail: addr })
        );
        updateUI(addr);
      } else {
        localStorage.removeItem("connectedWallet");
        document.dispatchEvent(new Event("walletDisconnected"));
        updateUI(null);
      }
    });
  }
}

export function disconnectWallet() {
  localStorage.removeItem("connectedWallet");
  document.dispatchEvent(new Event("walletDisconnected"));
  updateUI(null);
}

export function updateUI(address) {
  const btnConnect = document.getElementById("connect-button");
  const btnDisconnect = document.getElementById("disconnect-button");
  const status = document.getElementById("wallet-address");

  if (!btnConnect || !status || !btnDisconnect) return;

  if (address) {
    btnConnect.textContent = shortenAddress(address);
    status.textContent = `Connected: ${address}`;
    status.hidden = false;
    btnDisconnect.style.display = "inline-block";
  } else {
    btnConnect.textContent = "Connect Wallet";
    status.textContent = "";
    status.hidden = true;
    btnDisconnect.style.display = "none";
  }
}
