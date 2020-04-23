import React from 'react';
import Card from './Card';

const Cardlist = ({robots})=>{

    const CardArray = robots.map((user,i)=>{
        return <Card key ={i} id={robots[i].id} username={robots[i].username} email={robots[i].email}/>;
    })
    return(
        <div>
            {CardArray}
        </div>
    );
}

export default Cardlist;