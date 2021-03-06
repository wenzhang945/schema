import { extendType } from './extendType'
import { SubscriptionTypeConfig } from './subscriptionType'

/**
 * Add one field to the Subscription type
 */
export function subscriptionField<FieldName extends string>(
  fieldName: FieldName,
  config:
    | SubscriptionTypeConfig<'Subscription', FieldName>
    | (() => SubscriptionTypeConfig<'Subscription', FieldName>)
) {
  return extendType({
    type: 'Subscription',
    definition(t) {
      const finalConfig = typeof config === 'function' ? config() : config
      t.field(fieldName, finalConfig as any)
    },
  })
}
