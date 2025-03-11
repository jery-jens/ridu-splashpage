import * as React from "react";

interface WaitinglistEmailProps {
  email: string;
}

export default function WaitinglistEmail(props: WaitinglistEmailProps) {
  return (
    <div>
      <h1>Nieuwe inschrijving op de waitinglist</h1>
      <p>Er is een nieuwe inschrijving op de waitinglist gedaan.</p>
      <p>Emailadres: {props.email}</p>
    </div>
  );
}
