import React, { Component } from 'react'
import FundsTable from './TableGenerator/FundsTable'
import data from './Data/FundsData'

class Funds extends Component {
    render() {
        return (
            <table >
                <FundsTable dataTable = {data[0]}/>        
            </table>
        )
    }
}

export default Funds
