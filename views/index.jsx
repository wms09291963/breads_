const React = require('react')
const Default = require('./layout/default')

function Index ({breads, title})  {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      <div className="newButton">
        <a href="/breads/new"><button>Add a new bread</button></a>
      </div>
      {
        breads.map((bread, index)=> {
          return (
            <li key={bread.id}>
              <a href={`/breads/${bread.id}`}>
                {bread.name}
              </a>
            </li>
          )
        })
      }
    </Default>
  )
}

module.exports = Index