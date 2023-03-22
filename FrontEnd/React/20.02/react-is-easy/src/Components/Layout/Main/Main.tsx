import "./Main.css";
import StudentData from "./StudentData/StudentData";

function Main(): JSX.Element {
  const example = [
    { id: 1, name: "Matan", city: "Holon", age: 22 },
    { id: 2, name: "Maya B.", city: "Holon", age: 19 },
    { id: 3, name: "Netanl", city: "Givat Shmuel", age: 24 },
    { id: 4, name: "Ran", city: "Tel Baruch", age: 23 },
    { id: 5, name: "Nadav", city: "TLV", age: 30 },
    { id: 6, name: "Arik", city: "Savyon", age: 24 },
    { id: 7, name: "Adam", city: "Ramat Aviv G", age: 18 },
  ];

  //   const isFriday = false;
  return (
    <div className="Main">
      <h1>Hello Class 89</h1>
      <h1>
        {example.map((student) => (
          <>
            <StudentData
              key={student.id}
              name={student.name}
              city={student.city}
              age={student.age}
            />
          </>
        ))}
      </h1>
      {/* <div className="Box">Today Special: Pasta and Meatball</div> */}
      {/* {isFriday && <h1>10% Discount</h1>} */}
    </div>
  );
}

export default Main;
/* <div key={student.id} className="Box">
{student.name} <br />
<h2>{student.city}</h2>
<h3>{student.age}</h3>
</div>*/
