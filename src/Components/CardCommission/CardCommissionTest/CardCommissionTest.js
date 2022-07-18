import React, { useEffect, useState } from "react";
function CardCommissionTest({ inputList, setInputList }) {
  // const [data, setData] = useState([]);

  const [cardTypeData, setCardTypeData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/benefit/card_type/")
      .then((response) => response.json())
      .then((data) => setCardTypeData(data?.results));
  }, []);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    console.log(name, value);
    const list = [...inputList];
    if (name !== "product_type") {
      list[index][name] = parseInt(value);
    } else {
      list[index][name] = value;
    }
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

  return (
    <div>
      <div>
        <div className=" hidden md:grid grid-cols-5 bg-black text-white py-2 px-3 font-bold uppercase">
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
            <div className=" grid grid-cols-1 md:grid-cols-5 bg-white mb-2">
              <h1 className=" mt-2 text-sm  font-bold block md:hidden bg-black text-white p-2">
                Card Type
              </h1>
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
              <h1 className=" mt-2 text-sm  font-bold block md:hidden bg-black text-white p-2">
                From
              </h1>
              <input
                className="ml10 p-2 border border-gray-300 mr-2 my-2 rounded "
                type="number"
                onInput={(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(
                      0,
                      e.target.maxLength
                    );
                }}
                maxlength="2"
                name="from"
                placeholder="From"
                // value={x.from}
                onChange={(e) => handleInputChange(e, i)}
                list="from"
              />
              <datalist id="from">
                {[...Array(20)].map((_, index) => (
                  <option value={index + 1}> {index + 1}</option>
                ))}
              </datalist>
              <h1 className=" mt-2 text-sm  font-bold block md:hidden bg-black text-white p-2">
                To
              </h1>
              <input
                type="number"
                className="ml10 p-2  border border-gray-300 mr-2 my-2 rounded"
                onInput={(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(
                      0,
                      e.target.maxLength
                    );
                }}
                maxlength="2"
                name="to"
                placeholder="To"
                // value={x.to}
                onChange={(e) => handleInputChange(e, i)}
                list="to"
              />
              <datalist id="to">
                {[...Array(20)].map((_, index) => (
                  <option value={index + 1}> {index + 1}</option>
                ))}
              </datalist>
              <h1 className=" mt-2 text-sm  font-bold block md:hidden bg-black text-white p-2 ">
                Commission
              </h1>
              <input
                className="ml10 p-2  border border-gray-300 mr-2 my-2 rounded"
                onInput={(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(
                      0,
                      e.target.maxLength
                    );
                }}
                maxlength="3"
                name="commission"
                placeholder="Enter Commission"
                value={x.commission}
                onChange={(e) => handleInputChange(e, i)}
              />
              <div className="btn-box flex flex-col items-center justify-center">
                {i !== 0 && (
                  <button
                    className=" bg-[#fc544b] border-[#fc544b] shadow-red-400  hover:shadow-2xl rounded  py-2 text-white w-full md:w-16"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
                {i === 0 && (
                  <button
                    onClick={handleAddClick}
                    className=" bg-green-400 deleteBtn hover:shadow-2xl rounded w-full md:w-16 "
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

export default CardCommissionTest;
