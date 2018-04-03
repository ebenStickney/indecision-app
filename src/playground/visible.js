let visibility = false;

const onVisible = () => {
   visibility = !visibility;
    renderVisibility();
};

const renderVisibility = () => {
    const visible = (
        <div>
         <h1>Now, you see me.</h1>
         <button onClick={onVisible}>{!visibility ? 'Lightning in a Bottle' : 'You still on that?'}</button>
         {visibility && (
             <p>But that app though...</p>)}
        </div>
        
        
        );
    ReactDOM.render(visible, document.getElementById('app'));
}

renderVisibility();