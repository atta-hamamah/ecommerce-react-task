import React , {useState , createContext} from "react"

const Context = createContext()

function ContextProvider({children}) {
    // login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // SignUp
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    //products
    const [products, setProducts] = useState([]);
    //product details
    const [product, setProduct] = useState(null);
    //cart items
    const [cartItems, setCartItems] = useState([]);
    

    return (
        <Context.Provider value={{
            email, setEmail,
            password, setPassword,
            formData, setFormData,
            formErrors, setFormErrors,
            products, setProducts,
            product, setProduct,
            cartItems, setCartItems,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}