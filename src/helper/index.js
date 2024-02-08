import { ethers } from "ethers";
import Cookies from "js-cookie";


export const connectWalletHelper = async () => {
  let signer = null;

  let provider;
  if (window.ethereum == null) {
    // If MetaMask is not installed, we use the default provider,
    // which is backed by a variety of third-party services (such
    // as INFURA). They do not have private keys installed,
    // so they only have read-only access
    console.log("MetaMask not installed; using read-only defaults");
    provider = ethers.getDefaultProvider();
  } else {
    // Connect to the MetaMask EIP-1193 object. This is a standard
    // protocol that allows Ethers access to make all read-only
    // requests through MetaMask.
  
    provider = new ethers.BrowserProvider(window.ethereum);

    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    Cookies.set('signer', signer.address)
    return signer
  }
};

export const checkWallet = () => {
  return Cookies.get('signer')
}

export const shortWallet = () => {
  const address = Cookies.get('signer')
  if(address){
    return `${address.slice(0,4)}....${address.slice(address.length - 6, address.length)}`
  }
}
