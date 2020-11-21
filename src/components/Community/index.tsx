import React , {useState, useEffect, useRef}from 'react'
import Condo from  "../../assets/img/Condo.svg"
import Duplex from  "../../assets/img/Duplex.svg"
import House from  "../../assets/img/House.svg"
import TownHome from  "../../assets/img/TownHome.svg"
import {Direction}  from '../SVGs/Direction'





interface indexProps {
    final?: {
        communityData?:{name?:string ,id?:string, imgUrl?:string, group?:string};
        averagePrice?: number;
        homes?: [{type:number}] 
    }
    
}


export const Community: React.FC<indexProps> = ({final}) => {
  const [typeCount, setTypeCount] = useState<any>({});


  const comImage = useRef<HTMLImageElement>(null)
//  Counts the number of occurrence of each type of property in each community 
    useEffect(() => {
        var obj: {[key: string]: number; } = {};
      if(final?.homes?.length ) {for (var i:number = 0, j:number = final.homes.length; i < j; i++) {
            if (obj[final.homes[i].type]) {
               obj[final.homes[i].type]++;
            }
            else {
               obj[final.homes[i].type] = 1;
            } 
         }}
       
         console.log(obj);
         setTypeCount(obj)
         
    }, [final])



// Network error back up
    const changeImage = () =>{
        if (comImage.current !== null) {
        comImage.current.src  = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
            
        }
  }
    
return (<div className="cardWidth " style={{marginTop: 40 + `px`}} >
   <div className="w90per mlAuto mrAuto card lAlign">
        <img  src={final?.communityData?.imgUrl ? final?.communityData?.imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} onError={changeImage} ref={comImage} alt="" className="w100per img"/> 
<div style={{ paddingLeft: 5 +`%`, paddingRight: 5 +`%`}} className="">
    <div style={{color: "#E47B2D" , display: 'flex',marginBottom: -25, alignItems: 'center',}} >
        <p>{final?.communityData?.group}</p>
    
       <Direction direction={final?.communityData?.group} style={{width: 30 + `px`, marginLeft: 5}}/>
        </div> 
        
        <h1 title={final?.communityData?.name} >{final?.communityData?.name && final?.communityData?.name?.length > 10 ? `${final?.communityData?.name?.substring(0, 9)}...`: final?.communityData?.name }</h1>
           
</div>
         <div > 
            <p  style={{ paddingLeft: 5 +`%`, paddingRight: 5 +`%`, fontSize: 24}}> {final?.averagePrice?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} <span style={{fontSize: 12}}>.avg price</span></p>
           
                <div className="dFlex jSpace" style={{textAlign: 'center', paddingLeft: 5 +`%`, paddingRight: 5 +`%` ,alignItems: 'start',}}>
                <div className="dFlex" style={{flexDirection: 'column',alignItems: 'center',}}>
                        <div className="dFlex" style={{alignItems: 'center',}}>
                            <p>{typeCount.House ? typeCount.House : 0 } </p>
                         
                            <div className="icon__hoverState" style={{ padding: 5, width: 20 ,height: 20 , borderRadius: 50 + `%`, marginLeft: 5 + `px`}}><img title={typeCount.House > 1  ?  `${typeCount.House } Houses` : `${typeCount.House > 0 ? `${typeCount.House} House` : `No Houses`  } `} style={{width: 16 + `px`, marginLeft: "1px"}} src={House} alt="" /> </div>
                        </div>
<p style={{textAlign: 'center' , fontSize: 12}}>House</p>
                    </div>

                    <div className="dFlex " style={{flexDirection: 'column',alignItems: 'center',}}>
                        <div className="dFlex" style={{alignItems: 'center',}}>
                        <p>{typeCount.Condo ? typeCount.Condo : 0 } </p>
              
                            <div className="icon__hoverState" style={{ padding: 5, width: 20 ,height: 20 , borderRadius: 50 + `%`, marginLeft: 5 + `px`}}> <img title={typeCount.Condo > 1  ?  `${typeCount.Condo } Condos` : `${typeCount.Condo > 0 ? typeCount.Condo: 0 } Condo`}  style={{width: 11 + `px`, margin:  "auto"}} src={Condo} alt=""/> </div>
    
                        </div>
<p style={{textAlign: 'center' , fontSize: 12}}>Condo</p>

                    </div>
                    
                    <div className="dFlex " style={{flexDirection: 'column',alignItems: 'center', }}>
                   
                        <div className="dFlex " style={{alignItems: 'center',}}>
                        <p>{typeCount.Duplex ? typeCount.Duplex : 0 } </p>
                   
                            <div className="icon__hoverState" style={{ padding: 5, width: 20 ,height: 20 , borderRadius: 50 + `%`, marginLeft: 5 + `px`}}><img title={typeCount.Duplex > 1  ?  `${typeCount.Duplex } Duplexes` : `${typeCount.Duplex > 0 ? `${typeCount.Duplex} Duplex` : `No Duplexes`  } `} style={{width: 15 + `px`, margin: "auto"}} src={Duplex} alt=""/> </div>
                        </div>
                        <p style={{textAlign: 'center', fontSize: 12}}>Duplex</p>

                   </div>    

                   <div className="dFlex " style={{flexDirection: 'column',alignItems: 'center' }}>
                        <div className="dFlex" style={{alignItems: 'center',}}>
                        <p>{typeCount.Townhome ? typeCount.Townhome : 0 } </p>
                         
                            <div  className="icon__hoverState" style={{ padding: 5, width: 20 ,height: 20 , borderRadius: 50 + `%`, marginLeft: 5 + `px`}}><img title={typeCount.Townhome > 1  ?  `${typeCount.Townhome } Townhomes` : `${typeCount.Townhome > 0 ? `${typeCount.Townhome} Townhome` : `No Townhomes`  } `} style={{width: 16 + `px`, margin: "auto"}} src={TownHome} alt=""/></div>
                        </div>
    
                        
    <p style={{textAlign: 'center', fontSize: 12}}>Townhome</p>
                        
                
                    </div>
                   </div>
            
              
        </div>
   </div>
        
        </div>);
}