import React, {useEffect, useState } from 'react';
import { Community } from './components/Community';
import './App.css';




const App: React.FC = () => {
  const [error, setError] = useState<any>();
  const [homeError, setHomeError] = useState<any>();

  const [loading, setLoading] = useState<boolean | null>(true);
  const [loadingFinal, setLoadingFinal] = useState<boolean | null>(true);


 
  const [communities, setCommunities] = useState<[]>([]);
  const [homes, setHomes] = useState<[]>([]);
  const [finalInfo, setFinalInfo] = useState<object[]>([]);


  useEffect(() => {
fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities") .then(res => res.json())
.then(
  (result) => {
    
    setCommunities(result);
    fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes") .then(res => res.json())
.then(
  (result) => {
    
    setHomes(result);
    setLoading(false)
  },

  (error) => {
setLoading(false)
console.log(error);
    

  }
)
  },

  (error) => {

    setError(error);
console.log(error);

  }
)
  }, [])

  useEffect(() => {
   communities.sort((a: { name: string }, b:  { name: string }) =>{
      if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
    })
    
var finalInfoTemp: Array<object> = []
    communities.forEach((community: {id:string}, i:number) => {
      
      var  count: number = 0
      var  priceTotal: number = 0
      
      var homeArray: Array<object> = []
console.log(i);


      let currentCommnunity: string = community.id;
      

      homes.forEach((home: {communityId:string, price:number, type:string, area: number, id:string}, j) => {
        let currentHome: string = home.communityId;


        if ( currentCommnunity === currentHome) {
          priceTotal =+ home.price
          count++;
        
        


          homeArray.push(home)
         
          
          
        }
      });
      
      finalInfoTemp.push({communityData: community, averagePrice:count > 0 ? priceTotal/count : 0, homes:homeArray})

 
    });
    console.log(finalInfoTemp);
    

    setFinalInfo(finalInfoTemp)
    
    
    
  }, [loading])


  useEffect(() => {
    console.log(finalInfo);
    setLoadingFinal(false)
    
  }, [finalInfo])
  return (
    <div className="App">

<h1 className="cAlign">Properties by Community(Alphabetical Order A-Z)</h1>
  
     <div className="w90per mlAuto mrAuto dFlex jStart flexWrap flexAlCenter contentArea"  >

       {!loadingFinal? finalInfo.map(final => <Community final={final}/>) : null}
          
          
     </div >
    </div>
  );
}

export default App;
