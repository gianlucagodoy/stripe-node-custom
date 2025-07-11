// File generated from our OpenAPI spec

declare module 'stripe-custom' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface MeterEventCreateParams {
          /**
           * The name of the meter event. Corresponds with the `event_name` field on a meter.
           */
          event_name: string;

          /**
           * The payload of the event. This must contain the fields corresponding to a meter's
           * `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and
           * `value_settings.event_payload_key` (default is `value`). Read more about
           * the
           * [payload](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
           */
          payload: {
            [key: string]: string;
          };

          /**
           * A unique identifier for the event. If not provided, one will be generated.
           * We recommend using a globally unique identifier for this. We'll enforce
           * uniqueness within a rolling 24 hour period.
           */
          identifier?: string;

          /**
           * The time of the event. Must be within the past 35 calendar days or up to
           * 5 minutes in the future. Defaults to current timestamp if not specified.
           */
          timestamp?: string;
        }
      }

      namespace Billing {
        class MeterEventsResource {
          /**
           * Creates a meter event. Events are validated synchronously, but are processed asynchronously. Supports up to 1,000 events per second in livemode. For higher rate-limits, please use meter event streams instead.
           */
          create(
            params: MeterEventCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.MeterEvent>>;
        }
      }
    }
  }
}
