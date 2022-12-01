import { useState } from "react";

const data = [{ id: 1, label: "Maybe Yes!" }, { id: 2, label: "Probably No" }];
function App() {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle opening and closing of dropdown
  const toggleDropdown = () => setOpen(!isOpen);

  // selecting and closing dropdown
  const handleItemClick = (id) => {
    setSelectedItem(id);
    toggleDropdown();
  }


  return (
    <div className='dropdown'>
      <div
        className='dropdown-header'
        onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Should you Use Dropdowns ?"}
        <i className={`fa-solid fa-chevron-right icon ${isOpen && "open "}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {/* Rendering All item in list in dropdown */}
        {items.map((item, index) =>
        (
          <div
            key={index}
            className="dropdown-item"
            onClick={e => handleItemClick(e.target.id)} // hamdle on click on dropdown
            id={item.id}>
            <span
              className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• &nbsp;
            </span>
            {item.label}
          </div>
        ))}

      </div>
    </div >
  )
}

export default App
