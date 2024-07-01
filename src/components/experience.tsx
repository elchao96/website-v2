import * as React from "react";
import { Card } from "react-bootstrap";

interface IExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}

const Experience = ({
  company,
  position,
  startDate,
  endDate,
  location,
  description,
}: IExperienceProps) => {
  return (
    <Card>
      <Card.Header>{company}</Card.Header>
      <Card.Body>
        <Card.Title>{position}</Card.Title>
        <Card.Text>
          <h3>
            {startDate} - {endDate} | {location}
          </h3>
          <ul>
            {description.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Experience;
