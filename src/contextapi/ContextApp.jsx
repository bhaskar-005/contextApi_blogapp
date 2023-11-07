import { createContext, useState } from "react";
import axios from 'axios';

// There are three processes of the context API: creation, providing, and consuming.
const url = import.meta.env.VITE_API_URL;


// 1. Creation of context
// We have to export this also.
export const ContextApp = createContext();


// 1.2. Data and data filling
// We have to pass the child because the app is a child of the context provider.
function ContextProvider({children}){
    //export default so that in main we can use it
    const [loader,setloader] = useState(false);
    const [post , setpost] = useState([]); //[] data in fome of arry so map can be applyed
    const [page, setpage]  = useState();
    const [totalpage,settotalpage] = useState(null) //coz we don't know what is the count of total page so set it to null

 async function fetchblogdata(page=1){
   try {
    setloader(true);
    const output = await axios.get(`${url}?page=${page}`); //fatchin data 
    setpage(output.data.page);
    setpost(output.data.posts);
    settotalpage(output.data.totalPages)
    setloader(false);
   } catch (error) {
    prompt(error)
   }
    
}
function pagechange(page){
  setpage(page);
  fetchblogdata(page);
  console.log(page);
  
}


// Combining all of this data in an object for providing.
const data ={
    post,
    setpost,
    loader,
    setloader,
    page,
    setpage,
    totalpage,
    settotalpage,
    fetchblogdata,
    pagechange
};

 //2. provider 
 return <ContextApp.Provider value={data}>
             {children}
        </ContextApp.Provider>
// We passed the set the values as data and sent it to the child.
  // In our case, the child is the app because we wrapped <App /> inside the contextApp tag.
}

export default ContextProvider;
