export const getProducts = async () => {
  try{
    const petiApi = await fetch('http://localhost:4000/forniture');
    const data = await petiApi.json();
    return(data);
    } catch (error){
    }
  }
