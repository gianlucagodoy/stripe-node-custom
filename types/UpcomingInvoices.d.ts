declare module 'stripe-custom' {
  namespace Stripe {
    type UpcomingInvoice = Omit<Stripe.Invoice, 'id'>;
  }
}
