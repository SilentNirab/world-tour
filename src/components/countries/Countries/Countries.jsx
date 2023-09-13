import { useEffect } from "react";
import { useState } from "react";
import Country from "../../Country/Country";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
        
    },[])

    const handelVisitedFlags = flag =>{
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag);
    }
    return (

        <div className="">
            <p>countres : {countries.length}</p>
            <div className="flex">
                {
                    visitedFlags.map((flag, idx) => <img className="w-24 pr-1" key={idx} src={flag}></img>)
                }
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
             countries.map(country => <Country
                key={Country.cca3}
                handelVisitedFlags={handelVisitedFlags}
                country={country}
                
                ></Country>,[])
            }
            </div>
            
        </div>
    );
};

export default Countries;