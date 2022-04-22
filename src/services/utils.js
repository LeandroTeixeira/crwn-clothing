const defaultCartItem = {
  id: null,
  qtd: 1,
  name: null,
  imageUrl: null,
  price: null,
};

export const currencyFormatter = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'USD',
}).format(value);

export default defaultCartItem;
