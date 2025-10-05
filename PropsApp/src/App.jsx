function App(){
  return(
    <div>
      <Student name="Bhashvika"/>
      <Student name="bhavana"/>
    </div>
  );
}
function Student(props){
  return <h2>HEllo,{props.name}!</h2>;
}
export default App;