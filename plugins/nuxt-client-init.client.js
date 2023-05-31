export default async (context) => {
  await context.store.dispatch('cart/nuxtClientInit', context)
}
