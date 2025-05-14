import EventChild from './EventTestChild.component';

export default function EventTest() {

    const childToParent = () => {
        alert("This is an alert from the Child Component")
    }

    return (
        <div className="App">
            <div className="child">
                <EventChild childToParent={childToParent}/>
            </div>
        </div>
    );

}
