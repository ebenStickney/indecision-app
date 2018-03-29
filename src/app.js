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

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * section.options.length);
    const option = section.options[randNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderOptionList = () => {
    const template = ( 
    <div>
        <h1>{section.title}</h1>
        {section.subtitle && <p>{section.subtitle}</p>}
        <p>{section.options.length > 0 ? 'Here are your options:' : 'Quick, give yourself something to do!'}</p>
        <button disabled={section.options.length ===0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onDelete}>Remove All Options!</button>
        <ol>
         {section.options.map((item) => {
              return <li key={item}>{item}</li>;
            })}
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

