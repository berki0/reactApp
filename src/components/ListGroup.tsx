import { Fragment } from "react/jsx-runtime";

function ListGroup() {

    let cities = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
        "Austin",
        "Jacksonville",
        "San Francisco",
        "Indianapolis",
        "Columbus",
        "Fort Worth",
        "Charlotte",
        "Seattle",
        "Denver",
        "Washington",
        "Boston",
        "El Paso",
        "Nashville",
        "Detroit",
        "Oklahoma City",
        "Portland",
        "Las Vegas",
        "Memphis",
        "Louisville",
        "Baltimore",
        "Milwaukee",
        "Albuquerque",
        "Tucson",
        "Fresno",
        "Sacramento",
        "Kansas City",
        "Long Beach",
        "Mesa",
        "Atlanta",
        "Colorado Springs",
        "Virginia Beach",
        "Raleigh",
        "Omaha",
        "Miami",
        "Oakland",
        "Minneapolis",
        "Tulsa",
        "Wichita",
        "New Orleans",
    ];
    //  cities = [];

    const getMessege = () => {
        return cities.length === 0 ? <p> No cities found</p> : null
    }

    return (
        <Fragment>
            <h1> List Group</h1>
            {getMessege}
            <ul className="list-group">
                {cities.map((city) => (
                    <li className="list-group-item" key={city} onClick={}>   {city}</li>
                ))}
            </ul>
        </Fragment>
    )
}
export default ListGroup;