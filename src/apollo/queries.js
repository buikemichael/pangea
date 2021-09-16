import gql from 'graphql-tag'




export const PRODUCTS = gql`
query getProducts {
products{
    id
    title
    image_url
    price(currency:USD)
    }
}
`;