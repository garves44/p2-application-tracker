import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Draggable from "../Draggable";
import Droppable from "../Droppable";

const Wrapper = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  padding: 8px;
  color: #555;
  background-color: white;
  border-radius: 3px;
`;

const droppableStyle = {
  backgroundColor: "#555",
  width: "250px",
  height: "400px",
  margin: "32px",
};

export default class DnD extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
  }

  render() {
    return (
      <Wrapper>
        <Droppable title="Need to Apply" id="apply" style={droppableStyle}>
          {this.props.jobs.length > 0 ? (
            this.props.jobs.map((job, index) => {
              return (
                <Draggable id={`item-${index}`} key={index}>
                  <Item>{job}</Item>
                </Draggable>
              );
            })
          ) : (
            <Draggable id="item-1">
              <Item>No Jobs</Item>
            </Draggable>
          )}
        </Droppable>
        <Droppable
          title="Waiting on Response"
          id="response"
          style={droppableStyle}
        ></Droppable>
        <Droppable
          title="Interview Scheduled"
          id="interview"
          style={droppableStyle}
        ></Droppable>
      </Wrapper>
    );
  }
}
