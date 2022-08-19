<template>
  <li>
    <h2>{{ this.name }}</h2>
    <button @click="inc">Increment</button>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisibile">
      <li>Phone: {{ this.phoneNumber }}</li>
      <li>Email: {{ this.emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      /* validator: function (value) {
        return value === "1" || value === "0";
      }, */
    },
  },
  emits: {
    increm: function (intero) {
      if (intero > 0) {
        return true;
      } else {
        alert("lol")
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisibile: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234567890",
        email: "dio@gmail.com",
      },
    };
  },
  methods: {
    inc() {
      this.$emit("increm", 4);
    },
  },
};
</script>
