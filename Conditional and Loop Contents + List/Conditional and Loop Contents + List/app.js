/* 
 v-if="Javasccript clauses"
 v-else-if
 v-else
 etc. -> they decide which parts are part of DOM

 v-show -> Works similar to v-if but the element is hidden using the
           CSS but still visible in the DOM (the adding and removing
           costs in terms of performance so it can be used to light
           weight the app)
  
 v-for -> repeats a component, ex. g in goals -> g is usable in the
          component but its scope is to that component

          can be also extracted the index [(goal,idx)]

          can be extract properties by objects 
            [value in {name: "Max",age: 31}]
            [(value,key) in {name: "Max",age: 31}]
          
          can be product an array of numbers
            [num in 10]          
  
  However there is a bug, Vue recycles elements, sometimes the data
  could be lost, so there is a non HTML attribute used in combination
  with v-for 

  :key=" unique id (could be the one of the database)"
*/

const app = Vue.createApp({
  data() {
    return { 
      entered: "",
      goals: [] };
  },
  methods: {
    add_elem(){
      this.goals.push(this.entered);
    },
    remove_elem(idx){
      this.goals.splice(idx,1)
    }
  }
});

app.mount('#user-goals');
