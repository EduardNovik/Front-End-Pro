import { useEffect, useState } from "react";
import React from "react";
import './TableStyle.css'

const Table = ({personalInfo, setPersonalInfo}:any)  => {

  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setPersonalInfo(json))
      .catch((err) => console.log(err));
    console.log(personalInfo);
  }, []);

  const removeHandler = (id: number) => {
    const newPersonalInfo = personalInfo.filter((elem: any) =>
      elem.id !== id ? elem : ""
    );
    setPersonalInfo(newPersonalInfo);
  };


  return (
     <table>
      <tbody className="tableBlock">
        <tr>
          <td>Name</td>
          <td>Username</td>
          <td>Phone</td>
          <td>Remove</td>
        </tr>
        {personalInfo && personalInfo.map((item: any) => {
          return(
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.phone}</td>
              <td>
                {personalInfo && <button onClick={()=>{removeHandler(item.id)}}>Delete</button>}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;



