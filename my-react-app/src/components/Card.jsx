function Card(props) {
    
    return (
        <div className="cardcenter">
            <div className="card">
                {props.data.map((x) => (
                    <span style={{ paddingLeft: 5 }}>{x.title}</span>
                ))}
                <p> Category: {props.data[0].category}</p>
            </div>
        </div>
    );
}

export default Card;