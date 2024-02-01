
function Cell( {children}) {

    //ChatGPT
//   function Cell({ hasGrogu }) {
//     return (
//       <div className="cell">
//         {hasGrogu && <Grogu />}
//       </div>
//     );
//   }
  return (
    <div className="cell">{children}</div>
  )

}

export default Cell