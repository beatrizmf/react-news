export interface User {
  ref: {
    id: string;
  }
  data: {
    stripe_customer_id: string
  }
}