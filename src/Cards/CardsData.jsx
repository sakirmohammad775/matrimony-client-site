import { useEffect, useState } from "react";
import Cards from "./Cards";


const CardsData = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
          .then(response => response.json())
          .then(data => setProfiles(data));
      }, []);
    return (
        <>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {profiles.map(profile => (
        <Cards key={profile.BioDataId} profile={profile} />
      ))}
         </div>
        </>
    );
};

export default CardsData;