<template>
  <h2>My Friends</h2>
  <p> Counter {{ counter }}</p>
  <ul>
    <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.email"
      @increm="foo"
    ></friend-contact>
  </ul>

  <!-- @(kebab case event)="foo" -->
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234567890",
          email: "dio@gmail.com",
        },
        {
          id: "juan",
          name: "Juan 3Cozz",
          phone: "01234567890",
          email: "diomerda@gmail.com",
        },
      ],
      counter: 0,
    };

  },
  methods: {
    foo(intero) {
      this.counter+=intero;
    },
  },
};
</script>

<style></style>
