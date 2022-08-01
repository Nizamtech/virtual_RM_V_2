import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import EditCardCommissionList from "../CardCommissionList/EditCardCommissionList";
import EditLoanComission from "../EditLoanComission/EditLoanComission";
import EditLoanCommissionNew from "../LoanCommission/LoanCommissionNew/EditLoanCommissionNew";

// product =1 cardType

const SpecialCommissionEdit = () => {
  const { id } = useParams();
  const [specialCommission, setSpecialCommission] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/api/agent/commission/${id}/`)
      .then((res) => {
        setSpecialCommission(res.data);
      });
  }, [id]);

  return (
    <div className="  h-screen m- p-3">
      {specialCommission?.product === 1 && (
        <div>
          <EditCardCommissionList
            status={true}
            specialData={specialCommission}
          />
        </div>
      )}

      {specialCommission?.product === 2 && (
        <div>
          <EditLoanCommissionNew
            status={true}
            specialData={specialCommission}
          />
        </div>
      )}
    </div>
  );
};

export default SpecialCommissionEdit;
