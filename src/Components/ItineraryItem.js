export default function ItineraryItem({itineraryItem}){
    return(
        <section>
        <h2 id={itineraryItem.id}>{itineraryItem.date}</h2>
    <p>Theme: {itineraryItem.theme} <span style={{fontSize:'15px'}}>{itineraryItem.emoji}</span></p>
        <p>Dress Code: {itineraryItem.dressCode}</p>

        <table>
            {itineraryItem.items.map(item=>{
                return(
                <tr>
                    <td>{item.startTime}{item.endTime !== "" ? `-${item.endTime}` : ""}</td>
                    <td>{item.description}
                        {item.location !== "" ? 
                            <span> | {item.url !== "" ? 
                                <a href={item.url} target="_blank">{item.location}</a> :
                                <span>{item.location}</span>
                            }
                                
                                
                            </span> : " "
                        } 
                       
                    </td>
                </tr>
            )
            })}
        </table>
        </section>
    )
}