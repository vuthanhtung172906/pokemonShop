import React,{useState, createContext, useEffect} from 'react';

export const DataContext = createContext();
export const DataProviders = (props) => {
    const [dex , setDex] = useState([
        {
            "_id": "1",
            "title": "PokeMon 01",
            "images": [
                "/image/001.png",
                "/image/002.png",
                "/image/003.png",
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count" : 1
        },
        {
            "_id": "2",
            "title": "PokeMon 02",
            "images": [
                "/image/004.png",
                "/image/005.png",
                "/image/006.png",
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count" : 1
        },
        {
            "_id": "3",
            "title": "PokeMon 03",
            "images": [
                "/image/007.png",
                "/image/008.png",
                "/image/009.png",
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count" : 1
        },
        {
            "_id": "4",
            "title": "PokeMon 04",
            "images": [
                "/image/010.png",
                "/image/011.png",
                "/image/012.png",
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count" : 1
        },
        {
            "_id": "5",
            "title": "PokeMon 05",
            "images": [
                "/image/013.png",
                "/image/014.png",
                "/image/015.png",
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count" : 1
        },
        {
            "_id": "6",
            "title": "PokeMon 06",
            "images": [
                "/image/016.png",
                "/image/017.png",
                "/image/018.png",
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count" : 1
        }
    ])
    const [cart , setCart] = useState([]);

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id      
        })
        if(check){
            const data = dex.filter(product =>{
                return product._id === id;
            })
            setCart([...cart, ...data])
        }else{
            alert("Dex had been add")
        }
    }
    useEffect(()=>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart) setCart(dataCart);
    },[])
    useEffect(()=>{
        localStorage.setItem('dataCart' , JSON.stringify(cart))
    },[cart])
    const value  = {
        dex: [dex, setDex],
        cart: [cart, setCart],
        addCart: [addCart]
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataProviders;