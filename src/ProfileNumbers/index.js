
export default function ProfileNumbers(props){
  return(
    <>
    <ul class="list-inline mb-0">
    <li class="list-inline-item" style={{
        marginRight: props.margem
      }} >
      <h5 >{props.numbers}</h5>
      <small class="text-muted">
        {" "}
        <i class="fas fa-image mr-1"></i>{props.titulo}
      </small>
    </li>
    
    
  </ul>
    </>
  );
}