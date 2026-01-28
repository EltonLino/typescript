// TODO CartItem

type CartItem = {
  id: number;
  price: number;
};

type Address = {
  cep: string;
  default: boolean;
};

type Customer = {
  addresses: Address[];
};

//TODO ShoppingCart
type ShoppingCart = {
  cartItems: CartItem[];
};
//TODO criar váripável do tipo ShippingCart contendo CartItem

const shoppingCart: ShoppingCart = {
  cartItems: [
    { id: 1000, price: 200 },
    { id: 1070, price: 300 },
    { id: 3000, price: 500 },
  ],
};

const addresses: Address[] = [
  { cep: '00000-000', default: false },
  { cep: '00000-001', default: true },
  { cep: '00000-002', default: false },
];

const customer: Customer = {
  addresses: addresses,
};

console.log('Detalhes do customer', customer);

type ApplyDiscontFn = (total: number, discount: number) => number;

const applyDiscount: ApplyDiscontFn = (
  total: number,
  discount: number,
): number => {
  return total - total * discount;
};

type calculateTotalFn = (sC: ShoppingCart, callback: ApplyDiscontFn) => number;

let calculateTotal: calculateTotalFn = function (
  shoppingCart: ShoppingCart,
  callback: ApplyDiscontFn,
): number {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  return callback(total, 0.1);
};

const total = calculateTotal(shoppingCart, applyDiscount);
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);

let getPrincipalAddress: (c: Customer) => Address | undefined;

getPrincipalAddress = function (customer: Customer): Address | undefined {
  return customer.addresses.find((address) => address.default);
};

const principalAddress = getPrincipalAddress(customer);

console.log(principalAddress);

export { getPrincipalAddress, calculateTotal };
