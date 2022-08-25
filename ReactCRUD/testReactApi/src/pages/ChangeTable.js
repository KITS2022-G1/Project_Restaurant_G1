import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ResTableServices from '../services/ResTableService';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ChangeTable = () => {

    const params = useParams();
    const [table, setTable] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        ResTableServices.getResTablesById(params.id).then((response) => {
            setTable(response.data);
        })
    }, []);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let data = { ...table };
        data[name] = value;
        setTable(data);
      };

      const updateTable = () => {
        // EmpServices.updateBranch(params.branchId,branch);
        ResTableServices.updateResTables(params.id, table).then(res => {
          console.log("update success!");
          navigate(-1);
        });
      }


    return (
        <>
            <div class='container'>
                    <div>
                        <section style={{ paddingTop: "7rem", }}></section>
                        <div class='border'>
                            <h1 class="text-center">Thông tin bàn</h1>

                            <form>

                                <div className='form-group'>
                                    <section style={{ paddingTop: "2rem", }}></section>
                                    <p placeholder='ID Table' name='idTable' className='form-control' > {params.id}
                                    </p>
                                </div>

                                <div className='form-group'>
                                    <section style={{ paddingTop: "2rem", }}></section>
                                    <p placeholder='NameTable:' name='NameTable' className='form-control'> {table.tableName}
                                    </p>
                                </div>
                                <section style={{ paddingTop: "2rem", }}></section>
                                <p placeholder=' TableCapacity:' name='TableCapacity' className='form-control'> {table.restableCapacity}
                                </p>

                                <div className='form-group'>
                                    <td>
                                        <select
                                            name="restableStatus"
                                            value={table.restableStatus}
                                            onChange={(e) => handleChange(e)}
                                            className='rounded-3'
                                        >
                                            <option value={true}>
                                                <span> Có sẵn </span>
                                            </option>

                                            <option value={false}>
                                                <span> Đã đặt </span>
                                            </option>
                                        </select>
                                    </td>
                                </div>

                                <div className='text-center'>
                                    <button className='btn btn-info' onClick={()=> updateTable()}> Save </button> <span> </span>
                                    <button className='btn btn-secondary'><Link to={'/cashier'} className='nav-link'> Back</Link> </button>
                                </div>

                                <section style={{ paddingTop: "2rem", }}></section>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    );
};
export default ChangeTable;