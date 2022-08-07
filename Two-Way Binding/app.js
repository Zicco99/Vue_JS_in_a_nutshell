/* nuova direttiva (sostitutiva a v-bind e v-on insieme) 
 una proprietà di un tag è gestito da Vue permettendo contemp.:
 - stiamo ascolcando un evento dall'input
 - stiamo riscrivendo l'attributo di input attraverso la proprietà value
 (We comunicate in both direction)
*/

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = "";
    }

  }
});

app.mount('#events');
