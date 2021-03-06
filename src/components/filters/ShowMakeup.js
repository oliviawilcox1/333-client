import React, { useState, useEffect } from 'react';
import { getAllMakeup } from '../../api/products';

const ShowMakeup = (props) => {
    const [makeup, setMakeup] = useState(null)

    useEffect(()=> {
        getAllMakeup()
            .then(res => {
                console.log('this is the res', res)
                setMakeup(res.data.makeup)
            })
            .catch(error => console.log(error))
        },[])

        if (!makeup) {
            return <h3>loading...</h3>
        } else if (makeup.length === 0) {
            return  <>
            <div className="container">
                <h2 className="filter">All Makeup </h2>
            </div>

            <div className="wrap">
                <div className="stack">
                    <h3 className='filterby'>Filter By</h3>
                    <a className="links" href="/"> <span> Eye Products </span> </a><br/>
                    <a className="links" href="/"> <span> Face Products </span> </a><br/> 
                    <a className="links" href="/"> <span> Cheek Products </span> </a><br/>
                    <a className="links" href="/"> <span> Lip Products </span> </a><br/>
                </div>

                <div className="index">
                    <h2>We are working on getting you some great recommendations! </h2>
                </div>
            </div>
           </>
        }


        let makeupCards
        if (makeup.length > 0) {
            makeupCards = makeup.map(makeups => (
                <div key={makeups.id} >
                    <a href={`/products/${makeups._id}`}  className = "links"> 
                        <img src= {`${makeups.image}`}  className="imgthumbnail"/> <h5 id="brandname">{makeups.brand}</h5><span className="productname">{makeups.name}</span></a> 
                </div>
            ))
        }


    return (
       <>
       <div className="container">
            <h2 className="filter">All Makeup </h2>
        </div>

        <div className="wrap">
            <div className="stack">
                <h3 className='filterby'>Filter By</h3>
                    <a className="links" href="/"> <span> Eye Products </span> </a><br/>
                    <a className="links" href="/"> <span> Face Products </span> </a><br/> 
                    <a className="links" href="/"> <span> Cheek Products </span> </a><br/>
                    <a className="links" href="/"> <span> Lip Products </span> </a><br/>
            </div>

            <div className='cards'>
                <div className="index">
                    {makeupCards}
                </div>
            </div>
        </div>
       </>
)};
export default ShowMakeup;