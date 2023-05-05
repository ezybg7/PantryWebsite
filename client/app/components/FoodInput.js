const FoodInput = ( { input, onChange }) => {
  return ( 
    <input 
      minLength={1}
      maxLength={30}
      input = {input} 
      onChange = { (e) => onChange(e.target.value)} 
    />
   );
}

export default FoodInput;