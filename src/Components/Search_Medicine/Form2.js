import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import NotFound from '../MedicineNotFound/NotFound';
import './Form.css'
import { Link } from 'react-router-dom';

function Form2() {
    const [medicine, setMedicine] = useState("");
    const [GenericMedicine, setMedicineData] = useState("");
    const [GenericShop, setGenericShops] = useState("");
    const [MedicineError, setError] = useState(false);
    const [AutoCompleteMedicine, setAutoCompleteMedicine] = useState([])
    const [SortedShops,setSortedShops]=useState();

    function inputChangeHandle(e) {
        const { name, value } = e.target;
        setMedicine(value);
        axios.get(`https://confused-clam-houndstooth.cyclic.app/Autocomplete?MediName=${value}`)
            .then((res) => {
                console.log(res.data);
                if ((res.data).length == 0) {

                    setError(true);
                    setMedicineData("No data");
                    //  MedicinsOptions=res.data;
                }
                var NameMedicine=(res.data).sort()
                setAutoCompleteMedicine(NameMedicine);
            })
            .catch((err) => console.log(err));

    }
    function Sort_shop() {
        const shops = {};
      

        for (let i = 0; i < 7; i++) {
          const shopName = GenericShop[`MedicalShop${i+1}`][`JanAushadhiKendra`];
          const stripCount = GenericMedicine[`CountAddress${i+1}`];
          shops[shopName] = stripCount;
        }
        console.log(shops);

        // const sortedShops = Object.entries(shops)
        //   .sort((a, b) => b[1] - a[1])
        //   .reduce((obj, [key, value]) => {
        //     obj[key] = value;
        //     return obj;
        //   }, {});
      
        // console.log(sortedShops);
        setSortedShops(shops);
      }
      
    const getData = async () => {
        // if (medicine.length == 0) {
        let value=(medicine.charAt(0).toUpperCase() + medicine.slice(1));
        setMedicine(value);
        axios.get(`https://confused-clam-houndstooth.cyclic.app/Get_Medicine?MediName=${medicine}`)
            .then((res) => {
                setMedicineData(res.data["Medicines"]);
                setGenericShops(res.data["Shops"]);
                setError(false);
                Sort_shop();
                

            })
            .catch((err) => {
                console.log(err.request.status);
                if (err.request.status == 400 && medicine.length != 0) {
                    setError(true);
                }
            });
    }
    useEffect(() => {
        getData();
    }, [medicine]);
    
    function HandleChangeMedicine(option){
        // e.preventDefault();
        // console.log(option);
        setMedicine(option);
    }

    
    if(medicine.length==0){
        AutoCompleteMedicine.length=0;
    }
    return (
        <div className="main_block">
            {GenericMedicine.length == 0 ? (<form className="container my-3">
                <div className="text-center">
                    <h1>Enter the Medicine Name</h1>
                    <h5>Search over 200 drugs & durg products on MedHub Online</h5>
                    {/* <p>Follow the simple steps below and get Generic Medicine and Price of Medicine</p> */}
                </div>
                {/* <label className="form-label">Name of Medicine:</label> */}
                <input type="text" name="name" id='mediName' className="form-control mt-4 border-dark border-2 rounded-3" autocomplete="off" placeholder="Enter Medicine Name" value={medicine} onChange={inputChangeHandle} />


                {AutoCompleteMedicine.length!=0?<h5 className='mt-4 text-center text-capitalize'>Total {AutoCompleteMedicine.length} Medicine Available Based on your Search</h5>:""}
                <ul className='mt-3 row'>
                    {AutoCompleteMedicine.map((option) => (
                            <li key={option} className="col-sm-3 bg-dark rounded-1 text-white m-3 p-2 text-center" onClick={()=>HandleChangeMedicine(option)}>{option}</li>
                    ))}
                </ul>

                {/* <button onClick={setMedicine("Motrin")}>Motrin</button>
                <button>Motrin</button>
                <button>Motrin</button>
                <button>Motrin</button> */}

                {/* <input type="submit" onSubmit={SubmitHandle} ></input> */}
            </form>) : ((MedicineError) ? (<NotFound></NotFound>) : (<div>
                <h2 className='bg-warning p-3 text-center mt-4 w-75 m-auto rounded-4'>
                    Available Generic Medicine : {GenericMedicine["GenericName"]} - Rs.{GenericMedicine["Gprice"]} / Tablet</h2>
                    {/* {SortedShops} */}
                    {/* {GenericMedicine} */}
                <div className="table-responsive p-5">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className='text-center'>Medical Store (with this Generic Medicines)</th>
                                <th className='text-center'>Number of Strips</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{GenericShop["MedicalShop1"]["JanAushadhiKendra"]}</td>
                                <td>{GenericMedicine["CountAddress1"]}</td>
                            </tr>
                            <tr>
                                <td>{GenericShop["MedicalShop2"]["JanAushadhiKendra"]}</td>
                                <td>{GenericMedicine["CountAddress2"]}</td>
                            </tr>
                            <tr>
                                <td>{GenericShop["MedicalShop3"]["JanAushadhiKendra"]}</td>
                                <td>{GenericMedicine["CountAddress3"]}</td>
                            </tr>
                            <tr>
                                <td>{GenericShop["MedicalShop4"]["JanAushadhiKendra"]}</td>
                                <td>{GenericMedicine["CountAddress4"]}</td>
                            </tr>
                            <tr>
                                <td>{GenericShop["MedicalShop5"]["JanAushadhiKendra"]}</td>
                                <td>{GenericMedicine["CountAddress5"]}</td>
                            </tr>
                            <tr>
                                <td>{GenericShop["MedicalShop6"]["JanAushadhiKendra"]}</td>
                                <td>{GenericMedicine["CountAddress6"]}</td>
                            </tr>
                            <tr>
                                <td>{GenericShop["MedicalShop7"]["JanAushadhiKendra"]}</td>
                                <td>{GenericMedicine["CountAddress7"]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3 className='text-center'>Other Alternative Brand Medicines</h3>
                <table className="table table-striped w-50 m-auto mt-4">
                    <thead>
                        <tr>
                            <th className='text-center'>Brand Name</th>
                            <th className='text-center'>Price (Per. Tablet)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{GenericMedicine["BrandName1"]}</td>
                            <td>{GenericMedicine["Bprice1"]}</td>
                        </tr>
                        <tr>
                            <td>{GenericMedicine["BrandName2"]}</td>
                            <td>{GenericMedicine["Bprice2"]}</td>
                        </tr>
                        <tr>
                            <td>{GenericMedicine["BrandName3"]}</td>
                            <td>{GenericMedicine["Bprice3"]}</td>
                        </tr>
                    </tbody>
                </table>
                <Link className="nav-link back my-2 mb-5" to="/Get_Medicine">Go Back</Link>

            </div>
            ))
            }
        </div>


        // </div>
    )
}
export default Form2
