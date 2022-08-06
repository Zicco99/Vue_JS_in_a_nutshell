const app = Vue.createApp({
  data() {
    return {
      name: "Francesco",
      age: 23,
      link: "https://jdsupra-html-images.s3-us-west-1.amazonaws.com/db4b8dbc-814c-4fb6-9e42-bfd5393fdace-doge-e1633357157847.png",
      prepop: 0
    };
  },
  methods: {
    plus_age() {
      return this.age + 5;
    },
    random_num() {
      return Math.random();
    },
    value() {
    },
  },
});

app.mount("#assignment");
