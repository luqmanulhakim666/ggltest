import product from '@/api/product'
import cart from '@/api/cart'

export default (ctx, inject) => {
  let api = {}
  api.product = product(ctx)
  api.cart = cart(ctx)
  inject('api', api)
}
