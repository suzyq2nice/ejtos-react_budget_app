import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { TiMinus } from 'react-icons/ti/index.js';
import { TiPlus } from 'react-icons/ti/index.js';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{currency}{props.cost}</td>
               <td align="center"><TiPlus onClick={event=> increaseAllocation(props.name)}></TiPlus></td>
               <td align="center"><TiMinus onClick={event=> decreaseAllocation(props.name)}></TiMinus></td>
	       <td align="center"><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
			
        </tr>
    );
};

export default ExpenseItem;
