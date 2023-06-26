import React from "react"

export const MainApp = () => {

  return (
    <div className="">
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p>This is a paragraph</p>
      <a href="https://github.com/SergioMir018" className="">This is a anchor</a>
      <div>
        <button className="">This is a button</button>
      </div>
      <div className="">
        <input type="text" />
      </div>
      <div>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Checkbox</label>
      </div>
      <div className="">
        <select className="">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <h1>This is another title</h1>
      <h2>This is another subtitle</h2>
    </div>
  )
}