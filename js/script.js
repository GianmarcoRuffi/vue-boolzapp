const root = new Vue({
  el: "#root",
  data: {
    // Array users

    // const user = {
    //   name: "Nome Utente",
    //   avatar: "_io",

    // },

    contacts: [
      {
        id: 1,
        name: "Michele",

        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Ricordati di stendere i panni",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            message: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        id: 2,
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            message: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            message: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            message: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        id: 3,
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            message: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            message: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            message: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        id: 4,
        name: "Alessandro B.",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
      {
        id: 5,
        name: "Alessandro L.",
        avatar: "_5",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ricordati di chiamare la nonna",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Va bene, stasera la sento",
            status: "received",
          },
        ],
      },
      {
        id: 6,
        name: "Claudia",
        avatar: "_6",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ciao Claudia, hai novit???",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Non ancora",
            status: "received",
          },
          {
            date: "10/01/2020 15:51:00",
            message: "Nessuna nuova, buona nuova",
            status: "sent",
          },
        ],
      },
      {
        id: 7,
        name: "Federico",
        avatar: "_7",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Fai gli auguri a Martina che ?? il suo compleanno!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Grazie per avermelo ricordato, le scrivo subito!",
            status: "received",
          },
        ],
      },
      {
        id: 8,
        name: "Davide",
        avatar: "_8",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ciao, andiamo a mangiare la pizza stasera?",
            status: "received",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "No, l'ho gi?? mangiata ieri, ordiniamo sushi!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:51:00",
            message: "OK!!",
            status: "received",
          },
        ],
      },
      {
        id: 9,
        name: "Floppa",
        avatar: "_9",
        visible: true,
        messages: [
          {
            date: "12/05/2021 16:30:55",
            message: "Cosa ne pensi dei Caracal?",
            status: "received",
          },
          {
            date: "10/01/2020 17:50:00",
            message: "Hanno delle buffe orecchie con un ciuffo nero!",
            status: "sent",
          },
          {
            date: "12/05/2021 18:51:00",
            message: "Proprio cos??!",
            status: "received",
          },
        ],
      },
    ],
    activeContactIndex: 0,
    activeContactId: 1,
    activeDropdown: null,
    darkMode: false,
    searchText: "",
    message: "",
  },
  methods: {
    changeTheme() {
      this.darkMode = !this.darkMode;
    },

    close(e) {
      if (e.target.id != `caret-${this.activeDropdown}`) {
        this.activeDropdown = null;
      }
    },

    getAvatarUrl(contact) {},

    display() {
      for (key in this.contacts) {
        console.log(this.contacts[key]);
      }
    },

    viewChat(id) {
      const index = this.contacts.findIndex((contact) => {
        return contact.id === id;
      });
      this.activeContactIndex = index;
      this.activeContactId = id;
    },

    sendMessage(i) {
      const quotes = [
        "Si, ma non ne sono sicuro.",
        "Ma si pu?? sapere chi sei e perch?? mi stai scrivendo?",
        "Git gud.",
        "Peccato!",
        "Ora, ora si pu?? fare!",
        "Ecco lo sapevo!",
        "E' tutto un casino!",
        "Te lo stavano dicendo.",
        "Ahahahahahah!!!",
        "Certamente.",
        "Tra circa un'oretta.",
      ];

      const newMessage = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        message: this.message,
        status: "sent",
      };

      const responseMessage = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        message: quotes[Math.floor(Math.random() * quotes.length)],
        status: "received",
      };
      this.contacts[this.activeContactIndex].messages.push(newMessage);
      this.message = "";

      setTimeout(() => {
        this.contacts[i].messages.push(responseMessage);
      }, 1000);
    },
    deleteMsg(i) {
      this.contacts[this.activeContactIndex].messages.splice(i, 1);
    },
    setDropdownIndex(i) {
      this.activeDropdown = i;
    },
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
});
