import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import products_reducer from "../reducers/products_reducer";

const initialState = {
    products: [],
    women_products: [],
    single_product: [],
    women_single_product: [],
    random_items: []
}


const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(products_reducer, initialState)


    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:8888/men.php')
        const items = response.data

        dispatch({ type: 'FETCH_PRODUCTS', payload: items })
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    const fetchSingleProduct = async () => {
        const response = await axios.get('http://localhost:8888/men.php')
        const products = response.data
        dispatch({ type: 'FETCH_SINGLE_PRODUCT', payload: products })
    }

    useEffect(() => {
        fetchSingleProduct()
    }, [])

    // ---------------------------- Women ----------------------------

    const womenfetchProducts = async () => {
        const response = await axios.get('http://localhost:8888/women.php')
        const women_items = response.data

        dispatch({ type: 'WOMEN_FETCH_PRODUCTS', payload: women_items })
    }

    useEffect(() => {
        womenfetchProducts()
    }, [])


    const womenfetchSingleProduct = async () => {
        const response = await axios.get('http://localhost:8888/women.php')
        const women_products = response.data
        dispatch({ type: 'WOMEN_FETCH_SINGLE_PRODUCT', payload: women_products })
    }

    useEffect(() => {
        womenfetchSingleProduct()
    }, [])

    // ---------------------------- Random ----------------------------

    // const fetchRandom = async () => {
    //     const response = await axios.get('http://localhost:8888/random.php')
    //     const items = response.data

    //     dispatch({ type: 'FETCH_RANDOM', payload: items })
    // }

    // useEffect(() => {
    //     fetchRandom()
    // }, [])



    return (

        <ProductsContext.Provider value={{
            ...state,
            fetchProducts,
            fetchSingleProduct,
            womenfetchProducts,
            womenfetchSingleProduct
        }}>
            {children}
        </ProductsContext.Provider>


    )

}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}

