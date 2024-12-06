import ItineraryItem from './ItineraryItem';
export default function Itinerary({itineraryList}){
    return(
        <>            
            {itineraryList.map(itineraryItem=>{
                return(
                    
                    <ItineraryItem itineraryItem={itineraryItem}/>
                    
                )
                    
            })}
        </>
    )
}