
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
interface ListGruopProps {
    item: string[];
    heading: string;
}
function ListGroup({cities,heading}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);



    const getMessege = () => {
        return cities.length === 0 ? <p> No cities found</p> : null
    }
    const handleClick = (event: MouseEvent) => console.log(event);



    return (
        <Fragment>
            <h1> {heading}</h1>
            {getMessege}
            <ul className='list-group'>
                {cities.map((city, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={city}
                        onClick={() => { setSelectedIndex(index); }}
                    >
                        {city}</li>
                ))}
            </ul>
        </Fragment>
    )
}
export default ListGroup;