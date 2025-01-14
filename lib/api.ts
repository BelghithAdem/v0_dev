import axios from 'axios';

// Create an Axios instance with the base URL and headers
const api = axios.create({
  baseURL: 'https://orq-dev.synque.ca/',
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyYjZkNTI0LTAyOGQtNGJmNi04NjEzLTUyYmQ0OTgwYTIzNCIsInJvbGUiOiI3ZjdiNzllMS0wZWUwLTRiOTUtYmMwZC1kNzViNTQyMzJjNjQiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTczNjg4NjE2NiwiZXhwIjoxNzM2ODg5MTY2LCJpc3MiOiJkaXJlY3R1cyJ9.h9IuwRVjrar6CcBq1QJ6amENx2PDGQYrtzzIbmXGH7Y`,
  },
});


const addProduct = async (id, productData) => {
 try {
   const { data } = await api.post(`/order/order_line/${id}`, productData);
   return data; // Return the response data
 } catch (error) {
   console.error('Error adding product:', error.response?.data || error.message);
   throw error; // Re-throw error for further handling
 }
};


// Fetch order line data
const fetchOrderLines = async (orderId, orqValue, limit = 10, page = 1) => {
  try {
    const params = {
      limit,
      page,
      fields: 'tax_rate,product_price,qty,discount,product_name,product_type,unit_id.name,unit_id.code,unit_id.type,product_id.name,product_id.code,product_id.price,id,product_id,id',
      meta: '*',
      search: '',
      filter: JSON.stringify({
        _and: [
          { _and: [{ order_id: { _eq: orderId } }, { orq: { _eq: orqValue } }] },
          { status: { _neq: 'archived' } }
        ]
      })
    };

    // Make the GET request to the specific endpoint using the Axios instance
    const { data } = await api.get('/items/order_line', { params });

    return data.data || [];  // Return data or empty array on error
  } catch (error) {
    console.error('Error fetching order lines:', error);
    return [];
  }
};

// Get product data
const getProduct = async (orqValue = 63, limit = 12, page = 1, company = null, showEvent = true, showImages = true) => {
  try {
    const params = {
      orq: orqValue,
      limit,
      page,
      company,
      show_event: showEvent,
      images: showImages,
      show_images: showImages,
    };

    // Make the GET request to the product endpoint using the Axios instance
    const { data } = await api.get('/orders/product', { params });

    return data.data || [];  // Return product data or empty array on error
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Delete order line
const deleteOrderLine = async (orderLineId) => {
  try {
    const { data } = await api.delete(`/order/order_line/${orderLineId}`);
    console.log(`Order line ${orderLineId} deleted successfully.`);
    return data; // Return response data
  } catch (error) {
    console.error('Error deleting order line:', error.response?.data || error.message);
    throw error; // Re-throw error for further handling
  }
};

export { fetchOrderLines, getProduct, addProduct, deleteOrderLine };