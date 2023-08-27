// it cointains network call code // http  calls
import URL from '../utils/constant.js';
async function doNetworkCall(){
    try{
        const response = await fetch(URL); // await is used so that async code behaves like sync code.. 
        const object = await response.json();
        return object;
        }
        catch(err){
            console.log('Some problem in API call',err);
            throw err;
        }
   /* 
   sync code => console.log,a+b,math.power(3,2);
   async code => fetch
   const URL = 'https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json';
    const promise = fetch(URL);
    console.log('Promise is',promise);
    promise.then(function(response)
    {
    console.log('response is',response);
    const promise2 = response.json(); // deserialisation(json to object) jso is key,value pair
    promise2.then(data => console.log('Data is',data))
    .catch(e =>console.log('JSON parse Error',e));  // since one then leads to another then ... therefore this is called callback hell
    }).catch(function(err){
    console.log('error is ',err);
    });
    console.log('good bye'); */
    

}
export default doNetworkCall;
