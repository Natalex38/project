import React from 'react';
import './App.css';


var listDir=[
  {name: 'папка1',     id: 0, parent: null,childrens:[
    {name: 'папка1.1',   id: 2, parent: 0,   childrens:[
      {name: 'папка1.1.1', id: 5, parent: 2,   childrens:[]}]}]},
  {name: 'папка2',     id: 1, parent: null,childrens:[
    {name: 'папка2.2',   id: 3, parent: 1,   childrens:[]},
    {name: 'папка2.1',   id: 4, parent: 1,   childrens:[]}]},
];

const App = () =>{
  let list=listDir.map(entry => show(entry));

  return (
    <div className="App">
      <ul><p>список</p>
      {list}
      </ul>
    </div>
  );
}

function crearlist(list){//оформление элемента списка
  let elimList= React.createRef();

  let del= ()=>{
    let namelist =elimList.current.value;
      alert("удалить "+namelist+"?");
  }
  let create= ()=>{
    let newNamelist =elimList.current.value;
      alert("добавить "+newNamelist+" в список");
  }

let dir = [<li key={list.id}>{list.name}</li>];
dir.push(<button onClick={del} key={list.id}>удалить</button>);
dir.push(<textarea ref ={elimList}></textarea>);
dir.push(<button onClick={create} key={list.id}>создать папку</button>);
return dir;
}

function show(list){
  let dir = crearlist(list);
  for(let i=1;i<list.length;i++){
    dir.push(crearlist(list[i]));
  }
  if (list.childrens.length)
    list.childrens.forEach(function(entry) {
      dir.push(<ul key={Math.random()}>{show(entry)}</ul>);
    });

  return dir;
}

export default App;
