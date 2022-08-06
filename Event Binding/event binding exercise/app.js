const app = Vue.createApp({
  data() {
    return {
      alertino: "oh, hey you have clicked the button!",
      par1: "",
      par2: "",
    };
  },
  methods: {
    alert_launch() {
      alert(this.alertino);
    },
    par1_set(event) {
      this.par1 = event.target.value;
    },
    par2_set(event) {
      this.par2 = event.target.value;
    },
  },
});

app.mount("#assignment");
