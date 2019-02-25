<template>
    <div class="box">
   
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var url = "https://cnodejs.org/api/v1/topics?tab=good&limit=10";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const listData = res.data.map(item => {
          //   console.log(item);
          return {
            content: item.content,
            title: item.title,
            id: item.id
          };
        });
        Promise.all(listData).then(list => {
          for (let key in list) {
            console.log(`第${key}个标题--------------`, list[key].title);
          }
        });
      });
  }
};
</script>
<style lang="sass" scoped>
</style>