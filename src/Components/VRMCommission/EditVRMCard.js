import React, { useEffect, useState } from "react";
import Select from "react-select";
function EditVRMCard({
  institute,
  setInstitute,
  inputList,
  setInputList,
  error,
}) {
  const [data, setData] = useState([]);

  const [cardTypeData, setCardTypeData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/benefit/card_type/`)
      .then((response) => response.json())
      .then((data) => setCardTypeData(data?.results));
  }, []);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { product_type: "", from: 0, commission: 0, to: 0 },
    ]);
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

  let options = data?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });

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
          <Select
            required
            name="profession"
            onChange={setInstitute}
            options={options}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
          {error && (
            <label className=" text-red-400 my-1">Select Institute</label>
          )}
        </div>
        <div className=" grid grid-cols-5 bg-black text-white py-2 px-3 font-bold uppercase">
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
        {inputList.map((x, i) => {
          return (
            <div className=" grid  grid-cols-1 md:grid-cols-5 bg-white mb-2">
              <select
                className="border border-gray-300 mr-2 my-2 rounded"
                onChange={(e) => handleInputChange(e, i)}
                name="product_type"
                id="cars"
              >
                <option value="">Select </option>
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
              <div className="btn-box flex flex-col items-center justify-center">
                {i !== 0 && (
                  <button
                    className=" bg-[#fc544b] border-[#fc544b] shadow-red-400  hover:shadow-2xl rounded w-16 py-2 text-white "
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
                {i === 0 && (
                  <button
                    onClick={handleAddClick}
                    className=" bg-green-400 deleteBtn hover:shadow-2xl rounded  "
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EditVRMCard;
