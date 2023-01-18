import React, { useState } from "react";

const Todolist = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([])
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedItem, setEditedItem] = useState("");

  const handleEdit = (id) => {
    setEditingIndex(id);
    setEditedItem(items[id]);
    
};

  const handleChange = (e) => {
    setItem(e.target.value);
    console.log(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setItems([...items, item]);
    
  };
  const handleComplete =(id) =>{
    const newList = items.filter((i,index)=> index ==id)
    setCompletedItems([...completedItems, ...newList])
    setItems(items.filter((i,index)=>index !==id))
   

  }
  const handleDelete =(id) =>{
    setItems(items.filter((i,index)=>index !==id));
    
  }
  const handleCompleteDelete = (id)=>{
    setCompletedItems((completedItems.filter((i,index)=>index !==id)))
  }
  const handleCompleteAll = () => {
    
    setCompletedItems([...completedItems, ...items])
    setItems([])
  }
  const handleSave = (id) => {
    const updatedItems = [...items];
    updatedItems[id] = editedItem;
    setItems(updatedItems);
    setEditingIndex(-1);
    setEditedItem("");
  };

  
  

  return (
    <div className=" flex items-center justify-center flex-col">
      <div>
        <b>TodoList</b>
      </div>
      <div className="flex justify-evenly items-center">
        <input
          className=" border-2 border-black  rounded-lg"
          type="text"
          name="Task"
          placeholder="Enter"
          onChange={handleChange}
        />
        <button
          className=" ml-4 border-2 border-black  rounded-xl p-1 "
          onClick={handlesubmit}
        >
          Add
        </button>
      </div>
      <div>
      <button className=" ml-5 mr-5 border-2 border-black  rounded-lg " onClick={handleCompleteAll}>Complete all</button>
      </div>
      <br />
      <div>
        <h1>
          <b>Tasks</b>
        </h1>
        <hr />
          
          {items.map((i, index) => (
          <div className=" flex flex-row  justify-end" key={index}>
            {index === editingIndex ? (
                <div>
                  <input
                    type="text"
                    value={editedItem}
                    onChange={(e) => setEditedItem(e.target.value)}
                  />
                  <button className=" ml-5 border-2 border-black  rounded-lg " onClick={() => handleSave(index)}>Save</button>
                </div>
              ) : (
                <p>{i}</p>
              )}

            <button className=" ml-5 mr-5 border-2 border-black  rounded-lg " onClick={()=>handleComplete(index)}>Complete</button>
            <button className=" border-2 border-black  rounded-lg " onClick={()=>handleDelete(index)}>Delete</button>
            <button className=" ml-5 border-2 border-black  rounded-lg " onClick = {() => handleEdit(index)}>Edit</button>
          </div>
        ))}
      </div>
      <div className = ''>
        <h1><b>Completed Task</b></h1>
          {
            completedItems.map((i,index)=>(
              <div  className=" flex flex-row  justify-end" key={index}>
              <p>{i}</p>
              <button className=" ml-5 border-2 border-black  rounded-lg" onClick={()=>handleCompleteDelete(index)}>Delete</button>
            </div>
            ))
          }
      </div>
     
      
    </div>

  );
};

export default Todolist;
