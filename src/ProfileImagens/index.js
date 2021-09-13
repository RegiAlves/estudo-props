export default function ProfileImagens(props) {
  return (
   
      <div class="col-lg-6 mb-2 pr-lg-1">
        <img
          src={props.src}
          alt=""
          class="img-fluid rounded shadow-sm"
        ></img>
      </div>
    
  );
}
