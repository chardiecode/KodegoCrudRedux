import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Button, Table } from "react-bootstrap";
import ActionModal from "./ActionModal";
import YouthList from "./YouthList";

function CrudApp() {
  const [modalShow, setModalShow] = useState(false);
  const youthLists = useSelector((state) => state.youthLists);
  const inititalData = {
    firstName: "",
    lastName: "",
    middleName: "",
  };
  return (
    <>
      <h1 className="header">Youth lists Crud Application</h1>
      <Button onClick={() => setModalShow(true)}>Add new record</Button>
      <ActionModal
        action="addYouth"
        heading={`Add new record`}
        data={inititalData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Table striped>
        <thead>
          <tr>
            <th></th>
            <th>Age</th>
            <th>First Name</th>
            <th>Middle name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Educational Attainment</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {youthLists?.map((data) => (
            <YouthList key={data.id} data={data} />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default React.memo(CrudApp);
