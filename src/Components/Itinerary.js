import ItineraryItem from './ItineraryItem';
export default function Itinerary({itineraryList}){
    return(
        <section>
            <h2>Itinerary</h2>
            
            {itineraryList.map(itineraryItem=>{
                return(
                    <ItineraryItem itineraryItem={itineraryItem}/>)
            })}
        </section>
    )
}