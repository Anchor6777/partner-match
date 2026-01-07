<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="editUser.currentValue"
        :name="editUser.editName"
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const editUser = ref({
  editName: route.query.editName as string,
  editValue: route.query.editValue as string,
  currentValue: ""
});
const onSubmit = () => {};
</script>

<style scoped></style>
