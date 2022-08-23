import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Table() {
    return (
        <>
            <section style={{ paddingTop: "7rem", }}></section>
            <div class='container-fluid'>
                <div class="row">
                    <div class="col-8">
                        <h1 class="text-center">THỰC ĐƠN HÔM NAY</h1>
                    </div>
                    <div class="col-4 border">
                        <div class='border'>
                            <p>đây là chỗ để hiện những món đã chọn</p>
                        </div>
                        <section style={{ paddingTop: "5rem", }}></section>
                        <div>
                            <button >Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Table;