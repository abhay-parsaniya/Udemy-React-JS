import './Card.css';

const Card = (props) => {

    // This is Card Wrapper Which Contain All Classes of Children Components

    const classes = "card " + props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

export default Card;