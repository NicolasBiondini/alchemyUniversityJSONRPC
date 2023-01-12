const axios = require("axios");

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "";

// Insert your test wallet
const WALLET = "";

axios
  .post(ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBalance",
    params: [
      WALLET, // block 46147
      "latest", // retrieve the full transaction object in transactions array
    ],
  })
  .then((response) => {
    console.log(response.data.result);
  });
