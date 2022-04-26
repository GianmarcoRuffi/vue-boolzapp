// Array users

const user = {
  name: "Nome Utente",
  avatar: "_io",
};
const contacts = [
  {
    name: "Michele",
    avatar: "_1",
  },
  {
    name: "Fabio",
    avatar: "_2",
  },
  {
    name: "Samuele",
    avatar: "_3",
  },
  {
    name: "Alessandro B.",
    avatar: "_4",
  },

  {
    name: "Alessandro L.",
    avatar: "_5",
  },

  {
    name: "Claudia",
    avatar: "_6",
  },

  {
    name: "Federico",
    avatar: "_7",
  },

  {
    name: "Davide",
    avatar: "_8",
  },
];

//Vue

const root = new Vue({
  el: "#root",
  data: {
    user: user,
    contacts: contacts,
  },
  methods: {
    getAvatarUrl(contact) {},
  },
  display() {
    for (key in this.contacts) {
      console.log(this.contacts[key]);
    }
  },
});
