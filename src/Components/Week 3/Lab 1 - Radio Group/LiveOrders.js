import React from "react";

const Row = ({ children, spacing }) => {
  const childStyle = {marginLeft: `${spacing}px`};

  return (


    <div>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  )
}

const LiveOrders = () =>{
  return (
    <div>
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>305</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  )
}

export default LiveOrders;