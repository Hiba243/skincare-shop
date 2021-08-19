import { useEffect, useState } from 'react'
import img1 from '../images/lip_balm.jpg';
import img2 from '../images/lip.jpg';
import img3 from '../images/oil.jpg';
import img4 from '../images/cleanser.jpg';
const useProducts = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        if (!sessionStorage.getItem('product-list')) {
            const fetchproducts = async () => {
                const response = await fetch('https://clone-d6025-default-rtdb.asia-southeast1.firebasedatabase.app/products.json');
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const responseData = await response.json();
                const loadedproducts = [];
                for (const key in responseData) {
                    loadedproducts.push({
                        id: key,
                        title: responseData[key].title,
                        price: responseData[key].price,
                        image: responseData[key].image,
                        tags: responseData[key].tags,
                        category: responseData[key].category,
                        desc: responseData[key].desc,
                    });
                }
                loadedproducts[0].image=img1;
                loadedproducts[1].image=img2;
                loadedproducts[2].image=img3;
                loadedproducts[3].image=img4;
                sessionStorage.setItem('product-list', JSON.stringify(loadedproducts));
                setproducts(loadedproducts);
            };

            fetchproducts().catch(error => {

            });
        }
        else {
            const prodarr = sessionStorage.getItem('product-list');
            setproducts(JSON.parse(prodarr));
        }
    }, []);
    return products;
}
export default useProducts