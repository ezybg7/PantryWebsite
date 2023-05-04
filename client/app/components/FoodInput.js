const FoodInput = ( { input, onChange }) => {
  return ( 
    <input 
      input = {input} 
      onChange = { (e) => onChange(e.target.value)} 
    />
   );
}

export default FoodInput;