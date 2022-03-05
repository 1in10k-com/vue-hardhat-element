<template>
  <div id="app">
    <el-container>
      <el-header style="height: 100px"
        ><el-row>
          <el-col :span="24"
            ><div class="grid-content bg-purple-dark header">
              vue-hardhat-element
            </div></el-col
          >
        </el-row>

        <el-row>
          <el-col :span="4"
            ><div class="grid-content bg-purple router">
              <router-link
                class="guide"
                to="/"
                replace=""
                exact
                style="display: block; width: 100%; color: black"
                >home</router-link
              >
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple-light router">
              <router-link
                class="guide"
                to="/page1"
                replace=""
                style="display: block; width: 100%; color: black"
                >page1</router-link
              >
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple router">
              <router-link
                class="guide"
                to="/page2"
                replace=""
                style="display: block; width: 100%; color: black"
                >page2</router-link
              >
            </div></el-col
          >
        </el-row>
      </el-header>
      <el-main class="bg-purple-light" style="height: 1000px"
        ><router-view></router-view
      ></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.header {
  text-align: center;
  height: 30px;
  line-height: 35px;
}

.router {
  text-align: center;
  height: 30px;
  line-height: 35px;
}

a {
  text-decoration: none;
}

.router-link-active {
  background-color: #3498db;
  color: white;
}
</style>
