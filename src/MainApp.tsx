import React from "react"

export const MainApp = () => {

  return (
    <div className="mx-2">
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p>This is a <i>paragraph</i></p>
      <a href="https://github.com/SergioMir018" className="">This is a anchor</a>
      <div className="my-2">
        <button className="btn bg-blue-500 px-3 py-2 rounded-lg">This is a button</button>
      </div>
      <div className="my-2">
        <button className="btn bg-red-500 px-4 py-3 rounded-lg">This is another button</button>
      </div>
      <div className="my-2">
        <button disabled className="btn bg-green-500 px-4 py-3 rounded-lg">This button is disable</button>
      </div>
      <div className="">
        <input type="text" placeholder="E-mail" />
      </div>
      <div className="">
        <input disabled type="text" placeholder="E-mail" />
      </div>
      <div className="">
        <input type="date" placeholder="E-mail" />
      </div>
      <div className="flex items-start">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro voluptate sunt provident ex dolores tempore dolore beatae. Voluptatibus reprehenderit maxime enim pariatur quidem? Aliquid aspernatur facere ducimus molestiae quo.</label>
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