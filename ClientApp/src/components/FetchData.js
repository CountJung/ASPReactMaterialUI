import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { Title } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function replacer(key, value) {
    if (typeof value === "string") {
        return undefined;
    }
    return value;
}

export function FetchData() {
    const [loading, setLoading] = useState(true);
    const [forecasts, setForecasts] = useState([]);
    const classes = useStyles();
    //const currentForecasts = [];

    const initWeatherDatas = async () => {
        const response = await fetch('weatherforecast');
        const data = await response.json();

        setForecasts(data);
        setLoading(false);
    };

    useEffect(() => { initWeatherDatas() }, {});

    const resetForeCastsData = () => {
        setForecasts([]);
        renderForecastsTable(forecasts);
    }

    var weatherString = { TemperatureC:23, Summary: '매우큰삽질',};
    //var testString = { a: 'abc', b: 'cde' };

    const addForeCastData = async () => {
        //axios.post('https://localhost:7087/', { date: sampleForecast.date, temperatureC: sampleForecast.temperatureC, temperatureF: sampleForecast.temperatureF, summary: sampleForecast.summary })
        //    .then(json => {
        //        if (json.data.Status == 'Sucess') {
        //            console.log(json.data.Status);
        //        }
        //        else {
        //            console.log(json.data.Status);
        //        }
        //    })

        //var data = new FormData();
        //data.append("testString", JSON.stringify(PL));
        //data.append("testString", JSON.stringify(testString));

        //const jsonString = JSON.stringify("{a: '123', b: '234'}"); //"{a:'1', b:'2'}"; 
        //var testJsonStr =  JSON.stringify(testString) ;
        //testJsonStr = testJsonStr.replace(/"([^"]+)":/g, '$1:');
        //testJsonStr = testJsonStr.replace(/"/g, '\''); //Remove All qoutes and add quote last??
        //testJsonStr = "\"" + testJsonStr + "\"";

        var weatherDataStr = JSON.stringify(weatherString);
        weatherDataStr = weatherDataStr.replace(/"([^"]+)":/g, '$1:');
        weatherDataStr = "\"" + weatherDataStr.replace(/"/g, '\'') + "\"";

        try {
            const response = await fetch('weatherforecast/data', {
                method: 'POST',
                headers: { 'Accept': 'application/json; charset=utf-8', 'Content-Type': 'application/json', },
                body: weatherDataStr 
            }).then(resp => resp.json()
            ).then(res => {
                if (res) {
                    console.log(res);

                    setForecasts(res);
                    renderForecastsTable(forecasts);
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    const renderForecastsTable = (forecastsData) => {
        return (
            <TableContainer component={Paper}>
                <Table aria-labelledby="tabelLabel">
                    <TableHead style={{ backgroundColor:'darkgreen' }}>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Temp. (C)</TableCell>
                            <TableCell>Temp. (F)</TableCell>
                            <TableCell>Summary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {forecasts.map(forecast =>
                            <TableRow key={forecast.date}>
                                <TableCell >{forecast.date}</TableCell >
                                <TableCell align="left">{forecast.temperatureC}</TableCell >
                                <TableCell align="left">{forecast.temperatureF}</TableCell >
                                <TableCell align="left">{forecast.summary}</TableCell >
                            </TableRow >
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    const contents = loading ? <p><em>Loading...</em></p> : renderForecastsTable(forecasts);

    return (
      <div>
            <h1 id="tabelLabel" >Weather forecast</h1>
            <h2 style={{ color:'red' }}> Warning : This is Random Data!! </h2>
            <p>This component demonstrates fetching data from the server.</p>
            <div className={classes.root}>
                <Button variant="contained" onClick={initWeatherDatas}> Initialize </Button>
                <Button variant="contained" color="primary" onClick={addForeCastData}>
                    ADD 1 Sample Data
                </Button>
                <Button variant="contained" color="secondary" onClick={resetForeCastsData}>
                    Reset Data
                </Button>
                <Button variant="contained" disabled>
                    Reserved
                </Button>
                <Button variant="contained" color="primary" href="https://localhost:7087/swagger/"> 
                    Swagger
                </Button>
            </div>
        {contents}
      </div>
    );
}



//var PL = { A: 1, B: 2 };

//export class FetchData extends Component {
//    static displayName = FetchData.name;
//    //static classes = useStyles();

//    constructor(props) {
//        super(props);
//        this.state = { forecasts: [], loading: true };
//    }
    
//  componentDidMount() {
//    this.populateWeatherData();
//    }

//     addForeCastData() {
//        const data = new FormData();
//        data.append("test", JSON.stringify(PL));

//        try {
//            const response = fetch('weatherforecast/test', {
//                method: 'POST',
//                headers: { 'Content-Type': 'application/json' },
//                body: { "testString": data }
//            }).then(resp => resp.json()).then(res => {
//                if (res) {
//                    console.log(res);
//                }
//            });
//        }
//        catch (err) {
//            console.log(err);
//        }
//    }

//    static renderForecastsTable(forecasts) {
//        return (
//            <TableContainer component={Paper}>
//                <Table aria-labelledby="tabelLabel">
//                    <TableHead style={{ backgroundColor:'darkgreen' }}>
//                        <TableRow>
//                            <TableCell>Date</TableCell>
//                            <TableCell>Temp. (C)</TableCell>
//                            <TableCell>Temp. (F)</TableCell>
//                            <TableCell>Summary</TableCell>
//                        </TableRow>
//                    </TableHead>
//                    <TableBody>
//                        {forecasts.map(forecast =>
//                            <TableRow key={forecast.date}>
//                                <TableCell >{forecast.date}</TableCell >
//                                <TableCell align="left">{forecast.temperatureC}</TableCell >
//                                <TableCell align="left">{forecast.temperatureF}</TableCell >
//                                <TableCell align="left">{forecast.summary}</TableCell >
//                            </TableRow >
//                        )}
//                    </TableBody>
//                </Table>
//            </TableContainer>
//        );
//    }

//  render() {
//    let contents = this.state.loading
//      ? <p><em>Loading...</em></p>
//          : FetchData.renderForecastsTable(this.state.forecasts);
//    return (
//      <div>
//            <h1 id="tabelLabel" >Weather forecast</h1>
//            <h2 style={{ color:'red' }}> Warning : This is Random Data!! </h2>
//            <p>This component demonstrates fetching data from the server.</p>
//            <Box marginLeft={1}> <Button variant="contained" onClick={this.populateWeatherData}>InitDatas</Button>
//                <Button variant="contained" color="primary" onClick={this.addForeCastData}>
//                    Add Test
//                </Button>
//            </Box>
            
//            <Button variant="contained" color="secondary">
//                Secondary
//            </Button>
//            <Button variant="contained" disabled>
//                Disabled
//            </Button>
//            <Button variant="contained" color="primary" href="#contained-buttons">
//                Link
//            </Button>
//        {contents}
//      </div>
//    );
//  }

//  async populateWeatherData() {
//    const response = await fetch('weatherforecast');
//    const data = await response.json();
//    this.setState({ forecasts: data, loading: false });
//  }
//}
