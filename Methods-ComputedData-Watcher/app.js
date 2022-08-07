/* Vue riesegue tutti i metodi, perchè non può sapere le variabili usate
   da questi , quindi i metodi non sono la soluzione migliore a meno che non
   li si rivoglia ricaricare ogni volta.
   ------------------------------------------------------------------------

   Useremo quindi le "Computed Properties":
   (sono metodi doveView sarà in grado di capire quali sono le dipendenze ed eseguirli
    e verranno rieseguiti solo se una di queste viene modificate)
    
    quindi dichiariamo le computed properties e chiamamo nel codice senza
    parentesi, sarà Vue a chiamarle


    -------------------------------------------
   Ci sono anche i watchers (watch), dichiareremo metodi con un nome di una 
   data property o computed data property, in modo che ogni volta che 
   essa cambia viene eseguito il metodo associato 

   Nel caso in cui un watcher dipende da più variabili non è un caso d'uso ottimo
   però brilla in alcuni casi d'uso:
   ex.  resetta il counter ogni 50
        HTTP requests
        Timer 
        etc.
   
   */

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  watch: {
    /* name(value) {
        if (value === "") {
          return "";
        }
        return this.name + " " + "Ziccolella";
    }, */
  },

  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Ziccolella";
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
