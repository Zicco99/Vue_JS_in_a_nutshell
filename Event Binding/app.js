/* v-on:click etc. on HTML, methods in Vue 
Vue is a global object, that own variables in it, so methods 
could access to variables via this."var"

examples:
- v-on:keyup.enter
- v-on:right

Methods: 
- Obviously they can have parameters
- Native Event object -> if we call method in this way *name_function*
  javascript will add native parameters such as the event description
  (es. set_name(event)) // otherwise can be used $event in html function
  call to retrieve event description.

     -event usage examples:
      retrieve data
      prevent default behaviour (event.preventDefault()) 
          this can be also done with a modifier (v_on:submit.prevent)
          other modifiers (right ecc. (right click))


v-once directive, holds initial state value, Vue will evaluate it only once

*/


const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    set_name(event,string_woh){
      this.name = event.target.value + " " + string_woh
    },
    submit_but(){
      alert('got it, here i am');
    }
  }
});

app.mount('#events');
