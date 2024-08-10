const Stripe = require("stripe");

export const stripe = new Stripe('sk_test_51PlEoDC7xgW7dQBmQkjWwa8R4Bqjqfcqp6IzH4fQFlNAs2PM705azi0Bk6fcy0wp9642SkRiYYCEJL0KB98aMyAw00DHeb6ihm', {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "Ecommerce",
  },
});
