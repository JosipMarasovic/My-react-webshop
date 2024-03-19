import { createContext } from "react"



const AppContext = createContext({
    basket:{},
    addItemToBasket: () => {},
    removeItemFromBasket: () => {},
    updateItemInBasket: () => {}
})

export default AppContext;


export const AppProvider = ({children}) => {
    const [basket,setBasket] = useState({})

    const addItemToBasket = (item) => {
        setBasket(prevBasket => {
            const updatedBasket = {...prevBasket};
            if(updatedBasket[item.id]){
                updatedBasket[item.id].quantity +=1
            }else{
                updatedBasket[item.id] = {...item,quantity:1}
            }
            return updatedBasket
        });
    };

    const removeItemFromBasket = (itemId) => {
        setBasket(prevBasket => {
            const updatedBasket = {...prevBasket};
            delete updatedBasket[itemId]
            return updatedBasket;
        })
    }

    const updateItemInBasket = (itemId,quantity) => {
        setBasket(prevBasket => {
            const updatedBasket = {...prevBasket}
            if(updatedBasket[itemId]){
                updatedBasket[itemId].quantity = quantity
            }
            return updatedBasket
        })
    }

    return (
        <AppContext.Provider 
              value={{basket,addItemToBasket,removeItemFromBasket,updateItemInBasket}}>
              {children}
         </AppContext.Provider>
    )

}