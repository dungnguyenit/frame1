import axios from "axios";

// const Produce = "http://localhost:3004/products"

// Want to use async/await? Add the `async` keyword to your outer function/method.
export async function getUser() {
  try {
    const response = await axios.get('http://localhost:3004/products');
   return response;
  } catch (error) {
    console.error(error);
  }
}

