<template>
  <van-search
    v-model="searchText"
    placeholder="请输入搜索关键词"
    wrap-with-form
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />

  <div id="tag-container">
    <transition-group name="tag-list" tag="van-tag">
      <van-tag
        v-for="tag_name in tagIndex"
        :key="tag_name"
        class="tag-item"
        :show="show"
        closeable
        size="medium"
        type="primary"
        @close="close(tag_name)"
      >
        {{ tag_name }}
      </van-tag>
    </transition-group>
  </div>

  <van-tree-select
    v-model:main-active-index="mainIndex"
    v-model:active-id="tagIndex"
    :items="tagList"
  />
</template>
<style scoped>
#tag-container {
  padding: 0 10px;
}
.tag-item {
  margin-right: 10px;
  margin-bottom: 10px;
}
.tag-item:nth-last-child(1) {
  margin-right: 0;
}
/* 标签过渡动画 */
.tag-list-move,
.tag-list-enter-active,
.tag-list-leave-active {
  transition: all 0.3s ease-in-out;
}
.tag-list-enter-from,
.tag-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.tag-list-leave-active {
  position: absolute;
}
</style>
<script setup lang="ts">
import { ref, TransitionGroup } from "vue";

const searchText = ref("");
// ※
const onSearch = () => {
  tagList.value = originTagList.map((parent) => {
    // 下面的写法会直接改变原数组，是错的，直接把对象赋值给一个变量，拷贝的是引用，而非对象本身
    // let tempParent = parent;
    // tempParent.children = parent.children.filter((tag) =>
    //   tag.text.includes(searchText.value)
    // );

    // map、filter等数据处理函数会创建新的数组，不会修改原数组
    let tempParentChild = parent.children.filter((tag) =>
      tag.text.includes(searchText.value)
    );
    return {
      text: parent.text,
      children: tempParentChild,
    };
  });
};
const onCancel = () => {
  console.log(originTagList);
  tagList.value = originTagList;
};

const mainIndex = ref(0);
const tagIndex = ref([]);
const originTagList = [
  {
    text: "浙江",
    children: [
      { text: "杭州", id: "杭州" },
      { text: "四川", id: "四川" },
      { text: "宁波", id: "宁波", disabled: true },
    ],
  },
  {
    text: "江苏",
    children: [
      { text: "南京", id: "南京" },
      { text: "无锡", id: "无锡" },
      { text: "徐州", id: "徐州" },
      { text: "温州", id: "温州" },
      { text: "11", id: "11" },
      { text: "22", id: "22" },
      { text: "33", id: "33" },
      { text: "44", id: "44" },
      { text: "55", id: "55" },
    ],
  },
];

const tagList = ref(originTagList);

const show = ref(true);
const close = (idx: any) => {
  tagIndex.value = tagIndex.value.filter((index) => index !== idx);
};

let a = {
  name: "anchor",
  children: [
    { text: "南京", id: "南京" },
    { text: "无锡", id: "无锡" },
    { text: "徐州", id: "徐州" },
  ],
};

let b = { ...a.children };
a.children[0].text = "beijing";
console.log(b);
</script>
