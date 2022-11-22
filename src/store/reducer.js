import {ADD_PRODUCT_TO_CART,DELETE_PRODUCT_TO_CART} from './constants'

const innitialState = {
    products:[
        {
            id:1,
            name:'HoliRoots Hair Oil',
            price:16.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/hair-oil_360x.png?v=1630425758',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-hair-oil_360x.png?v=1629407455',
        },
        {
            id:2,
            name:'Ritual Collection',
            price:124.00,
            fixed_price:115.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/ritual-collection_360x.png?v=1630425550',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/GoodKarmaSet-2_360x.png?v=1641474033',
        },
        {
            id:3,
            name:'SahaScalp Amla Soothing Serum',
            price:34.00,
            type: 'SahaScalp',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/amla-soothing-serum_360x.png?v=1630425559',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/sahascalp-amla-soothing-serum_360x.png?v=1629912623',
        },
        {
            id:4,
            name:'HoliRoots Good Karma Hair Set',
            price:29.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/GoodKarmaSet-2_360x.png?v=1641474033',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/GoodKarmaSet-3_360x.png?v=1641474033',
        },
        {
            id:5,
            name:'HoliRoots Conditioner',
            price:58.00,
            fixed_price:53.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-shampoo_4aa3a3a4-a4bc-49c2-bc87-ffd0435b47c0_360x.png?v=1630425718',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-conditioner_360x.png?v=1629407699',
        },
        {
            id:6,
            name:'Shampoo & Conditioner Duo',
            price:29.00,
            type: 'HoliRoots',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-shampoo-conditioner-duo_360x.png?v=1629407191',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/shampoo-conditioner-duo_360x.png?v=1630425576',
        },
        {
            id:7,
            name:'HoliRoots Shampoo',
            price:32.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/hair-oil_360x.png?v=1630425758',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-shampoo-conditioner-duo_360x.png?v=1629407191',
        },
        {
            id:8,
            name:'HoliRoots Hair Mask',
            price:32.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-conditioner_65931f1d-7990-4bc3-98ea-09c3aea6598d_360x.png?v=1630425769',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-shampoo_360x.png?v=1629407720',
        },
        {
            id:9,
            name:'SahaScalp Wild Ginger Purifying Scrub',
            price:32.00 ,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-hair-mask_360x.png?v=1630425745',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/hair-mask_360x.png?v=1630335017',
        },
        {
            id:10,
            name:'HoliRoots Hair Mask',
            price:39.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/wild_ginger_scrub_hover1_360x.png?v=1632423313',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/sahascalp-wild-ginger-purifying-scrub_360x.png?v=1629914066',
        },
        {
            id:11,
            name:'HoliRoots Healthy Hair Ritual',
            price:39.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/HolidaySetHover_360x.png?v=1639750923',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/HolidaySetTransparentBackground_360x.png?v=1639750923',
        },
        {
            id:12,
            name:'Hair Oil & Mask Duo',
            price:62.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/oil-mask-duo_360x.png?v=1630425628',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-mask-oil-duo_360x.png?v=1629407170',
        },
        {
            id:13,
            name:'HoliRoots Hair Oil & SahaScalp Amla Serum Duo',
            price:64.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/AmlaSerumHairOil0_360x.png?v=1637939028',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/AmlaSerumHairOil1_360x.png?v=1637939028',
        },
        {
            id:14,
            name:'SahaScalp Amla Serum & Ginger Scrub Duo',
            price:62.00 ,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/SahaScalpDuoHover_360x.png?v=1637883977',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/SahaScalpDuo0_360x.png?v=1637883977',
        },
        {
            id:15,
            name:'Incredible India™ Scented Candle',
            price:49.00 ,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/CandleImage2New_360x.png?v=1636727522',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/CandleImage1New_360x.png?v=1636727376',
        },
        {
            id:16,
            name:'Scalp Massager Comb',
            price:15.00,
            type: 'HoliRoots',
            image_before:'',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/ScalpMassagerComb-New_360x.png?v=1636383215',
        },
        {
            id:17,
            name:'Tiger Tea',
            price:12.00 ,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/tiger-tea_c0829e6d-8e84-4631-bdef-329dcca6952b_360x.png?v=1630425597',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/tiger-tea_360x.png?v=1629409614',
        },
        {
            id:18,
            name:'Hair Yoga Mat',
            price:115.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/hair_yoga_mat_hover1_360x.png?v=1632423262',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/hair-yoga-mat_360x.png?v=1629409340',
        },
        {
            id:19,
            name:'Small Neem Comb',
            price:11.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/small_neem_Comb_hover_360x.png?v=1632423289',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/small-neem-comb_360x.png?v=1629409572',
        },
        {
            id:20,
            name:'Large Neem Comb',
            price:15.00,
            type: 'HoliRoots',
            image_before:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/large_neem_Comb_hover_360x.png?v=1632423280',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/large-neem-comb_360x.png?v=1629409536',
        },
        {
            id:21,
            name:'Detangling Neem Comb',
            price:13.00,
            type: 'HoliRoots',
            image_before:'',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/Detangling1copy_360x.png?v=1634916705',
        },
        {
            id:22,
            name:'Tiger Scrunchie',
            price:5.00,
            type: 'HoliRoots',
            image_before:'',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/tiger-scrunchie_360x.png?v=1629409584',
        },
        {
            id:23,
            name:'Embroidered Hair Spa Headband',
            price:15.00,
            type: 'HoliRoots',
            image_before:'',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/HeadbandHover_360x.png?v=1634916269',
        },
        {
            id:24,
            name:'e-Gift Card',
            price:10.00,
            type: 'HoliRoots',
            image_before:'',
            image_after:'https://cdn.shopify.com/s/files/1/0587/3801/6450/products/F_M_GiftCards-02_360x.png?v=1631315811',
        },
    ],
    cart:[]
}
function reducer(state, action){
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
            const addedProduct = [...state.cart,action.payload]
            return {
                ...state,
                cart:addedProduct
            }
        case DELETE_PRODUCT_TO_CART:
            let newCart = [...state.cart]
            newCart.splice(action.payload,1)
            return {
                ...state,
                cart:newCart
            }
        default:
            return state
    }

}

export {innitialState}
export default reducer