import { useState } from "react";


export default function Welcome({today, itineraryList}){
    
    function getDate(today) {
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[today.getDay()];
    const [currentDate, setCurrentDate] = useState(getDate(today));
    const [day, setDay] = useState(dayOfWeek);

    
    return(
        <section>
            <h2>Hi Poopy,</h2>
            <h3>Happy {day} !!</h3>
            <p>{currentDate}</p>
            <div>
                {itineraryList.filter(itineraryItem=>
                    itineraryItem.date === currentDate
                ).map(filteredItem=>{
                    return(
                        <>
                        <p>Today's Theme: {filteredItem.theme}</p>
                        <p>Today's Dress Code: {filteredItem.dressCode}</p>
                        <a href={`#${filteredItem.id}`} id="adventure">View Today’s Adventure</a>

                        </>
                    )
                })
                }
            </div>
        </section>
    )
}