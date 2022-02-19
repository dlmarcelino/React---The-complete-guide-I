/**
 * Testing wrapper component
 *
 * Wrapper components are components that surround
 * unknown components and provide a default structure
 * to display the child components. This pattern is useful
 * for creating user interface (UI) elements that are used
 * repeatedly throughout a design, like modals, template pages,
 * and information tiles.
 */

import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
