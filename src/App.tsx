// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
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
        "Las Vegas"
    ];
    return <div>
        <ListGroup cities={cities} heading="Cities" />
    </div>
}
export default App;