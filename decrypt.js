import { Wallet } from "ethers";

// Paste the full DEPLOYER_PRIVATE_KEY_ENCRYPTED JSON below:
const encryptedJson = `{"address":"067891f7b1c46731bd90a7b3d536f189b57248f1","id":"b795b93f-6ae2-47c0-9e29-ed9358225abd","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"ec061dab71556f9c080685f00666419d"},"ciphertext":"069cce4d38b9c37704e49627e271ce21c934097895c6704cc3b9ecca864776be","kdf":"scrypt","kdfparams":{"salt":"44bcc5d8321e3deb6e732029f67fa9386f3989c2ab470f45c524b385f791007f","n":131072,"dklen":32,"p":1,"r":8},"mac":"67701b8ec011758c54c46ef8e6b33977c40a6aad2f720329073366f8169a984a"},"x-ethers":{"client":"ethers/6.13.7","gethFilename":"UTC--2025-08-27T14-35-54.0Z--067891f7b1c46731bd90a7b3d536f189b57248f1","path":"m/44'/60'/0'/0/0","locale":"en","mnemonicCounter":"3f0ca2353d2cb4667d2f56aba86bdfbf","mnemonicCiphertext":"167c61e971725589b70f250de29b9147","version":"0.1"}}`;

async function main() {
  const password = process.argv[2];
  if (!password) {
    console.error("Usage: node decrypt.js <your-password>");
    process.exit(1);
  }
  try {
    const wallet = await Wallet.fromEncryptedJson(encryptedJson, password);
    console.log("Deployer Address: ", wallet.address);
    console.log("Private Key:      ", wallet.privateKey);
  } catch (err) {
    console.error("❌ Decryption failed:", err.message);
  }
}

main();
