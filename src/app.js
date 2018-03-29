console.log('app.js is running!');

let section = {
    title: 'Indecision App',
    subtitle: 'Put you fate into the hands of your computer!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    
    if (option) {
      section.options.push(option);
      e.target.elements.option.value = '';
    };
    renderOptionList();
}
const onDelete = () => {
    section.options = [];
    renderOptionList();
}

const appRoot = document.getElementById('app');

const renderOptionList = () => {
    const template = ( 
    <div>
        <h1>{section.title}</h1>
        {section.subtitle && <p>{section.subtitle}</p>}
        <p>{section.options.length > 0 ? 'Here are your options:' : 'Quick, give yourself something to do!'}</p>
        <p>{section.options.length}</p>
        <button onClick={onDelete}>Remove All Options!</button>
        <ol>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type='text' name='option'/>
          <button>Add Option</button>
            
        </form>
    </div>
    );
    ReactDOM.render(template, appRoot);    
    
    }

      
      

renderOptionList();

///As of today

