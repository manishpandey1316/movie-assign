export default function Filter({data,type,selectedOption,setSelectedOption}) {
    function handleChange(e)
    {
        
        setSelectedOption({...selectedOption,[type]:e.target.value})
    }
    
  return (
    <>
    <div>
          <select  
            id="comboBox"
            value={(selectedOption==null)?"select...":(type=="language")?selectedOption.language:((type=="genre")?selectedOption.genre:selectedOption.country)}
            onChange={(e)=>handleChange(e)}
            className=" block p-2 border rounded bg-red-700 text-white border-black outline-none text-sm md:text-md lg:text-lg  overflow-scroll"
          >
            <option value="">Select...</option>
            {data.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
    </>
  );
}
