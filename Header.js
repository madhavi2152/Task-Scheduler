// #snippets for react components like export import bunch of stuff
import Button from './Button'
const Header = ({title,onAdd,ShowAdd}) => {  // here props is gonna be object of whatever propos we passed for retriving the value passed in the header back component we need to mention PROPS AS A PARAMETER AND CALL THE VALUE TO ADD DYNMAICALLY LIKE PROPS.VALUENAME
  
  return (
    <header className="header">
         <h1>{title}</h1> 
         <Button color={ShowAdd ? 'red' : 'green'} text={ShowAdd ? 'Close' : 'Add'} onClick={onAdd}/>
         {/* here we can remove static text and pass with the value that which we passed over header. */}
    </header>
  )
}

Header.defaultProps= {
    title: 'Task tracker',
}
// } set that default props to object if you write anything in headerback it will overwrite it. 
  
//proptypes

// const headingStyle={
//   color: 'red', backgroundColor: 'black'
// } css in reactjs 

export default Header