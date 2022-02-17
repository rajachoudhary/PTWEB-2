import style from "./input.module.css"
export const Input = () => {
  return(
    <div className={style.conatiner}>
      <div >
        <label htmlFor="text">Name</label>
        <input placeholder="Name"/>
      </div>
      <div>
        <label htmlFor="text">Age</label>
        <input placeholder="age"/>
      </div>
      <div>
      <label htmlFor="text">Department</label>
        <select htmlFor="department">
          <option value="">Select your department</option>
          <option value="Front-end">Front-end</option>
          <option value="Back-end"> Back-end</option>
        </select>
      </div>
      <div>
        <label htmlFor="text">Age</label>
        <input/>
      </div>
      <div>
        <label htmlFor="file">Profile Photo</label>
        <input type="file"/>
      </div>
     
    </div>
  )
}