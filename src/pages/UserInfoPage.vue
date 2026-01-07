<template>
  <van-cell-group inset>
    <van-cell title="用户名" :value="mock_user.username" is-link @click="toEdit('用户名',mock_user.username)"/>
    <van-cell title="账号" :value="mock_user.account" is-link />
    <van-cell title="头像" is-link>
      <img :src="mock_user.avatar" style="height: 48px" is-link />
    </van-cell>
    <van-cell title="性别" :value="mock_user.gender" is-link />
    <van-cell title="手机号" :value="mock_user.phone" is-link />
    <van-cell title="邮箱" :value="mock_user.email" is-link />
  </van-cell-group>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
let mock_user = ref({
  id: 1,
  username: "anchor",
  account: "1592730587",
  avatar:
    "https://tse1-mm.cn.bing.net/th/id/OIP-C.AEBmN7IXX8PqYGR431rJ_QAAAA?w=189&h=198&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1",
  gender: "男",
  phone: "15632696777",
  email: "1592730587@qq.com",
  userStatus: 0,
  userRole: 0,
  createTime: new Date().toISOString,
});

const toEdit = (editName: string,editValue: string) => {
    router.push({
        path: "/user/edit",
        query: {
            editName,
            editValue
        }
    })
}
</script>

<style scoped></style>
