import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
function EditCardCommission({
  setInstitute,
  error,
  cardType,
  setCardType,
  cardCommissionData,
  setCardCommissionData,
}) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [cardTypeData, setCardTypeData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/benefit/card_type/")
      .then((response) => response.json())
      .then((data) => setCardTypeData(data?.results));
  }, []);

  // load Card Commission Data
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/card_commission/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCardCommissionData(data);
        setCardType(data?.card_type);
      });
  }, [id]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...cardType];
    cardType[index][name] = value;
    setCardType(list);
  };

  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((res) => {
        const rest = res.results;
        // const result = rest.filter((item) => item.is_partner === true);
        // console.log(result);
        setData(rest);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Institute Name
          </label>

          <select
            className="w-full my-2 border-gray-300 rounded"
            name="institite"
            onChange={(e) => setInstitute(e.target.value)}
          >
            <option
              defaultValue={cardCommissionData?.bank_name}
              value={cardCommissionData?.bank_name}
            >
              {cardCommissionData?.bank_name}
            </option>
            {data &&
              data.map((item) => (
                <option value={item?.name}>{item?.name}</option>
              ))}
          </select>

          {error && (
            <label className=" text-red-400 my-1">Select Institute</label>
          )}
        </div>
        <div className=" grid grid-cols-4 bg-black text-white py-2 px-3 font-bold uppercase">
          <div>
            <h1> Card Type</h1>
          </div>
          <div>
            <h1> From</h1>
          </div>
          <div>
            <h1> To</h1>
          </div>
          <div>
            <h1> Commission</h1>
          </div>
          <div></div>
        </div>
      </div>
      <div className=" bg-white px-2">
        {cardCommissionData &&
          cardCommissionData?.card_type?.map((x, i) => {
            return (
              <div className=" grid grid-cols-4 bg-white mb-2">
                <select
                  className="border border-gray-300 mr-2 my-2 rounded"
                  onChange={(e) => handleInputChange(e, i)}
                  name="card_type"
                  id="cars"
                >
                  <option defaultValue={x?.card_type} value={x?.card_type}>
                    {x?.card_type}
                  </option>
                  {cardTypeData &&
                    cardTypeData.map((item) => (
                      <option defaultValue={item?.name} value={item?.name}>
                        {item?.name}
                      </option>
                    ))}
                </select>

                <input
                  className="ml10 p-2 border border-gray-300 mr-2 my-2 rounded "
                  name="from"
                  placeholder="From"
                  value={x.from}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <input
                  className="ml10 p-2  border border-gray-300 mr-2 my-2 rounded"
                  name="to"
                  placeholder="To"
                  value={x.to}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <input
                  className="ml10 p-2  border border-gray-300 mr-2 my-2 rounded"
                  name="commission"
                  placeholder="Enter Commission"
                  value={x.commission}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default EditCardCommission;
