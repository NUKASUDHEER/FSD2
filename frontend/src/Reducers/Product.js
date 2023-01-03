import { createReducer } from "@reduxjs/toolkit";

const initialState={

    loading: true,
    products: [],
    error: null,
    productsCount: 0,
    resultPerPage: 0,
    filteredProductsCount: 0,
    reviews: {},
    isCreated: false,
    isDeleted: false,
    success: false,
    product: [],
    isUpdated: false,

}

export const ProductReducers=createReducer(initialState,{

    //adminProductSlice Reducers
    adminProductRequest(state) {
        state.loading = true;
    },
    adminProductRequestSuccess(state, action) {
        state.loading = false;
        state.products = action.payload;
    },
    adminProductRequestFail(state, action) {
        state.loading = false;
        state.error = action.payload
    },
    adminProductRequestReset(state) {
        state.error = null;
    },

    //allProductsSlice Reducers
    getAllProductRequest(state, action) {
        state.loading = true;
        state.products = []
      },
      getAllProductsSucces(state, action) {
        state.loading = false;
        state.products = action.payload.products
        state.productsCount = action.payload.productsCount
        state.resultPerPage = action.payload.resultPerPage
        state.filteredProductsCount = action.payload.filteredProductsCount
      },
      getAllProductsFail(state, action) {
        state.loading = false;
        state.error = action.payload
      },

    //allReviewSlice Reducers
    allReviewRequest(state) {
        state.loading = true;
    },
    allReviewSuccess(state, action) {
        state.loading = false;
        state.reviews = action.payload;
    },
    allReviewFail(state, action) {
        state.loading = false;
        state.error = action.payload;
    },
    allReviewReset(state) {
        state.error = null
    },

    //createProductSlice Reducers
    newProductRequest(state) {
        state.loading = true;
    },
    newProductRequestSuccess(state, action) {
        state.loading = false;
        state.isCreated = true;
    },
    newProductRequestFail(state, action) {
        state.loading = false;
        state.error = action.payload
    },
    newProductRequestReset(state) {
        state.error = null;
    },

    //deleteProductSlice Reducers
    deleteProductRequest(state) {
        state.loading = true;
    },
    deleteProductRequestSucess(state, action) {
        state.loading = false;
        state.isDeleted = action.payload
    },
    deleteProductRequestFail(state, action) {
        state.loading = false;
        state.error = action.payload
    },
    deleteProductRequestReset(state) {
        state.isDeleted = false;
        state.error = null
    },

    //deleteReviewSlice Reducers
    deletReviewRequest(state) {
        state.loading = true;
    },
    deleteReviewSuccess(state, action) {
        state.loading = false;
        state.isDeleted = action.payload;
    },
    deleteReviewFail(state, action) {
        state.loading = true;
        state.error =action.payload;
    },
    deleteReviewReset(state) {
        state.isDeleted = false;
        state.error = null;
    },

    //newReviewSlice Reducer
    newReviewRequest(state) {
        state.loading = true;
    },
    newReviewSuccess(state, action) {
        state.loading = false;
        state.success = action.payload
    },
    newReviewFail(state, action) {
        state.loading = false;
        state.error = action.payload
    },
    newReviewReset(state) {
        state.success = false;
    },

    //singleProductSlice Reducers
    singleProductRequest(state) {
        state.loading = true;
      },
      setSingleProductSuccess(state, action) {
        state.loading = false;
        state.product = action.payload;
      },
      setSingleProductFail(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      setsSingleProductReset(state) {
          state.error = null;
      },

    //updateProductSlice Reducers
    updateProductRequest(state) {
        state.loading = true;
      },
      updateProductSuccess(state, action) {
        state.loading = false;
        state.isUpdated = action.payload;
      },
      updateProductFail(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      updateProductReset(state) {
        state.isUpdated = false;
        state.error = null;
      },
})
