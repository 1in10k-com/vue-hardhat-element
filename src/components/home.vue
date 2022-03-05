<template>
  <div>
    <div>
      <p>获得的num是：{{ getNum }}</p>
      <button @click="getNumber()">获得num</button>
    </div>
    <div>
      <input type="text" name="" id="" v-model="setNum" />
      <button @click="storeNumber(setNum)">点击设置num</button>
    </div>
  </div>
</template>

<script>
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { storageaddress } from "../../config";
import Storage from "../../artifacts/contracts/Playdog.sol/Storage.json";

export default {
  components: {},
  methods: {
    async storeNumber(setNum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      let storageContract = new ethers.Contract(
        storageaddress,
        Storage.abi,
        signer
      );
      await storageContract.store(setNum);
    },

    async getNumber() {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      let storageContract = new ethers.Contract(
        storageaddress,
        Storage.abi,
        signer
      );
      let transaction = await storageContract.retrieve();
      let res = transaction._hex;
      console.log(res);
      this.getNum = parseInt(res, 16);
    },
  },
  data() {
    return {
      setNum: null,
      getNum: "暂未获得链上数据",
    };
  },
};
</script>

<style scoped></style>
