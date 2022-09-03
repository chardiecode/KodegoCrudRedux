import React, { useState } from "react";

import { Button, Modal, Form } from "react-bootstrap";
import * as youthAction from "../redux/actions/actionYouth";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export default function ActionModal(props) {
  const { firstName, lastName, middleName } = props.data;
  const { addYouth, updateYouth } = bindActionCreators(
    youthAction,
    useDispatch()
  );
  const [data, setdata] = useState({
    firstName,
    lastName,
    middleName,
  });

  const clearData = () => {
    setdata({ firstName: "", lastName: "", middleName: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.action === "addYouth") {
      addYouth({
        id: Math.floor(Math.random() * 10000),
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        age: 18,
        address: "Kapatagan, Lanao del Norte",
        skills: [
          { name: "Coding" },
          { name: "Drawing" },
          { name: "Photography" },
        ],
        educationalAttainment: "College Level",
        picture: {
          small:
            "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AE",
          medium:
            "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
          large:
            "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
        },
      });
      clearData();
    }
    if (props.action === "editYouth") {
      updateYouth({
        id: props.data.id,
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        age: 18,
        address: "Kapatagan, Lanao del Norte",
        skills: [
          { name: "Coding" },
          { name: "Drawing" },
          { name: "Photography" },
        ],
        educationalAttainment: "College Level",
        picture: {
          small:
            "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AE",
          medium:
            "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
          large:
            "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
        },
      });
      clearData();
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.action === "addYouth" ? "" : "Edit "}
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasiFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="first Name"
              value={data.firstName}
              onChange={(event) =>
                setdata({ ...data, firstName: event.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              value={data.lastName}
              onChange={(event) =>
                setdata({ ...data, lastName: event.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMiddleName">
            <Form.Label>Middle name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Middlename"
              value={data.middleName}
              onChange={(event) =>
                setdata({ ...data, middleName: event.target.value })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
