<template>
  <div>
    <router-link to="/">返回</router-link>uid
    <div>
      <label for="uid">小伙伴学号 <input id="uid" type="text" v-model="users.uid"></label>
    </div>
    <div>
      <label for="name">小伙伴姓名<input type="text" id="name" v-model="users.name"></label>
    </div>
    <div>
      <label for="content">小伙伴简介
        <textarea id="content" v-model="users.content"></textarea>
      </label>
    </div>
    <button @click="save">保存</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      users: {}
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var that = this;
      axios
        .post("/edit", {
          id: this.$route.query.id
        })
        .then(ret => {
          console.log(ret);
          if (ret && ret.data.status) {
            console.log(1);
            that.users = ret.data.result[0];
          }
        });
    },
    //保存
    save() {
      axios
        .post("/save", {
          data: this.users
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
