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
  FormText,
} from "reactstrap";

import { Image } from 'react-bootstrap';

// import SelectSearch from 'react-select-search';
import classnames from "classnames";
import * as d3 from "d3";

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

import graphics from "../img/5.png"
import logoImage from "../img/output-onlinepngtools.png"

import tsv_data from "../vars/geneNames.txt"
import { stringify } from "postcss";

const axios = require('axios').default;

const geneNamesDef = ["tete", "ded", "dedaa", "dsfrteg", "ddsadte"]
const geneIds = [3,4,1,24,455,2221,23]



export default function ResultsPage() {
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

    
    // window.open("http://shrna.itnap.ru:3000/results", "_blank");
    window.open("http://shrna.itnap.ru:3000/results", "_blank");

    // this.props.history.push("/results/")
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
                {/* <Col className="offset-lg-0 offset-md-3" lg="5" md="6"> */}
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
                      <CardTitle tag="h5">Результаты</CardTitle>

                    </CardHeader>
                    <CardBody>
                    <Row>
                      <Col>
                      <div style={{ paddingBottom:30 }}>
                        <img src={graphics} alt="Logo" />
                      </div>

                      <a href='table.csv' download>
                      <Button className="btn-round" color="primary" size="lg">
                        Скачать .csv
                      </Button> 
                      </a>
                      </Col>
                      <Col>
                      <div style={{ paddingBottom:30 }}>
                        <h4>
                        Красным цветом обозначены участки синусовой тахикардии (формы наджелудочковой тахиаритмии) —  наиболее частой сердечной аномалии, встречающаяся у больных COVID-19.
                        </h4>
                        <h4>
                        <b>Количество аномалий:</b> 4 (среднее) <br/>
                        <b>Критичность аномалий:</b> 76% (высокая) <br/>
                        <b>HRV Score:</b> 74 (хороший) <br/>
                        <b>Анаэробный порог:</b> 65% <br/>
                        <b>Точность предсказания:</b> 86% <br/>
                        </h4>
                        <h4>
                        Показатели пациента критические. Советуем как можно скорее обратиться к врачу. Данные несут лишь ознакомительный характер. 
                        </h4>
                      </div>

                      </Col>
                    </Row>



                    </CardBody>
                  </Card>
                {/* </Col> */}
                {/* <Col className="offset-lg-0 offset-md-3" lg="5" md="6"> */}

                  {/* <Image src={logoImage} style={{blockSize:"250px", transform: "rotate(-40deg)",
                    float: "right", zIndex:"10", paddingRight:"40px"}}/>
                  <h1 style={{color: "white", fontSize:"80px", fontWeight:"bolder", textAlign:"right"}}>
                    Unona</h1>
                  <h3 style={{textAlign:"right", fontSize:"25px"}}>Детектор ковидных <br/>аномалий в ритме сердца</h3> */}

                {/* </Col> */}
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
