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

import { Link } from "react-router-dom";
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

import { Image } from 'react-bootstrap';

// import SelectSearch from 'react-select-search';
import classnames from "classnames";
import * as d3 from "d3";

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'


import logoImage from "../img/output-onlinepngtools.png"

import tsv_data from "../vars/geneNames.txt"
import { stringify } from "postcss";

const axios = require('axios').default;

const geneNamesDef = ["tete", "ded", "dedaa", "dsfrteg", "ddsadte"]
const geneIds = [3,4,1,24,455,2221,23]



export default function MainPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);


  const [geneIds, setGeneIds] = React.useState([]);
  const [geneNames, setGeneNames] = React.useState([]);
  const [geneEnsIds, setGeneEnsIds] = React.useState([]);

  const [inputGeneType, setInputGeneType] = React.useState(true);
  const [curGeneName, setCurGeneName] = React.useState("0");

  const arrayColumn = (arr, n) => arr.map(x => x[n]);
  const arrayRemove = (arr, value) => {

    return arr.filter(function(ele){
      return ele !== value;
    });
  }

  React.useEffect(() => {
  
    console.log(1)
    let link = "http://localhost:8000/shrna_model/rest/gene/"
    console.log(2)
    let result = axios({
        url: link,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
        data: "JSON.stringify({id: id}) 1"
    })
    .then(res => {
      let data =  res.data
      console.log('!!!', data)
      console.log(arrayRemove(arrayColumn(data, "name").slice(10).sort(), ""))

      setGeneIds(
          // arrayRemove(arrayColumn(data, "ncbi_id").slice(10).sort(), "")
        arrayRemove(arrayColumn(data, "ncbi_id").sort(), "")
      )

      setGeneNames(
        arrayRemove(arrayColumn(data, "name").sort(), "")
      )

      setGeneEnsIds (
        arrayRemove(arrayColumn(data, "ensembl_id").sort(), "")
      )
    })

    
    // console.log(3)
    //  d3.tsv(tsv_data)
    //     .then(data => {
    //       console.log(data)
    //       setGeneIds(
    //           arrayRemove(arrayColumn(data, "NCBI gene ID").slice(10).sort(), "")
    //       )
    //       setGeneNames(
    //           arrayRemove(arrayColumn(data, "Approved symbol").slice(10).sort(), "")
    //       )
    //       console.log(geneIds)
    //       console.log(arrayRemove(arrayColumn(data, "NCBI gene ID").slice(10).sort(), ""))
    // })



    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  },[]);

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(inputGeneType)
    console.log(curGeneName)
    if (inputGeneType == true){
      console.log(geneIds[curGeneName])}
    else {
      console.log(geneNames[curGeneName])
    }



    // переход на     to="results" tag={Link}

  }

  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content" style={{marginTop:"8%"}}>
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register" style={{marginTop:"50px"}}>
                    <CardHeader>
                      <CardTitle tag="h5">Choose your gene</CardTitle>

                    </CardHeader>
                    <CardBody>
                      <Form className="form" onSubmit={e => { handleSubmit(e) }}>
                        <InputGroup style={{paddingBottom:20, paddingLeft: 7}}>
                        <span style={{paddingRight:17, paddingTop:9}}>
                          Name
                        </span>
                          <CustomInput type="switch" id="switch" 
                            checked={inputGeneType}
                            onChange={e => setInputGeneType(e.target.checked)}
            
                          />
                        <span style={{paddingTop:9}}>
                          NCBI id
                        </span>
                        </InputGroup>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": fullNameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Name / id"
                            type="text"
                            onFocus={(e) => setFullNameFocus(true)}
                            onBlur={(e) => setFullNameFocus(false)}
                          />
                        </InputGroup>

                          <InputGroup>

                            <Input type="select" name="select" id="exampleSelect1" multiple 
                              value={curGeneName}
                              onChange={e => setCurGeneName(e.target.value)}
                            >
                            
                            {inputGeneType
                              ? geneIds.map((value, index) => <option value={index} >{value}</option>)
                              : geneNames.map((value, index) => <option value={index} >{value}</option>)
                            }
                            </Input>

                          </InputGroup>


                        {/*<SelectSearch*/}
                        {/*    // options={geneNames}*/}
                        {/*    search*/}
                        {/*    placeholder="Gene name"*/}
                        {/*>*/}
                        {/*{geneNames.map((value, index) => <option value={index} >{value}</option>)}*/}
                        {/*</SelectSearch> *!/*/}
                        <Button className="btn-round" color="primary" size="lg" type='submit'>
                          Find siRNA 
                        </Button> 
                      </Form>

                    </CardBody>
                  </Card>
                </Col>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">

                  <Image src={logoImage} style={{blockSize:"250px", transform: "rotate(-40deg)",
                    float: "right", zIndex:"10", paddingRight:"40px"}}/>
                  <h1 style={{color: "white", fontSize:"80px", fontWeight:"bolder", textAlign:"right"}}>
                    Unona</h1>
                  <h3 style={{textAlign:"right", fontSize:"25px"}}>Desing siRNA service</h3>

                </Col>
              </Row>
              {/*<div className="register-bg" />*/}
              {/*<div*/}
              {/*  className="square square-1"*/}
              {/*  id="square1"*/}
              {/*  style={{ transform: squares1to6 }}*/}
              {/*/>*/}
              {/*<div*/}
              {/*  className="square square-2"*/}
              {/*  id="square2"*/}
              {/*  style={{ transform: squares1to6 }}*/}
              {/*/>*/}
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              {/*<div*/}
              {/*  className="square square-5"*/}
              {/*  id="square5"*/}
              {/*  style={{ transform: squares1to6 }}*/}
              {/*/>*/}
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
