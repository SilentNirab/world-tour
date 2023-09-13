const Country = ({country, handelVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
 
    return (
        <div className="mt-5 text-left text-md font-semibold border-2 border-gray-500 p-4">
            <img src={flags.png} alt="" className="h-60 w-80" />
            <h3 className="text-lg">{name.common}</h3>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <p>Code: {cca3}</p>
            <button onClick={() => handelVisitedFlags(country.flags.png)} className="btn bg-gray-400 p-2 rounded-sm">Add flag</button>
        </div>
    );
};

export default Country;