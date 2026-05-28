import axios from "axios"


const productLoaders = async () => {
          try {
            const response = await axios.get("https://6a181f001878294b597c6a45.mockapi.io/products")
            return response.data
          }catch (error) {
            console.error('error featching data: ',error)
            return [];
          }
          
          
       
}

export default productLoaders;
