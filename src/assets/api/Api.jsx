
export const Api = () => {

    const fetchData = async () => {
        const petiApi = await fetch('http://localhost:4000/forniture');
        const data = await petiApi.json();
        setStock(data)
      }

}
