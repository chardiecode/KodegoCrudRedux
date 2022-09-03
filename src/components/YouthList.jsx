import React from "react";

import { Image, NavDropdown } from "react-bootstrap";
import ActionModal from "./ActionModal";
import * as youthAction from "../redux/actions/actionYouth";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export default function List({ data }) {
  const [modalShow, setModalShow] = React.useState(false);
  const { removeYouth } = bindActionCreators(youthAction, useDispatch());
  return (
    <>
      <tr>
        <td>
          <Image
            src={data.picture.small}
            alt="profile"
            roundedCircle={true}
            height="30px"
            width="30px"
          />
        </td>
        <td>{data.age}</td>
        <td>{data.firstName}</td>
        <td>{data.middleName}</td>
        <td>{data.lastName}</td>
        <td>{data.address}</td>
        <td>{data.educationalAttainment}</td>
        <td>
          {data.skills?.map((skill, index) => (
            <span key={index}>{`${skill.name}, `}</span>
          ))}
        </td>
        <td>
          <NavDropdown title="" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1" onClick={() => setModalShow(true)}>
              Edit
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="4.2"
              onClick={() => removeYouth(data.id)}
            >
              Delete
            </NavDropdown.Item>
          </NavDropdown>
        </td>
      </tr>
      <ActionModal
        action="editYouth"
        heading={`${data.firstName} ${data.lastName}`}
        data={data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
