<template>
  <div>
    <input type="text" placeholder="请输入查询内容" v-model="queryMsg" />
    <button @click="query">查询</button>
    <router-link class="add-item" to="/edit">新增</router-link>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>内容</th>
          <th>时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list">
          <td v-text="item.name"></td>
          <td v-text="item.content"></td>
          <td v-text="item.time"></td>
          <td>
            <button @click="operation(1,item)">编辑</button>
            <button @click="operation(0,item)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      queryMsg: "",
      list: [{ name: "aa", content: "12" }, { name: "bb" }]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      axios.get("/query").then(ret => {
        console.log(ret);
        if (ret && ret.data.status) {
          this.list = ret.data.result;
        }
      });
    },
    operation(num, item) {
      if (num) {
        //edit
        this.$router.push({ path: "/edit", query: { id: item._id } });
        console.log(item._id);
      } else {
        if (confirm("是否要删除本条记录")) {
          //delete...
        }
      }
    },
    query() {}
  }
};
</script>
<style lang="css">
th {
  width: 200px;
}
.add-item {
  text-align: left;
}
</style>


