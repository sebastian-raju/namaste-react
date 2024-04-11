// const heading = React.createElement("h1", {className: "heading", id: "h1"}, "Hello world by react"); 


//                                           // props - attributes    and  children  
// // object aayitt headingil store cheyyum ennit root.renderil athine taginullil correct structureil idum

//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(heading);


const parent = React.createElement('div', {id: "parent"}, 
                  [
                    React.createElement('div', {id: 'child1'}, 
                        [
                          React.createElement('h1', {},'this is an h1 tag'), 
                          React.createElement('h2', {},'this is an h2 tag')
                        ]),
                    React.createElement('div', {id: 'child2'}, 
                    [
                      React.createElement('h1', {},'this is an h1 tag'), 
                      React.createElement('h2', {},'this is an h2 tag')
                    ])
                  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

