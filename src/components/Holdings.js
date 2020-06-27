import React, { Component } from 'react'
import data from './Data/HoldingsData'
import HoldingsTable from './TableGenerator/HoldingsTable'

class Holdings extends Component {
    render() {
        return (

            <table>
                <HoldingsTable dataTable = {data}/>  
                {/* make sure the data being entered as props is an array as in the sample response of the API */}
            </table>
        )
    }
}

export default Holdings
