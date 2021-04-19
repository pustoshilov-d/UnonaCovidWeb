/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Table } from 'rsuite';


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  CustomInput,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import LargeTable from "../components/elements/LargeTable.js"

const json_temp = [
  {
    "id": 1,
    "Gene": 2,
    "Organism": "Human",
    "Where": "somewhere",
    "siRNA": " ATTTAATATAT"
  },
  {
    "id": 2,
    "Gene": 4535,
    "Organism": "Frog",
    "Where": "somewhere",
    "siRNA": " ATGGGGCGTTGC"
  },
  {
    "id": 3,
    "Gene": 2,
    "Organism": "Human",
    "Where": "somewhere",
    "siRNA": " ATTTAATATAT"
  },
  {
    "id": 4,
    "Gene": 4535,
    "Organism": "Frog",
    "Where": "somewhere",
    "siRNA": " ATGGGGCGTTGC"
  }
]

const data =[{ id: 1, name: 'foobar', email: 'foobar@xxx.com' }];

export default function ResultsPage() {

  return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />

        <div style={{padding:"50px 50px 50px 50px"}}>
          <LargeTable data={json_temp}/>
          <Button
              style={{padding:"10px 10px 10px 10px"}}
              className="nav-link d-none d-lg-block"
              color="default"
          >
            <i className="tim-icons icon-cloud-download-93" /> Download
          </Button>
        </div>
      </div>
  );
}
